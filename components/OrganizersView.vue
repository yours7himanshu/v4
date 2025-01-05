<script setup lang="ts">
import EmptyState from "~/components/common/EmptyState.vue";
import OrganizerCard from "~/components/OrganizerCard.vue";

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
    name: "Berlin Salsa Community",
    location: "Berlin, Germany",
    avatar:
      "https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=1200&h=800&fit=crop",
    styles: ["salsa", "bachata"],
    eventTypes: ["festivals", "workshops", "socials"],
    bio: "The main salsa & bachata community in Berlin. Join our WhatsApp group for daily socials and practice sessions.",
    eventCount: 45,
    links: {
      whatsapp: "https://chat.whatsapp.com/...",
      instagram: "@berlinsalsa",
      facebook: "Berlin Salsa Community (3.5k members)",
      website: "https://salsaberlin.de",
    },
  },
  {
    id: "2",
    name: "Swing Dance Paris",
    location: "Paris, France",
    avatar:
      "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=1200&h=800&fit=crop",
    styles: ["swing", "jazz"],
    eventTypes: ["classes", "socials"],
    bio: "Weekly swing dance classes and social dances. Follow us on Instagram for latest updates and join our Telegram channel.",
    eventCount: 32,
    links: {
      telegram: "t.me/swingparis",
      instagram: "@swingdanceparis",
      facebook: "Swing Dance Paris Official (2.8k members)",
    },
  },
  {
    id: "3",
    name: "Tango Buenos Aires",
    location: "Buenos Aires, Argentina",
    avatar:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1200&h=800&fit=crop",
    styles: ["tango"],
    eventTypes: ["socials", "performances"],
    bio: "Daily milongas and tango events. Join our WhatsApp group for real-time updates on milonga locations and special events.",
    eventCount: 128,
    links: {
      whatsapp: "https://chat.whatsapp.com/...",
      instagram: "@tangoba",
      website: "https://tangobuenosaires.org",
    },
  },
  {
    id: "4",
    name: "NYC Urban Dance",
    location: "New York, USA",
    avatar:
      "https://images.unsplash.com/photo-1529335764857-3f1164d1cb24?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?w=1200&h=800&fit=crop",
    styles: ["contemporary", "ballet"],
    eventTypes: ["performances", "workshops", "classes"],
    bio: "Contemporary dance community in NYC. Join our Discord for class schedules and practice sessions.",
    eventCount: 67,
    links: {
      discord: "discord.gg/nycurbandance",
      instagram: "@nycurbandance",
      facebook: "NYC Urban Dance Community (5k members)",
    },
  },
  {
    id: "5",
    name: "Rio Zouk Movement",
    location: "Rio de Janeiro, Brazil",
    avatar:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?w=1200&h=800&fit=crop",
    styles: ["zouk", "salsa"],
    eventTypes: ["festivals", "workshops"],
    bio: "The largest Brazilian Zouk community in Rio. Daily classes and weekend parties. Join our WhatsApp for practice partners.",
    eventCount: 89,
    links: {
      whatsapp: "https://chat.whatsapp.com/...",
      instagram: "@riozouk",
      facebook: "Rio Zouk Official (4.2k members)",
      website: "https://riozouk.com.br",
    },
  },
  {
    id: "6",
    name: "Kizomba Lisboa",
    location: "Lisbon, Portugal",
    avatar:
      "https://images.unsplash.com/photo-1523307730650-594bc63f9d67?w=400&h=400&fit=crop",
    coverImage:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=1200&h=800&fit=crop",
    styles: ["kizomba"],
    eventTypes: ["festivals", "workshops", "classes"],
    bio: "Authentic Kizomba community in Lisbon. Join our groups for daily socials and beach dance events.",
    eventCount: 54,
    links: {
      whatsapp: "https://chat.whatsapp.com/...",
      telegram: "t.me/kizombalisboa",
      instagram: "@kizombalisboa",
      facebook: "Kizomba Lisboa (3.1k members)",
    },
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
    <!-- Controls -->
    <div
      class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6"
    >
      <div class="flex gap-2">
        <Button
          variant="outline"
          class="justify-start"
          @click="showLocationFilter = true"
        >
          <Icon name="ph:map-pin" class="w-4 h-4 mr-2" />
          {{ filters.location || "Any Location" }}
        </Button>
        <Button variant="outline" @click="showFilters = !showFilters">
          <Icon name="ph:funnel" class="w-4 h-4 mr-2" />
          Filters
        </Button>
        <Button variant="outline" @click="toggleView">
          <Icon
            :name="isGridView ? 'ph:grid-four' : 'ph:list'"
            class="w-4 h-4"
          />
        </Button>
      </div>

      <Button variant="default" as-child class="w-full sm:w-auto">
        <NuxtLink to="/register" class="flex items-center justify-center gap-2">
          <Icon name="ph:plus-circle" class="w-5 h-5" />
          Add Your City's Groups
        </NuxtLink>
      </Button>
    </div>

    <!-- Filters -->
    <div v-if="showFilters" class="mb-8 p-4 bg-gray-50 rounded-lg">
      <div class="grid sm:grid-cols-2 gap-4">
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

    <!-- Results Grid View -->
    <div v-if="isGridView" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <OrganizerCard
        v-for="organizer in filteredOrganizers"
        :key="organizer.id"
        :organizer="organizer"
        view="grid"
      />
    </div>

    <!-- Results List View -->
    <div v-else class="space-y-4">
      <OrganizerCard
        v-for="organizer in filteredOrganizers"
        :key="organizer.id"
        :organizer="organizer"
        view="list"
      />
    </div>

    <!-- Empty State -->
    <div v-if="!filteredOrganizers.length" class="text-center">
      <div class="max-w-md mx-auto">
        <EmptyState variant="no-results" />
        <p class="mt-4 text-gray-600">
          Don't see your city? Help grow the community by
          <Button variant="link" class="px-1" as-child>
            <NuxtLink to="/register">adding your local dance groups</NuxtLink>
          </Button>
        </p>
      </div>
    </div>

    <!-- Location Sheet -->
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
