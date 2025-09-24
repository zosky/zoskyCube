#!/bin/bash
## this file is here for version control
## must be simLinked .git/hooks/pre-push 
# like so: `ln -s scripts/git-hook-pre-push.sh .git/hooks/pre-push`
set -e

npm run yt                                  ## update youtubeCache
npm run steamNames                           ## scrape missing names w/ steam API
npm run steamColors                          ## update steamColors.json

# Check if files changed
files=(
    "history.csv"
    "youtube.csv"
    "steamNames.json"
)
for file in "${files[@]}"; do
    file="public/$file"
    ! git diff --quiet "$file" \
        && git add "$file" \
            && changes=true
done

# Add to last commit if any changes were made
if [ "$changes" = true ]; then
    git commit --amend --no-edit
fi