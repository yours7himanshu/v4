<script setup lang="ts">
import { mockArtists } from '@/data/mockArtists'
import { mockEvents } from '@/data/mockEvents'
import { getDanceStyles } from '@/data/mockStyles'
import EventCard from '~/components/event/EventCard.vue'
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

// Featured events
const featuredEvents = computed(() => {
  const upcomingEvents = mockEvents
    .filter(event => event.status === 'upcoming')
    .slice(0, 3)
    .map(event => {
      if (event.type === 'workshop') {
        return {
          ...event,
          level: 'all',
          prices: event.prices || [{
            name: 'Standard',
            amount: event.price?.amount || 0,
            currency: event.price?.currency || 'EUR',
            description: 'Workshop entry'
          }]
        }
      }
      return event
    }) as AnyEvent[]
  return upcomingEvents
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

  <!-- How it Works -->
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">How WeDance Works</h2>
        <p class="text-xl text-gray-600">Your journey in the dance community starts here</p>
      </div>

      <div class="relative">
        <!-- Connection Line (Desktop) -->
        <div class="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-100 via-purple-500 to-purple-100"></div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          <!-- Step 1 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110">
                <Icon name="ph:user-plus" class="w-10 h-10 text-white" />
              </div>
              <div class="text-center">
                <div class="text-purple-600 font-medium mb-2">Step 1</div>
                <h3 class="text-xl font-bold mb-3">Create Profile</h3>
                <p class="text-gray-600">Share your dance journey and preferences to connect with like-minded dancers</p>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110">
                <Icon name="ph:compass" class="w-10 h-10 text-white" />
              </div>
              <div class="text-center">
                <div class="text-purple-600 font-medium mb-2">Step 2</div>
                <h3 class="text-xl font-bold mb-3">Discover</h3>
                <p class="text-gray-600">Find local events, dance partners, and artists that match your interests</p>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110">
                <Icon name="ph:handshake" class="w-10 h-10 text-white" />
              </div>
              <div class="text-center">
                <div class="text-purple-600 font-medium mb-2">Step 3</div>
                <h3 class="text-xl font-bold mb-3">Connect</h3>
                <p class="text-gray-600">Join dance communities, attend events, and make new friends</p>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110">
                <Icon name="ph:star" class="w-10 h-10 text-white" />
              </div>
              <div class="text-center">
                <div class="text-purple-600 font-medium mb-2">Step 4</div>
                <h3 class="text-xl font-bold mb-3">Grow</h3>
                <p class="text-gray-600">Improve your skills, share experiences, and become part of the community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- User Groups -->
  <section class="py-16 bg-gray-50">
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

  <!-- Stats -->
  <section class="py-16 bg-white">
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

  <!-- Featured Events -->
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-12">
        <div>
          <h2 class="text-3xl font-bold">Featured Events</h2>
          <p class="text-gray-600 mt-2">Don't miss these upcoming highlights</p>
        </div>
        <Button variant="outline" as-child>
          <NuxtLink to="/events" class="flex items-center gap-2">
            View All Events
            <Icon name="ph:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EventCard
          v-for="event in featuredEvents"
          :key="event.id"
          :event="event"
        />
      </div>
    </div>
  </section>

  <!-- Testimonials -->
  <section class="py-16 bg-white">
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

  <!-- Enhanced CTA -->
  <section class="py-24 bg-gradient-to-br from-purple-600 to-purple-900 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center md:text-left">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">Ready to join the community?</h2>
          <p class="text-xl text-white/80 mb-8 max-w-lg">Start your dance journey today and connect with dancers worldwide</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" variant="secondary" class="text-lg px-8" as-child>
              <NuxtLink to="/register" class="flex items-center justify-center gap-2">
                Get Started
                <Icon name="ph:arrow-right" class="w-5 h-5" />
              </NuxtLink>
            </Button>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="grid grid-cols-2 gap-4 relative">
            <div class="space-y-4">
              <div class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:-translate-y-1 transition-transform">
                <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="ph:users-three" class="w-5 h-5 text-white" />
                </div>
                <div class="font-semibold text-white text-lg mb-1">For Dancers</div>
                <p class="text-white/80">Find events & partners near you</p>
              </div>
              <div class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:-translate-y-1 transition-transform">
                <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="ph:microphone-stage" class="w-5 h-5 text-white" />
                </div>
                <div class="font-semibold text-white text-lg mb-1">For Artists</div>
                <p class="text-white/80">Grow your audience & business</p>
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:-translate-y-1 transition-transform">
                <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="ph:buildings" class="w-5 h-5 text-white" />
                </div>
                <div class="font-semibold text-white text-lg mb-1">For Organizers</div>
                <p class="text-white/80">Create & promote events easily</p>
              </div>
              <div class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:-translate-y-1 transition-transform">
                <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <Icon name="ph:users" class="w-5 h-5 text-white" />
                </div>
                <div class="font-semibold text-white text-lg mb-1">For Communities</div>
                <p class="text-white/80">Connect & grow together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer -->
    <div class="py-12 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Company -->
          <div>
            <h3 class="text-white font-semibold mb-4">Company</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/about" class="hover:text-white transition-colors">About</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/careers" class="hover:text-white transition-colors">Careers</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="hover:text-white transition-colors">Blog</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/press" class="hover:text-white transition-colors">Press</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Community -->
          <div>
            <h3 class="text-white font-semibold mb-4">Community</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/events" class="hover:text-white transition-colors">Events</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/artists" class="hover:text-white transition-colors">Artists</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/cities" class="hover:text-white transition-colors">Cities</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/styles" class="hover:text-white transition-colors">Dance Styles</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="text-white font-semibold mb-4">Support</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/help" class="hover:text-white transition-colors">Help Center</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/safety" class="hover:text-white transition-colors">Safety Center</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/community-guidelines" class="hover:text-white transition-colors">Community Guidelines</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="hover:text-white transition-colors">Contact Us</NuxtLink>
              </li>
            </ul>
          </div>

          <!-- Connect -->
          <div>
            <h3 class="text-white font-semibold mb-4">Connect</h3>
            <div class="flex gap-4">
              <a href="https://twitter.com/wedanceorg" target="_blank" rel="noopener" class="hover:text-white transition-colors">
                <Icon name="ph:twitter-logo" class="w-6 h-6" />
              </a>
              <a href="https://instagram.com/wedanceorg" target="_blank" rel="noopener" class="hover:text-white transition-colors">
                <Icon name="ph:instagram-logo" class="w-6 h-6" />
              </a>
              <a href="https://facebook.com/wedanceorg" target="_blank" rel="noopener" class="hover:text-white transition-colors">
                <Icon name="ph:facebook-logo" class="w-6 h-6" />
              </a>
              <a href="https://youtube.com/wedanceorg" target="_blank" rel="noopener" class="hover:text-white transition-colors">
                <Icon name="ph:youtube-logo" class="w-6 h-6" />
              </a>
            </div>
            <div class="mt-4">
              <Button variant="outline" class="border-white/20 hover:border-white/40 bg-white/5 hover:bg-black/10 hover:text-white" size="sm" as-child>
                <a href="mailto:hello@wedance.vip" class="flex items-center gap-2">
                  <Icon name="ph:envelope" class="w-4 h-4" />
                  hello@wedance.vip
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex items-center gap-4">
            <NuxtLink to="/" class="text-white font-bold text-xl">WeDance</NuxtLink>
            <span class="text-sm">© 2024 WeDance. All rights reserved.</span>
          </div>
          <div class="mt-4 md:mt-0">
            <div class="flex gap-6 text-sm">
              <NuxtLink to="/terms" class="hover:text-white transition-colors">Terms</NuxtLink>
              <NuxtLink to="/privacy" class="hover:text-white transition-colors">Privacy</NuxtLink>
              <NuxtLink to="/cookies" class="hover:text-white transition-colors">Cookies</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

