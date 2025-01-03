<script setup>
import { ref, computed } from "vue";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

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
    image:
      "https://res.cloudinary.com/djumxevsm/image/upload/v1732373003/a1zosu7n7luzj25tsr1l.jpg",
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
    type: "festival",
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
    prices: [
      {
        name: "Full Pass",
        amount: 120,
        currency: "EUR",
        description: "All workshops and parties",
      },
      {
        name: "Saturday Pass",
        amount: 70,
        currency: "EUR",
        description: "All Saturday activities",
      },
      {
        name: "Sunday Pass",
        amount: 70,
        currency: "EUR",
        description: "All Sunday activities",
      },
      {
        name: "Single Workshop",
        amount: 25,
        currency: "EUR",
        description: "Per workshop",
      },
    ],
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

// Primary filter states
const searchQuery = ref("");
const selectedType = ref("all");
const selectedStatus = ref("upcoming");
const selectedLocation = ref("all");
const selectedMonth = ref("all");
const selectedPriceRange = ref("all");
const sortBy = ref("date");

// Filter options
const typeOptions = [
  { value: "all", label: "All Types" },
  { value: "party", label: "Social Party" },
  { value: "workshop", label: "Workshop" },
  { value: "concert", label: "Concert" },
  { value: "festival", label: "Festival" },
];

const statusOptions = [
  { value: "upcoming", label: "Upcoming" },
  { value: "ongoing", label: "Happening Now" },
  { value: "past", label: "Past Events" },
];

const priceRangeOptions = [
  { value: "all", label: "Any Price" },
  { value: "free", label: "Free" },
  { value: "0-20", label: "Under 20€" },
  { value: "20-50", label: "20-50€" },
  { value: "50+", label: "50€+" },
];

// Get unique locations from events
const locationOptions = computed(() => {
  const locations = new Set(events.map((event) => event.location.city));
  return [
    { value: "all", label: "All Locations" },
    ...Array.from(locations).map((loc) => ({ value: loc, label: loc })),
  ];
});

// Check if any filters are active
const hasActiveFilters = computed(() => {
  return (
    selectedType.value !== "all" ||
    selectedStatus.value !== "upcoming" ||
    selectedLocation.value !== "all" ||
    selectedMonth.value !== "all" ||
    selectedPriceRange.value !== "all" ||
    searchQuery.value !== "" ||
    sortBy.value !== "date"
  );
});

// Clear all filters
function clearFilters() {
  selectedType.value = "all";
  selectedStatus.value = "upcoming";
  selectedLocation.value = "all";
  selectedMonth.value = "all";
  selectedPriceRange.value = "all";
  searchQuery.value = "";
  sortBy.value = "date";
}

// Filter events
const filteredEvents = computed(() => {
  let filtered = events;

  // Search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (event) =>
        event.name.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.city.toLowerCase().includes(query) ||
        event.organizer.name.toLowerCase().includes(query)
    );
  }

  // Type filter
  if (selectedType.value !== "all") {
    filtered = filtered.filter((event) => event.type === selectedType.value);
  }

  // Status filter
  if (selectedStatus.value !== "all") {
    filtered = filtered.filter(
      (event) => event.status === selectedStatus.value
    );
  }

  // Location filter
  if (selectedLocation.value !== "all") {
    filtered = filtered.filter(
      (event) => event.location.city === selectedLocation.value
    );
  }

  // Price range filter
  if (selectedPriceRange.value !== "all") {
    filtered = filtered.filter((event) => {
      // Get minimum price from either single price or multiple prices
      const minPrice =
        event.price?.amount ||
        (event.prices ? Math.min(...event.prices.map((p) => p.amount)) : 0);

      switch (selectedPriceRange.value) {
        case "free":
          return minPrice === 0;
        case "0-20":
          return minPrice > 0 && minPrice <= 20;
        case "20-50":
          return minPrice > 20 && minPrice <= 50;
        case "50+":
          return minPrice > 50;
        default:
          return true;
      }
    });
  }

  return filtered;
});

// Sort events
const sortedEvents = computed(() => {
  const events = [...filteredEvents.value];

  switch (sortBy.value) {
    case "date":
      return events.sort(
        (a, b) => new Date(a.date.start) - new Date(b.date.start)
      );
    case "price-low":
      return events.sort(
        (a, b) => (a.price?.amount || 0) - (b.price?.amount || 0)
      );
    case "price-high":
      return events.sort(
        (a, b) => (b.price?.amount || 0) - (a.price?.amount || 0)
      );
    default:
      return events;
  }
});

// Add these functions after other functions
function handleShare(event) {
  console.log("Share event:", event.name);
}

function handleStar(event) {
  console.log("Star event:", event.name);
}

function handleBookmark(event) {
  console.log("Bookmark event:", event.name);
}
</script>

<template>
  <DanceStyleLayout
    title="Salsa Cubana"
    description="Connect, organize, and grow with your local salsa community. Find dance partners, join events, and share your passion across 40K+ dancers worldwide."
  >
    <!-- Add background to filters -->
    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <!-- Role Filter with Search -->
        <div class="flex items-center gap-4 overflow-x-auto">
          <div class="flex gap-2 flex-1">
            <Button
              v-for="type in typeOptions"
              :key="type.value"
              :variant="selectedType === type.value ? 'default' : 'outline'"
              @click="selectedType = type.value"
              class="whitespace-nowrap"
            >
              {{ type.label }}
            </Button>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            <Input
              v-model="searchQuery"
              placeholder="Search events..."
              type="search"
              class="w-[180px]"
            />
          </div>

          <Select v-model="sortBy" class="w-[140px] shrink-0">
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Most Recent</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant="outline"
            size="sm"
            @click="clearFilters"
            v-if="hasActiveFilters"
            class="shrink-0"
          >
            Clear all
          </Button>
        </div>

        <!-- Common Filters Row -->
        <div class="flex flex-wrap items-center gap-3">
          <Select v-model="selectedLocation">
            <SelectTrigger class="w-[160px]">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="option in locationOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>

          <Select v-model="selectedStatus">
            <SelectTrigger class="w-[140px]">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="option in statusOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>

          <Select v-model="selectedPriceRange">
            <SelectTrigger class="w-[160px]">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="option in priceRangeOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>

    <!-- Events Grid -->
    <div class="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Event Card -->
      <div
        v-for="event in sortedEvents"
        :key="event.id"
        class="bg-white rounded-lg border-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 overflow-hidden flex flex-col h-full"
      >
        <!-- Card Content Wrapper -->
        <div class="flex-1 flex flex-col">
          <!-- Card Header with Image -->
          <div class="relative h-64 aspect-video">
            <img
              class="w-full h-full object-cover"
              :src="event.image"
              :alt="event.name"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            />
            <div class="absolute top-4 right-4">
              <div
                class="bg-white/90 px-3 py-1 rounded-full text-sm font-medium"
              >
                {{
                  event.price?.amount ||
                  `From ${Math.min(...event.prices.map((p) => p.amount))}`
                }}
                {{ event.price?.currency || event.prices[0].currency }}
              </div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-4">
              <h3 class="text-lg font-semibold text-white drop-shadow">
                {{ event.name }}
              </h3>
              <div class="flex items-center gap-3 mt-2 text-sm text-white/90">
                <div class="flex items-center gap-1">
                  <Icon name="ph:calendar" class="h-4 w-4" />
                  <span>{{ formatDate(event.date.start) }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="ph:map-pin" class="h-4 w-4" />
                  <span
                    >{{ event.location.name }}, {{ event.location.city }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Event Details -->
          <div class="p-4 flex-1">
            <p class="text-gray-600 line-clamp-2">{{ event.description }}</p>
          </div>

          <!-- Card Footer -->
          <div
            class="p-4 border-t border-gray-100 flex items-center justify-between mt-auto"
          >
            <div class="flex items-center gap-4 text-sm text-gray-500">
              <div class="flex items-center gap-1">
                <Icon name="ph:heart" class="w-5 h-5" />
                <span>{{ event.interested || "12" }}</span>
              </div>
              <button
                class="flex items-center gap-1 hover:text-purple-600"
                @click="handleBookmark(event)"
              >
                <Icon name="ph:bookmark-simple" class="w-5 h-5" />
                <span>{{ event.saves || 0 }}</span>
              </button>
              <button
                class="flex items-center gap-1 hover:text-purple-600"
                @click="handleShare(event)"
              >
                <Icon name="ph:share-network" class="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
            <NuxtLink :to="`/events/${event.id}`">
              <Button variant="default">Book Now</Button>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="sortedEvents.length === 0"
        class="col-span-full text-center py-12"
      >
        <Icon name="ph:calendar-x" class="mx-auto h-12 w-12 text-gray-400" />
        <h3 class="mt-2 text-sm font-semibold text-gray-900">
          No events found
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Try adjusting your search terms or clear the search.
        </p>
      </div>
    </div>
  </DanceStyleLayout>
</template>
