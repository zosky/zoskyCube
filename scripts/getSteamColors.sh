#!/bin/bash

# Script to get dominant color from Steam game header image
# Usage: ./getSteamColors.sh "steamId"
# Returns: hex color code (e.g., #FF5733)

set -e

TEMP_DIR="/tmp/steam_headers"

# Check if required tools are installed
if ! command -v convert &> /dev/null; then
    echo "Error: ImageMagick (convert) is required but not installed. Please install ImageMagick." >&2
    exit 1
fi

if ! command -v curl &> /dev/null; then
    echo "Error: curl is required but not installed. Please install curl." >&2
    exit 1
fi

# Read steamId from stdin
steam_id=$1

# Validate input
if [[ -z "$steam_id" ]]; then
    echo "Error: No Steam ID provided" >&2
    exit 1
fi

# Create temp directory for downloading image
mkdir -p "$TEMP_DIR"

# Construct the Steam header image URL
image_url="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/$steam_id/header.jpg"
temp_image="$TEMP_DIR/$steam_id.jpg"

# Download the header image
if curl -s -o "$temp_image" "$image_url"; then
    # Check if the download was successful (file exists and is not empty)
    if [[ -f "$temp_image" && -s "$temp_image" ]]; then
        # Get the dominant color as hex
        dominant_color=$(convert "$temp_image" -resize 1x1 -format "#%[hex:u]" info: 2>/dev/null || echo "#000000")
        echo "$dominant_color"
    else
        # Failed download or empty file
        echo "#000000"
    fi
else
    # Failed to download
    echo "#000000"
fi

# Clean up the temporary image
rm -f "$temp_image"

# Clean up temp directory if empty
rmdir "$TEMP_DIR" 2>/dev/null || true