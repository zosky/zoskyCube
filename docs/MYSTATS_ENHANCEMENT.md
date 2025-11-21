# myStats Page Enhancement - User History Analytics

**Project**: zoskyCube Timeline App  
**Date**: November 12, 2025  
**Version**: 1.0  
**Scope**: Public user statistics dashboard with efficient Firestore caching

---

## 1. Executive Summary

The **myStats** page provides comprehensive analytics for user handout history, displaying winning patterns across games, time periods, and sources. The page fetches data from `user_handouts/{username}/history` in Firestore and presents it through multiple visualization layers including:

- Per-game winnings breakdown
- Per-reason analysis
- Time-based aggregations (hourly, weekly, monthly)
- Pivot table (time × games)
- Pattern detection and insights

**Key Features**:
- ✅ **Public access** - No authentication required (handout history contains no private data)
- ✅ **Efficient caching** - localStorage-based cache with incremental updates
- ✅ **Multiple views** - Summary cards, pivot tables, charts, and insights
- ✅ **Real-time insights** - Pattern detection from user data

---

## 2. Data Source

### 2.1 Firestore Collection Structure

**Path**: `/user_handouts/{username}/history/{handoutId}`

**Document Schema**:
```javascript
{
  username: "madagascaradam",          // Twitch username
  amount: 100,                          // zCubes awarded
  reason: "Successful game vote",       // Human-readable reason
  source: "vodVote",                    // Source type (vodVote, squadRush, manual, art, storePurchases)
  timestamp: Timestamp,                 // Firebase timestamp
  metadata: {},                         // Additional context
  date: "2025-11-09",                   // ISO date string (YYYY-MM-DD)
  hour: 23,                             // Hour of day (0-23)
  dayOfWeek: 0,                         // Day of week (0=Sunday, 6=Saturday)
  createdAt: Timestamp                  // Record creation timestamp
}
```

### 2.2 Available Sources
- `vodVote` - VOD voting rewards
- `squadRush` - Squad rush participation
- `manual` - Manual admin awards
- `art` - AI art mini-game rewards
- `storePurchases` - Store purchase rewards
- `vouchers` - zB converted to zC

---

## 3. Firestore Security Rules Update

### 3.1 Current Rules
Currently `user_handouts` collection is **not defined** in `firestore.rules`, so it defaults to **deny all**.

### 3.2 Proposed Rules
```javascript
// User handouts history - PUBLIC READ for statistics
// Write access restricted to Cloud Functions only
match /user_handouts/{username}/history/{historyId} {
  allow read: if true;  // Public read - no private data
  allow write: if false; // Only Cloud Functions can write
}
```

### 3.3 Security Justification
- ✅ **No PII**: Username is Twitch handle (already public)
- ✅ **No tokens**: No OAuth tokens or credentials
- ✅ **Public data**: Handout amounts and reasons are game mechanics (visible to all viewers)
- ✅ **Transparency**: Public handout history promotes fairness and transparency
- ✅ **Audit trail**: Anyone can verify rewards are distributed fairly

---

## 4. Router Architecture & Page Structure

### 4.1 File-Based Routing

**Route Structure**:
- `/stats` → Leaderboard/TOC (if not logged in) or redirect to user's stats (if logged in)
- `/stats/[username]` → Individual user stats page

**File Structure**:
```
src/pages/stats/
├── index.vue          # Leaderboard or redirect logic
└── [username].vue     # User-specific stats page
```

### 4.2 Index Page (Leaderboard/TOC)

**File**: `src/pages/stats/index.vue`

**Purpose**: 
- If user is logged in → redirect to `/stats/{username}`
- If NOT logged in → show leaderboard (table of contents)

```vue
<template>
  <div class="stats-index">
    <LoadingSpinner v-if="isLoading" />
    
    <!-- Leaderboard/TOC View -->
    <div v-else class="leaderboard-container">
      <h1>📊 zCube Winnings Leaderboard</h1>
      
      <div class="leaderboard-stats">
        <StatCard title="Total Players" :value="leaderboard.length" />
        <StatCard title="Total Distributed" :value="totalDistributed" suffix="zC" />
        <StatCard title="Avg Per Player" :value="avgPerPlayer" suffix="zC" />
      </div>
      
      <table class="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Total Winnings</th>
            <th>Total Wins</th>
            <th>Avg Per Win</th>
            <th>Last Activity</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(user, idx) in leaderboard" 
            :key="user.username"
            class="cursor-pointer hover:bg-blue-500/20"
            @click="$router.push(`/stats/${user.username}`)"
          >
            <td class="rank">{{ idx + 1 }}</td>
            <td class="username">{{ user.username }}</td>
            <td>{{ user.totalAmount }} zC</td>
            <td>{{ user.totalCount }}</td>
            <td>{{ user.avgAmount }} zC</td>
            <td>{{ formatRelativeTime(user.lastActivity) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// Auto-imported: ref, computed, onMounted, useRouter, useRoute
const router = useRouter()
const route = useRoute()

// Check if user is logged in (from auth store or session)
const currentUser = ref(null)
const leaderboard = ref([])
const isLoading = ref(true)

onMounted(async () => {
  // Check for logged-in user (from Firebase Auth or session)
  currentUser.value = await checkCurrentUser()
  
  if (currentUser.value?.username) {
    // Redirect to user's stats page
    router.push(`/stats/${currentUser.value.username}`)
  } else {
    // Load leaderboard
    await loadLeaderboard()
  }
  
  isLoading.value = false
})

async function checkCurrentUser() {
  // Check Firebase Auth state or localStorage session
  // Return { username: 'zoskycube' } if logged in, null otherwise
  const user = auth.currentUser
  if (user) {
    // Fetch username from account_links or user profile
    const linkDoc = await db.collection('account_links').where('twitchId', '==', user.uid).get()
    if (!linkDoc.empty) {
      return { username: linkDoc.docs[0].data().twitchUsername }
    }
  }
  return null
}

async function loadLeaderboard() {
  // Fetch all user_handouts documents
  const snapshot = await db.collection('user_handouts').get()
  
  const userStats = await Promise.all(snapshot.docs.map(async (userDoc) => {
    const username = userDoc.id
    
    // Get latest history record for "last activity"
    const historySnapshot = await db
      .collection('user_handouts', username, 'history')
      .orderBy('timestamp', 'desc')
      .limit(1)
      .get()
    
    // Calculate totals (could also be stored in user_handouts doc)
    const historyDocs = await db
      .collection('user_handouts', username, 'history')
      .get()
    
    let totalAmount = 0
    let totalCount = historyDocs.size
    
    historyDocs.forEach(doc => {
      totalAmount += doc.data().amount || 0
    })
    
    return {
      username,
      totalAmount,
      totalCount,
      avgAmount: totalCount > 0 ? Math.round(totalAmount / totalCount) : 0,
      lastActivity: historySnapshot.empty ? null : historySnapshot.docs[0].data().timestamp
    }
  }))
  
  // Sort by total amount descending
  leaderboard.value = userStats.sort((a, b) => b.totalAmount - a.totalAmount)
}

const totalDistributed = computed(() => 
  leaderboard.value.reduce((sum, user) => sum + user.totalAmount, 0)
)

const avgPerPlayer = computed(() => 
  leaderboard.value.length > 0 
    ? Math.round(totalDistributed.value / leaderboard.value.length)
    : 0
)

function formatRelativeTime(timestamp) {
  if (!timestamp) return 'Never'
  const date = timestamp.toDate()
  const now = new Date()
  const diff = now - date
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  if (days === 0) return 'Today'
  if (days === 1) return 'Yesterday'
  if (days < 7) return `${days} days ago`
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`
  return `${Math.floor(days / 30)} months ago`
}
</script>
```

### 4.3 User Stats Page

**File**: `src/pages/stats/[username].vue`

**Purpose**: Display detailed stats for specific user from route params

```vue
<template>
  <div class="user-stats-page">
    <LoadingSpinner v-if="isLoading" />
    
    <div v-else-if="error" class="error-banner">
      ⚠️ {{ error }}
    </div>
    
    <div v-else-if="historyData.length === 0" class="empty-state">
      <p>No handout history found for {{ username }}</p>
      <button @click="$router.push('/stats')">← Back to Leaderboard</button>
    </div>
    
    <div v-else class="stats-content">
      <!-- Navigation -->
      <div class="breadcrumb">
        <button @click="$router.push('/stats')">← Leaderboard</button>
        <span>{{ username }}'s Stats</span>
      </div>
      
      <!-- Summary Cards -->
      <section class="section">
        <h2>Overview</h2>
        <SummaryCards :data="historyData" />
      </section>
      
      <!-- Insights -->
      <section class="section">
        <h2>🔍 Insights</h2>
        <InsightsGrid :insights="insights" />
      </section>
      
      <!-- ... rest of visualizations ... -->
    </div>
  </div>
</template>

<script setup>
// Auto-imported: ref, computed, onMounted, onUnmounted, useRoute, useRouter
const route = useRoute()
const router = useRouter()

// Get username from route params
const username = computed(() => route.params.username)

const historyData = ref([])
const isLoading = ref(true)
const error = ref(null)

// Firestore listener for real-time updates
let unsubscribe = null

onMounted(async () => {
  await loadUserHistory()
  setupRealtimeListener()
})

onUnmounted(() => {
  if (unsubscribe) unsubscribe()
})

async function loadUserHistory() {
  if (!username.value) return
  
  isLoading.value = true
  error.value = null
  
  try {
    // Step 1: Check localStorage cache
    const cached = getCachedData(username.value)
    
    if (cached) {
      historyData.value = cached.records
      console.log(`📦 Loaded ${cached.records.length} cached records`)
      
      // Step 2: Fetch only NEW records
      const newerRecords = await fetchRecordsAfter(username.value, cached.newestTimestamp)
      
      if (newerRecords.length > 0) {
        console.log(`🆕 Found ${newerRecords.length} new records`)
        const merged = mergeRecords(cached.records, newerRecords)
        historyData.value = merged
        updateCache(username.value, merged)
      }
    } else {
      // No cache - fetch all
      const allRecords = await fetchAllRecords(username.value)
      historyData.value = allRecords
      if (allRecords.length > 0) {
        updateCache(username.value, allRecords)
      }
    }
  } catch (err) {
    console.error('Error loading history:', err)
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

function setupRealtimeListener() {
  // Setup Firestore onSnapshot listener for real-time updates
  const historyRef = db.collection('user_handouts')
    .doc(username.value)
    .collection('history')
    .orderBy('timestamp', 'desc')
    .limit(1)
  
  unsubscribe = onSnapshot(historyRef, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const newRecord = { id: change.doc.id, ...change.doc.data() }
        
        // Check if record already exists in historyData
        const exists = historyData.value.find(r => r.id === newRecord.id)
        if (!exists) {
          console.log('🔔 New handout received in real-time:', newRecord)
          
          // Add to beginning of array (newest first)
          historyData.value.unshift(newRecord)
          
          // Update cache immediately
          updateCache(username.value, historyData.value)
        }
      }
    })
  })
}

// ... cache functions (getCachedData, updateCache, etc.) ...
</script>
```

### 4.2 Summary Cards
Display top-level metrics:

```vue
<div class="summary-cards">
  <StatCard title="Total Winnings" :value="totalAmount" suffix="zC" />
  <StatCard title="Total Wins" :value="totalCount" suffix="times" />
  <StatCard title="Avg Per Win" :value="avgAmount" suffix="zC" />
  <StatCard title="Best Source" :value="topSource" />
  <StatCard title="Best Game" :value="topGame" />
  <StatCard title="Win Streak" :value="longestStreak" suffix="days" />
</div>
```

### 4.3 Per-Game Breakdown
Table showing winnings grouped by game (via `source` property):

```vue
<table class="game-breakdown">
  <thead>
    <tr>
      <th>Source</th>
      <th>Total Wins</th>
      <th>Total zC</th>
      <th>Avg Per Win</th>
      <th>% of Total</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="game in gameStats" :key="game.source">
      <td>{{ formatSource(game.source) }}</td>
      <td>{{ game.count }}</td>
      <td>{{ game.total }} zC</td>
      <td>{{ game.avg }} zC</td>
      <td>{{ game.percentage }}%</td>
    </tr>
  </tbody>
</table>
```

**Computed Data**:
```javascript
const gameStats = computed(() => {
  const stats = {};
  
  historyData.value.forEach(item => {
    if (!stats[item.source]) {
      stats[item.source] = { count: 0, total: 0 };
    }
    stats[item.source].count++;
    stats[item.source].total += item.amount;
  });
  
  return Object.entries(stats).map(([source, data]) => ({
    source,
    count: data.count,
    total: data.total,
    avg: Math.round(data.total / data.count),
    percentage: Math.round((data.total / totalAmount.value) * 100)
  })).sort((a, b) => b.total - a.total);
});
```

### 4.4 Per-Reason Breakdown
Similar to game breakdown but grouped by `reason`:

```vue
<table class="reason-breakdown">
  <thead>
    <tr>
      <th>Reason</th>
      <th>Count</th>
      <th>Total zC</th>
      <th>Most Common Source</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="reason in reasonStats" :key="reason.reason">
      <td>{{ reason.reason }}</td>
      <td>{{ reason.count }}</td>
      <td>{{ reason.total }} zC</td>
      <td>{{ reason.topSource }}</td>
    </tr>
  </tbody>
</table>
```

### 4.5 Time-Based Views

#### Weekly Aggregation
```javascript
const weeklyStats = computed(() => {
  const weeks = {};
  
  historyData.value.forEach(item => {
    const date = new Date(item.timestamp.seconds * 1000);
    const weekStart = getWeekStart(date); // Monday of that week
    const weekKey = weekStart.toISOString().split('T')[0];
    
    if (!weeks[weekKey]) {
      weeks[weekKey] = { count: 0, total: 0, sources: {} };
    }
    
    weeks[weekKey].count++;
    weeks[weekKey].total += item.amount;
    weeks[weekKey].sources[item.source] = (weeks[weekKey].sources[item.source] || 0) + 1;
  });
  
  return Object.entries(weeks)
    .map(([week, data]) => ({
      week,
      count: data.count,
      total: data.total,
      avg: Math.round(data.total / data.count),
      topSource: Object.entries(data.sources).sort((a, b) => b[1] - a[1])[0][0]
    }))
    .sort((a, b) => new Date(b.week) - new Date(a.week));
});
```

#### Monthly Aggregation
```javascript
const monthlyStats = computed(() => {
  const months = {};
  
  historyData.value.forEach(item => {
    const date = new Date(item.timestamp.seconds * 1000);
    const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
    
    if (!months[monthKey]) {
      months[monthKey] = { count: 0, total: 0, days: new Set() };
    }
    
    months[monthKey].count++;
    months[monthKey].total += item.amount;
    months[monthKey].days.add(item.date);
  });
  
  return Object.entries(months)
    .map(([month, data]) => ({
      month,
      count: data.count,
      total: data.total,
      activeDays: data.days.size,
      avgPerDay: Math.round(data.total / data.days.size)
    }))
    .sort((a, b) => b.month.localeCompare(a.month));
});
```

### 4.6 Pivot Table: Time × Games

**Visual Layout**:
```
        | vodVote | squadRush | art | manual | Total
--------|---------|-----------|-----|--------|-------
00:00   |    50   |     0     |  0  |   0    |  50
01:00   |   100   |     0     | 25  |   0    | 125
...
23:00   |    75   |    100    |  0  |  50    | 225
--------|---------|-----------|-----|--------|-------
Total   |  1,250  |    500    | 125 |  200   | 2,075
```

**Implementation**:
```vue
<template>
  <table class="pivot-table">
    <thead>
      <tr>
        <th>Hour</th>
        <th v-for="source in sources" :key="source">{{ formatSource(source) }}</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="hour in 24" :key="hour">
        <td>{{ String(hour).padStart(2, '0') }}:00</td>
        <td v-for="source in sources" :key="source" 
            :class="getCellHeatClass(pivotData[hour]?.[source] || 0)">
          {{ pivotData[hour]?.[source] || 0 }}
        </td>
        <td class="row-total">{{ hourTotals[hour] || 0 }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Total</th>
        <th v-for="source in sources" :key="source">
          {{ sourceTotals[source] || 0 }}
        </th>
        <th>{{ grandTotal }}</th>
      </tr>
    </tfoot>
  </table>
</template>

<script setup>
const pivotData = computed(() => {
  const pivot = {};
  
  historyData.value.forEach(item => {
    const hour = item.hour;
    if (!pivot[hour]) pivot[hour] = {};
    pivot[hour][item.source] = (pivot[hour][item.source] || 0) + item.amount;
  });
  
  return pivot;
});

const getCellHeatClass = (value) => {
  if (value === 0) return 'heat-0';
  if (value < 50) return 'heat-low';
  if (value < 100) return 'heat-med';
  if (value < 200) return 'heat-high';
  return 'heat-max';
};
</script>

<style scoped>
.heat-0 { background: #f5f5f5; color: #999; }
.heat-low { background: #e3f2fd; }
.heat-med { background: #90caf9; }
.heat-high { background: #42a5f5; color: white; }
.heat-max { background: #1976d2; color: white; font-weight: bold; }
</style>
```

### 4.7 Pattern Detection & Insights

Automatically detect interesting patterns:

```javascript
const insights = computed(() => {
  const patterns = [];
  
  // Peak hour detection
  const hourTotals = {};
  historyData.value.forEach(item => {
    hourTotals[item.hour] = (hourTotals[item.hour] || 0) + item.amount;
  });
  const peakHour = Object.entries(hourTotals).sort((a, b) => b[1] - a[1])[0];
  patterns.push({
    type: 'peak-hour',
    title: 'Peak Activity Hour',
    description: `Most active at ${peakHour[0]}:00 with ${peakHour[1]} zC earned`,
    icon: '⏰'
  });
  
  // Favorite day detection
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayTotals = {};
  historyData.value.forEach(item => {
    dayTotals[item.dayOfWeek] = (dayTotals[item.dayOfWeek] || 0) + 1;
  });
  const favDay = Object.entries(dayTotals).sort((a, b) => b[1] - a[1])[0];
  patterns.push({
    type: 'favorite-day',
    title: 'Most Active Day',
    description: `${dayNames[favDay[0]]} with ${favDay[1]} wins`,
    icon: '📅'
  });
  
  // Streak detection
  const dates = [...new Set(historyData.value.map(h => h.date))].sort();
  let currentStreak = 1;
  let maxStreak = 1;
  for (let i = 1; i < dates.length; i++) {
    const prevDate = new Date(dates[i - 1]);
    const currDate = new Date(dates[i]);
    const dayDiff = Math.floor((currDate - prevDate) / (1000 * 60 * 60 * 24));
    
    if (dayDiff === 1) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 1;
    }
  }
  patterns.push({
    type: 'streak',
    title: 'Longest Win Streak',
    description: `${maxStreak} consecutive days with wins`,
    icon: '🔥'
  });
  
  // Source diversity
  const uniqueSources = new Set(historyData.value.map(h => h.source)).size;
  patterns.push({
    type: 'diversity',
    title: 'Source Diversity',
    description: `Earned zCubes from ${uniqueSources} different sources`,
    icon: '🎯'
  });
  
  // Big wins
  const bigWins = historyData.value.filter(h => h.amount >= 100).length;
  if (bigWins > 0) {
    patterns.push({
      type: 'big-wins',
      title: 'Big Wins',
      description: `${bigWins} wins of 100+ zC`,
      icon: '💎'
    });
  }
  
  return patterns;
});
```

**Display**:
```vue
<div class="insights-grid">
  <div v-for="insight in insights" :key="insight.type" class="insight-card">
    <div class="insight-icon">{{ insight.icon }}</div>
    <h3>{{ insight.title }}</h3>
    <p>{{ insight.description }}</p>
  </div>
</div>
```

---

## 5. Efficient Caching Strategy

## 5. Header Navigation Integration

### 5.1 Update HeaderBar Component

**File**: `src/components/HeaderBar.vue`

Add a Stats link that intelligently routes based on auth state, plus user avatar with platform cycling:

```vue
<template>
  <nav class="custom-cyan-shadow">
    <!-- ... existing navigation items ... -->
    
    <ChartBar
      :class="{ 'active' : $route.path.includes('/stats') }" 
      class="cursor-pointer"
      @click="navigateToStats"
      :title="currentUser ? `My Stats` : `Leaderboard`" />
    
    <Account
      v-if="$route.path=='/auth' || !currentUser"
      :class="{ 'active' : $route.path=='/auth' }" 
      class="cursor-pointer"
      @click="$router.push('/auth')"
      title="Connect Gaming Accounts" />
    
    <!-- User Avatar (right side) -->
    <div 
      v-if="currentUser" 
      class="user-avatar-container"
      @click="navigateToMyStats"
      @mousedown.middle.prevent="cycleAvatar"
      :title="`${currentUser.username}'s Stats (Middle-click to cycle avatar)`"
    >
      <img 
        v-if="currentAvatar"
        :src="currentAvatar" 
        :alt="`${currentUser.username} avatar`"
        class="user-avatar"
      />
      <Account v-else class="w-10 h-10 text-blue-400" />
    </div>
    
    <!-- ... rest of navigation ... -->
  </nav>
</template>

<script setup>
// Auto-imports: useRouter, useRoute, ref, computed, onMounted
import { ChartBar, Account, /* other icons */ } from 'mdue'

const router = useRouter()
const route = useRoute()
const currentUser = ref(null)
const avatarIndex = ref(0) // 0=twitch, 1=steam, 2=discord

onMounted(async () => {
  // Check auth state
  currentUser.value = await checkCurrentUser()
  
  // Load saved avatar preference
  const savedIndex = localStorage.getItem('preferredAvatarIndex')
  if (savedIndex) {
    avatarIndex.value = parseInt(savedIndex)
  }
})

async function checkCurrentUser() {
  // Check Firebase Auth or localStorage session
  const user = auth.currentUser
  if (user) {
    // Fetch linked Twitch username and avatars
    const linkDoc = await db.collection('account_links')
      .where('firebaseUid', '==', user.uid)
      .get()
    
    if (!linkDoc.empty) {
      const linkData = linkDoc.docs[0].data()
      
      // Fetch avatars from profile collections
      const avatars = {
        twitch: null,
        steam: null,
        discord: null
      }
      
      // Fetch Twitch avatar
      if (linkData.twitchId) {
        const twitchDoc = await db.collection('twitch_profiles').doc(linkData.twitchId).get()
        if (twitchDoc.exists) {
          avatars.twitch = twitchDoc.data().profileImageUrl
        }
      }
      
      // Fetch Steam avatar
      if (linkData.steamId) {
        const steamDoc = await db.collection('steam_profiles').doc(linkData.steamId).get()
        if (steamDoc.exists) {
          avatars.steam = steamDoc.data().avatar
        }
      }
      
      // Fetch Discord avatar
      if (linkData.discordId) {
        const discordDoc = await db.collection('discord_profiles').doc(linkData.discordId).get()
        if (discordDoc.exists) {
          const discordData = discordDoc.data()
          if (discordData.avatar) {
            avatars.discord = `https://cdn.discordapp.com/avatars/${linkData.discordId}/${discordData.avatar}.png`
          }
        }
      }
      
      return {
        uid: user.uid,
        username: linkData.twitchUsername,
        avatars
      }
    }
  }
  return null
}

const currentAvatar = computed(() => {
  if (!currentUser.value?.avatars) return null
  
  const platforms = ['twitch', 'steam', 'discord']
  const platform = platforms[avatarIndex.value % 3]
  
  return currentUser.value.avatars[platform] || 
         currentUser.value.avatars.twitch || 
         currentUser.value.avatars.steam || 
         currentUser.value.avatars.discord
})

function navigateToStats() {
  if (currentUser.value?.username) {
    // Navigate to user's specific stats
    router.push(`/stats/${currentUser.value.username}`)
  } else {
    // Navigate to leaderboard
    router.push('/stats')
  }
}

function navigateToMyStats() {
  if (currentUser.value?.username) {
    router.push(`/stats/${currentUser.value.username}`)
  }
}

function cycleAvatar() {
  avatarIndex.value = (avatarIndex.value + 1) % 3
  localStorage.setItem('preferredAvatarIndex', avatarIndex.value.toString())
}
</script>

<style scoped>
.user-avatar-container {
  @apply justify-self-end cursor-pointer transition-transform duration-200 hover:scale-110;
  @apply flex items-center justify-center w-12 h-12 rounded-full overflow-hidden;
  @apply ring-2 ring-blue-400 hover:ring-yellow-400;
}

.user-avatar {
  @apply w-full h-full object-cover;
}
</style>
```

---

## 6. Efficient Caching Strategy

### 6.1 Cache Structure

**localStorage Key**: `zoskyCube_userHistory_{username}`

**Cache Format**:
```javascript
{
  username: "madagascaradam",
  lastUpdated: "2025-11-12T15:30:00Z",
  newestTimestamp: { seconds: 1731426658, nanoseconds: 0 },  // Latest record
  records: [
    {
      id: "03Fp9jsnl4TzN1p3q31j",  // Firestore document ID
      username: "madagascaradam",
      amount: 100,
      reason: "Successful game vote",
      source: "vodVote",
      timestamp: { seconds: 1731426658, nanoseconds: 0 },
      date: "2025-11-09",
      hour: 23,
      dayOfWeek: 0,
      metadata: {}
    },
    // ... more records (sorted by timestamp DESC)
  ]
}
```

### 6.2 Real-Time Listener Integration

**Purpose**: Keep cache up-to-date in real-time while user is on the page

```javascript
// In [username].vue
function setupRealtimeListener() {
  const historyRef = db.collection('user_handouts')
    .doc(username.value)
    .collection('history')
    .orderBy('timestamp', 'desc')
  
  // Listen for new documents only (not modifications/deletions)
  unsubscribe = onSnapshot(historyRef, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === 'added') {
        const newRecord = { 
          id: change.doc.id, 
          ...change.doc.data() 
        }
        
        // Check if already in local data
        const exists = historyData.value.find(r => r.id === newRecord.id)
        
        if (!exists) {
          console.log('🔔 New handout detected:', newRecord)
          
          // Add to beginning (newest first)
          historyData.value.unshift(newRecord)
          
          // Update cache immediately
          updateCache(username.value, historyData.value)
          
          // Optional: Show toast notification
          showToast(`+${newRecord.amount} zC from ${newRecord.source}!`)
        }
      }
    })
  }, (error) => {
    console.error('Listener error:', error)
  })
}
```

**Benefits**:
- ✅ **Near real-time updates** - New handouts appear instantly
- ✅ **Automatic cache refresh** - localStorage stays current
- ✅ **Minimal bandwidth** - Only new documents transmitted
- ✅ **On reload efficiency** - Cache already has latest data

### 6.3 Cache Loading Flow (Enhanced)

```javascript
// composables/useUserHistory.js
// Note: No imports needed! ref, computed, etc. are auto-imported

export function useUserHistory() {
  const username = ref('')
  const historyData = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  
  /**
   * Load user history with smart caching
   */
  async function loadUserHistory(user) {
    if (!user) return;
    
    username.value = user;
    isLoading.value = true;
    error.value = null;
    
    try {
      // Step 1: Check localStorage cache
      const cacheKey = `zoskyCube_userHistory_${user}`;
      const cached = localStorage.getItem(cacheKey);
      
      if (cached) {
        const cacheData = JSON.parse(cached);
        historyData.value = cacheData.records;
        console.log(`📦 Loaded ${cacheData.records.length} cached records for ${user}`);
        
        // Step 2: Fetch only NEW records (after newest cached timestamp)
        const newerRecords = await fetchRecordsAfter(user, cacheData.newestTimestamp);
        
        if (newerRecords.length > 0) {
          console.log(`🆕 Found ${newerRecords.length} new records`);
          
          // Step 3: Merge and deduplicate
          const merged = mergeRecords(cacheData.records, newerRecords);
          historyData.value = merged;
          
          // Step 4: Update cache
          updateCache(user, merged);
        } else {
          console.log(`✅ Cache is up to date`);
        }
      } else {
        // No cache - fetch all records
        console.log(`🔄 No cache found, fetching all records for ${user}`);
        const allRecords = await fetchAllRecords(user);
        historyData.value = allRecords;
        
        // Save to cache
        if (allRecords.length > 0) {
          updateCache(user, allRecords);
        }
      }
    } catch (err) {
      console.error('❌ Error loading user history:', err);
      error.value = err.message;
    } finally {
      isLoading.value = false;
    }
  }
  
  /**
   * Fetch all records for a user
   */
  async function fetchAllRecords(user) {
    const q = query(
      collection(db, 'user_handouts', user, 'history'),
      orderBy('timestamp', 'desc'),
      limit(1000)  // Safety limit
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
  
  /**
   * Fetch only records newer than given timestamp
   */
  async function fetchRecordsAfter(user, afterTimestamp) {
    const q = query(
      collection(db, 'user_handouts', user, 'history'),
      where('timestamp', '>', afterTimestamp),
      orderBy('timestamp', 'desc'),
      limit(500)
    );
    
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  }
  
  /**
   * Merge cached and new records, remove duplicates
   */
  function mergeRecords(cached, newer) {
    const merged = [...newer, ...cached];
    
    // Deduplicate by ID
    const unique = merged.reduce((acc, record) => {
      if (!acc.find(r => r.id === record.id)) {
        acc.push(record);
      }
      return acc;
    }, []);
    
    // Sort by timestamp DESC
    return unique.sort((a, b) => 
      b.timestamp.seconds - a.timestamp.seconds
    );
  }
  
  /**
   * Update localStorage cache
   */
  function updateCache(user, records) {
    if (records.length === 0) return;
    
    const cacheData = {
      username: user,
      lastUpdated: new Date().toISOString(),
      newestTimestamp: records[0].timestamp,  // First record (newest)
      records: records
    };
    
    const cacheKey = `zoskyCube_userHistory_${user}`;
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    console.log(`💾 Cached ${records.length} records for ${user}`);
  }
  
  /**
   * Clear cache for current user
   */
  function clearCache() {
    if (!username.value) return;
    const cacheKey = `zoskyCube_userHistory_${username.value}`;
    localStorage.removeItem(cacheKey);
    console.log(`🗑️ Cache cleared for ${username.value}`);
  }
  
  return {
    username,
    historyData,
    isLoading,
    error,
    loadUserHistory,
    clearCache
  };
}
```

### 5.3 Cache Efficiency Benefits

| Scenario | Without Cache | With Cache | Savings |
|----------|--------------|------------|---------|
| First load (500 records) | 500 docs | 500 docs | 0% |
| Reload (no new data) | 500 docs | 0 docs | **100%** |
| Reload (10 new records) | 500 docs | 10 docs | **98%** |
| Daily refresh | 500 docs | ~50 docs | **90%** |

**Firestore Cost Savings**:
- Without cache: **500 reads per page load**
- With cache: **~10 reads per page load** (average)
- **98% reduction in Firestore costs**

---

## 6. Page Layout & UI

### 6.1 Component Structure

```
myStats.vue
├── UserSelector.vue
├── SummaryCards.vue
├── GameBreakdown.vue
├── ReasonBreakdown.vue
├── WeeklyChart.vue
├── MonthlyChart.vue
├── PivotTable.vue
├── InsightsGrid.vue
└── LoadingSpinner.vue
```

### 6.2 Responsive Layout

```vue
<template>
  <div class="mystats-page">
    <!-- Header -->
    <header class="page-header">
      <h1>📊 My Stats</h1>
      <UserSelector 
        v-model="selectedUsername" 
        @load="loadUserHistory"
      />
    </header>
    
    <!-- Loading State -->
    <LoadingSpinner v-if="isLoading" />
    
    <!-- Error State -->
    <div v-else-if="error" class="error-banner">
      ⚠️ {{ error }}
    </div>
    
    <!-- No Data State -->
    <div v-else-if="historyData.length === 0" class="empty-state">
      <p>No handout history found for {{ selectedUsername }}</p>
    </div>
    
    <!-- Data Visualization -->
    <div v-else class="stats-content">
      <!-- Summary Cards -->
      <section class="section">
        <h2>Overview</h2>
        <SummaryCards :data="historyData" />
      </section>
      
      <!-- Insights -->
      <section class="section">
        <h2>🔍 Insights</h2>
        <InsightsGrid :insights="insights" />
      </section>
      
      <!-- Game Breakdown -->
      <section class="section">
        <h2>📊 By Source</h2>
        <GameBreakdown :stats="gameStats" />
      </section>
      
      <!-- Reason Breakdown -->
      <section class="section">
        <h2>🎯 By Reason</h2>
        <ReasonBreakdown :stats="reasonStats" />
      </section>
      
      <!-- Pivot Table -->
      <section class="section">
        <h2>🕐 Hourly Activity (Pivot Table)</h2>
        <PivotTable :data="pivotData" />
      </section>
      
      <!-- Time Charts -->
      <section class="section charts">
        <div class="chart-container">
          <h2>📅 Weekly Trends</h2>
          <WeeklyChart :data="weeklyStats" />
        </div>
        
        <div class="chart-container">
          <h2>📆 Monthly Trends</h2>
          <MonthlyChart :data="monthlyStats" />
        </div>
      </section>
    </div>
    
    <!-- Footer -->
    <footer class="page-footer">
      <button @click="clearCache">🗑️ Clear Cache</button>
      <span class="cache-info">
        Last updated: {{ cacheTimestamp }}
      </span>
    </footer>
  </div>
</template>

<style scoped>
.mystats-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  margin-bottom: 2rem;
}

.section {
  margin-bottom: 3rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

@media (max-width: 768px) {
  .charts {
    grid-template-columns: 1fr;
  }
}
</style>
```

---

## 7. Firestore Indexes Required

### 7.1 Index for Incremental Fetching

**Collection**: `user_handouts/{username}/history`

```json
{
  "collectionGroup": "history",
  "queryScope": "COLLECTION",
  "fields": [
    {
      "fieldPath": "timestamp",
      "order": "DESCENDING"
    }
  ]
}
```

### 7.2 Adding to firestore.indexes.json

```json
{
  "indexes": [
    {
      "collectionGroup": "history",
      "queryScope": "COLLECTION",
      "fields": [
        {
          "fieldPath": "timestamp",
          "order": "DESCENDING"
        }
      ]
    }
  ],
  "fieldOverrides": []
}
```

---

## 8. Implementation Checklist

### Phase 1: Firestore Setup (30 min)

- [ ] Update `firestore.rules` to allow public read on `user_handouts/{username}/history`
- [ ] Add composite index to `firestore.indexes.json`
- [ ] Deploy rules: `firebase deploy --only firestore`
- [ ] Verify rules in Firebase Console
- [ ] Test public read access (no auth required)

### Phase 2: Router & Page Structure (1.5 hours)

- [ ] Create `src/pages/stats/index.vue` (leaderboard/redirect page)
  - [ ] Implement user detection logic
  - [ ] Build leaderboard table with aggregated stats
  - [ ] Add click-to-navigate functionality
  - [ ] Add loading states
- [ ] Create `src/pages/stats/[username].vue` (individual stats page)
  - [ ] Extract username from `$route.params.username`
  - [ ] Implement breadcrumb navigation
  - [ ] Add loading/error/empty states
  - [ ] Test route parameter handling

### Phase 3: Data Layer with Real-Time (2 hours)

- [ ] Create `composables/useUserHistory.js`
- [ ] Implement cache functions:
  - [ ] `getCachedData(username)` - Read from localStorage
  - [ ] `updateCache(username, records)` - Write to localStorage with overflow handling
  - [ ] `clearCache(username)` - Remove from localStorage
- [ ] Implement Firestore functions:
  - [ ] `fetchAllRecords(username)` - Initial load
  - [ ] `fetchRecordsAfter(username, timestamp)` - Incremental fetch
  - [ ] `mergeRecords(cached, newer)` - Deduplicate and sort
- [ ] Implement real-time listener:
  - [ ] `setupRealtimeListener()` - onSnapshot for new handouts
  - [ ] Handle `added` document changes
  - [ ] Update cache on real-time events
  - [ ] Cleanup listener on unmount
- [ ] Test with real data from `madagascaradam`

### Phase 4: Header Navigation (1 hour)

- [ ] Update `src/components/HeaderBar.vue`
- [ ] Add `ChartBar` icon for Stats link
- [ ] Implement `navigateToStats()` function
  - [ ] Check current user auth state
  - [ ] Route to `/stats/{username}` if logged in
  - [ ] Route to `/stats` if not logged in
- [ ] Update icon active state for `/stats` routes
- [ ] Add conditional `Account` icon display
- [ ] Add user avatar component (right side):
  - [ ] Fetch avatars from twitch_profiles, steam_profiles, discord_profiles
  - [ ] Display current avatar with ring styling
  - [ ] Implement left-click → navigate to `/stats/{username}`
  - [ ] Implement middle-click → cycle through avatars (twitch/steam/discord)
  - [ ] Save preferred avatar index to localStorage
  - [ ] Style with Tailwind using @apply directive

### Phase 5: Components (2.5 hours)

- [ ] Install Chart.js: `npm install chart.js vue-chartjs`
- [ ] Create `components/stats/SummaryCards.vue`
- [ ] Create `components/stats/GameBreakdown.vue`
- [ ] Create `components/stats/ReasonBreakdown.vue`
- [ ] Create `components/stats/PivotTable.vue` with heatmap
- [ ] Create `components/stats/InsightsGrid.vue`
- [ ] Create `components/stats/WeeklyChart.vue` (Line chart with dual Y-axis)
- [ ] Create `components/stats/MonthlyChart.vue` (Bar chart)
- [ ] Create `components/stats/SourcePieChart.vue` (Doughnut chart)
- [ ] Create `components/stats/HourlyHeatmap.vue` (Stacked bar chart)
- [ ] Create `components/stats/LoadingSpinner.vue`

### Phase 6: Computed Analytics (2 hours)

- [ ] Implement `gameStats` computed (by source)
- [ ] Implement `reasonStats` computed (by reason)
- [ ] Implement `weeklyStats` computed (weekly aggregation)
- [ ] Implement `monthlyStats` computed (monthly aggregation)
- [ ] Implement `pivotData` computed (hour × source matrix)
- [ ] Implement `insights` pattern detection:
  - [ ] Peak hour detection
  - [ ] Favorite day detection
  - [ ] Win streak calculation
  - [ ] Source diversity
  - [ ] Big wins tracking
- [ ] Add helper functions:
  - [ ] `formatSource(source)` - Human-readable source names
  - [ ] `getWeekStart(date)` - Monday of week
  - [ ] `formatRelativeTime(timestamp)` - "2 days ago"

### Phase 7: Styling & Polish (1.5 hours)

- [ ] Add CSS for all components using Tailwind @apply
- [ ] Add heatmap colors for pivot table (5 levels)
- [ ] Add responsive breakpoints (mobile/tablet/desktop)
- [ ] Add smooth transitions and animations
- [ ] Add icons and visual hierarchy
- [ ] Add hover effects for interactive elements
- [ ] Style user avatar component (ring, hover effects, transitions)
- [ ] Add export toolbar styling (print-hidden)
- [ ] Style comparison page (winner/loser highlighting)
- [ ] Test on mobile devices
- [ ] Add toast notification for real-time updates

### Phase 8: Testing & Optimization (1.5 hours)

- [ ] Test leaderboard view (no auth)
- [ ] Test auto-redirect (with auth)
- [ ] Test multiple usernames via URL
- [ ] Test cache behavior:
  - [ ] First load (no cache)
  - [ ] Reload (cache hit)
  - [ ] New data (incremental fetch)
  - [ ] Real-time updates
- [ ] Test with large datasets (1000+ records)
- [ ] Test error handling:
  - [ ] Invalid username
  - [ ] Network errors
  - [ ] Firestore permission errors
- [ ] Verify Firestore read counts (should be < 50 per reload)
- [ ] Test localStorage limits and overflow handling
- [ ] Test real-time listener:
  - [ ] Open page, trigger handout from overlay
  - [ ] Verify instant update
  - [ ] Verify cache update
- [ ] Performance testing:
  - [ ] Measure initial load time
  - [ ] Measure reload time
  - [ ] Measure real-time update latency

### Phase 9: Export & Comparison Features (2 hours)

- [ ] Create `composables/useExport.js`
  - [ ] Implement `exportToCSV()` function
  - [ ] Implement `exportChartToPNG()` using Chart.js toBase64Image
  - [ ] Implement `printToPDF()` using window.print()
- [ ] Add export toolbar to `[username].vue`
  - [ ] Add CSV export button
  - [ ] Add chart export buttons (with refs)
  - [ ] Add print button
  - [ ] Style with Tailwind
  - [ ] Add print-specific CSS (@media print)
- [ ] Create `src/pages/stats/compare.vue`
  - [ ] Build user selector inputs
  - [ ] Implement parallel data fetching
  - [ ] Create comparison cards (Total, Count, Avg)
  - [ ] Add winner/loser/tie highlighting
  - [ ] Add percentage difference calculations
  - [ ] Display side-by-side pie charts
  - [ ] Style comparison grid with Tailwind
- [ ] Add "Compare" link from user stats page
- [ ] Test export functionality (CSV, PNG, PDF)
- [ ] Test comparison with 2+ users

**Total Estimated Time**: 13-14 hours

---

## 9. Key Architectural Improvements

### 9.1 Auto-Imports

**No need to import**:
- ✅ `ref`, `computed`, `watch`, `onMounted`, `onUnmounted` (Vue)
- ✅ `useRoute`, `useRouter` (Vue Router)
- ✅ All components in `src/components/` (auto-registered)

**Example** (No imports needed):
```vue
<script setup>
// ❌ OLD WAY (NOT needed)
// import { ref, computed, onMounted } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

// ✅ NEW WAY (auto-imported)
const route = useRoute()
const router = useRouter()
const data = ref([])
const total = computed(() => data.value.length)

onMounted(() => {
  console.log('Mounted!')
})
</script>
```

### 9.2 File-Based Routing

**No manual route registration** - Files automatically become routes:
- `src/pages/stats/index.vue` → `/stats`
- `src/pages/stats/[username].vue` → `/stats/:username`

**Access params**:
```javascript
const route = useRoute()
const username = computed(() => route.params.username)
```

### 9.3 Real-Time Benefits

**Traditional approach**:
- Page load → fetch all data
- Reload → fetch all data again
- **Problem**: Redundant fetches, stale cache

**New approach with real-time listener**:
- Page load → fetch from cache + incremental fetch
- While on page → receive real-time updates
- Cache auto-updates → next reload only fetches missed events
- **Benefit**: Near-zero redundant fetches after initial load

---

## 9. Performance Considerations

### 9.1 Firestore Optimization
- ✅ **Index on timestamp** - Fast sorted queries
- ✅ **Incremental fetching** - Only new records
- ✅ **Limit queries** - Safety limit of 1000 records
- ✅ **Client-side caching** - Reduce repeated reads

### 9.2 localStorage Limits
- **Max size**: ~5MB per domain
- **Mitigation**: Store only last 1000 records
- **Overflow handling**: Clear old cache if limit exceeded

```javascript
function updateCache(user, records) {
  // Limit to last 1000 records to avoid localStorage overflow
  const limitedRecords = records.slice(0, 1000);
  
  const cacheData = {
    username: user,
    lastUpdated: new Date().toISOString(),
    newestTimestamp: limitedRecords[0].timestamp,
    records: limitedRecords
  };
  
  const cacheKey = `zoskyCube_userHistory_${user}`;
  
  try {
    localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    console.log(`💾 Cached ${limitedRecords.length} records for ${user}`);
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      console.warn('⚠️ localStorage quota exceeded, clearing old caches');
      // Clear all user history caches
      Object.keys(localStorage)
        .filter(key => key.startsWith('zoskyCube_userHistory_'))
        .forEach(key => localStorage.removeItem(key));
      
      // Retry with current data
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    }
  }
}
```

### 9.3 Rendering Optimization
- Use `v-if` instead of `v-show` for large tables
- Virtualize long lists (if > 100 rows)
- Debounce user input in search/filter
- Lazy load charts (intersection observer)

---

---

## 10. Future Enhancements

### 10.1 Export Functionality ⚡ **IN SCOPE**

**Features**:
- Download CSV of user history
- Export charts as PNG/SVG (via Chart.js built-in export)
- Generate PDF report (browser print)

**Implementation**:

```javascript
// composables/useExport.js
export function useExport() {
  /**
   * Export user history to CSV
   */
  function exportToCSV(username, historyData) {
    const headers = ['Date', 'Time', 'Source', 'Reason', 'Amount', 'Day of Week']
    const rows = historyData.map(record => [
      record.date,
      new Date(record.timestamp.seconds * 1000).toLocaleTimeString(),
      record.source,
      record.reason,
      record.amount,
      ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][record.dayOfWeek]
    ])
    
    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n')
    
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `${username}_handout_history_${Date.now()}.csv`
    link.click()
    URL.revokeObjectURL(url)
  }
  
  /**
   * Export chart to PNG (using Chart.js toBase64Image)
   */
  function exportChartToPNG(chartRef, filename) {
    if (!chartRef?.value?.chart) return
    
    const url = chartRef.value.chart.toBase64Image()
    const link = document.createElement('a')
    link.href = url
    link.download = `${filename}_${Date.now()}.png`
    link.click()
  }
  
  /**
   * Print stats page as PDF
   */
  function printToPDF() {
    window.print() // Uses browser's print dialog with "Save as PDF"
  }
  
  return {
    exportToCSV,
    exportChartToPNG,
    printToPDF
  }
}
```

**Usage in `[username].vue`**:
```vue
<template>
  <div class="stats-content">
    <!-- Export buttons -->
    <div class="export-toolbar">
      <button @click="exportToCSV(username, historyData)" class="btn-export">
        📥 Export CSV
      </button>
      <button @click="exportChartToPNG($refs.weeklyChart, 'weekly_stats')" class="btn-export">
        📊 Export Weekly Chart
      </button>
      <button @click="printToPDF()" class="btn-export">
        📄 Print to PDF
      </button>
    </div>
    
    <!-- Charts with refs -->
    <WeeklyChart ref="weeklyChart" :data="weeklyStats" />
    <MonthlyChart ref="monthlyChart" :data="monthlyStats" />
  </div>
</template>

<script setup>
const { exportToCSV, exportChartToPNG, printToPDF } = useExport()
</script>

<style scoped>
.export-toolbar {
  @apply flex gap-2 mb-4 print:hidden;
}

.btn-export {
  @apply px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700;
  @apply transition-colors duration-200;
}

/* Print styles */
@media print {
  .breadcrumb, .export-toolbar, footer {
    display: none;
  }
}
</style>
```

### 10.2 Comparison Mode ⚡ **IN SCOPE**

**Features**:
- Compare 2 users side-by-side
- Visual diff highlighting
- Percentage differences

**Route**: `/stats/compare?users=user1,user2`

**Implementation**:

**File**: `src/pages/stats/compare.vue`

```vue
<template>
  <div class="compare-page">
    <h1>📊 Compare Users</h1>
    
    <!-- User Selector -->
    <div class="user-selectors">
      <div class="selector">
        <label>User 1:</label>
        <input v-model="user1" @change="loadBothUsers" placeholder="Username" />
      </div>
      <div class="selector">
        <label>User 2:</label>
        <input v-model="user2" @change="loadBothUsers" placeholder="Username" />
      </div>
      <button @click="loadBothUsers" class="btn-compare">Compare</button>
    </div>
    
    <LoadingSpinner v-if="isLoading" />
    
    <!-- Comparison Grid -->
    <div v-else-if="data1 && data2" class="comparison-grid">
      <!-- Total Winnings -->
      <div class="comparison-card">
        <h3>Total Winnings</h3>
        <div class="comparison-values">
          <div class="value-box" :class="getWinnerClass(stats1.total, stats2.total, true)">
            <span class="username">{{ user1 }}</span>
            <span class="amount">{{ stats1.total }} zC</span>
          </div>
          <div class="vs">VS</div>
          <div class="value-box" :class="getWinnerClass(stats2.total, stats1.total, false)">
            <span class="username">{{ user2 }}</span>
            <span class="amount">{{ stats2.total }} zC</span>
          </div>
        </div>
        <div class="difference">
          Difference: {{ Math.abs(stats1.total - stats2.total) }} zC
          ({{ getDifferencePercent(stats1.total, stats2.total) }}%)
        </div>
      </div>
      
      <!-- Win Count -->
      <div class="comparison-card">
        <h3>Total Wins</h3>
        <div class="comparison-values">
          <div class="value-box" :class="getWinnerClass(stats1.count, stats2.count, true)">
            <span class="username">{{ user1 }}</span>
            <span class="amount">{{ stats1.count }}</span>
          </div>
          <div class="vs">VS</div>
          <div class="value-box" :class="getWinnerClass(stats2.count, stats1.count, false)">
            <span class="username">{{ user2 }}</span>
            <span class="amount">{{ stats2.count }}</span>
          </div>
        </div>
      </div>
      
      <!-- Average Per Win -->
      <div class="comparison-card">
        <h3>Avg Per Win</h3>
        <div class="comparison-values">
          <div class="value-box" :class="getWinnerClass(stats1.avg, stats2.avg, true)">
            <span class="username">{{ user1 }}</span>
            <span class="amount">{{ stats1.avg }} zC</span>
          </div>
          <div class="vs">VS</div>
          <div class="value-box" :class="getWinnerClass(stats2.avg, stats1.avg, false)">
            <span class="username">{{ user2 }}</span>
            <span class="amount">{{ stats2.avg }} zC</span>
          </div>
        </div>
      </div>
      
      <!-- Side-by-side charts -->
      <div class="charts-comparison">
        <div class="chart-side">
          <h3>{{ user1 }}'s Sources</h3>
          <SourcePieChart :data="data1" />
        </div>
        <div class="chart-side">
          <h3>{{ user2 }}'s Sources</h3>
          <SourcePieChart :data="data2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const user1 = ref('')
const user2 = ref('')
const data1 = ref([])
const data2 = ref([])
const isLoading = ref(false)

onMounted(() => {
  // Parse query params
  const users = route.query.users?.split(',') || []
  if (users[0]) user1.value = users[0]
  if (users[1]) user2.value = users[1]
  
  if (user1.value && user2.value) {
    loadBothUsers()
  }
})

const stats1 = computed(() => calculateStats(data1.value))
const stats2 = computed(() => calculateStats(data2.value))

function calculateStats(data) {
  const total = data.reduce((sum, r) => sum + r.amount, 0)
  const count = data.length
  const avg = count > 0 ? Math.round(total / count) : 0
  return { total, count, avg }
}

function getWinnerClass(val1, val2, isUser1) {
  if (val1 > val2) return 'winner'
  if (val1 < val2) return 'loser'
  return 'tie'
}

function getDifferencePercent(val1, val2) {
  const max = Math.max(val1, val2)
  if (max === 0) return 0
  return Math.round(Math.abs(val1 - val2) / max * 100)
}

async function loadBothUsers() {
  if (!user1.value || !user2.value) return
  
  isLoading.value = true
  try {
    const [data1Result, data2Result] = await Promise.all([
      fetchAllRecords(user1.value),
      fetchAllRecords(user2.value)
    ])
    data1.value = data1Result
    data2.value = data2Result
  } catch (err) {
    console.error('Error loading comparison data:', err)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.compare-page {
  @apply max-w-6xl mx-auto p-4;
}

.user-selectors {
  @apply flex gap-4 mb-8 items-end;
}

.selector {
  @apply flex flex-col gap-1 flex-1;
}

.btn-compare {
  @apply px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700;
}

.comparison-grid {
  @apply grid gap-6;
}

.comparison-card {
  @apply bg-white rounded-xl p-6 shadow-md;
}

.comparison-values {
  @apply flex items-center justify-between gap-4 my-4;
}

.value-box {
  @apply flex flex-col items-center p-4 rounded-lg flex-1;
  @apply transition-all duration-200;
}

.value-box.winner {
  @apply bg-green-100 ring-2 ring-green-500 scale-105;
}

.value-box.loser {
  @apply bg-red-50;
}

.value-box.tie {
  @apply bg-gray-100;
}

.vs {
  @apply text-2xl font-bold text-gray-400;
}

.difference {
  @apply text-center text-sm text-gray-600 mt-2;
}

.charts-comparison {
  @apply grid md:grid-cols-2 gap-6;
}

.chart-side {
  @apply bg-white rounded-xl p-6 shadow-md;
}
</style>
```

### 10.3 Advanced Filters

- Filter by date range
- Filter by source
- Filter by amount range
- Search by reason text

### 10.4 Enhanced Real-Time Features

- Toast notification on new handout (already in plan)
- Live chart updates with animations
- "Someone just won!" ticker on leaderboard

---

## 11. Architecture Summary

### 11.1 Key Design Decisions

**1. File-Based Routing**
```
/stats           → Leaderboard OR redirect to user stats
/stats/username  → User-specific analytics
```

**2. Intelligent Navigation**
- Header link adapts to auth state
- Logged in → direct to personal stats
- Not logged in → leaderboard

**3. Multi-Layer Caching**
- **localStorage**: Persistent cache across sessions
- **Incremental fetch**: Only fetch new records
- **Real-time listener**: Auto-update while viewing
- **Result**: ~98% reduction in Firestore reads

**4. Auto-Imports (No Import Hell)**
- Vue composables (ref, computed, watch, etc.)
- Router composables (useRoute, useRouter)
- All components auto-registered

**5. Real-Time Updates**
- Firestore `onSnapshot` listener
- Automatic cache refresh
- Near-zero lag on new handouts
- Clean up on unmount

### 11.2 Data Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     USER VISITS /stats                      │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
              ┌────────────────┐
              │ Logged in?     │
              └────┬───────┬───┘
                   │       │
          YES ◄────┘       └────► NO
           │                      │
           ▼                      ▼
   ┌──────────────┐       ┌──────────────┐
   │ Redirect to  │       │ Show         │
   │ /stats/user  │       │ Leaderboard  │
   └──────────────┘       └──────────────┘
           │                      │
           │                      │ (click user)
           │                      │
           └──────────┬───────────┘
                      │
                      ▼
          ┌───────────────────────┐
          │ /stats/[username]     │
          │ Load user stats page  │
          └───────────┬───────────┘
                      │
                      ▼
          ┌───────────────────────┐
          │ Check localStorage    │
          │ cache for user        │
          └───────┬───────────────┘
                  │
         ┌────────┴────────┐
         │                 │
    FOUND │                │ NOT FOUND
         │                 │
         ▼                 ▼
  ┌─────────────┐   ┌─────────────┐
  │ Load cached │   │ Fetch all   │
  │ records     │   │ from        │
  │             │   │ Firestore   │
  └──────┬──────┘   └──────┬──────┘
         │                 │
         │                 │
         └────────┬────────┘
                  │
                  ▼
      ┌───────────────────────┐
      │ Fetch only records    │
      │ newer than cache      │
      └───────────┬───────────┘
                  │
                  ▼
      ┌───────────────────────┐
      │ Merge & deduplicate   │
      │ Update cache          │
      └───────────┬───────────┘
                  │
                  ▼
      ┌───────────────────────┐
      │ Setup real-time       │
      │ onSnapshot listener   │
      └───────────┬───────────┘
                  │
                  │ (while on page)
                  │
                  ▼
      ┌───────────────────────┐
      │ New handout added     │
      │ → Update UI instantly │
      │ → Update cache        │
      └───────────────────────┘
```

### 11.3 Performance Characteristics

| Scenario | Firestore Reads | Load Time | Notes |
|----------|-----------------|-----------|-------|
| **First visit** | ~500 | 3-5s | Initial cache population |
| **Reload (no new data)** | 0 | <1s | Full cache hit |
| **Reload (10 new records)** | 10 | 1-2s | Incremental fetch |
| **Real-time update** | 0 | instant | Pushed via listener |
| **Switch user (cached)** | 0 | <1s | Different user's cache |
| **Switch user (new)** | ~500 | 3-5s | New user cache miss |

---

## 12. Security & Privacy

### 11.1 Data Access
- ✅ **Public read** - No authentication required
- ✅ **No PII** - Only Twitch usernames (public identifiers)
- ✅ **No tokens** - No OAuth or sensitive data exposed
- ✅ **Audit trail** - All handouts are transparent

### 11.2 Rate Limiting
Consider adding rate limiting if abuse is detected:
- Max 100 requests per IP per minute
- Implement via Cloud Function or Cloudflare

### 11.3 Cache Security
- localStorage is client-side only (no sensitive data)
- Cache can be cleared by user anytime
- No server-side cache (stateless)

---

## 12. Testing Strategy

### 12.1 Unit Tests
- Test `mergeRecords()` deduplication logic
- Test `updateCache()` localStorage handling
- Test computed properties (gameStats, weeklyStats, etc.)
- Test pattern detection algorithms

### 12.2 Integration Tests
- Test Firestore queries with real data
- Test cache hit/miss scenarios
- Test incremental fetch logic
- Test error handling (network errors, invalid user)

### 12.3 E2E Tests
- Test full user flow (select user → load data → view stats)
- Test cache persistence across page reloads
- Test responsive layout on mobile
- Test with multiple users

---

## 13. Success Metrics

### 13.1 Performance Metrics

- **Page load time**: < 2s on cached data
- **Initial fetch time**: < 5s for 500 records
- **Cache hit rate**: > 90% after first load
- **Firestore reads**: < 50 per page load (avg)
- **Real-time latency**: < 500ms from handout to UI update

### 13.2 User Engagement

- **Page views**: Track via analytics
- **Cache usage**: % of users with cached data
- **Top users viewed**: Most popular stats pages
- **Avg session time**: How long users explore stats
- **Leaderboard engagement**: Click-through rate

### 13.3 Cost Optimization

- **Firestore reads/day**: Monitor in Firebase Console
- **Storage usage**: Track `user_handouts` collection size
- **Bandwidth**: Monitor network transfer size
- **Real-time connections**: Monitor concurrent listeners

---

## 14. Deployment Plan

### 14.1 Phase 1: Firestore Rules

```bash
cd /home/zosky/Documents/zoskyCube/vue-overlay-app
firebase deploy --only firestore:rules
```

### 14.2 Phase 2: Frontend Code

```bash
cd /home/zosky/Documents/zoskyCube/vue-timeline-app

# Commit changes
git add .
git commit -m "feat: Add stats pages with leaderboard and real-time updates"

# Test build
npm run build

# Deploy (GitHub Pages via workflow or Firebase Hosting)
git push origin main
```

### 14.3 Phase 3: Monitoring

- Watch Firebase Console for query patterns
- Monitor localStorage usage in browser DevTools
- Track error rates in browser console
- Monitor real-time listener connections
- Check Firestore billing dashboard

---

## 15. Related Documents

- **FIREBASE_OAUTH_REQUIREMENTS.md** - OAuth backend architecture
- **IMPLEMENTATION_READY.md** - OAuth implementation plan
- **.github/copilot-instructions.md** - Firestore security patterns
- **vue-overlay-app/firestore.rules** - Current security rules
- **vue-overlay-app/functions/src/handouts/trackHandout.js** - Handout recording logic
- **vue-timeline-app/src/pages/auth.vue** - Authentication page
- **vue-timeline-app/src/components/HeaderBar.vue** - Navigation component

---

## 16. Technical Notes

### 16.1 Chart Library Setup & Components

**Installation**:
```bash
npm install chart.js vue-chartjs
```

**Chart Components** - Create reusable chart components:

#### A. Weekly Trend Line Chart

**File**: `src/components/stats/WeeklyChart.vue`

```vue
<template>
  <div class="chart-wrapper">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const props = defineProps({
  data: {
    type: Array,
    required: true
    // [{ week: '2025-11-04', total: 1250, count: 15, avg: 83 }]
  }
})

const chartData = computed(() => ({
  labels: props.data.map(w => w.week),
  datasets: [
    {
      label: 'Total zC',
      data: props.data.map(w => w.total),
      borderColor: 'rgb(59, 130, 246)',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      fill: true,
      tension: 0.4,
      yAxisID: 'y'
    },
    {
      label: 'Win Count',
      data: props.data.map(w => w.count),
      borderColor: 'rgb(16, 185, 129)',
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      fill: true,
      tension: 0.4,
      yAxisID: 'y1'
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index',
    intersect: false
  },
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || ''
          if (label) {
            label += ': '
          }
          if (context.parsed.y !== null) {
            label += context.parsed.y
            if (context.datasetIndex === 0) {
              label += ' zC'
            } else {
              label += ' wins'
            }
          }
          return label
        }
      }
    }
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: {
        display: true,
        text: 'Total zCubes'
      }
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      title: {
        display: true,
        text: 'Win Count'
      },
      grid: {
        drawOnChartArea: false
      }
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  @apply relative h-64 md:h-80;
}
</style>
```

#### B. Source Distribution Pie Chart

**File**: `src/components/stats/SourcePieChart.vue`

```vue
<template>
  <div class="chart-wrapper">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps({
  data: {
    type: Array,
    required: true
    // [{ source: 'vodVote', count: 50, total: 1250 }]
  }
})

const sourceColors = {
  vodVote: 'rgb(59, 130, 246)',      // blue
  squadRush: 'rgb(16, 185, 129)',    // green
  art: 'rgb(251, 146, 60)',           // orange
  manual: 'rgb(168, 85, 247)',        // purple
  storePurchases: 'rgb(236, 72, 153)', // pink
  vouchers: 'rgb(234, 179, 8)'        // yellow
}

const chartData = computed(() => {
  const grouped = {}
  props.data.forEach(item => {
    if (!grouped[item.source]) {
      grouped[item.source] = 0
    }
    grouped[item.source] += item.amount
  })
  
  const sources = Object.keys(grouped)
  
  return {
    labels: sources.map(s => formatSource(s)),
    datasets: [{
      data: sources.map(s => grouped[s]),
      backgroundColor: sources.map(s => sourceColors[s] || 'rgb(156, 163, 175)'),
      borderWidth: 2,
      borderColor: '#fff'
    }]
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom'
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const label = context.label || ''
          const value = context.parsed || 0
          const total = context.dataset.data.reduce((a, b) => a + b, 0)
          const percentage = Math.round((value / total) * 100)
          return `${label}: ${value} zC (${percentage}%)`
        }
      }
    }
  }
}

function formatSource(source) {
  const names = {
    vodVote: 'VOD Vote',
    squadRush: 'Squad Rush',
    art: 'AI Art',
    manual: 'Manual',
    storePurchases: 'Store',
    vouchers: 'Vouchers'
  }
  return names[source] || source
}
</script>

<style scoped>
.chart-wrapper {
  @apply relative h-64;
}
</style>
```

#### C. Hourly Heatmap Chart

**File**: `src/components/stats/HourlyHeatmap.vue`

```vue
<template>
  <div class="chart-wrapper">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const props = defineProps({
  data: {
    type: Object,
    required: true
    // { 0: { vodVote: 50, art: 25 }, 1: { vodVote: 100 }, ... }
  }
})

const chartData = computed(() => {
  const hours = Array.from({ length: 24 }, (_, i) => i)
  const sources = new Set()
  
  // Collect all sources
  Object.values(props.data).forEach(hour => {
    Object.keys(hour).forEach(source => sources.add(source))
  })
  
  const datasets = Array.from(sources).map(source => ({
    label: formatSource(source),
    data: hours.map(h => props.data[h]?.[source] || 0),
    backgroundColor: sourceColors[source] || 'rgb(156, 163, 175)'
  }))
  
  return {
    labels: hours.map(h => `${String(h).padStart(2, '0')}:00`),
    datasets
  }
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top'
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: ${context.parsed.y} zC`
        }
      }
    }
  },
  scales: {
    x: {
      stacked: true,
      title: {
        display: true,
        text: 'Hour of Day'
      }
    },
    y: {
      stacked: true,
      title: {
        display: true,
        text: 'Total zCubes'
      }
    }
  }
}

const sourceColors = {
  vodVote: 'rgb(59, 130, 246)',
  squadRush: 'rgb(16, 185, 129)',
  art: 'rgb(251, 146, 60)',
  manual: 'rgb(168, 85, 247)',
  storePurchases: 'rgb(236, 72, 153)',
  vouchers: 'rgb(234, 179, 8)'
}

function formatSource(source) {
  const names = {
    vodVote: 'VOD Vote',
    squadRush: 'Squad Rush',
    art: 'AI Art',
    manual: 'Manual',
    storePurchases: 'Store',
    vouchers: 'Vouchers'
  }
  return names[source] || source
}
</script>

<style scoped>
.chart-wrapper {
  @apply relative h-80;
}
</style>
```

#### D. Monthly Bar Chart

**File**: `src/components/stats/MonthlyChart.vue`

```vue
<template>
  <div class="chart-wrapper">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const props = defineProps({
  data: {
    type: Array,
    required: true
    // [{ month: '2025-11', total: 5000, count: 50, activeDays: 15 }]
  }
})

const chartData = computed(() => ({
  labels: props.data.map(m => {
    const [year, month] = m.month.split('-')
    const date = new Date(year, parseInt(month) - 1)
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  }),
  datasets: [
    {
      label: 'Total zC',
      data: props.data.map(m => m.total),
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 1
    }
  ]
}))

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          const dataIndex = context.dataIndex
          const monthData = props.data[dataIndex]
          return [
            `Total: ${monthData.total} zC`,
            `Wins: ${monthData.count}`,
            `Active Days: ${monthData.activeDays}`,
            `Avg/Day: ${monthData.avgPerDay} zC`
          ]
        }
      }
    }
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Total zCubes'
      }
    }
  }
}
</script>

<style scoped>
.chart-wrapper {
  @apply relative h-64 md:h-80;
}
</style>
```

**Usage in stats page**:
```vue
<template>
  <div class="stats-content">
    <!-- Weekly Trend -->
    <section class="section">
      <h2>📅 Weekly Trends</h2>
      <WeeklyChart :data="weeklyStats" />
    </section>
    
    <!-- Source Distribution -->
    <section class="section">
      <h2>📊 Source Distribution</h2>
      <SourcePieChart :data="historyData" />
    </section>
    
    <!-- Hourly Activity -->
    <section class="section">
      <h2>🕐 Hourly Activity</h2>
      <HourlyHeatmap :data="pivotData" />
    </section>
    
    <!-- Monthly Totals -->
    <section class="section">
      <h2>📆 Monthly Totals</h2>
      <MonthlyChart :data="monthlyStats" />
    </section>
  </div>
</template>
```

### 16.2 Mobile Optimization

**Pivot Table on Mobile**:
- Enable horizontal scroll with sticky first column
- Add touch gestures for better UX
- Consider collapsible rows for smaller screens

**Alternative**: Switch to vertical list view on < 768px

### 16.3 Data Limits

**Current Plan**: 1000 records max per user
- Covers 99% of users
- Keeps localStorage under 1MB
- Fast render times

**If needed**: Implement pagination for power users with > 1000 records

### 16.4 Real-Time Listener Cost

**Firestore Pricing**:
- Document reads: $0.06 per 100k
- Real-time listener: Free (uses existing connection)
- Only pays for **snapshot data transfer**

**Cost Example (Updated)**:
- 10 concurrent users with listeners
- 1 new handout every 10 minutes (144/day)
- Each listener receives 1 document update
- **Daily cost**: 10 users × 144 updates = 1,440 document reads
- **Monthly cost**: ~43,200 reads = **$0.03/month** (negligible)

**Comparison**:
| Scenario | Documents/Day | Documents/Month | Cost/Month |
|----------|--------------|-----------------|------------|
| **Real-time (10 users)** | 1,440 | 43,200 | $0.03 |
| **Polling every 30s** | 28,800 | 864,000 | $0.52 |
| **Without cache** | 50,000 | 1,500,000 | $0.90 |

**Savings**: Real-time listener with cache = **97% cost reduction** 🎉

---

## 17. Known Limitations & Future Work

### 17.1 Current Limitations

1. **Leaderboard aggregation** - Requires scanning all `user_handouts` docs
   - **Solution**: Pre-compute in Cloud Function on schedule
   
2. **No user search** - Leaderboard shows all users
   - **Solution**: Add search/filter to leaderboard table
   
3. **No date range filter** - Shows all-time stats
   - **Solution**: Add date picker for custom ranges

4. **localStorage 5MB limit** - Could overflow for power users
   - **Solution**: Implemented overflow handling + cleanup

### 17.2 Future Enhancements

**Phase 2** (Post-launch):
- Pre-computed leaderboard (Cloud Function scheduled job)
- CSV export functionality
- Share stats via unique URL
- Embed widget for OBS overlays

**Phase 3** (Advanced):
- Compare multiple users side-by-side
- Predictive insights (ML patterns)
- Achievements/badges system
- Community averages and percentiles

---

## 18. FAQ

**Q: Why public read access without auth?**
A: Handout history contains no private data (only public usernames and game rewards). Transparency builds trust and allows anyone to verify fair distribution.

**Q: Why real-time listener instead of polling?**
A: Real-time listeners are more efficient (push vs pull), have lower latency, and cost the same as polling but with better UX.

**Q: What if localStorage is full?**
A: We clear old caches (other users) and limit records to 1000. Worst case, we fetch from Firestore (still works, just slower).

**Q: Does this work for users not logged in?**
A: Yes! Anyone can view any user's stats via `/stats/username` URL. Leaderboard is also public.

**Q: How do I clear my cache?**
A: Use the "Clear Cache" button in the stats page footer, or clear browser data for the domain.

---

## 19. Next Steps

### Immediate (This Week):

1. ✅ **Review document** - Validate architecture decisions
2. ✅ **Update Firestore rules** - Enable public read access
3. ✅ **Create page structure** - Build index.vue and [username].vue
4. ✅ **Implement caching** - localStorage with incremental fetch
5. ✅ **Add real-time listener** - Auto-update on new handouts
6. ✅ **Update navigation** - Add Stats link to HeaderBar

### Short Term (Next Week):

7. ✅ **Build components** - SummaryCards, PivotTable, Charts
8. ✅ **Implement analytics** - Computed properties for insights
9. ✅ **Style and polish** - Responsive design, animations
10. ✅ **Test thoroughly** - Multiple users, edge cases, performance

### Long Term (Future Sprints):

11. ✅ **Pre-computed leaderboard** - Cloud Function scheduled job
12. ✅ **Export functionality** - CSV/PDF downloads
13. ✅ **Advanced filters** - Date ranges, sources, search
14. ✅ **Comparison mode** - Side-by-side user comparison

---

**Document Status**: ✅ Ready for Implementation  
**Estimated Effort**: 10-11 hours development + 2-3 hours testing  
**Next Action**: Begin Phase 1 (Firestore Setup)  
**Last Updated**: November 12, 2025
