#!/bin/bash
## this file is here for version control
## must be simLinked .git/hooks/pre-push 
# like so: `ln -s scripts/git-hook-pre-push.sh .git/hooks/pre-push`
set -e

## scrape missing names w/ steam API
node scripts/cacheSteamNames.js

# Check if files changed
files=(
    "history.json"
    "youtube.json"
    "steamNames.json"
)
for file in "${files[@]}"; do
    file="public/$file"
    ! git diff --quiet "$file" \
        && git add "$file" \
            && changes=true
done

# Commit if any changes were made
if [ "$changes" = true ]; then
    git commit -m "Update data files with pre-push hook"
fi