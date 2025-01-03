<script setup lang="ts">
import { mockArtists } from '@/data/mockArtists'
import { mockEvents } from '@/data/mockEvents'
import { getDanceStyles } from '@/data/mockStyles'
import type { AnyEvent } from '~/schemas/event'

// Search state
const searchQuery = ref('')

// Dance styles with filter
const danceStyles = computed(() => {
  const styles = getDanceStyles()
  if (!searchQuery.value) return styles
  
  const query = searchQuery.value.toLowerCase()
  return styles.filter(style => 
    style.name.toLowerCase().includes(query)
  )
})

// Featured artists (top rated masters)
const featuredArtists = computed(() => 
  mockArtists
    .filter(artist => artist.level === 'master')
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
)

// Upcoming events
const upcomingEvents = computed(() => 
  mockEvents
    .filter(event => event.status === 'upcoming')
    .slice(0, 3)
)

// Event handlers
const handleShare = (event: AnyEvent) => {
  // TODO: Implement share functionality
  console.log('Share event:', event.id)
}

const handleBookmark = (event: AnyEvent) => {
  // TODO: Implement bookmark functionality
  console.log('Bookmark event:', event.id)
}

const handleBook = (event: AnyEvent) => {
  // TODO: Implement booking functionality
  console.log('Book event:', event.id)
}
</script>

<template>
  <!-- Hero Section -->
  <div class="pt-16 relative min-h-[60vh] flex items-center bg-gradient-to-br from-purple-600 to-purple-900">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div class="relative w-full py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Let's dance?
          </h1>
          <p class="text-lg md:text-xl text-white/80 mt-4 mb-12 max-w-2xl mx-auto">
            Join a global community of dancers, learn from the best, and discover events worldwide
          </p>

          <!-- Dance Style Selection -->
          <div class="flex flex-col items-center gap-8">
            <div class="w-full max-w-lg">
              <div class="relative group">
                <Input
                  v-model="searchQuery"
                  placeholder="Search dance styles..."
                  class="h-14 pl-12 pr-4 bg-white text-gray-900 placeholder:text-gray-500 text-lg font-medium rounded-2xl shadow-xl ring-1 ring-purple-300/50 hover:ring-purple-400 focus:ring-2 focus:ring-purple-500 border-transparent transition-all duration-200"
                />
                <Icon 
                  name="ph:magnifying-glass" 
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" 
                />
              </div>
              <div class="mt-3 text-center">
                <p class="text-white/70">
                  New to dancing?
                  <NuxtLink to="/quiz" class="text-white hover:text-purple-200 font-medium ml-1">
                    Take our style quiz
                    <Icon name="ph:arrow-right" class="inline-block w-4 h-4 ml-0.5" />
                  </NuxtLink>
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <StyleCard
                v-for="style in danceStyles" 
                :key="style.name"
                :style="style"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Featured Artists -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold">Featured Artists</h2>
          <p class="text-gray-600 mt-1">Learn from the best in Cuban dance</p>
        </div>
        <Button variant="outline" as-child>
          <NuxtLink to="/artists" class="flex items-center gap-2">
            View All Artists
            <Icon name="ph:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ArtistCard
          v-for="artist in featuredArtists"
          :key="artist.id"
          :artist="artist"
        />
      </div>
    </div>
  </section>

  <!-- Upcoming Events -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold">Upcoming Events</h2>
          <p class="text-gray-600 mt-1">Don't miss these amazing events</p>
        </div>
        <Button variant="outline" as-child>
          <NuxtLink to="/events" class="flex items-center gap-2">
            View All Events
            <Icon name="ph:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <EventCard
          v-for="event in upcomingEvents"
          :key="event.id"
          :event="event"
          @share="handleShare"
          @bookmark="handleBookmark"
          @book="handleBook"
        />
      </div>
    </div>
  </section>

  <!-- Latest Posts -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold">Latest Posts</h2>
          <p class="text-gray-600 mt-1">Stay updated with the community</p>
        </div>
        <Button variant="outline" as-child>
          <NuxtLink to="/feed" class="flex items-center gap-2">
            View All Posts
            <Icon name="ph:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </Button>
      </div>

      <Feed :limit="3" class="w-full max-w-none" />
    </div>
  </section>
</template>

