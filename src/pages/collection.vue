<template>
    <div class="mx-auto p-4">
        <div class="mb-6">
            <!-- <h1 class="text-3xl font-bold mb-2">Steam Game Collection</h1> -->
            <!-- <p class="text-gray-400">Your collected games from various stores</p> -->
        </div>

        <div v-if="isLoading" class="text-center py-8">
            <p>Loading collection...</p>
        </div>
        
        <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {{ error }}
        </div>
        
        <div v-else>
            <!-- Search and filter bar -->
            <div class="mb-6 flex flex-row-reverse gap-4 items-center">
                <input
                    v-model="searchTerm"
                    type="search"
                    placeholder="Search games..."
                    class="border-blue-900 bg-transparent flex-1 p-2 border rounded shadow focus:outline-none focus:ring"
                />
                <select 
                    v-model="storeFilter"
                    class="border-blue-900 bg-transparent p-2.5 border rounded shadow focus:outline-none focus:ring"
                >
                    <option value="">All Stores</option>
                    <option v-for="store in uniqueStores" :key="store" :value="store">
                        {{ store }}
                    </option>
                </select>
            </div>

            <!-- Collection count -->
            <div class="mb-4 text-sm text-gray-400">
                Showing {{ filteredCollection.length }} of {{ publicCollection.length }} games
            </div>

            <!-- Games grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
                <div 
                    v-for="game in filteredCollection" 
                    :key="game.appID"
                    class="bg-gray-800 rounded-lg overflow-hidden duration-200 relative shadow-md shadow-sky-500 hover:scale-110 transition-all"
                >
                    <!-- Steam Image with overlay info -->
                    <div class="aspect-video bg-gray-700 overflow-hidden relative">
                        <img 
                            :src="getSteamImageUrl(game.appID)"
                            :alt="game.name"
                            class="w-full h-full object-fit"
                            loading="lazy"
                            @error="handleImageError"
                        />
                        
                        <!-- Info overlay at bottom of image -->
                        <div class="absolute bottom-0 left-0 right-0 bg-black/75 p-1 leading-none border-t border-sky-400">
                            <!-- Game Name and Discount row -->
                            <div class="flex justify-between items-center -mb-1">
                                <h3 class="font-semibold text-sm line-clamp-1 text-white flex-1 mr-2" :title="game.name">
                                    {{ game.name }}
                                </h3>
                                <span 
                                    v-if="game.discount" 
                                    class="font-medium text-xs" 
                                    :class="{ 'text-red-400': game.discount.includes('-')}" 
                                    title="esotaric & estimated % saved" >
                                    {{ game.discount }}
                                </span>
                            </div>
                            
                            <!-- Date/Store and Price row -->
                            <div class="flex justify-between items-center text-xs -mt-1">
                                <div class="flex items-center gap-1 text-gray-300">
                                    <span>{{ formatDate(game.Timestamp) }}</span>
                                    <!-- <span class="text-gray-400">•</span> -->
                                </div>
                                <div class="text-blue-400">{{ game.store || 'N/A' }}</div>
                                <!-- <div class="flex items-center gap-0">
                                    <span class="text-green-400" :class="{ 'font-bold': game.price < game.hisoricLow }">
                                        ${{ formatPrice(game.price) }}
                                    </span>
                                    <span class="text-gray-400">|</span>
                                    <span class="text-yellow-400" :class="{ 'font-bold': game.price > game.hisoricLow }">
                                        ${{ formatPrice(game.hisoricLow) }}
                                    </span>
                                </div> -->
                            </div>
                            
                            <!-- Note (if exists) - only show on hover or as tooltip
                            <div v-if="game.note" class="text-xs text-gray-300 italic line-clamp-1 opacity-75" :title="game.note">
                                "{{ game.note }}"
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty state -->
            <div v-if="filteredCollection.length === 0" class="text-center py-12 text-gray-400">
                <p class="text-lg">No games found</p>
                <p class="text-sm">Try adjusting your search or filter criteria</p>
            </div>
        </div>
    </div>
</template>

<script setup>
// Inject the global game store
const gameStore = inject('gameStore')
const { isLoading, error, steamLibrary } = gameStore

// Filter out private items and sort by date
const publicCollection = computed(() => {
    const allItems = steamLibrary.value || []
    console.log(`Total items from steamLibrary: ${allItems.length}`)
    
    const privateItems = allItems.filter(game => game.private)
    console.log(`Private items found: ${privateItems.length}`)
    
    // Log the first few private items to see what's wrong
    if (privateItems.length > 0) {
        console.log('First 10 private items:', privateItems.slice(0, 10).map(item => ({
            name: item.name,
            appID: item.appID,
            private: item.private,
            privateType: typeof item.private,
            privateValue: JSON.stringify(item.private)
        })))
    }
    
    const publicItems = allItems.filter(game => !game.private)
    console.log(`Public items after filtering: ${publicItems.length}`)
    
    // Check for items with missing or invalid data
    const itemsWithoutAppID = publicItems.filter(game => !game.appID)
    const itemsWithoutName = publicItems.filter(game => !game.name)
    console.log(`Items without appID: ${itemsWithoutAppID.length}`)
    console.log(`Items without name: ${itemsWithoutName.length}`)
    
    return publicItems.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp)) // Sort by newest first
})

// Get unique stores for filter dropdown
const uniqueStores = computed(() => {
    const stores = new Set()
    publicCollection.value.forEach(game => {
        if (game.store) stores.add(game.store)
    })
    return Array.from(stores).sort()
})

// Search and filter state
const searchTerm = ref("")
const storeFilter = ref("")

// Filtered collection based on search and store filter
const filteredCollection = computed(() => {
    let filtered = publicCollection.value

    // Apply search filter
    if (searchTerm.value) {
        const term = searchTerm.value.toLowerCase()
        filtered = filtered.filter(game => {
            const matchName = game?.name ? game.name?.toLowerCase().includes(term) : null
            const gameStore = game?.store ? game?.store?.toLowerCase().includes(term) : null
            const notes = game?.note ? game?.note?.toLowerCase().includes(term) : null
            return (matchName||gameStore||notes) ? true : false
            // game?.store?.toLowerCase().includes(term) ||
            // game?.note?.toLowerCase().includes(term)
        })
    }

    // Apply store filter
    if (storeFilter.value) {
        filtered = filtered.filter(game => game.store === storeFilter.value)
    }

    return filtered
})

// Utility functions
function getSteamImageUrl(appID) {
    if (!appID) return '/placeholder-game.jpg' // Fallback image
    return `https://steamcdn-a.akamaihd.net/steam/apps/${appID}/header.jpg`
}

function formatDate(timestamp) {
    if (!timestamp) return 'Unknown'
    
    const date = new Date(timestamp)
    if (isNaN(date.getTime())) return 'Invalid Date'
    
    return date.toLocaleDateString('en-US', {
        year: '2-digit',
        month: 'short', 
        day: '2-digit'
    })
}

function formatPrice(price) {
    if (price === null || price === undefined || price === '') return '0.00'
    const numPrice = Number(price) / 100
    return isNaN(numPrice) ? '0.00' : numPrice.toFixed(2)
}

function handleImageError(event) {
    // Fallback to a generic game icon or placeholder
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYwIiBoZWlnaHQ9IjIxNSIgdmlld0JveD0iMCAwIDQ2MCAyMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0NjAiIGhlaWdodD0iMjE1IiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0yMzAgMTA3LjVMMjEwIDg3LjVMMjUwIDg3LjVMMjMwIDEwNy41WiIgZmlsbD0iIzZCNzI4MCIvPgo8L3N2Zz4K'
}
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.aspect-video {
    aspect-ratio: 16 / 9;
}
</style>