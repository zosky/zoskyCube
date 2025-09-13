#!/bin/bash
ID="PLwNNfAZnmzXXwdXmcTk6mR1GiNzDqnc-2"
URL="https://www.youtube.com/watch?list=$ID"
## parse/miniFy YTs JSON into {id,date,game} objects
PLAYLIST=$( ssh zoskypc "youtube-dl \
    -j --flat-playlist $URL \
    | jq -s '.' " \
    | jq '[.[] |
            .title |= capture("VOD\\[(?<date>[0-9-]+)\\] (?<game>.+)") | 
            { id, date: .title.date, game: .title.game }
        ]' 
)    
## save
echo "$PLAYLIST" > ./public/youtube.json
