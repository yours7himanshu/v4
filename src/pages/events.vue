<script setup>
import { ref, computed } from "vue";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const events = [
  {
    id: "1",
    name: "Havana D'Primera Live in Munich",
    type: "concert",
    date: {
      start: "2024-05-15T20:00:00",
      end: "2024-05-16T02:00:00",
    },
    location: {
      name: "Backstage",
      city: "Munich",
      country: "Germany",
      coordinates: {
        lat: 48.1351,
        lng: 11.582,
      },
    },
    artists: ["12"], // Havana D'Primera ID
    organizer: {
      name: "Munich Salsa Social",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=munich",
    },
    description:
      "Experience the legendary Havana D'Primera live in Munich! A night of pure Cuban music and dance.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=concert1",
    price: {
      amount: 35,
      currency: "EUR",
      type: "per-person",
    },
    schedule: [
      {
        time: "20:00",
        activity: "Doors Open",
      },
      {
        time: "21:00",
        activity: "DJ Warm-up",
      },
      {
        time: "22:00",
        activity: "Havana D'Primera Live",
      },
      {
        time: "00:00",
        activity: "Social Dancing",
      },
    ],
    tags: ["timba", "live music", "social dancing"],
    status: "upcoming",
  },
  {
    id: "2",
    name: "Cuban Weekend with Maykel Fonts",
    type: "workshop",
    date: {
      start: "2024-06-01T10:00:00",
      end: "2024-06-02T18:00:00",
    },
    location: {
      name: "TanzZentrum",
      city: "Munich",
      country: "Germany",
    },
    artists: ["1"], // Maykel Fonts ID
    organizer: {
      name: "Munich Casino",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=casino",
    },
    description:
      "Two days of intensive Cuban salsa workshops with Maykel Fonts. All levels welcome!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=workshop1",
    price: {
      amount: 120,
      currency: "EUR",
      type: "per-person",
    },
    schedule: [
      {
        time: "10:00-11:30",
        activity: "Basic Footwork & Body Movement",
        description: "Level: Beginner",
      },
      {
        time: "11:45-13:15",
        activity: "Partner Work Fundamentals",
        description: "Level: Beginner/Intermediate",
      },
      {
        time: "14:30-16:00",
        activity: "Advanced Combinations",
        description: "Level: Intermediate/Advanced",
      },
      {
        time: "16:15-17:45",
        activity: "Rueda de Casino",
        description: "All Levels",
      },
    ],
    tags: ["workshop", "casino", "rueda"],
    status: "upcoming",
  },
  {
    id: "3",
    name: "Los Van Van European Tour",
    type: "concert",
    date: {
      start: "2024-07-20T21:00:00",
      end: "2024-07-21T03:00:00",
    },
    location: {
      name: "Muffathalle",
      city: "Munich",
      country: "Germany",
    },
    artists: ["13"], // Los Van Van ID
    organizer: {
      name: "Timba Productions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=timba",
    },
    description:
      "The legendary Los Van Van returns to Munich as part of their European tour!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=concert2",
    price: {
      amount: 45,
      currency: "EUR",
      type: "per-person",
    },
    tags: ["timba", "live music", "songo"],
    status: "upcoming",
  },
];

// Filter states
const searchQuery = ref("");
const selectedType = ref("all");
const selectedStatus = ref("upcoming");
const selectedMonth = ref("all");

// Filter options
const typeOptions = [
  { value: "all", label: "All Types" },
  { value: "party", label: "Parties" },
  { value: "workshop", label: "Workshops" },
  { value: "festival", label: "Festivals" },
  { value: "concert", label: "Concerts" },
  { value: "congress", label: "Congresses" },
];

const statusOptions = [
  { value: "upcoming", label: "Upcoming" },
  { value: "ongoing", label: "Happening Now" },
  { value: "past", label: "Past Events" },
];

// Computed properties for filtering
const filteredEvents = computed(() => {
  let filtered = events;

  if (searchQuery.value) {
    filtered = filtered.filter(
      (event) =>
        event.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        event.description
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase()) ||
        event.location.city
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase())
    );
  }

  if (selectedType.value !== "all") {
    filtered = filtered.filter((event) => event.type === selectedType.value);
  }

  if (selectedStatus.value !== "all") {
    filtered = filtered.filter(
      (event) => event.status === selectedStatus.value
    );
  }

  return filtered;
});

const sortedEvents = computed(() => {
  return [...filteredEvents.value].sort((a, b) => {
    return new Date(a.date.start) - new Date(b.date.start);
  });
});

// Add new ref for filter drawer
const isFilterDrawerOpen = ref(false);

// Add computed for mobile detection
const isMobile = computed(() => window.innerWidth < 768);

// Group filters into a more organized structure
const filters = computed(() => ({
  type: selectedType.value,
  status: selectedStatus.value,
  month: selectedMonth.value,
  search: searchQuery.value,
}));

// Add sidebar visibility state for desktop
const isSidebarOpen = ref(true); // Default open on desktop
</script>

<template>
  <DanceStyleLayout
    title="Events"
    description="Discover upcoming Cuban dance events, workshops, and concerts in your area."
  >
    <div class="flex">
      <!-- Desktop Sidebar -->
      <div
        class="hidden md:block w-80 shrink-0 border-r min-h-[calc(100vh-4rem)] p-6"
      >
        <EventFilters
          :filters="filters"
          @update:type="selectedType = $event"
          @update:status="selectedStatus = $event"
          @update:month="selectedMonth = $event"
          @update:search="searchQuery = $event"
        />
      </div>

      <!-- Main Content -->
      <div class="flex-1">
        <!-- Mobile Filter Button -->
        <div class="md:hidden px-4 my-4">
          <Button
            variant="outline"
            class="w-full"
            @click="isFilterDrawerOpen = true"
          >
            <Icon name="ph:funnel" class="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <!-- Events Grid -->
        <div class="p-4 space-y-6">
          <!-- Event Card -->
          <div
            v-for="event in sortedEvents"
            :key="event.id"
            class="relative rounded-lg border border-gray-200 bg-white shadow-sm hover:border-gray-300 transition-all duration-200"
          >
            <div class="p-4 sm:p-6">
              <!-- Event Header -->
              <div class="flex items-start gap-4">
                <div
                  class="shrink-0 w-16 h-16 bg-gray-100 rounded-lg overflow-hidden"
                >
                  <img
                    :src="event.image"
                    :alt="event.name"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2">
                    <h3 class="text-lg font-semibold text-gray-900">
                      {{ event.name }}
                    </h3>
                    <span
                      class="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium"
                      :class="{
                        'bg-green-50 text-green-700':
                          event.status === 'upcoming',
                        'bg-blue-50 text-blue-700': event.status === 'ongoing',
                        'bg-gray-50 text-gray-700': event.status === 'past',
                      }"
                    >
                      {{ event.status }}
                    </span>
                  </div>

                  <!-- Event Meta -->
                  <div
                    class="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500"
                  >
                    <div class="flex items-center gap-1">
                      <Icon name="ph:calendar" class="h-4 w-4" />
                      {{ new Date(event.date.start).toLocaleDateString() }}
                      <span v-if="event.date.end">
                        - {{ new Date(event.date.end).toLocaleDateString() }}
                      </span>
                    </div>
                    <div class="flex items-center gap-1">
                      <Icon name="ph:map-pin" class="h-4 w-4" />
                      {{ event.location.name }}, {{ event.location.city }}
                    </div>
                    <div v-if="event.price" class="flex items-center gap-1">
                      <Icon name="ph:ticket" class="h-4 w-4" />
                      {{ event.price.amount }} {{ event.price.currency }}
                    </div>
                  </div>

                  <!-- Event Description -->
                  <p class="mt-2 text-sm text-gray-600">
                    {{ event.description }}
                  </p>

                  <!-- Tags -->
                  <div class="mt-3 flex flex-wrap gap-2">
                    <span
                      v-for="tag in event.tags"
                      :key="tag"
                      class="inline-flex items-center rounded-full bg-gray-50 px-2 py-1 text-xs text-gray-600"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Schedule Preview -->
              <div
                v-if="event.schedule"
                class="mt-4 border-t border-gray-100 pt-4 space-y-2"
              >
                <div
                  v-for="(item, index) in event.schedule.slice(0, 2)"
                  :key="index"
                  class="flex items-start gap-2 text-sm"
                >
                  <span class="font-medium text-gray-900">{{ item.time }}</span>
                  <span class="text-gray-600">{{ item.activity }}</span>
                  <span v-if="item.description" class="text-gray-500 text-xs">
                    ({{ item.description }})
                  </span>
                </div>
                <Button
                  v-if="event.schedule.length > 2"
                  variant="ghost"
                  size="sm"
                  class="text-gray-600"
                >
                  Show full schedule
                </Button>
              </div>
            </div>

            <!-- Add Call-to-Action Buttons -->
            <div
              class="px-4 sm:px-6 pb-4 mt-4 flex gap-2 justify-end border-t pt-4"
            >
              <Button variant="outline" size="sm">
                <Icon name="ph:calendar-plus" class="mr-2 h-4 w-4" />
                Add to Calendar
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ph:share" class="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button> Book Now </Button>
            </div>
          </div>

          <!-- Empty State -->
          <div v-if="sortedEvents.length === 0" class="text-center py-12">
            <Icon
              name="ph:calendar-x"
              class="mx-auto h-12 w-12 text-gray-400"
            />
            <h3 class="mt-2 text-sm font-semibold text-gray-900">
              No events found
            </h3>
            <p class="mt-1 text-sm text-gray-500">
              Try adjusting your filters or check back later.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Filter Drawer -->
    <Sheet
      :open="isFilterDrawerOpen"
      @update:open="isFilterDrawerOpen = $event"
    >
      <SheetContent side="left" class="w-[90vw] sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>

        <div class="py-6">
          <EventFilters
            :filters="filters"
            layout="grid"
            @update:type="selectedType = $event"
            @update:status="selectedStatus = $event"
            @update:month="selectedMonth = $event"
            @update:search="searchQuery = $event"
          />
        </div>
      </SheetContent>
    </Sheet>
  </DanceStyleLayout>
</template>
