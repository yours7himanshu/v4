<script setup lang="ts">
import { mockEvents } from "@/data/mockEvents";
import type { AnyEvent } from "~/schemas/event";
import GradientBackground from "~/components/common/GradientBackground.vue";
import { formatDate } from "~/utils/format";

const route = useRoute();
const event = computed(
  () =>
    mockEvents.find((e) => String(e.id) === String(route.params.id)) as
      | AnyEvent
      | undefined
);

// Computed properties for UI
const formattedDate = computed(() => {
  if (!event.value) return "";
  const start = formatDate(event.value.date.start);
  const end = formatDate(event.value.date.end);
  return start === end ? start : `${start} - ${end}`;
});

const getPrice = (event: AnyEvent) => {
  if (event.type === "workshop" && event.prices?.length > 0) {
    const lowestPrice = event.prices.reduce(
      (min, p) => (p.amount < min.amount ? p : min),
      event.prices[0]
    );
    return `From ${lowestPrice.amount} ${lowestPrice.currency}`;
  }
  return event.price ? `${event.price.amount} ${event.price.currency}` : "Free";
};

// Actions
const handleShare = () => {
  if (!event.value) return;
  console.log("Share event:", event.value.name);
};

const handleBookmark = () => {
  if (!event.value) return;
  console.log("Bookmark event:", event.value.name);
};

const handleBook = () => {
  if (!event.value) return;
  console.log("Book event:", event.value.name);
};
</script>

<template>
  <div v-if="event">
    <!-- Hero Section -->
    <div class="pt-16 relative min-h-[50vh]">
      <div
        class="relative flex items-center overflow-hidden min-h-[50vh] py-12"
      >
        <GradientBackground />

        <!-- Content -->
        <div class="relative w-full">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <!-- Left: Content -->
              <div class="text-center md:text-left">
                <div class="flex items-center gap-2 text-white/80 mb-4">
                  <Icon name="ph:calendar" class="w-5 h-5" />
                  <span>{{ formattedDate }}</span>
                </div>
                <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
                  {{ event.name }}
                </h1>
                <div class="flex items-center gap-4 text-white/80 mb-6">
                  <div class="flex items-center gap-2">
                    <Icon name="ph:map-pin" class="w-5 h-5" />
                    <span
                      >{{ event.location.name }},
                      {{ event.location.city }}</span
                    >
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:ticket" class="w-5 h-5" />
                    <span>{{ getPrice(event) }}</span>
                  </div>
                </div>
                <div
                  class="flex flex-wrap gap-4 justify-center md:justify-start"
                >
                  <Button
                    size="lg"
                    variant="default"
                    class="bg-white text-purple-600 hover:bg-white/90"
                    >Book Now</Button
                  >
                  <Button size="lg" variant="ghost" class="text-white/80">
                    <Icon name="ph:share" class="w-5 h-5 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              <!-- Right: Image -->
              <div
                class="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  :src="event.image || '/images/event-placeholder.jpg'"
                  :alt="event.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Left Column: Details -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Description -->
          <div class="prose max-w-none">
            <h2 class="text-2xl font-bold mb-4">About This Event</h2>
            <p class="whitespace-pre-wrap">{{ event.description }}</p>
          </div>

          <!-- Schedule -->
          <div v-if="event.schedule.length > 0">
            <h2 class="text-2xl font-bold mb-4">Schedule</h2>
            <div class="space-y-4">
              <div
                v-for="(item, index) in event.schedule"
                :key="index"
                class="bg-white rounded-lg border p-4"
              >
                <div class="flex items-start gap-4">
                  <div
                    class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
                  >
                    <Icon name="ph:clock" class="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <div class="font-medium">{{ item.time }}</div>
                    <div class="text-gray-600">{{ item.activity }}</div>
                    <p
                      v-if="item.description"
                      class="text-sm text-gray-500 mt-1"
                    >
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Artists -->
          <div v-if="event.artists.length > 0">
            <h2 class="text-2xl font-bold mb-4">Featured Artists</h2>
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                v-for="artist in event.artists"
                :key="artist"
                class="bg-white rounded-lg border p-4 flex items-center gap-4"
              >
                <div
                  class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="ph:user" class="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div class="font-medium">{{ artist }}</div>
                  <div class="text-sm text-gray-600">Artist</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Column: Sidebar -->
        <div class="space-y-6">
          <!-- Organizer -->
          <div class="bg-white rounded-xl border p-6">
            <h3 class="text-lg font-bold mb-4">Organizer</h3>
            <div class="flex items-center gap-4">
              <div
                class="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center"
              >
                <img
                  v-if="event.organizer.image"
                  :src="event.organizer.image"
                  :alt="event.organizer.name"
                  class="w-full h-full object-cover rounded-full"
                />
                <Icon v-else name="ph:user" class="w-8 h-8 text-purple-600" />
              </div>
              <div>
                <div class="font-medium">{{ event.organizer.name }}</div>
                <div class="text-sm text-gray-600">Event Organizer</div>
                <div
                  v-if="event.organizer.points"
                  class="text-sm text-purple-600 mt-1"
                >
                  {{ event.organizer.points }} points
                </div>
              </div>
            </div>
          </div>

          <!-- Location -->
          <div class="bg-white rounded-xl border p-6">
            <h3 class="text-lg font-bold mb-4">Location</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <Icon
                  name="ph:map-pin"
                  class="w-5 h-5 text-purple-600 flex-shrink-0 mt-1"
                />
                <div>
                  <div class="font-medium">{{ event.location.name }}</div>
                  <div class="text-gray-600">
                    {{ event.location.address }}
                    <div>
                      {{ event.location.city }}, {{ event.location.country }}
                    </div>
                  </div>
                </div>
              </div>
              <!-- Map placeholder -->
              <div class="aspect-[4/3] bg-gray-100 rounded-lg"></div>
            </div>
          </div>

          <!-- Price Details -->
          <div
            v-if="event.type === 'workshop' && event.prices"
            class="bg-white rounded-xl border p-6"
          >
            <h3 class="text-lg font-bold mb-4">Pricing Options</h3>
            <div class="space-y-4">
              <div
                v-for="price in event.prices"
                :key="price.name"
                class="flex items-start justify-between gap-4 pb-4 border-b last:border-0 last:pb-0"
              >
                <div>
                  <div class="font-medium">{{ price.name }}</div>
                  <div class="text-sm text-gray-600">
                    {{ price.description }}
                  </div>
                </div>
                <div class="font-bold whitespace-nowrap">
                  {{ price.amount }} {{ price.currency }}
                </div>
              </div>
            </div>
          </div>

          <!-- Tags -->
          <div
            v-if="event.tags.length > 0"
            class="bg-white rounded-xl border p-6"
          >
            <h3 class="text-lg font-bold mb-4">Tags</h3>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="tag in event.tags"
                :key="tag"
                variant="secondary"
                class="bg-purple-100 text-purple-600"
              >
                {{ tag }}
              </Badge>
            </div>
          </div>

          <!-- Stats -->
          <div v-if="event.stats" class="bg-white rounded-xl border p-6">
            <h3 class="text-lg font-bold mb-4">Event Stats</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-600">
                  {{ event.stats.interested }}
                </div>
                <div class="text-sm text-gray-600">Interested</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-purple-600">
                  {{ event.stats.saves }}
                </div>
                <div class="text-sm text-gray-600">Saves</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Empty State -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <Icon name="ph:calendar-x" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h2>
      <p class="text-gray-600 mb-6">
        The event you're looking for doesn't exist or has been removed.
      </p>
      <Button as-child>
        <NuxtLink to="/events">Browse Events</NuxtLink>
      </Button>
    </div>
  </div>
</template>
