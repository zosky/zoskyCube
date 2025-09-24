# Vue Timeline App

## Description
A feature-rich Vue 3 application for visualizing and tracking game-related events, deaths, and statistics. The app provides interactive timelines, live-updating death counters, Steam game integration, and data visualization using ECharts for charting and Tailwind CSS for styling with Vite for fast development.

## Features
- Interactive timeline of game events and deaths
- Live death counters for supported Steam games
- Steam ID entry and game selection
- Game lives and deaths line chart visualization
- Death frame visualization and tracking
- Responsive design with Tailwind CSS
- Fast development and build with Vite
- Data persistence via JSON files
- YouTube integration for VOD tracking

## dev QOL
- github workflow onPush - `build-and-publish` for gh-pages
- index.html baseUrl hack for dev/prod
- Custom npm scripts for data processing and deployment

## Project Structure
```
vue-timeline-app
├── src
│   ├── main.js          # Entry point of the Vue application
│   ├── main.css         # base styles (dark)
│   ├── App.vue          # Root component with HeaderBar and router-view
│   ├── components
│   │   ├── GameLivesLineChart.vue # Interactive line chart for game statistics
│   │   ├── HeaderBar.vue          # Navigation and header component
│   │   └── SteamIdEntry.vue       # Steam ID input and game selection
│   ├── pages
│   │   ├── [...404].vue # gh-pages hack to start the app
│   │   ├── frames.vue   # Death frames visualization page
│   │   └── index.vue    # main layout to render chart + gameList
│   └── stores
│       └── gameStore.js # central data store for game statistics (JS not Vue)
├── public
│   ├── history.json     # Main JSON file for plotting history
│   ├── steamNames.json  # Cached Steam game names
│   ├── youtube.json     # YouTube VOD data
│   └── deathFrames      # Directory containing death frame SVGs
├── scripts
│   ├── cacheSteamNames.js      # Script to cache Steam game names
│   ├── git-hook-pre-push.sh    # Pre-push hook for data processing
│   └── youTubeList.sh          # YouTube data processing script
├── package.json         # Configuration file for npm
├── vite.config.js       # Configuration file for Vite
├── postcss.config.js    # Configuration for PostCSS
└── tailwind.config.js    # Configuration for Tailwind CSS
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Preview production build
- `npm run json` - Process JSON data using git hook script
- `npm run yt` - Process YouTube data
- `npm run steamNames` - Cache Steam game names
- `npm run goTime` - Run both YouTube and JSON processing
- `npm run goHOT` - Process data and push to main branch

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vue-timeline-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the application**
   ```bash
   npm run dev
   ```

4. **Build the application**
   ```bash
   npm run build
   ```

## Usage
Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal) to view the application. The main page displays the timeline, death counters, and charts. Enter your Steam ID to load your game data and interact with the visualizations. Use the `/frames` route to view death frame visualizations.

## Technologies Used
- Vue 3 with Composition API
- ECharts for data visualization
- Tailwind CSS for styling
- Vite for build tooling
- Unplugin ecosystem for auto-imports and routing

## License
This project is licensed under the MIT License.