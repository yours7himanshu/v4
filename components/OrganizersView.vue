<script setup lang="ts">
import EmptyState from "~/components/common/EmptyState.vue";

const search = ref("");
const showFilters = ref(false);
const isGridView = ref(true);
const showLocationFilter = ref(false);

interface Filters {
  styles: string[];
  location: string;
  eventTypes: string[];
}

const filters = ref<Filters>({
  styles: ["any"],
  location: "",
  eventTypes: ["any"],
});

watch(
  () => filters.value.styles,
  (newStyles) => {
    if (!Array.isArray(newStyles)) {
      filters.value.styles = ["any"];
    }
  },
  { deep: true }
);

watch(
  () => filters.value.eventTypes,
  (newTypes) => {
    if (!Array.isArray(newTypes)) {
      filters.value.eventTypes = ["any"];
    }
  },
  { deep: true }
);

const danceStyles = [
  { value: "salsa", label: "Salsa" },
  { value: "bachata", label: "Bachata" },
  { value: "kizomba", label: "Kizomba" },
  { value: "zouk", label: "Zouk" },
  { value: "swing", label: "Swing" },
  { value: "tango", label: "Tango" },
  { value: "ballet", label: "Ballet" },
  { value: "contemporary", label: "Contemporary" },
];

const eventTypes = [
  { value: "festivals", label: "Festivals" },
  { value: "socials", label: "Socials" },
  { value: "workshops", label: "Workshops" },
  { value: "performances", label: "Performances" },
  { value: "classes", label: "Classes" },
];

// TODO: Replace with actual data from the backend
const organizers = ref([
  {
    id: "1",
    name: "Dance Fusion Events",
    location: "Berlin, Germany",
    avatar:
      "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1200&h=800&fit=crop",
    styles: ["salsa", "bachata"],
    eventTypes: ["festivals", "workshops", "socials"],
    bio: "Organizing the biggest Latin dance events in Berlin since 2015.",
    eventCount: 45,
  },
  {
    id: "2",
    name: "Swing Society",
    location: "Paris, France",
    avatar:
      "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1200&h=800&fit=crop",
    styles: ["swing", "jazz"],
    eventTypes: ["classes", "socials"],
    bio: "Dedicated to preserving and promoting swing dance culture.",
    eventCount: 32,
  },
  {
    id: "3",
    name: "Tango Nights",
    location: "Buenos Aires, Argentina",
    avatar:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop",
    styles: ["tango"],
    eventTypes: ["socials", "performances"],
    bio: "Authentic Argentine tango events and milongas in the heart of Buenos Aires.",
    eventCount: 128,
  },
  {
    id: "4",
    name: "Urban Dance Collective",
    location: "New York, USA",
    avatar:
      "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1200&h=800&fit=crop",
    styles: ["contemporary", "ballet"],
    eventTypes: ["performances", "workshops", "classes"],
    bio: "Contemporary dance events and performances in NYC.",
    eventCount: 67,
  },
  {
    id: "5",
    name: "Zouk Brazil",
    location: "Rio de Janeiro, Brazil",
    avatar:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?w=1200&h=800&fit=crop",
    styles: ["zouk", "salsa"],
    eventTypes: ["festivals", "workshops"],
    bio: "Brazilian Zouk events, workshops, and beach parties.",
    eventCount: 89,
  },
  {
    id: "6",
    name: "Kizomba Vibes",
    location: "Lisbon, Portugal",
    avatar:
      "https://images.unsplash.com/photo-1523307730650-594bc63f9d67?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=1200&h=800&fit=crop",
    styles: ["kizomba"],
    eventTypes: ["festivals", "workshops", "classes"],
    bio: "Bringing authentic Kizomba culture to Europe through events and festivals.",
    eventCount: 54,
  },
]);

// Helper function to get style label
function getStyleLabel(value: string) {
  return danceStyles.find((style) => style.value === value)?.label || value;
}

const filteredOrganizers = computed(() => {
  return organizers.value.filter((organizer) => {
    // Search by name or location
    const matchesSearch =
      !search.value ||
      organizer.name.toLowerCase().includes(search.value.toLowerCase()) ||
      organizer.location.toLowerCase().includes(search.value.toLowerCase());

    // Filter by styles
    const matchesStyles =
      filters.value.styles.includes("any") ||
      filters.value.styles.some((style) => organizer.styles.includes(style));

    // Filter by location
    const matchesLocation =
      !filters.value.location ||
      organizer.location
        .toLowerCase()
        .includes(filters.value.location.toLowerCase());

    // Filter by event types
    const matchesEventTypes =
      filters.value.eventTypes.includes("any") ||
      filters.value.eventTypes.some((type) =>
        organizer.eventTypes.includes(type)
      );

    return (
      matchesSearch && matchesStyles && matchesLocation && matchesEventTypes
    );
  });
});

function toggleView() {
  isGridView.value = !isGridView.value;
}

// Helper functions to get labels
function getStylesLabel(selectedStyles: string[]) {
  if (selectedStyles.includes("any")) return "Any Style";
  if (selectedStyles.length === 1) {
    return getStyleLabel(selectedStyles[0]);
  }
  return `${selectedStyles.length} styles selected`;
}

function getEventTypesLabel(selectedTypes: string[]) {
  if (selectedTypes.includes("any")) return "Any Event Type";
  if (selectedTypes.length === 1) {
    return (
      eventTypes.find((type) => type.value === selectedTypes[0])?.label ||
      selectedTypes[0]
    );
  }
  return `${selectedTypes.length} types selected`;
}

function resetFilters() {
  filters.value = {
    styles: [],
    location: "",
    eventTypes: [],
  };
  search.value = "";
}

const hasActiveFilters = computed(() => {
  return (
    filters.value.styles.length > 0 ||
    filters.value.location.length > 0 ||
    filters.value.eventTypes.length > 0 ||
    search.value.length > 0
  );
});

const selectedStyle = ref("any");
const selectedEventType = ref("any");

watch(selectedStyle, (newValue) => {
  if (newValue === "any") {
    filters.value.styles = ["any"];
  } else {
    const currentStyles = filters.value.styles.filter((s) => s !== "any");
    if (currentStyles.includes(newValue)) {
      filters.value.styles = currentStyles.filter((s) => s !== newValue);
      if (filters.value.styles.length === 0) {
        filters.value.styles = ["any"];
      }
    } else {
      filters.value.styles = [...currentStyles, newValue];
    }
  }
});

watch(selectedEventType, (newValue) => {
  if (newValue === "any") {
    filters.value.eventTypes = ["any"];
  } else {
    const currentTypes = filters.value.eventTypes.filter((t) => t !== "any");
    if (currentTypes.includes(newValue)) {
      filters.value.eventTypes = currentTypes.filter((t) => t !== newValue);
      if (filters.value.eventTypes.length === 0) {
        filters.value.eventTypes = ["any"];
      }
    } else {
      filters.value.eventTypes = [...currentTypes, newValue];
    }
  }
});
</script>

<template>
  <div>
    <div class="mb-8">
      <div
        class="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
      >
        <div class="relative">
          <Input
            v-model="search"
            placeholder="Search organizers..."
            class="w-full sm:w-64"
          >
            <template #prefix>
              <Icon name="ph:magnifying-glass" class="w-4 h-4" />
            </template>
          </Input>
        </div>
        <div class="flex gap-2">
          <Button variant="outline" @click="toggleView">
            <Icon
              :name="isGridView ? 'ph:grid-four' : 'ph:list'"
              class="w-4 h-4"
            />
          </Button>
          <Button variant="outline" @click="showFilters = !showFilters">
            <Icon name="ph:funnel" class="w-4 h-4" />
            Filters
          </Button>
        </div>
      </div>

      <div v-if="showFilters" class="mt-4 p-4 bg-gray-50 rounded-lg">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <Label>Dance Styles</Label>
            <Select v-model="selectedStyle">
              <SelectTrigger>
                <SelectValue :placeholder="getStylesLabel(filters.styles)" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Style</SelectItem>
                <SelectItem
                  v-for="style in danceStyles"
                  :key="style.value"
                  :value="style.value"
                >
                  {{ style.label }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Location</Label>
            <Button
              variant="outline"
              class="w-full justify-start"
              @click="showLocationFilter = true"
            >
              <Icon name="ph:map-pin" class="w-4 h-4 mr-2" />
              {{ filters.location || "Any Location" }}
            </Button>
          </div>
          <div>
            <Label>Event Types</Label>
            <Select v-model="selectedEventType">
              <SelectTrigger>
                <SelectValue
                  :placeholder="getEventTypesLabel(filters.eventTypes)"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Event Type</SelectItem>
                <SelectItem
                  v-for="type in eventTypes"
                  :key="type.value"
                  :value="type.value"
                >
                  {{ type.label }}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isGridView" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="organizer in filteredOrganizers"
        :key="organizer.id"
        class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        <NuxtLink :to="`/organizers/${organizer.id}`">
          <div class="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden">
            <img
              :src="organizer.coverImage || '/images/default-cover.jpg'"
              :alt="organizer.name"
              class="object-cover"
            />
          </div>
          <div class="p-4">
            <div class="flex items-center gap-3 mb-3">
              <img
                :src="organizer.avatar || '/images/default-avatar.jpg'"
                :alt="organizer.name"
                class="w-12 h-12 rounded-full"
              />
              <div>
                <h3 class="font-semibold text-lg">{{ organizer.name }}</h3>
                <p class="text-sm text-gray-600">{{ organizer.location }}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2 mb-3">
              <Badge
                v-for="style in organizer.styles"
                :key="style"
                variant="secondary"
              >
                {{ getStyleLabel(style) }}
              </Badge>
            </div>
            <p class="text-sm text-gray-600 line-clamp-2">
              {{ organizer.bio }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div v-else class="space-y-4">
      <div
        v-for="organizer in filteredOrganizers"
        :key="organizer.id"
        class="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
      >
        <NuxtLink :to="`/organizers/${organizer.id}`">
          <div class="flex gap-4">
            <img
              :src="organizer.avatar || '/images/default-avatar.jpg'"
              :alt="organizer.name"
              class="w-16 h-16 rounded-full"
            />
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <div>
                  <h3 class="font-semibold text-lg">{{ organizer.name }}</h3>
                  <p class="text-sm text-gray-600">{{ organizer.location }}</p>
                </div>
                <div class="text-sm text-gray-600">
                  {{ organizer.eventCount }} events
                </div>
              </div>
              <div class="flex flex-wrap gap-2 my-2">
                <Badge
                  v-for="style in organizer.styles"
                  :key="style"
                  variant="secondary"
                >
                  {{ getStyleLabel(style) }}
                </Badge>
              </div>
              <p class="text-sm text-gray-600 line-clamp-2">
                {{ organizer.bio }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>

    <div v-if="!filteredOrganizers.length">
      <EmptyState variant="no-results" />
    </div>

    <Sheet :open="showLocationFilter" @update:open="showLocationFilter = false">
      <SheetContent side="bottom" class="h-[80vh]">
        <SheetHeader>
          <SheetTitle>Filter by Location</SheetTitle>
        </SheetHeader>
        <div class="mt-4">
          <LocationPanel
            :location="filters.location"
            @update:location="filters.location = $event || ''"
          />
        </div>
      </SheetContent>
    </Sheet>
  </div>
</template>
