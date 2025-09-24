#!/bin/bash

# Script to get dominant colors from Steam game header images
# Usage: ./getSteamColors.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PUBLIC_DIR="$SCRIPT_DIR/../public"
STEAM_NAMES_FILE="$PUBLIC_DIR/steamNames.json"
OUTPUT_FILE="$PUBLIC_DIR/steamColors.json"
TEMP_DIR="/tmp/steam_headers"

# Check if required tools are installed
if ! command -v jq &> /dev/null; then
    echo "Error: jq is required but not installed. Please install jq."
    exit 1
fi

if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick (convert) is required but not installed. Please install ImageMagick."
    exit 1
fi

if ! command -v curl &> /dev/null; then
    echo "Error: curl is required but not installed. Please install curl."
    exit 1
fi

# Check if steamNames.json exists
if [[ ! -f "$STEAM_NAMES_FILE" ]]; then
    echo "Error: $STEAM_NAMES_FILE not found"
    exit 1
fi

# Create temp directory for downloading images
mkdir -p "$TEMP_DIR"

echo "Extracting Steam app IDs..."
# Get all object keys (Steam app IDs) from steamNames.json
STEAM_IDS=$(jq -r 'keys[]' "$STEAM_NAMES_FILE")

echo "Found Steam app IDs: $STEAM_IDS"

# Initialize the output JSON object
echo "{" > "$OUTPUT_FILE"

first=true
for id in $STEAM_IDS; do
    echo "Processing Steam app ID: $id"
    
    # Construct the Steam header image URL
    image_url="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/$id/header.jpg"
    temp_image="$TEMP_DIR/$id.jpg"
    
    # Download the header image
    echo "  Downloading header image..."
    if curl -s -o "$temp_image" "$image_url"; then
        # Check if the download was successful (file exists and is not empty)
        if [[ -f "$temp_image" && -s "$temp_image" ]]; then
            echo "  Finding dominant color..."
            # Get the dominant color as hex
            dominant_color=$(convert "$temp_image" -resize 1x1 -format "#%[hex:u]" info: 2>/dev/null || echo "#000000")
            
            echo "  Dominant color for $id: $dominant_color"
            
            # Add comma if not the first entry
            if [[ "$first" == false ]]; then
                echo "," >> "$OUTPUT_FILE"
            fi
            first=false
            
            # Add the entry to the JSON file
            echo -n "  \"$id\": \"$dominant_color\"" >> "$OUTPUT_FILE"
        else
            echo "  Warning: Failed to download or empty file for Steam app ID $id"
            # Add default color for failed downloads
            if [[ "$first" == false ]]; then
                echo "," >> "$OUTPUT_FILE"
            fi
            first=false
            echo -n "  \"$id\": \"#000000\"" >> "$OUTPUT_FILE"
        fi
    else
        echo "  Warning: Failed to download header image for Steam app ID $id"
        # Add default color for failed downloads
        if [[ "$first" == false ]]; then
            echo "," >> "$OUTPUT_FILE"
        fi
        first=false
        echo -n "  \"$id\": \"#000000\"" >> "$OUTPUT_FILE"
    fi
    
    # Clean up the temporary image
    rm -f "$temp_image"
    
    # Small delay to be respectful to the server
    sleep 0.5
done

# Close the JSON object
echo "" >> "$OUTPUT_FILE"
echo "}" >> "$OUTPUT_FILE"

# Clean up temp directory
rm -rf "$TEMP_DIR"

echo "Dominant colors saved to: $OUTPUT_FILE"

# Pretty print the final JSON
if command -v jq &> /dev/null; then
    echo "Final steamColors.json content:"
    jq . "$OUTPUT_FILE"
fi