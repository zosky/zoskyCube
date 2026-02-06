<route lang="yaml">
meta:
  title: Reward Store
</route>

<template>
  <div class="mx-auto p-4 max-w-7xl">
    <!-- Header -->
    <div class="mt-6">
      <h1 class="text-3xl font-bold mb-2 text-cyan-400">🏪 Reward Store</h1>
      <p class="text-gray-400">
        Spend your <span class="text-yellow-400 font-semibold"><Points currency="zC" class="w-6"/></span> on Steam games!
        <a 
          href="https://streamelements.com/zoskycube/store" 
          target="_blank" 
          class="text-blue-400 hover:text-blue-300 ml-2"
        >
          Visit StreamElements Store →
        </a>
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="isLoading" class="text-center py-16">
      <div class="animate-spin text-6xl mb-4">🎮</div>
      <p class="text-gray-400">Loading store items...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-900/50 border border-red-500 text-red-300 px-6 py-4 rounded-lg">
      <p class="font-bold">Failed to load store</p>
      <p class="text-sm">{{ error }}</p>
      <button 
        @click="fetchStoreItems" 
        class="mt-3 px-4 py-2 bg-red-700 hover:bg-red-600 rounded text-white text-sm"
      >
        Retry
      </button>
    </div>

    <!-- Store Content -->
    <div v-else>
      <!-- Controls Bar -->
      <div class="mb-6 flex flex-wrap gap-4 items-center justify-between bg-gray-900/50 p-4 rounded-lg">
        <!-- Left: Search, View Toggle & Stats -->
        <div class="flex items-center gap-4">
          <!-- Search Box -->
          <div class="relative">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search games..."
              class="w-48 px-3 py-2 pl-9 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
            />
            <span class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
            <button
              v-if="searchQuery"
              @click="searchQuery = ''"
              class="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
            >
              ✕
            </button>
          </div>
          
          <!-- View Toggle -->
          <div class="flex rounded-lg overflow-hidden border border-blue-800">
            <button 
              @click="viewMode = 'grid'"
              :class="viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'"
              class="px-4 py-2 text-sm font-medium transition-colors"
            >
              ▦ Grid
            </button>
            <button 
              @click="viewMode = 'table'"
              :class="viewMode === 'table' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'"
              class="px-4 py-2 text-sm font-medium transition-colors"
            >
              ≡ Table
            </button>
          </div>

          <!-- Stats -->
          <div class="text-sm text-gray-400">
            <span class="text-cyan-400 font-bold">{{ filteredItems.length }}</span> items
            <span class="mx-2">•</span>
            <span class="text-yellow-400 font-bold">{{ totalKeys }}</span> keys available
          </div>
          
          <!-- Favorites/Hidden Filters -->
          <div class="flex items-center gap-2">
            <button
              @click="showFavorites = !showFavorites"
              :class="showFavorites ? 'bg-yellow-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'"
              class="px-3 py-1.5 text-sm rounded transition-colors flex items-center gap-1"
              :title="showFavorites ? 'Favorites highlighted' : 'Favorites not highlighted'"
            >
              <Star v-if="showFavorites" class="w-4 h-4" />
              <StarOutline v-else class="w-4 h-4" />
              <span>{{ favoritesCount }}</span>
            </button>
            <button
              @click="showHidden = !showHidden"
              :class="showHidden ? 'bg-gray-600 text-white' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'"
              class="px-3 py-1.5 text-sm rounded transition-colors flex items-center gap-1"
              :title="showHidden ? 'Showing hidden items' : 'Hidden items are hidden'"
            >
              <EyeOutline v-if="showHidden" class="w-4 h-4" />
              <EyeOffOutline v-else class="w-4 h-4" />
              <span>{{ hiddenCount }}</span>
            </button>
          </div>
        </div>

        <!-- Right: Sort Controls (Grid mode only) -->
        <div v-if="viewMode === 'grid'" class="flex items-center gap-4">
          <!-- Can Afford Filter -->
          <label 
            v-if="userPoints !== null"
            class="flex items-center gap-2 cursor-pointer text-sm"
            :class="canAffordOnly ? 'text-green-400' : 'text-gray-400'"
          >
            <input 
              type="checkbox" 
              v-model="canAffordOnly"
              class="w-4 h-4 rounded bg-gray-700 border-gray-600 text-green-500 focus:ring-green-500 cursor-pointer"
            />
            <span>Can Afford</span>
          </label>
          
          <!-- Sort Buttons -->
          <div class="flex items-center gap-2">
            <span class="text-gray-500 text-sm">Sort:</span>
            <button 
              v-for="sortOption in sortOptions" 
              :key="sortOption.key"
              @click="toggleSort(sortOption.key)"
              :class="sortKey === sortOption.key 
                ? 'bg-cyan-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'"
              class="px-3 py-1.5 text-sm rounded transition-colors flex items-center gap-1"
            >
              {{ sortOption.label }}
              <span v-if="sortKey === sortOption.key" class="text-xs">
                {{ sortDirection === 'asc' ? '↑' : '↓' }}
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Favorites Section (Grid mode only) -->
      <div 
        v-if="viewMode === 'grid' && showFavorites && favoriteItems.length > 0" 
        class="mb-6"
      >
        <h3 class="text-yellow-400 font-bold mb-3 flex items-center gap-2">
          <Star class="w-5 h-5" />
          Favorites ({{ favoriteItems.length }})
        </h3>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2">
          <div 
            v-for="item in favoriteItems" 
            :key="'fav-' + item._id"
            @click="openDetails(item)"
            class="relative rounded-lg overflow-hidden border border-yellow-500/40 hover:border-yellow-400 transition-all hover:scale-105 shadow-lg hover:shadow-yellow-500/20 cursor-pointer group"
          >
            <!-- Thumbnail with overlay -->
            <div class="relative aspect-[16/9] bg-gray-800">
              <img 
                :src="item.thumbnail || getDefaultThumbnail(item)"
                :alt="item.name"
                class="w-full h-full object-cover"
                loading="lazy"
                @error="handleImageError($event, item)"
              />
              <!-- Unfavorite button (top right) -->
              <button
                @click.stop="toggleFavorite(item.bot?.identifier)"
                class="absolute top-1 right-1 text-yellow-400 hover:text-yellow-300 bg-black/60 rounded p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Remove from favorites"
              >
                <Star class="w-3.5 h-3.5" />
              </button>
              <!-- Bottom overlay bar -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-1.5 py-1">
                <h4 class="text-white text-[10px] font-medium line-clamp-1 leading-tight" :title="item.name">
                  {{ item.name }}
                </h4>
                <div class="flex justify-between items-center mt-0.5">
                  <span class="text-[9px]" :class="item.quantity.current > 0 ? 'text-green-400' : 'text-red-400'">
                    🔑{{ item.quantity.current }}
                  </span>
                  <span class="text-[9px] text-yellow-400">
                    <Points currency="zC" :n="item.cost" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Hidden Items Section (Grid mode only, when showHidden is on) -->
      <div 
        v-if="viewMode === 'grid' && showHidden && hiddenItemsList.length > 0" 
        class="mb-6"
      >
        <h3 class="text-gray-400 font-bold mb-3 flex items-center gap-2">
          <EyeOffOutline class="w-5 h-5" />
          Hidden ({{ hiddenItemsList.length }})
        </h3>
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9 gap-2">
          <div 
            v-for="item in hiddenItemsList" 
            :key="'hidden-' + item._id"
            @click="openDetails(item)"
            class="relative rounded-lg overflow-hidden border border-gray-700/40 hover:border-gray-500 transition-all hover:scale-105 shadow-lg cursor-pointer opacity-50 hover:opacity-100 group"
          >
            <!-- Thumbnail with overlay -->
            <div class="relative aspect-[16/9] bg-gray-800">
              <img 
                :src="item.thumbnail || getDefaultThumbnail(item)"
                :alt="item.name"
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                loading="lazy"
                @error="handleImageError($event, item)"
              />
              <!-- Unhide button (top right) -->
              <button
                @click.stop="toggleHidden(item.bot?.identifier)"
                class="absolute top-1 right-1 text-gray-400 hover:text-white bg-black/60 rounded p-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                title="Unhide item"
              >
                <EyeOutline class="w-3.5 h-3.5" />
              </button>
              <!-- Bottom overlay bar -->
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent px-1.5 py-1">
                <h4 class="text-gray-300 text-[10px] font-medium line-clamp-1 leading-tight" :title="item.name">
                  {{ item.name }}
                </h4>
                <div class="flex justify-between items-center mt-0.5">
                  <span class="text-[9px]" :class="item.quantity.current > 0 ? 'text-green-400' : 'text-red-400'">
                    🔑{{ item.quantity.current }}
                  </span>
                  <span class="text-[9px] text-gray-400">
                    <Points currency="zC" :n="item.cost" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Grid View -->
      <div 
        v-if="viewMode === 'grid'" 
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
      >
        <div 
          v-for="item in sortedItems" 
          :key="item._id"
          @click="openDetails(item)"
          class="bg-gray-900 rounded-lg overflow-hidden border transition-all hover:scale-105 shadow-lg cursor-pointer"
          :class="{
            'border-yellow-500/50 ring-1 ring-yellow-500/30 hover:shadow-yellow-500/20': isFavorite(item.bot?.identifier),
            'border-gray-800 hover:border-cyan-500 hover:shadow-cyan-500/20': !isFavorite(item.bot?.identifier),
            'opacity-50': isHidden(item.bot?.identifier)
          }"
        >
          <!-- Thumbnail -->
          <div class="bg-gray-800 relative overflow-hidden">
            <img 
              :src="item.thumbnail || getDefaultThumbnail(item)"
              :alt="item.name"
              class="w-full h-fit object-fit aspect-[16/9]"
              loading="lazy"
              @error="handleImageError($event, item)"
            />
            <!-- Featured Badge -->
            <div 
              v-if="item.featured"
              class="absolute top-2 left-2 px-2 py-1 bg-yellow-500 text-black rounded text-xs font-bold"
            >
              ⭐ Featured
            </div>
          </div>

          <!-- Info Bar (Bottom) -->
          <div class="p-3 bg-gray-950 border-t border-gray-800">
            <h3 class="font-bold text-white text-sm line-clamp-1 mb-2" :title="item.name">
              {{ item.name }}
            </h3>
            <div class="flex justify-between items-center text-sm">
              <!-- Keys -->
              <span class="flex items-center gap-1" :class="item.quantity.current > 0 ? 'text-green-400' : 'text-red-400'">
                🔑 {{ item.quantity.current }}
              </span>
              <!-- Price -->
              <span class="flex items-center gap-1">
                💰 <Points currency="zC" :n="item.cost" />
              </span>
              <!-- Action Buttons -->
              <div class="flex items-center gap-1">
                <!-- Favorite -->
                <button
                  @click.stop="toggleFavorite(item.bot?.identifier)"
                  :class="isFavorite(item.bot?.identifier) ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-400'"
                  class="transition-colors"
                  :title="isFavorite(item.bot?.identifier) ? 'Remove from favorites' : 'Add to favorites'"
                >
                  <Star v-if="isFavorite(item.bot?.identifier)" class="w-5 h-5" />
                  <StarOutline v-else class="w-5 h-5" />
                </button>
                <!-- Hide -->
                <button
                  @click.stop="toggleHidden(item.bot?.identifier)"
                  :class="isHidden(item.bot?.identifier) ? 'text-red-400' : 'text-gray-500 hover:text-red-400'"
                  class="transition-colors"
                  :title="isHidden(item.bot?.identifier) ? 'Unhide item' : 'Hide item'"
                >
                  <EyeOffOutline class="w-5 h-5" />
                </button>
                <!-- Steam Link -->
                <a 
                  :href="getSteamLink(item)"
                  target="_blank"
                  @click.stop
                  class="text-blue-400 hover:text-blue-300"
                  title="View on Steam"
                >
                  <Steam class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Table View -->
      <div v-else class="overflow-x-auto rounded-lg border border-gray-800">
        <table class="w-full text-sm">
          <thead class="bg-gray-900 text-gray-400">
            <tr>
              <th 
                @click="toggleSort('name')" 
                class="px-4 py-3 text-left cursor-pointer hover:text-cyan-400 transition-colors"
              >
                Name {{ getSortIndicator('name') }}
              </th>
              <th 
                @click="toggleSort('quantity')" 
                class="px-4 py-3 text-center cursor-pointer hover:text-cyan-400 transition-colors"
              >
                🔑 Stock {{ getSortIndicator('quantity') }}
              </th>
              <th 
                @click="toggleSort('cost')" 
                class="px-4 py-3 text-right cursor-pointer hover:text-cyan-400 transition-colors"
              >
                💰 Price {{ getSortIndicator('cost') }}
              </th>
              <th 
                @click="toggleSort('createdAt')" 
                class="px-4 py-3 text-center cursor-pointer hover:text-cyan-400 transition-colors"
              >
                Added {{ getSortIndicator('createdAt') }}
              </th>
              <th class="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-800">
            <tr 
              v-for="item in sortedItems" 
              :key="item._id"
              @click="openDetails(item)"
              class="bg-gray-950 hover:bg-gray-900 transition-colors cursor-pointer"
              :class="{ 
                'opacity-50': item.quantity.current === 0,
                'ring-1 ring-yellow-500/30 bg-yellow-950/20': isFavorite(item.bot?.identifier),
                'opacity-40': isHidden(item.bot?.identifier)
              }"
            >
              <td class="px-4 py-3">
                <div class="flex items-center gap-3">
                  <img 
                    :src="item.thumbnail || getDefaultThumbnail(item)"
                    :alt="item.name"
                    class="w-12 h-8 object-cover rounded"
                    loading="lazy"
                    @error="handleImageError($event, item)"
                  />
                  <div>
                    <span class="text-white font-medium">{{ item.name }}</span>
                    <span v-if="item.featured" class="ml-2 text-yellow-500 text-xs">⭐</span>
                  </div>
                </div>
              </td>
              <td class="px-4 py-3 text-center">
                <span 
                  :class="item.quantity.current > 0 ? 'text-green-400' : 'text-red-400'"
                  class="font-medium"
                >
                  {{ item.quantity.current }}
                </span>
                <span class="text-gray-600">/{{ item.quantity.total }}</span>
              </td>
              <td class="px-4 py-3 text-right">
                <Points currency="zC" :n="item.cost" />
              </td>
              <td class="px-4 py-3 text-center text-gray-500">
                {{ formatDate(item.createdAt) }}
              </td>
              <td class="px-4 py-3 text-center">
                <div class="flex items-center justify-center gap-2">
                  <!-- Favorite -->
                  <button
                    @click.stop="toggleFavorite(item.bot?.identifier)"
                    :class="isFavorite(item.bot?.identifier) ? 'text-yellow-400' : 'text-gray-500 hover:text-yellow-400'"
                    class="transition-colors"
                    :title="isFavorite(item.bot?.identifier) ? 'Remove from favorites' : 'Add to favorites'"
                  >
                    <Star v-if="isFavorite(item.bot?.identifier)" class="w-5 h-5 inline" />
                    <StarOutline v-else class="w-5 h-5 inline" />
                  </button>
                  <!-- Hide -->
                  <button
                    @click.stop="toggleHidden(item.bot?.identifier)"
                    :class="isHidden(item.bot?.identifier) ? 'text-red-400' : 'text-gray-500 hover:text-red-400'"
                    class="transition-colors"
                    :title="isHidden(item.bot?.identifier) ? 'Unhide item' : 'Hide item'"
                  >
                    <EyeOffOutline class="w-5 h-5 inline" />
                  </button>
                  <!-- Steam -->
                  <a 
                    :href="getSteamLink(item)"
                    target="_blank"
                    @click.stop
                    class="text-blue-400 hover:text-blue-300"
                    title="View on Steam"
                  >
                    <Steam class="w-5 h-5 inline" />
                  </a>
                  <!-- Buy -->
                  <a 
                    href="https://streamelements.com/zoskycube/store"
                    target="_blank"
                    @click.stop
                    class="text-cyan-400 hover:text-cyan-300"
                    title="Buy on StreamElements"
                  >
                    🛒
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Empty State -->
      <div v-if="sortedItems.length === 0" class="text-center py-16 text-gray-500">
        <p class="text-4xl mb-4">🏪</p>
        <p>No items available in the store right now.</p>
      </div>
    </div>

    <!-- Detail Modal -->
    <Teleport to="body">
      <div 
        v-if="selectedItem" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        @click.self="closeDetails"
      >
        <div class="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
          <!-- Modal Header -->
          <div class="flex justify-between items-start p-4 border-b border-gray-800">
            <div>
              <h2 class="text-2xl font-bold text-white">{{ selectedItem.name }}</h2>
              <p class="text-gray-400 text-sm mt-1">{{ selectedItem.description || 'No description available' }}</p>
            </div>
            <button 
              @click="closeDetails" 
              class="text-gray-400 hover:text-white text-2xl leading-none"
            >
              ✕
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-4 overflow-y-auto max-h-[60vh]">
            <!-- Loading Steam Data -->
            <div v-if="steamDataLoading" class="text-center py-8">
              <div class="animate-spin text-4xl mb-2">🎮</div>
              <p class="text-gray-400">Loading Steam data...</p>
            </div>

            <!-- Steam Data Loaded -->
            <div v-else-if="steamData">
              <!-- Video/Screenshots Gallery -->
              <div class="mb-6">
                <!-- Main Display (Video or Screenshot) -->
                <div class="aspect-video bg-black rounded-lg overflow-hidden mb-3">
                  <!-- Video Player (HLS or MP4) -->
                  <video 
                    v-if="currentMedia?.type === 'video'"
                    ref="videoPlayer"
                    :key="currentMedia.src"
                    class="w-full h-full"
                    controls
                    muted
                    playsinline
                    @error="handleVideoError"
                  ></video>
                  <!-- Screenshot -->
                  <img 
                    v-else
                    :src="currentMedia?.src || steamData.header_image"
                    :alt="selectedItem.name"
                    class="w-full h-full aspect-[16/9]"
                  />
                </div>

                <!-- Media Thumbnails -->
                <div class="flex gap-2 overflow-x-auto pb-2">
                  <!-- Video Thumbnails -->
                  <div 
                    v-for="(movie, idx) in steamData.movies" 
                    :key="'movie-' + movie.id"
                    @click="selectMedia({ type: 'video', src: getMovieUrl(movie), thumbnail: movie.thumbnail })"
                    class="flex-shrink-0 w-24 h-14 rounded overflow-hidden cursor-pointer border-2 transition-colors relative"
                    :class="currentMedia?.src === getMovieUrl(movie) ? 'border-cyan-400' : 'border-gray-700 hover:border-gray-500'"
                  >
                    <img :src="movie.thumbnail" class="w-full h-full object-cover" />
                    <div class="absolute inset-0 flex items-center justify-center bg-black/40">
                      <span class="text-white text-xl">▶</span>
                    </div>
                  </div>
                  <!-- Screenshot Thumbnails -->
                  <div 
                    v-for="(screenshot, idx) in steamData.screenshots" 
                    :key="'ss-' + screenshot.id"
                    @click="selectMedia({ type: 'image', src: screenshot.path_full })"
                    class="flex-shrink-0 w-24 h-14 rounded overflow-hidden cursor-pointer border-2 transition-colors"
                    :class="currentMedia?.src === screenshot.path_full ? 'border-cyan-400' : 'border-gray-700 hover:border-gray-500'"
                  >
                    <img :src="screenshot.path_thumbnail" class="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              <!-- Game Info Grid -->
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <!-- Steam Price -->
                <div class="bg-gray-800 rounded-lg p-3">
                  <div class="text-gray-400 text-xs mb-1">Steam Price</div>
                  <div class="text-white font-bold">
                    <template v-if="steamData.is_free">Free</template>
                    <template v-else-if="steamData.price_overview">
                      {{ steamData.price_overview.final_formatted }}
                      <span 
                        v-if="steamData.price_overview.discount_percent > 0" 
                        class="text-green-400 text-xs ml-1"
                      >
                        -{{ steamData.price_overview.discount_percent }}%
                      </span>
                    </template>
                    <template v-else>N/A</template>
                  </div>
                </div>
                <!-- Release Date -->
                <div class="bg-gray-800 rounded-lg p-3">
                  <div class="text-gray-400 text-xs mb-1">Release Date</div>
                  <div class="text-white font-bold">{{ steamData.release_date?.date || 'N/A' }}</div>
                </div>
                <!-- Genres -->
                <div class="bg-gray-800 rounded-lg p-3">
                  <div class="text-gray-400 text-xs mb-1">Genres</div>
                  <div class="text-white text-sm line-clamp-1">{{ steamData.genres?.slice(0, 3).join(', ') || 'N/A' }}</div>
                </div>
                <!-- Developer -->
                <div class="bg-gray-800 rounded-lg p-3">
                  <div class="text-gray-400 text-xs mb-1">Developer</div>
                  <div class="text-white text-sm line-clamp-1">{{ steamData.developers?.[0] || 'N/A' }}</div>
                </div>
              </div>

              <!-- Short Description -->
              <div v-if="steamData.short_description" class="bg-gray-800 rounded-lg p-4 mb-4">
                <p class="text-gray-300 text-sm" v-html="steamData.short_description"></p>
              </div>
            </div>

            <!-- Steam Data Failed -->
            <div v-else-if="steamDataError" class="text-center py-8 text-gray-500">
              <p class="text-4xl mb-2">😕</p>
              <p>Could not load Steam data</p>
              <p class="text-sm">{{ steamDataError }}</p>
            </div>
          </div>

          <!-- Modal Footer (Summary Bar) -->
          <div class="p-4 bg-gray-950 border-t border-gray-800 flex flex-wrap items-center justify-between gap-4">
            <!-- Left: Key & Price -->
            <div class="flex items-center gap-6">
              <span class="flex items-center gap-2" :class="selectedItem.quantity.current > 0 ? 'text-green-400' : 'text-red-400'">
                <span class="text-lg">🔑</span>
                <span class="font-bold">{{ selectedItem.quantity.current }}</span>
                <span class="text-gray-500 text-sm">/ {{ selectedItem.quantity.total }}</span>
              </span>
              <span class="flex items-center gap-2">
                <span class="text-lg">💰</span>
                <Points currency="zC" :n="selectedItem.cost" class="text-xl" />
              </span>
            </div>

            <!-- Right: Action Buttons -->
            <div class="flex items-center gap-3">
              <a 
                :href="getSteamLink(selectedItem)"
                target="_blank"
                class="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-blue-400 transition-colors"
              >
                <Steam class="w-5 h-5" />
                <span>Steam</span>
              </a>
              <a 
                href="https://streamelements.com/zoskycube/store"
                target="_blank"
                class="flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-bold transition-colors"
              >
                🛒 Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { Steam, StarOutline, Star, EyeOffOutline, EyeOutline } from 'mdue'
import Points from '@/components/Points.vue'
import { useAuth } from '@/composables/useAuth'

// Auth
const { user, userProfile, loading: authLoading } = useAuth()

// StreamElements Channel ID (public)
const SE_CHANNEL_ID = '668816ac484cab966df79977'
const SE_API_URL = `https://api.streamelements.com/kappa/v2/store/${SE_CHANNEL_ID}/items`
const SE_POINTS_URL = `https://api.streamelements.com/kappa/v2/points/${SE_CHANNEL_ID}`

// User points state
const userPoints = ref(null)
const userPointsLoading = ref(false)

// State
const storeItems = ref([])
const isLoading = ref(true)
const error = ref(null)
const viewMode = ref('grid')
const sortKey = ref('cost')
const sortDirection = ref('desc')
const canAffordOnly = ref(false)
const searchQuery = ref('')

// Favorites and hidden items (stored by item _id)
const favorites = ref(new Set(JSON.parse(localStorage.getItem('store_favorites') || '[]')))
const hiddenItems = ref(new Set(JSON.parse(localStorage.getItem('store_hidden') || '[]')))
const showFavorites = ref(true)  // Show favorites by default
const showHidden = ref(false)    // Hide hidden items by default

// Toggle favorite status (using bot.identifier as stable key)
const toggleFavorite = (identifier) => {
  if (!identifier) return
  if (favorites.value.has(identifier)) {
    favorites.value.delete(identifier)
  } else {
    favorites.value.add(identifier)
  }
  favorites.value = new Set(favorites.value) // Trigger reactivity
  localStorage.setItem('store_favorites', JSON.stringify([...favorites.value]))
}

// Toggle hidden status (using bot.identifier as stable key)
const toggleHidden = (identifier) => {
  if (!identifier) return
  if (hiddenItems.value.has(identifier)) {
    hiddenItems.value.delete(identifier)
  } else {
    hiddenItems.value.add(identifier)
  }
  hiddenItems.value = new Set(hiddenItems.value) // Trigger reactivity
  localStorage.setItem('store_hidden', JSON.stringify([...hiddenItems.value]))
}

// Check if item is favorite or hidden (by bot.identifier)
const isFavorite = (identifier) => identifier && favorites.value.has(identifier)
const isHidden = (identifier) => identifier && hiddenItems.value.has(identifier)

// Detail modal state
const selectedItem = ref(null)
const steamData = ref(null)
const steamDataLoading = ref(false)
const steamDataError = ref(null)
const currentMedia = ref(null)
const videoPlayer = ref(null)

// Steam data cache
const steamCache = new Map()

// Sort options for grid mode buttons
const sortOptions = [
  { key: 'cost', label: 'Price' },
  { key: 'name', label: 'Name' },
  { key: 'createdAt', label: 'Date' },
  { key: 'quantity', label: 'Stock' }
]

// Filtered items (only enabled items, optionally filtered by affordability, favorites, hidden, search)
const filteredItems = computed(() => {
  let items = storeItems.value.filter(item => item.enabled)
  
  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    items = items.filter(item => 
      (item.name || '').toLowerCase().includes(query) ||
      (item.description || '').toLowerCase().includes(query)
    )
  }
  
  // Filter by affordability if checked and user has points
  if (canAffordOnly.value && userPoints.value !== null) {
    items = items.filter(item => (item.cost || 0) <= userPoints.value)
  }
  
  // Filter hidden items (unless showHidden is on)
  if (!showHidden.value) {
    items = items.filter(item => !hiddenItems.value.has(item.bot?.identifier))
  }
  
  // If showFavorites is off, hide favorites from main list
  // (This would only make sense in a "non-favorites" view, but we keep it simple)
  
  return items
})

// Count of favorites and hidden for display
const favoritesCount = computed(() => {
  return storeItems.value.filter(item => item.enabled && favorites.value.has(item.bot?.identifier)).length
})
const hiddenCount = computed(() => {
  return storeItems.value.filter(item => item.enabled && hiddenItems.value.has(item.bot?.identifier)).length
})

// Helper function to sort items by current sortKey and sortDirection
function sortItemsByCurrentKey(items) {
  return [...items].sort((a, b) => {
    let aVal, bVal
    
    switch (sortKey.value) {
      case 'name':
        aVal = a.name?.toLowerCase() || ''
        bVal = b.name?.toLowerCase() || ''
        break
      case 'cost':
        aVal = a.cost || 0
        bVal = b.cost || 0
        break
      case 'createdAt':
        aVal = new Date(a.createdAt).getTime()
        bVal = new Date(b.createdAt).getTime()
        break
      case 'quantity':
        aVal = a.quantity?.current || 0
        bVal = b.quantity?.current || 0
        break
      default:
        return 0
    }
    
    if (sortKey.value === 'name') {
      const result = aVal.localeCompare(bVal)
      return sortDirection.value === 'asc' ? result : -result
    }
    
    const result = aVal - bVal
    return sortDirection.value === 'asc' ? result : -result
  })
}

// Favorite items for separate display (sorted by current sort key)
const favoriteItems = computed(() => {
  let items = storeItems.value
    .filter(item => item.enabled && favorites.value.has(item.bot?.identifier))
  
  // Apply search filter to favorites too
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    items = items.filter(item => 
      (item.name || '').toLowerCase().includes(query) ||
      (item.description || '').toLowerCase().includes(query)
    )
  }
  
  return sortItemsByCurrentKey(items)
})

// Hidden items for separate display (sorted by current sort key)
const hiddenItemsList = computed(() => {
  let items = storeItems.value
    .filter(item => item.enabled && hiddenItems.value.has(item.bot?.identifier))
  
  // Apply search filter to hidden items too
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase().trim()
    items = items.filter(item => 
      (item.name || '').toLowerCase().includes(query) ||
      (item.description || '').toLowerCase().includes(query)
    )
  }
  
  return sortItemsByCurrentKey(items)
})

// Total keys available
const totalKeys = computed(() => {
  return filteredItems.value.reduce((sum, item) => sum + (item.quantity?.current || 0), 0)
})

// Sorted items (excludes favorites when showFavorites is on in grid mode, to avoid duplicates)
const sortedItems = computed(() => {
  let items = [...filteredItems.value]
  
  // In grid mode with favorites section visible, exclude favorites from main grid
  if (viewMode.value === 'grid' && showFavorites.value) {
    items = items.filter(item => !favorites.value.has(item.bot?.identifier))
  }
  
  return sortItemsByCurrentKey(items)
})

// Toggle sort
function toggleSort(key) {
  if (sortKey.value === key) {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = key
    sortDirection.value = 'asc'
  }
}

// Get sort indicator for table headers
function getSortIndicator(key) {
  if (sortKey.value !== key) return ''
  return sortDirection.value === 'asc' ? '↑' : '↓'
}

// Format date
function formatDate(dateStr) {
  if (!dateStr) return 'N/A'
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
  })
}

// Get Steam link from bot.identifier
function getSteamLink(item) {
  const identifier = item.bot?.identifier || ''
  const steamId = identifier.replace('steam', '')
  if (steamId && /^\d+$/.test(steamId)) {
    return `https://store.steampowered.com/app/${steamId}`
  }
  return 'https://store.steampowered.com'
}

// Get Steam app ID
function getSteamAppId(item) {
  const identifier = item.bot?.identifier || ''
  const match = identifier.match(/steam(\d+)/)
  return match ? match[1] : null
}

// Get default thumbnail from Steam
function getDefaultThumbnail(item) {
  const appId = getSteamAppId(item)
  if (appId) {
    return `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`
  }
  return 'https://via.placeholder.com/460x215?text=No+Image'
}

// Handle image error
function handleImageError(event, item) {
  const appId = getSteamAppId(item)
  if (appId && !event.target.src.includes('steamstatic')) {
    event.target.src = `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${appId}/header.jpg`
  } else {
    event.target.src = 'https://via.placeholder.com/460x215?text=No+Image'
  }
}

// Open detail modal
async function openDetails(item) {
  selectedItem.value = item
  steamData.value = null
  steamDataError.value = null
  currentMedia.value = null
  
  const appId = getSteamAppId(item)
  if (!appId) {
    steamDataError.value = 'No Steam App ID found'
    return
  }
  
  // Check cache first
  if (steamCache.has(appId)) {
    steamData.value = steamCache.get(appId)
    setDefaultMedia()
    return
  }
  
  steamDataLoading.value = true
  
  try {
    // Use Cloud Function to proxy Steam API (Steam blocks browser CORS)
    const FUNCTIONS_BASE = 'https://us-central1-zoskycube-bossbattle.cloudfunctions.net'
    const url = `${FUNCTIONS_BASE}/getSteamAppDetails?appid=${appId}`
    
    const response = await fetch(url)
    if (!response.ok) throw new Error(`API error: ${response.status}`)
    
    const data = await response.json()
    const appData = data[appId]
    
    if (!appData?.success) {
      throw new Error('Game not found')
    }
    
    const gameData = appData.data
    
    // Extract relevant data
    const extracted = {
      name: gameData.name,
      header_image: gameData.header_image,
      short_description: gameData.short_description,
      is_free: gameData.is_free,
      price_overview: gameData.price_overview,
      release_date: gameData.release_date,
      developers: gameData.developers || [],
      publishers: gameData.publishers || [],
      genres: gameData.genres?.map(g => g.description) || [],
      categories: gameData.categories?.map(c => c.description) || [],
      movies: gameData.movies?.map(m => ({
        id: m.id,
        name: m.name,
        thumbnail: m.thumbnail,
        // New HLS streaming format (2024+)
        hls_h264: m.hls_h264 || null,
        dash_h264: m.dash_h264 || null,
        dash_av1: m.dash_av1 || null,
        // Legacy MP4/WebM (older games)
        mp4: m.mp4,
        webm: m.webm
      })) || [],
      screenshots: gameData.screenshots?.slice(0, 8).map(s => ({
        id: s.id,
        path_thumbnail: s.path_thumbnail,
        path_full: s.path_full
      })) || []
    }
    
    steamCache.set(appId, extracted)
    steamData.value = extracted
    setDefaultMedia()
    
  } catch (err) {
    console.error('Failed to fetch Steam data:', err)
    steamDataError.value = err.message
  } finally {
    steamDataLoading.value = false
  }
}

// Set default media (first video or screenshot)
function setDefaultMedia() {
  if (!steamData.value) return
  
  if (steamData.value.movies?.length > 0) {
    const movie = steamData.value.movies[0]
    currentMedia.value = {
      type: 'video',
      src: getMovieUrl(movie),
      thumbnail: movie.thumbnail
    }
  } else if (steamData.value.screenshots?.length > 0) {
    currentMedia.value = {
      type: 'image',
      src: steamData.value.screenshots[0].path_full
    }
  } else {
    currentMedia.value = {
      type: 'image',
      src: steamData.value.header_image
    }
  }
}

// Get movie URL - prefer HLS (new format), fallback to legacy MP4
function getMovieUrl(movie) {
  // New HLS streaming format (2024+) - requires hls.js
  if (movie.hls_h264) return movie.hls_h264
  // Legacy direct MP4 (older games)
  if (movie.mp4?.max) return movie.mp4.max
  if (movie.mp4?.['480']) return movie.mp4['480']
  if (movie.webm?.max) return movie.webm.max
  if (movie.webm?.['480']) return movie.webm['480']
  return null
}

// Check if URL is HLS stream
function isHlsUrl(url) {
  return url && url.includes('.m3u8')
}

// HLS.js instance
let hlsInstance = null

// Load HLS.js library dynamically
async function loadHlsLibrary() {
  if (window.Hls) return window.Hls
  
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/hls.js@latest/dist/hls.min.js'
    script.onload = () => {
      console.log('✅ HLS.js loaded')
      resolve(window.Hls)
    }
    script.onerror = () => reject(new Error('Failed to load HLS.js'))
    document.head.appendChild(script)
  })
}

// Play HLS stream
async function playHlsStream(videoElement, hlsUrl) {
  try {
    const Hls = await loadHlsLibrary()
    
    if (Hls.isSupported()) {
      // Destroy previous instance
      if (hlsInstance) {
        hlsInstance.destroy()
      }
      
      hlsInstance = new Hls({
        enableWorker: true,
        lowLatencyMode: false
      })
      
      hlsInstance.loadSource(hlsUrl)
      hlsInstance.attachMedia(videoElement)
      
      hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
        videoElement.play().catch(e => console.warn('Autoplay blocked:', e))
      })
      
      hlsInstance.on(Hls.Events.ERROR, (event, data) => {
        console.error('HLS error:', data)
        if (data.fatal) {
          handleVideoError()
        }
      })
    } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS support
      videoElement.src = hlsUrl
      videoElement.play().catch(e => console.warn('Autoplay blocked:', e))
    } else {
      console.error('HLS not supported')
      handleVideoError()
    }
  } catch (err) {
    console.error('Failed to play HLS:', err)
    handleVideoError()
  }
}

// Select media
function selectMedia(media) {
  currentMedia.value = media
}

// Handle video error
function handleVideoError() {
  console.warn('Video failed to load, falling back to screenshot')
  if (steamData.value?.screenshots?.length > 0) {
    currentMedia.value = {
      type: 'image',
      src: steamData.value.screenshots[0].path_full
    }
  }
}

// Close detail modal
function closeDetails() {
  // Cleanup HLS instance
  if (hlsInstance) {
    hlsInstance.destroy()
    hlsInstance = null
  }
  selectedItem.value = null
  steamData.value = null
  currentMedia.value = null
}

// Fetch store items
async function fetchStoreItems() {
  isLoading.value = true
  error.value = null
  
  try {
    console.log('🏪 Fetching StreamElements store items...')
    
    const response = await fetch(SE_API_URL)
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    
    const data = await response.json()
    
    console.log(`📦 Loaded ${data.length} store items`)
    
    storeItems.value = data
    
  } catch (err) {
    console.error('❌ Failed to fetch store items:', err)
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

// Fetch user points from StreamElements
async function fetchUserPoints(username) {
  if (!username) return
  
  userPointsLoading.value = true
  
  try {
    console.log(`💰 Fetching points for ${username}...`)
    
    const response = await fetch(`${SE_POINTS_URL}/${username.toLowerCase()}`)
    
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }
    
    const data = await response.json()
    userPoints.value = data.points || 0
    
    console.log(`💰 ${username} has ${userPoints.value} points`)
    
  } catch (err) {
    console.error('❌ Failed to fetch user points:', err)
    userPoints.value = null
  } finally {
    userPointsLoading.value = false
  }
}

// Load on mount
onMounted(() => {
  fetchStoreItems()
  
  // Fetch user points if logged in
  if (userProfile.value?.twitch?.username) {
    fetchUserPoints(userProfile.value.twitch.username)
  }
  
  // Load preferences from localStorage
  const savedView = localStorage.getItem('store_view_mode')
  if (savedView) viewMode.value = savedView
  
  const savedSort = localStorage.getItem('store_sort_key')
  if (savedSort) sortKey.value = savedSort
  
  const savedDir = localStorage.getItem('store_sort_direction')
  if (savedDir) sortDirection.value = savedDir
  
  // Close modal on Escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape' && selectedItem.value) {
      closeDetails()
    }
  }
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => window.removeEventListener('keydown', handleEscape))
})

// Save preferences
watch([viewMode, sortKey, sortDirection], () => {
  localStorage.setItem('store_view_mode', viewMode.value)
  localStorage.setItem('store_sort_key', sortKey.value)
  localStorage.setItem('store_sort_direction', sortDirection.value)
})

// Watch for userProfile to load and fetch points
watch(() => userProfile.value?.twitch?.username, (username) => {
  console.log('🏪 Store: userProfile watch triggered, username:', username, 'authLoading:', authLoading.value, 'userProfile:', userProfile.value)
  if (username && userPoints.value === null) {
    fetchUserPoints(username)
  }
}, { immediate: true })

// Debug log on mount
onMounted(() => {
  console.log('🏪 Store: Mounted - authLoading:', authLoading.value, 'userProfile:', userProfile.value)
  console.log('🏪 Store: localStorage linkUuid:', localStorage.getItem('linkUuid'))
})

// Watch for video source changes to handle HLS
watch(currentMedia, async (newMedia) => {
  if (newMedia?.type === 'video' && newMedia.src) {
    await nextTick()
    const video = videoPlayer.value
    if (!video) return
    
    if (isHlsUrl(newMedia.src)) {
      // HLS stream - use hls.js
      playHlsStream(video, newMedia.src)
    } else {
      // Direct MP4 - native playback
      video.src = newMedia.src
      video.play().catch(e => console.warn('Autoplay blocked:', e))
    }
  }
}, { immediate: false })

// Cleanup HLS instance on unmount
onUnmounted(() => {
  if (hlsInstance) {
    hlsInstance.destroy()
    hlsInstance = null
  }
})
</script>

<style scoped>
/* Custom scrollbar for media thumbnails */
.overflow-x-auto::-webkit-scrollbar {
  height: 6px;
}
.overflow-x-auto::-webkit-scrollbar-track {
  background: #1f2937;
  border-radius: 3px;
}
.overflow-x-auto::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 3px;
}
.overflow-x-auto::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}
</style>
