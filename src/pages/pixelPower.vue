<route lang="yaml">
meta:
  title: Pixel Power Gallery
</route>

<template>
    <div class="mx-auto p-4">
        <!-- <div class="mb-6">
            <h1 class="text-3xl font-bold mb-2 text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            </h1>
        </div> -->

        <div v-if="isLoading" class="text-center py-8">
            <img src="@/assets/ttv/pixelPower.png" alt="Pixel Power Logo" class="inline h-10 mb-1 mr-2" />
            <p>Loading images...</p>
        </div>
        
        <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <img src="@/assets/ttv/pixelPower.png" alt="Pixel Power Logo" class="inline h-10 mb-1 mr-2" />
            {{ error }}
        </div>
        
        <div v-else >
            <!-- Search bar -->
            <div class="mb-6 flex flex-row mt-8">
                <img src="@/assets/ttv/pixelPower.png" alt="Pixel Power Logo" class="inline h-20 -mt-4 -mb-5 mr-2" />
                <input
                    v-model="searchTerm"
                    type="search"
                    placeholder="Search by prompt or words..."
                    class="border-blue-900 bg-transparent w-full p-3 border rounded shadow focus:outline-none focus:ring focus:ring-purple-500"
                />
            </div>

            <!-- Images count and cache info -->
            <div class="mb-4 text-sm text-gray-400 text-center flex justify-between items-center">
                <div>
                    Showing {{ filteredImages.length }} of {{ images.length }} images
                    <span v-if="cacheTimestamp" class="ml-4 text-xs">
                        (Cached: {{ cacheTimestamp }})
                    </span>
                </div>
                <!-- <button
                    @click="clearCacheAndReload"
                    class="px-3 py-1 text-xs bg-red-900/30 hover:bg-red-900/50 text-red-300 rounded transition-colors"
                    title="Clear cache and reload all images"
                >
                    🗑️ Clear Cache
                </button> -->
            </div>

            <!-- Masonry Grid -->
            <div class="masonry-grid">
                <div 
                    v-for="(image, imgIdx) in filteredImages" 
                    :key="image.id"
                    class="masonry-item group relative"
                >
                    <!-- Image Card -->
                    <div 
                        class="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
                        @click="togglePanel(image.id)"
                    >
                        <div class="relative overflow-hidden bg-gray-900">
                            <img 
                                :src="image.downloadURL"
                                :alt="image.prompt"
                                class="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                                @error="handleImageError"
                            />
                        </div>
                    </div>

                    <!-- Side Panel -->
                    <div 
                        v-if="openPanel === image.id"
                        class="pp-side-panel absolute top-0 bottom-0 z-50 w-72 overflow-y-auto bg-gray-900/95 backdrop-blur-md rounded-lg ring-1 ring-purple-500/50 p-4"
                        :class="getPanelSide(imgIdx)"
                    >
                        <!-- Close -->
                        <button @click.stop="openPanel = null" class="absolute top-2 right-2 text-gray-400 hover:text-white text-xs">✕</button>

                        <!-- Date -->
                        <div class="text-xs text-gray-400 mb-2 flex items-center gap-2">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {{ formatDate(image.createdAt) }}
                        </div>

                        <!-- Generated Sentence -->
                        <div v-if="image.generatedSentence" class="p-2 bg-blue-900/30 rounded text-sm text-blue-200 border-l-2 border-blue-400 mb-2">
                            {{ image.generatedSentence }}
                        </div>

                        <!-- Words -->
                        <div v-if="image.words && image.words.length > 0">
                            <div class="flex flex-wrap gap-1">
                                <span 
                                    v-for="(word, idx) in image.words" 
                                    :key="idx"
                                    class="px-2 py-0.5 bg-green-900/50 text-green-300 text-xs rounded"
                                >
                                    {{ word }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Empty state -->
            <div v-if="filteredImages.length === 0" class="text-center py-12 text-gray-400">
                <p class="text-lg">No images found</p>
                <p class="text-sm">Try adjusting your search criteria</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { collection, query, orderBy, getDocs, where, limit, Timestamp } from 'firebase/firestore'
import { db } from '../firebase'

// State
const images = ref([])
const isLoading = ref(true)
const error = ref(null)
const searchTerm = ref('')
const openPanel = ref(null)
const CACHE_KEY = 'zoskyCube_generatedImages'

function togglePanel(id) {
    openPanel.value = openPanel.value === id ? null : id
}

// Columns: masonry uses CSS columns, items flow top→bottom per column
// We detect column count from viewport and derive column index
function getColCount() {
    const w = window.innerWidth
    if (w >= 1536) return 4
    if (w >= 1024) return 3
    if (w >= 640) return 2
    return 1
}

function getPanelSide(imgIdx) {
    const cols = getColCount()
    if (cols <= 1) return 'pp-panel-below'
    // CSS columns fill top→bottom; estimate column by dividing total items evenly
    const total = filteredImages.value.length
    const perCol = Math.ceil(total / cols)
    const col = Math.floor(imgIdx / perCol)
    const mid = Math.ceil(cols / 2)
    return col < mid ? 'pp-panel-right' : 'pp-panel-left'
}

// Computed: Cache timestamp
const cacheTimestamp = computed(() => {
    const cached = localStorage.getItem(CACHE_KEY)
    if (cached) {
        const cacheData = JSON.parse(cached)
        return new Date(cacheData.lastUpdated).toLocaleString()
    }
    return null
})

// Fetch images from Firebase with smart caching
async function fetchImages() {
    try {
        isLoading.value = true
        error.value = null
        
        // Step 1: Check localStorage cache
        const cached = localStorage.getItem(CACHE_KEY)
        
        if (cached) {
            const cacheData = JSON.parse(cached)
            images.value = cacheData.records
            console.log(`📦 Loaded ${cacheData.records.length} cached images`)
            
            // Step 2: Fetch only NEW records (after newest cached timestamp)
            const newestTimestamp = cacheData.newestTimestamp
            const newerImages = await fetchImagesAfter(newestTimestamp)
            
            if (newerImages.length > 0) {
                console.log(`🆕 Found ${newerImages.length} new images`)
                
                // Step 3: Merge and deduplicate
                const merged = mergeImages(cacheData.records, newerImages)
                images.value = merged
                
                // Step 4: Update cache
                updateCache(merged)
            } else {
                console.log(`✅ Cache is up to date`)
            }
        } else {
            // No cache - fetch all records
            console.log(`🔄 No cache found, fetching all images`)
            const allImages = await fetchAllImages()
            images.value = allImages
            
            // Save to cache
            if (allImages.length > 0) {
                updateCache(allImages)
            }
        }
    } catch (err) {
        console.error('❌ Error fetching images:', err)
        error.value = `Failed to load images: ${err.message}`
    } finally {
        isLoading.value = false
    }
}

// Fetch all images
async function fetchAllImages() {
    const imagesRef = collection(db, 'generatedImages')
    const q = query(imagesRef, orderBy('createdAt', 'desc'), limit(500))
    
    const querySnapshot = await getDocs(q)
    const fetchedImages = []
    
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        fetchedImages.push(mapImageData(doc.id, data))
    })
    
    return sortImages(fetchedImages)
}

// Fetch only images newer than given timestamp
async function fetchImagesAfter(afterTimestamp) {
    const imagesRef = collection(db, 'generatedImages')
    
    // Convert ISO string back to Firestore Timestamp for query
    let dateObj
    if (afterTimestamp instanceof Timestamp) {
        dateObj = afterTimestamp.toDate()
    } else {
        dateObj = new Date(afterTimestamp)
        if (isNaN(dateObj.getTime())) {
            // If invalid, set to 1 week ago
            dateObj = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        }
    }
    const timestampObj = Timestamp.fromDate(dateObj)
    
    const q = query(
        imagesRef,
        where('createdAt', '>', timestampObj),
        orderBy('createdAt', 'desc'),
        limit(100)
    )
    
    const querySnapshot = await getDocs(q)
    const fetchedImages = []
    
    querySnapshot.forEach((doc) => {
        const data = doc.data()
        fetchedImages.push(mapImageData(doc.id, data))
    })
    
    console.log(`📥 Fetched ${fetchedImages.length} images newer than ${afterTimestamp}`)
    return sortImages(fetchedImages)
}

// Map Firestore document to image object
function mapImageData(id, data) {
    return {
        id: id,
        downloadURL: data.downloadURL,
        filename: data.filename,
        createdAt: data.createdAt,
        prompt: data.parameters?.prompt || data.prompt || '',
        negative_prompt: data.parameters?.negative_prompt || '',
        guidance_scale: data.parameters?.guidance_scale,
        num_inference_steps: data.parameters?.num_inference_steps,
        generatedSentence: data.generatedSentence || '',
        words: data.words || []
    }
}

// Merge cached and new images, remove duplicates
function mergeImages(cached, newer) {
    const merged = [...newer, ...cached]
    
    // Deduplicate by ID
    const unique = merged.reduce((acc, image) => {
        if (!acc.find(r => r.id === image.id)) {
            acc.push(image)
        }
        return acc
    }, [])
    
    return sortImages(unique)
}

// Sort images by timestamp DESC
function sortImages(imageList) {
    return imageList.sort((a, b) => {
        const dateA = a.createdAt?.seconds || a.createdAt?.getTime?.() || 0
        const dateB = b.createdAt?.seconds || b.createdAt?.getTime?.() || 0
        return dateB - dateA
    })
}

// Update localStorage cache
function updateCache(imageList) {
    if (imageList.length === 0) return
    
    // Limit to last 500 images to avoid localStorage overflow
    const limitedImages = imageList.slice(0, 500)
    
    // Convert Firestore Timestamp to ISO string for cache storage
    const newestTimestamp = limitedImages[0].createdAt
    let timestampString
    
    if (newestTimestamp?.toDate) {
        timestampString = newestTimestamp.toDate().toISOString()
    } else if (newestTimestamp?.seconds) {
        timestampString = new Date(newestTimestamp.seconds * 1000).toISOString()
    } else {
        timestampString = new Date(newestTimestamp).toISOString()
    }
    
    const cacheData = {
        lastUpdated: new Date().toISOString(),
        newestTimestamp: timestampString,  // Store as ISO string for JSON compatibility
        records: limitedImages
    }
    
    try {
        localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
        console.log(`💾 Cached ${limitedImages.length} images (newest: ${timestampString})`)
    } catch (e) {
        if (e.name === 'QuotaExceededError') {
            console.warn('⚠️ localStorage quota exceeded, clearing old cache')
            localStorage.removeItem(CACHE_KEY)
            
            // Retry with current data
            try {
                localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData))
            } catch (retryErr) {
                console.error('Failed to cache even after cleanup:', retryErr)
            }
        }
    }
}

// Clear cache and reload
function clearCacheAndReload() {
    localStorage.removeItem(CACHE_KEY)
    console.log('🗑️ Cache cleared')
    images.value = []
    fetchImages()
}

// Extract keywords from prompt (first few significant words)
function getKeywords(prompt) {
    if (!prompt) return []
    
    // Split by comma or common delimiters and take significant words
    const words = prompt
        .split(/[,\n]+/)
        .map(w => w.trim())
        .filter(w => w.length > 0)
        .slice(0, 8) // Take first 8 segments
    
    return words
}

// Format timestamp for display
function formatDate(timestamp) {
    if (!timestamp) return 'Unknown'
    
    // Handle Firestore Timestamp object
    let date
    if (timestamp.toDate) {
        date = timestamp.toDate()
    } else if (timestamp.seconds) {
        date = new Date(timestamp.seconds * 1000)
    } else {
        date = new Date(timestamp)
    }
    
    if (isNaN(date.getTime())) return 'Invalid Date'
    
    return date.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })
}

// Filter images based on search
const filteredImages = computed(() => {
    if (!searchTerm.value) return images.value
    
    const term = searchTerm.value.toLowerCase()
    return images.value.filter(image => {
        return (
            image.prompt?.toLowerCase().includes(term) ||
            image.filename?.toLowerCase().includes(term)
        )
    })
})

// Handle image load errors
function handleImageError(event) {
    event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMzc0MTUxIi8+Cjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZCNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4K'
}

// Load images on mount
const onClickOutside = (e) => {
    if (openPanel.value && !e.target.closest('.masonry-item')) {
        openPanel.value = null
    }
}

onMounted(() => {
    fetchImages()
    document.addEventListener('click', onClickOutside)
})

onUnmounted(() => {
    document.removeEventListener('click', onClickOutside)
})
</script>

<style scoped>
/* Masonry Grid Layout */
.masonry-grid {
    column-count: 1;
    column-gap: 1rem;
}

@media (min-width: 640px) {
    .masonry-grid {
        column-count: 2;
    }
}

@media (min-width: 1024px) {
    .masonry-grid {
        column-count: 3;
    }
}

@media (min-width: 1536px) {
    .masonry-grid {
        column-count: 4;
    }
}

.masonry-item {
    break-inside: avoid;
    margin-bottom: 1rem;
    display: inline-block;
    width: 100%;
}

.pp-panel-right {
    left: calc(100% + 0.5rem);
}
.pp-panel-left {
    right: calc(100% + 0.5rem);
}
.pp-panel-below {
    left: 0;
    right: 0;
    top: auto;
    bottom: auto;
    width: auto;
    position: relative;
    margin-top: 0.5rem;
}

/* Panel drop shadow for depth */
.pp-side-panel {
    box-shadow:
        0 0 30px rgba(168, 85, 247, 0.3),
        0 10px 40px rgba(0, 0, 0, 0.8),
        0 0 80px rgba(168, 85, 247, 0.1);
}

/* Themed scrollbar */
.pp-side-panel::-webkit-scrollbar {
    width: 6px;
}
.pp-side-panel::-webkit-scrollbar-track {
    background: rgba(30, 30, 50, 0.5);
    border-radius: 3px;
}
.pp-side-panel::-webkit-scrollbar-thumb {
    background: rgba(168, 85, 247, 0.5);
    border-radius: 3px;
}
.pp-side-panel::-webkit-scrollbar-thumb:hover {
    background: rgba(168, 85, 247, 0.8);
}
.pp-side-panel {
    scrollbar-width: thin;
    scrollbar-color: rgba(168, 85, 247, 0.5) rgba(30, 30, 50, 0.5);
}

/* Text truncation utilities */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-6 {
    display: -webkit-box;
    -webkit-line-clamp: 6;
    line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
