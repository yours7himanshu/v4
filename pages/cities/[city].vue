<script setup lang="ts">
import EmptyState from "~/components/common/EmptyState.vue";
import Feed from "~/components/Feed.vue";
import GradientBackground from "~/components/common/GradientBackground.vue";
import Create from "~/components/Create.vue";

const route = useRoute();
const city = computed(() => route.params.city as string);

// TODO: Replace with real data
const cityData = computed(() => ({
  name: "Munich",
  country: "Germany",
  description:
    "Munich has a vibrant dance scene with regular social dancing, workshops, and festivals.",
  stats: {
    events: 120,
    venues: 15,
    artists: 45,
    members: 2500,
  },
}));

// TODO: Replace with real data
const venues = [
  {
    id: 1,
    name: "TanzStudio",
    address: "Hauptstraße 1, Munich",
    image: "https://picsum.photos/400/300",
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: "Dance Factory",
    address: "Karlsplatz 5, Munich",
    image: "https://picsum.photos/400/300",
    rating: 4.6,
    reviewCount: 89,
  },
];

// TODO: Replace with real data
const organizers = [
  {
    id: 1,
    name: "Sarah Schmidt",
    role: "Event Organizer",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=1",
    events: 45,
  },
  {
    id: 2,
    name: "Michael Weber",
    role: "Studio Owner",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=2",
    events: 120,
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="pt-16 relative min-h-[60vh] flex items-center overflow-hidden">
      <GradientBackground />

      <!-- Content -->
      <div class="relative w-full">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">
              Dance Scene in {{ cityData.name }}
            </h1>
            <p class="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              {{ cityData.description }}
            </p>

            <!-- Stats -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div class="text-3xl font-bold text-white">
                  {{ cityData.stats.events }}+
                </div>
                <div class="text-sm text-white/80">Monthly Events</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-white">
                  {{ cityData.stats.venues }}
                </div>
                <div class="text-sm text-white/80">Dance Venues</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-white">
                  {{ cityData.stats.artists }}
                </div>
                <div class="text-sm text-white/80">Local Artists</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-white">
                  {{ cityData.stats.members }}+
                </div>
                <div class="text-sm text-white/80">Community Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Left Column -->
        <div class="space-y-12 max-w-xl mx-auto">
          <!-- Local Feed -->
          <div>
            <h2 class="text-2xl font-bold mb-6">Latest Updates</h2>
            <Create class="mb-4" />
            <Feed :type="'all'" :city="city" :limit="5" />
          </div>

          <!-- Venues -->
          <div>
            <div class="flex justify-between items-center mb-6">
              <h2 class="text-2xl font-bold">Popular Venues</h2>
              <Button variant="link">View All</Button>
            </div>
            <div class="grid sm:grid-cols-2 gap-6">
              <div
                v-for="venue in venues"
                :key="venue.id"
                class="bg-white rounded-lg border overflow-hidden group"
              >
                <div class="aspect-video relative overflow-hidden">
                  <img
                    :src="venue.image"
                    :alt="venue.name"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div class="p-4">
                  <h3 class="font-bold text-lg mb-1">{{ venue.name }}</h3>
                  <p class="text-gray-600 text-sm mb-2">{{ venue.address }}</p>
                  <div class="flex items-center gap-2 text-sm">
                    <div class="flex items-center gap-1 text-amber-500">
                      <Icon name="ph:star-fill" class="w-4 h-4" />
                      {{ venue.rating }}
                    </div>
                    <span class="text-gray-400">·</span>
                    <span class="text-gray-600"
                      >{{ venue.reviewCount }} reviews</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column -->
        <div class="space-y-8">
          <!-- Community Organizers -->
          <div>
            <h2 class="text-2xl font-bold mb-6">Community Organizers</h2>
            <div class="space-y-4">
              <div
                v-for="organizer in organizers"
                :key="organizer.id"
                class="flex items-center gap-4 p-4 bg-white rounded-lg border"
              >
                <img
                  :src="organizer.image"
                  :alt="organizer.name"
                  class="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 class="font-bold">{{ organizer.name }}</h3>
                  <p class="text-sm text-gray-600">{{ organizer.role }}</p>
                  <p class="text-xs text-gray-500">
                    {{ organizer.events }} events organized
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
