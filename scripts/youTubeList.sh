#!/bin/bash
ID="PLwNNfAZnmzXXwdXmcTk6mR1GiNzDqnc-2"
URL="https://www.youtube.com/watch?list=$ID"
## parse/miniFy YTs JSON into {id,date,game} objects and convert to CSV
PLAYLIST=$( ssh zoskypc "\
    youtube-dl -j --flat-playlist $URL \
    | jq -s '.' " \
    | jq -r '["id","duration","date","game"], 
            (.[] |
            .title |= capture("VOD\\[(?<date>[0-9-]+)\\] (?<game>.+)") | 
            [.id, .duration, .title.date, .title.game]) | @csv' 
)    
## save as CSV
echo "$PLAYLIST" > ./public/youtube.csv
