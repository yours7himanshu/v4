<script setup lang="ts">
import { mockArtists } from '@/data/mockArtists'
import { mockEvents } from '@/data/mockEvents'
import { getDanceStyles } from '@/data/mockStyles'

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

  <!-- Stats -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">50+</div>
          <div class="text-sm text-gray-600">Cities Worldwide</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
          <div class="text-sm text-gray-600">Active Dancers</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">1,000+</div>
          <div class="text-sm text-gray-600">Dance Events</div>
        </div>
        <div class="text-center">
          <div class="text-3xl font-bold text-purple-600 mb-2">500+</div>
          <div class="text-sm text-gray-600">Dance Artists</div>
        </div>
      </div>
    </div>
  </section>

  <!-- User Groups -->
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold">One Platform for Everyone</h2>
        <p class="text-gray-600 mt-2">Discover how WeDance helps different members of the dance community</p>
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- For Dancers -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="text-center mb-6">
            <div class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-xl">
              <Icon name="ph:users-three" class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold mb-2">For Dancers</h3>
            <p class="text-gray-600 text-sm">Everything you need to grow in your dance journey</p>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5">
                <Icon name="ph:calendar" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Event Discovery</h4>
                <p class="text-sm text-gray-600">Find relevant dance events easily, filter by style and location, and see who's going</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5">
                <Icon name="ph:users" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Partner Finding</h4>
                <p class="text-sm text-gray-600">Find dance partners for practice, match based on level and goals</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5">
                <Icon name="ph:star" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Learning Journey</h4>
                <p class="text-sm text-gray-600">Track your progress, get recommendations, and connect with experienced dancers</p>
              </div>
            </div>
          </div>
        </div>

        <!-- For Artists -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="text-center mb-6">
            <div class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-xl">
              <Icon name="ph:microphone-stage" class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold mb-2">For Artists</h3>
            <p class="text-gray-600 text-sm">Tools to grow your teaching business and reach more students</p>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5">
                <Icon name="ph:book" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Class Management</h4>
                <p class="text-sm text-gray-600">Manage your schedule, handle bookings, and track student progress</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5">
                <Icon name="ph:video-camera" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Content Sharing</h4>
                <p class="text-sm text-gray-600">Share your knowledge through tutorials, performances, and class content</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5">
                <Icon name="ph:users" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Student Community</h4>
                <p class="text-sm text-gray-600">Build your student base, maintain relationships, and foster connections</p>
              </div>
            </div>
          </div>
        </div>

        <!-- For Organizers -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="text-center mb-6">
            <div class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-xl">
              <Icon name="ph:buildings" class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold mb-2">For Organizers</h3>
            <p class="text-gray-600 text-sm">Everything you need to create successful dance events</p>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5">
                <Icon name="ph:calendar-plus" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Event Creation</h4>
                <p class="text-sm text-gray-600">Create and publish events easily, manage tickets and check-ins</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5">
                <Icon name="ph:chart-line-up" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Analytics & Growth</h4>
                <p class="text-sm text-gray-600">Track attendance, analyze trends, and grow your community</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5">
                <Icon name="ph:megaphone" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Community Building</h4>
                <p class="text-sm text-gray-600">Foster connections, maintain quality, and drive engagement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold">Loved by the Community</h2>
        <p class="text-gray-600 mt-2">Here's what our members say about WeDance</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-sm">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Icon name="ph:user" class="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div class="font-medium">Sarah Martinez</div>
              <div class="text-sm text-gray-600">Salsa Dancer</div>
            </div>
          </div>
          <p class="text-gray-600 text-sm">"WeDance made it so easy to find dance partners and events in my city. I've met amazing people and improved my dancing significantly!"</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Icon name="ph:user" class="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div class="font-medium">Michael Chen</div>
              <div class="text-sm text-gray-600">Dance Teacher</div>
            </div>
          </div>
          <p class="text-gray-600 text-sm">"As a dance teacher, WeDance has helped me grow my student base and manage my classes more efficiently. The platform is a game-changer!"</p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-sm">
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
              <Icon name="ph:user" class="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div class="font-medium">Emma Thompson</div>
              <div class="text-sm text-gray-600">Event Organizer</div>
            </div>
          </div>
          <p class="text-gray-600 text-sm">"Organizing dance events has never been easier. WeDance helps us reach the right audience and manage everything in one place."</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-16 bg-gradient-to-br from-purple-600 to-purple-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold text-white mb-6">Ready to join the community?</h2>
      <Button size="lg" variant="secondary" as-child>
        <NuxtLink to="/register" class="flex items-center gap-2">
          Get Started
          <Icon name="ph:arrow-right" class="w-5 h-5" />
        </NuxtLink>
      </Button>
    </div>
  </section>
</template>

