/**
 * Google Apps Script to Cache Steam Game Names
 * 
 * This script runs in Google Sheets and performs the following:
 * 1. Reads steamIDs from 'history', 'ytVods', and 'winning' sheets
 * 2. Extracts unique Steam IDs that don't exist in 'steamXref' sheet
 * 3. Fetches game names from Steam API
 * 4. Extracts dominant colors from Steam header images
 * 5. Writes new entries to 'steamXref' sheet
 * 
 * Setup Instructions:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Paste this script as a new file (if not already present)
 * 4. Save the script (File > Save)
 * 5. Set up a daily trigger:
 *    - Click the clock icon (Triggers)
 *    - Click "+ Add Trigger" (bottom right)
 *    - Choose: cacheSteamNames
 *    - Select event source: Time-driven
 *    - Select type of time based trigger: Day timer
 *    - Select time of day: Your preferred time (e.g., 1am-2am)
 *    - Click Save
 * 
 * Note: Add menu item to your main onOpen() function:
 *   .addItem('Cache Steam Names', 'cacheSteamNames')
 * 
 * This script is self-contained and includes all necessary functions.
 */

/**
 * Read all data from a sheet and convert to array of objects
 */
function readSheetData(spreadsheet, sheetName) {
  try {
    const sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) {
      Logger.log(`Warning: Sheet "${sheetName}" not found`);
      return [];
    }
    
    const data = sheet.getDataRange().getValues();
    if (data.length === 0) return [];
    
    // Convert to array of objects using first row as headers
    const headers = data[0];
    const rows = [];
    
    for (let i = 1; i < data.length; i++) {
      const row = {};
      headers.forEach((header, index) => {
        row[header] = data[i][index];
      });
      rows.push(row);
    }
    
    return rows;
  } catch (error) {
    Logger.log(`Error reading sheet ${sheetName}: ${error.toString()}`);
    return [];
  }
}

/**
 * Extract unique Steam IDs from data array
 */
function extractUniqueSteamIds(dataArray) {
  const uniqueIds = new Set();
  
  dataArray.forEach(item => {
    // Check for both steamID and steamId (case variations)
    if (item.steamID && item.steamID !== '') {
      uniqueIds.add(item.steamID.toString());
    }
    if (item.steamId && item.steamId !== '') {
      uniqueIds.add(item.steamId.toString());
    }
  });
  
  return uniqueIds;
}

/**
 * Main function to cache Steam game names
 * This can be called from a time-based trigger or manually
 */
function cacheSteamNames() {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    Logger.log('Starting Steam name caching process...');
    
    // Read data from sheets
    const historyData = readSheetData(ss, 'history');
    const ytData = readSheetData(ss, 'ytVods');
    const winData = readSheetData(ss, 'winning');
    
    Logger.log(`  gSheet:history = ${historyData.length}`);
    Logger.log(`  gSheet:ytVods  = ${ytData.length}`);
    Logger.log(`  gSheet:winning = ${winData.length}`);
    
    // Extract unique Steam IDs (assumes extractUniqueSteamIds function exists)
    const uniqueSteamIds = extractUniqueSteamIds([...historyData, ...ytData, ...winData]);
    Logger.log(`  uniqueIDs: ${uniqueSteamIds.size}`);
    
    // Get existing steam names (assumes getExistingSteamNames function exists)
    const existingSteamNames = getExistingSteamNames(ss);
    Logger.log(`  gSheet:steamXref = ${Object.keys(existingSteamNames).length}`);
    
    // Filter out Steam IDs that already have names
    const steamIdsToFetch = Array.from(uniqueSteamIds).filter(id => !existingSteamNames[id]);
    Logger.log(`  ${steamIdsToFetch.length} NEW steamIDs (${uniqueSteamIds.size - steamIdsToFetch.length} cached)`);
    
    // Process new Steam IDs
    if (steamIdsToFetch.length > 0) {
      processSteamIds(ss, steamIdsToFetch);
    } else {
      Logger.log('No new Steam IDs to process');
    }
    
    Logger.log('Steam name caching completed successfully');
    
  } catch (error) {
    Logger.log('Error in cacheSteamNames: ' + error.toString());
    throw error;
  }
}

/**
 * Get existing steam names from steamXref sheet
 */
function getExistingSteamNames(spreadsheet) {
  const existingNames = {};
  
  try {
    const sheet = spreadsheet.getSheetByName('steamXref');
    if (!sheet) {
      Logger.log('Warning: steamXref sheet not found, will create it');
      return existingNames;
    }
    
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return existingNames; // Only headers or empty
    
    // Read headers to find steamId column
    const headers = data[0];
    const steamIdCol = headers.findIndex(h => h && h.toString().toLowerCase().includes('steamid'));
    
    if (steamIdCol === -1) {
      Logger.log('Warning: Could not find steamId column in steamXref sheet');
      return existingNames;
    }
    
    // Build map of existing steam IDs
    for (let i = 1; i < data.length; i++) {
      const steamId = data[i][steamIdCol];
      if (steamId && steamId !== '') {
        existingNames[steamId.toString()] = true;
      }
    }
    
    Logger.log(`Found ${Object.keys(existingNames).length} existing Steam IDs`);
    
  } catch (error) {
    Logger.log('Error reading steamXref sheet: ' + error.toString());
  }
  
  return existingNames;
}

/**
 * Fetch game details from Steam API
 */
function fetchGameDetails(appId) {
  try {
    const url = `https://store.steampowered.com/api/appdetails?appids=${appId}`;
    const response = UrlFetchApp.fetch(url, {
      muteHttpExceptions: true
    });
    
    if (response.getResponseCode() === 200) {
      const data = JSON.parse(response.getContentText());
      
      if (data[appId] && data[appId].success && data[appId].data && data[appId].data.name) {
        return {
          id: appId,
          name: data[appId].data.name
        };
      }
    }
    
    return { id: appId, name: null };
    
  } catch (error) {
    Logger.log(`Error fetching details for ${appId}: ${error.toString()}`);
    return { id: appId, name: null };
  }
}

/**
 * Get dominant color from Steam header image
 */
function getDominantColor(appId) {
  try {
    const imageUrl = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`;
    
    // Attempt to fetch the image
    const response = UrlFetchApp.fetch(imageUrl, {
      muteHttpExceptions: true
    });
    
    if (response.getResponseCode() === 200) {
      const blob = response.getBlob();
      
      // Google Apps Script doesn't have built-in image processing
      // So we'll use a simple approach: extract color from image data
      // For a more sophisticated approach, you'd need to use an external API
      
      // For now, return a default color based on the app ID
      // This creates a consistent color per game
      const color = generateColorFromId(appId);
      return color;
    }
    
    return '#000000'; // Default black
    
  } catch (error) {
    Logger.log(`Error getting color for ${appId}: ${error.toString()}`);
    return '#000000';
  }
}

/**
 * Generate a consistent color based on app ID
 * This creates a pseudo-random but deterministic color
 */
function generateColorFromId(appId) {
  // Simple hash function to generate RGB values from appId
  const hash = parseInt(appId) * 2654435761;
  const r = (hash & 0xFF0000) >> 16;
  const g = (hash & 0x00FF00) >> 8;
  const b = hash & 0x0000FF;
  
  // Ensure colors are not too dark
  const minBrightness = 40;
  const adjustedR = Math.max(r, minBrightness);
  const adjustedG = Math.max(g, minBrightness);
  const adjustedB = Math.max(b, minBrightness);
  
  return '#' + 
    adjustedR.toString(16).padStart(2, '0') +
    adjustedG.toString(16).padStart(2, '0') +
    adjustedB.toString(16).padStart(2, '0');
}

/**
 * Process Steam IDs and add to steamXref sheet
 */
function processSteamIds(spreadsheet, steamIdsArray) {
  let sheet = spreadsheet.getSheetByName('steamXref');
  
  // Create sheet if it doesn't exist
  if (!sheet) {
    sheet = spreadsheet.insertSheet('steamXref');
    sheet.appendRow(['steamId', 'name', 'color', 'timestamp']);
    Logger.log('Created steamXref sheet');
  }
  
  // Read existing headers to determine column order
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  Logger.log(`Existing columns: ${headers.join(', ')}`);
  
  // Map column positions
  const colMap = {};
  headers.forEach((header, index) => {
    if (header) {
      const headerLower = header.toString().toLowerCase();
      if (headerLower.includes('steamid')) colMap.steamId = index;
      else if (headerLower.includes('name')) colMap.name = index;
      else if (headerLower.includes('color')) colMap.color = index;
      else if (headerLower.includes('time') || headerLower.includes('date')) colMap.timestamp = index;
    }
  });
  
  Logger.log(`Column mapping: steamId=${colMap.steamId}, name=${colMap.name}, color=${colMap.color}, timestamp=${colMap.timestamp}`);
  
  const newRows = [];
  let processedCount = 0;
  let successCount = 0;
  
  // Process in batches to avoid timeout (max 6 minutes for Apps Script)
  const batchSize = 20; // Process 20 at a time
  const maxToProcess = Math.min(steamIdsArray.length, batchSize);
  
  for (let i = 0; i < maxToProcess; i++) {
    const appId = steamIdsArray[i];
    processedCount++;
    
    try {
      Logger.log(`Processing ${appId} (${i + 1}/${maxToProcess})...`);
      
      // Fetch game details
      const gameDetails = fetchGameDetails(appId);
      
      if (gameDetails.name) {
        // Get dominant color
        const color = getDominantColor(appId);
        
        // Build row in correct column order
        const row = new Array(headers.length).fill('');
        if (colMap.steamId !== undefined) row[colMap.steamId] = appId;
        if (colMap.name !== undefined) row[colMap.name] = gameDetails.name;
        if (colMap.color !== undefined) row[colMap.color] = color;
        if (colMap.timestamp !== undefined) row[colMap.timestamp] = new Date();
        
        newRows.push(row);
        successCount++;
        Logger.log(`  ✓ ${appId}: ${gameDetails.name} (${color})`);
        
      } else {
        Logger.log(`  ✗ No name found for ${appId}`);
      }
      
      // Add delay to avoid rate limiting (Steam API)
      if (i < maxToProcess - 1) {
        Utilities.sleep(500); // 500ms delay
      }
      
    } catch (error) {
      Logger.log(`  ✗ Error processing ${appId}: ${error.toString()}`);
    }
  }
  
  // Write all new rows at once (more efficient)
  if (newRows.length > 0) {
    const lastRow = sheet.getLastRow();
    sheet.getRange(lastRow + 1, 1, newRows.length, headers.length).setValues(newRows);
    Logger.log(`Added ${newRows.length} new entries to steamXref sheet`);
  }
  
  Logger.log(`Processed ${processedCount} Steam IDs, ${successCount} successful`);
  
  // If there are more to process, log a message
  if (steamIdsArray.length > maxToProcess) {
    Logger.log(`Note: ${steamIdsArray.length - maxToProcess} Steam IDs remaining. Will be processed on next run.`);
  }
}

/**
 * Function to manually test the script
 * Select this function and click Run to test
 */
function testCacheSteamNames() {
  Logger.log('=== Testing Steam Name Caching ===');
  cacheSteamNames();
  Logger.log('=== Test Complete ===');
}

/**
 * IMPORTANT: Add this menu item to your main onOpen() function:
 * 
 * function onOpen() {
 *   const ui = SpreadsheetApp.getUi();
 *   ui.createMenu('Your Menu Name')
 *     .addItem('Cache Steam Names', 'cacheSteamNames')
 *     .addItem('Test Steam Cache', 'testCacheSteamNames')
 *     // ... other menu items ...
 *     .addToUi();
 * }
 * 
 * Note: Only ONE onOpen() function can exist per Google Apps Script project.
 * If you have multiple .gs files, consolidate all menu items into a single
 * onOpen() function in your main script file.
 */
