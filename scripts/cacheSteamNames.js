const path = require('path');
const https = require('https');
const { spawn } = require('child_process');

// Load environment variables
require('dotenv').config();

// Get Google Sheets ID from environment variable
const GOOGLE_SHEETS_ID = process.env.VITE_GOOGLE_SHEETS_ID;
const GOOGLE_FORMS_ID = process.env.GOOGLE_FORM_STEAM_XREF;

// Validate required environment variables
if (!GOOGLE_SHEETS_ID) {
    console.error('Error: GOOGLE_SHEETS_ID environment variable is required');
    process.exit(1);
}

if (!GOOGLE_FORMS_ID) {
    console.error('Error: GOOGLE_FORMS_ID environment variable is required');
    process.exit(1);
}

// Function to generate Google Sheets CSV URL for any sheet
function getGoogleSheetsUrl(sheetName) {
    return `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_ID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;
}

// Google Forms URL for adding new steam names
const steamNamesFormUrl = `https://docs.google.com/forms/d/e/${GOOGLE_FORMS_ID}/formResponse`;

// Function to parse CSV data
function parseCSV(csvText) {
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',').map(header => header.replace(/"/g, ''));
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',').map(value => value.replace(/"/g, ''));
        const row = {};
        headers.forEach((header, index) => {
            row[header] = values[index];
        });
        data.push(row);
    }
    
    return data;
}

// Function to fetch data from URL
function fetchFromUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// Function to post data to Google Forms
function postToGoogleForms(steamId, name, color = '') {
    return new Promise((resolve, reject) => {
        const postData = [
            `entry.1223958443=${encodeURIComponent(steamId)}`
            `entry.414552523=${encodeURIComponent(name)}`
            `entry.735029961=${encodeURIComponent(color)}`
        ].join('&')
        
        const options = {
            hostname: 'docs.google.com',
            path: `/forms/d/e/${GOOGLE_FORMS_ID}/formResponse`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let responseData = '';
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            res.on('end', () => {
                resolve({ statusCode: res.statusCode, data: responseData });
            });
        });

        req.on('error', (err) => {
            reject(err);
        });

        req.write(postData);
        req.end();
    });
}

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

// Function to get color from bash script
function getColorFromBash(steamId) {
    return new Promise((resolve, reject) => {
        const bashScript = path.join(__dirname, 'getSteamColors.sh');
        const child = spawn('bash', [bashScript]);
        
        let output = '';
        let error = '';
        
        child.stdout.on('data', (data) => {
            output += data.toString();
        });
        
        child.stderr.on('data', (data) => {
            error += data.toString();
        });
        
        child.on('close', (code) => {
            if (code === 0) {
                resolve(output.trim());
            } else {
                reject(new Error(`Color script failed: ${error}`));
            }
        });
        
        // Send steamId to stdin
        child.stdin.write(steamId);
        child.stdin.end();
    });
}

// Main processing function
async function main() {
    try {
        // Fetch history data from Google Sheets
        // console.log('Fetching history data from Google Sheets...');
        const csvData = await fetchFromUrl(getGoogleSheetsUrl('history'));
        const historyData = parseCSV(csvData);
        
        console.log(`Loaded ${historyData.length} items gSheet:history`);
        
        // Extract unique steamIds
        const uniqueSteamIds = new Set();
        
        historyData.forEach(item => {
            if (item.steamId) {
                uniqueSteamIds.add(item.steamId);
            }
        });
        
        console.log(`uniqueIDs: ${uniqueSteamIds.size}`) // , [...uniqueSteamIds]);

        // Fetch existing steam names from Google Sheets steamXref
        // console.log('Fetching existing steam names from Google Sheets steamXref...');
        let existingSteamNames = {};
        try {
            const steamXrefData = await fetchFromUrl(getGoogleSheetsUrl('steamXref'));
            const steamXrefRows = parseCSV(steamXrefData);
            
            // Convert to object with steamId as key and name as value
            steamXrefRows.forEach(row => {
                if (row.steamId && row.name) {
                    existingSteamNames[row.steamId] = row.name;
                }
            });
            
            console.log(`Loaded ${Object.keys(existingSteamNames).length} game gSheey:steamXref`);
        } catch (error) {
            console.error('Error fetching steamXref sheet:', error);
            console.log('Continuing with empty steam names cache...');
        }
        
        // Filter out Steam IDs that already have names
        const steamIdsToFetch = [...uniqueSteamIds].filter(id => !existingSteamNames[id]);
        console.log(`${steamIdsToFetch.length} NEW steamIDs (${uniqueSteamIds.size - steamIdsToFetch.length} cached)`);

        // Process all Steam IDs and create mapping
        async function processSteamIds() {
            // console.log(`Fetching names for ${steamIdsToFetch.length} games from Steam API...`);
            
            const steamIdArray = [...steamIdsToFetch];
            const steamNames = { ...existingSteamNames };
            
            for (let i = 0; i < steamIdArray.length; i++) {
                const appId = steamIdArray[i];
                
                try {
                    // console.log(`Fetching details for app ID ${appId} (${i + 1}/${steamIdArray.length})`);
                    const gameDetails = await fetchGameDetails(appId);
                    
                    if (gameDetails.name) {
                        steamNames[appId] = gameDetails.name;
                        console.log(`Found name for ${appId}: ${gameDetails.name}`);
                        
                        // Get color from bash script
                        let color = '';
                        try {
                            // console.log(`Getting color for ${appId}...`);
                            color = await getColorFromBash(appId);
                            console.log(`Found color for ${appId}: ${color}`);
                        } catch (colorError) {
                            console.error(`Error getting color for ${appId}:`, colorError.message);
                            color = '#000000'; // Default color
                        }
                        
                        // Post new steam name to Google Forms
                        try {
                            // console.log(`Adding ${appId}: ${gameDetails.name} (${color}) to Google Forms...`);
                            const response = await postToGoogleForms(appId, gameDetails.name, color);
                            console.log(`Successfully posted to Google Forms (Status: ${response.statusCode})`);
                        } catch (formError) {
                            console.error(`Error posting to Google Forms for ${appId}:`, formError.message);
                        }
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
        }

        // Call the function to start processing
        if (steamIdsToFetch.length) {
            await processSteamIds();
        }
        
    } catch (error) {
        console.error('Error processing history data:', error);
    }
}

// Run the main function
main();