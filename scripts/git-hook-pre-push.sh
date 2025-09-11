#!/bin/bash
## this file is here for version control
## must be simLinked .git/hooks/pre-push 
# like so: `ln -s scripts/git-hook-pre-push.sh .git/hooks/pre-push`
set -e

## updated data files
cp ../deathFrames/history.json public/history.json

## scrape missing names w/ steam API
node scripts/cacheSteamNames.js

## assume no changes 
# Check if steamNames.json changed
changes=false

# Check if files changed

files=("public/steamNames.json" "public/history.json")
for file in "${files[@]}"; do
    ! git diff --quiet "$file" \
        && git add "$file" \
            && changes=true
done

# Commit if any changes were made
if [ "$changes" = true ]; then
    git commit -m "Update data files (auto-update from pre-push hook)"
fi