# Vue Timeline App

## Description
A feature-rich Vue 3 application for visualizing and tracking game-related events, deaths, and statistics. The app provides interactive timelines, live-updating death counters, Steam game integration, and data visualization using Tailwind CSS for styling and Vite for fast development.

## Features
- Interactive timeline of game events and deaths
- Live death counters for supported Steam games
- Steam ID entry and game selection
- Game lives and deaths line chart visualization
- Responsive design with Tailwind CSS
- Fast development and build with Vite
- Data persistence via JSON files

## dev QOL
- github workflow onPush - `build-and-publish` for gh-pages
- index.html baseUrl hack for dev/prod

## Project Structure
```
vue-timeline-app
├── src
│   ├── main.js          # Entry point of the Vue application
│   ├── main.css         # base styles (dark)
│   ├── App.vue          # Root component of the application
│   ├── components
│   │   ├── GameLivesLineChart.vue # does what it says on the tin
│   │   └── SteamIdEntry.vue # Component for legend hack (toggle lines on/off)
│   ├── pages
│   │   ├── [...404].vue # gh-pages hack to start the app
│   │   └── index.vue    # main layout to render chart + gameList
│   └── stores
│       └── gameStore.vue # central smasher for json data
├── public
│   └── history.json     # Main JSON file for plotting history
├── package.json         # Configuration file for npm
├── vite.config.js       # Configuration file for Vite
├── postcss.config.js    # Configuration for PostCSS
└── tailwind.config.js    # Configuration for Tailwind CSS
```

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
Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal) to view the application. The main page displays the timeline, death counters, and charts. Enter your Steam ID to load your game data and interact with the visualizations.

## License
This project is licensed under the MIT License.