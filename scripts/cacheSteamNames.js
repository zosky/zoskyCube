const fs = require('fs');
const path = require('path');
const https = require('https');

// Path to the history.json file
const historyFilePath = path.join(__dirname, '../public/history.json');

// Read and parse the JSON file
try {
    const historyData = JSON.parse(fs.readFileSync(historyFilePath, 'utf8'));
    
    if (!Array.isArray(historyData)) {
        console.error('History data is not an array');
        process.exit(1);
    }
    
    console.log(`Loaded ${historyData.length} items from history.json`);
    
    // Extract unique steamIds
    // This assumes each entry has a steamId property - adjust based on actual structure
    const uniqueSteamIds = new Set();
    
    historyData.forEach(item => {
        if (item.steamId) {
            uniqueSteamIds.add(item.steamId);
        }
    });
    
    console.log(`Total unique IDs: ${uniqueSteamIds.size}`, [...uniqueSteamIds]);

    // Fetch game names from Steam API and save to file
    const steamNamesPath = path.join(__dirname, '../public/steamNames.json');
    
    // Check if steamNames.json already exists and load it
    let existingSteamNames = {};
    if (fs.existsSync(steamNamesPath)) {
        try {
            existingSteamNames = JSON.parse(fs.readFileSync(steamNamesPath, 'utf8'));
            console.log(`Loaded ${Object.keys(existingSteamNames).length} existing game names from steamNames.json`);
        } catch (error) {
            console.error('Error reading steamNames.json:', error);
        }
    }
    
    // Filter out Steam IDs that already have names
    const steamIdsToFetch = [...uniqueSteamIds].filter(id => !existingSteamNames[id]);
    console.log(`${steamIdsToFetch.length} Steam IDs need to be fetched (${uniqueSteamIds.size - steamIdsToFetch.length} already cached)`);

    // Function to fetch game details from Steam API
    const fetchGameDetails = (appId) => {
        return new Promise((resolve, reject) => {
            const url = `https://store.steampowered.com/api/appdetails?appids=${appId}`;
            
            https.get(url, (res) => {
                let data = '';
                
                res.on('data', (chunk) => {
                    data += chunk;
                });
                
                res.on('end', () => {
                    try {
                        const parsedData = JSON.parse(data);
                        if (parsedData[appId] && parsedData[appId].success) {
                            resolve({
                                id: appId,
                                name: parsedData[appId].data.name
                            });
                        } else {
                            resolve({ id: appId, name: null });
                        }
                    } catch (e) {
                        reject(e);
                    }
                });
            }).on('error', (err) => {
                reject(err);
            });
        });
    };

    // Function to add delay between requests to avoid rate limiting
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Process all Steam IDs and create mapping
    async function processSteamIds() {
        console.log(`Fetching names for ${steamIdsToFetch.size} games from Steam API...`);
        
        const steamIdArray = [...steamIdsToFetch];
        const steamNames = { ...existingSteamNames };
        
        for (let i = 0; i < steamIdArray.length; i++) {
            const appId = steamIdArray[i];
            
            try {
                console.log(`Fetching details for app ID ${appId} (${i + 1}/${steamIdArray.length})`);
                const gameDetails = await fetchGameDetails(appId);
                
                if (gameDetails.name) {
                    steamNames[appId] = gameDetails.name;
                    console.log(`Found name for ${appId}: ${gameDetails.name}`);
                } else {
                    console.log(`No name found for ${appId}`);
                }
                
                // Add a small delay to avoid hitting rate limits
                if (i < steamIdArray.length - 1) {
                    await delay(500);
                }
            } catch (error) {
                console.error(`Error fetching details for ${appId}:`, error.message);
            }
        }
        
        // Save the mapping to a file
        fs.writeFileSync(steamNamesPath, JSON.stringify(steamNames, null, 2));
        console.log(`Saved ${Object.keys(steamNames).length} game names to ${steamNamesPath}`);
    }

    // Call the function to start processing
    if (steamIdsToFetch.length) processSteamIds();
    
} catch (error) {
    console.error('Error processing history.json:', error);
}