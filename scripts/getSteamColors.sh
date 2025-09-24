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

# Load existing colors if the file exists
existing_colors="{}"
if [[ -f "$OUTPUT_FILE" ]]; then
    echo "Loading existing colors from $OUTPUT_FILE..."
    existing_colors=$(cat "$OUTPUT_FILE")
    # Validate JSON format
    if ! echo "$existing_colors" | jq . >/dev/null 2>&1; then
        echo "Warning: Existing $OUTPUT_FILE is not valid JSON, starting fresh"
        existing_colors="{}"
    fi
else
    echo "No existing colors file found, starting fresh"
fi

# Initialize the output JSON object with existing colors
echo "$existing_colors" > "$OUTPUT_FILE"

first=true
for id in $STEAM_IDS; do
    # Check if this ID already has a color
    existing_color=$(echo "$existing_colors" | jq -r --arg id "$id" '.[$id] // empty')
    
    if [[ -n "$existing_color" ]]; then
        echo "Skipping Steam app ID $id (already has color: $existing_color)"
        continue
    fi
    
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
            
            # Update the existing_colors with the new color using jq
            existing_colors=$(echo "$existing_colors" | jq --arg id "$id" --arg color "$dominant_color" '.[$id] = $color')
        else
            echo "  Warning: Failed to download or empty file for Steam app ID $id"
            # Add default color for failed downloads
            existing_colors=$(echo "$existing_colors" | jq --arg id "$id" '.[$id] = "#000000"')
        fi
    else
        echo "  Warning: Failed to download header image for Steam app ID $id"
        # Add default color for failed downloads
        existing_colors=$(echo "$existing_colors" | jq --arg id "$id" '.[$id] = "#000000"')
    fi
    
    # Clean up the temporary image
    rm -f "$temp_image"
    
    # Small delay to be respectful to the server
    sleep 0.5
done

# Write the final JSON to the output file
echo "$existing_colors" > "$OUTPUT_FILE"

# Clean up temp directory
rm -rf "$TEMP_DIR"

echo "Dominant colors saved to: $OUTPUT_FILE"

# Pretty print the final JSON
if command -v jq &> /dev/null; then
    echo "Final steamColors.json content:"
    jq . "$OUTPUT_FILE"
fi