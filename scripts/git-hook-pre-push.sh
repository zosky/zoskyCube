#!/bin/bash
## this file is here for version control
## must be simLinked .git/hooks/pre-push 
# like so: `ln -s scripts/git-hook-pre-push.sh .git/hooks/pre-push`
set -e

cp {../deathFrames,public}/history.csv      ## copy death counter history
npm run yt                                  ## update youtubeCache
npm run steamNames                           ## scrape missing names w/ steam API


# Check if files changed
files=(
    "history.csv"
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