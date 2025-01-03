<script setup>
import { ref, computed } from "vue";

// State
const showLocationFilter = ref(false);
const showCreateMenu = ref(false);
const locationSearch = ref("");
const currentLocation = ref(null);

// Data
const regions = [
  { name: "Europe", count: "15k+" },
  { name: "North America", count: "12k+" },
  { name: "Latin America", count: "8k+" },
  { name: "Asia", count: "5k+" },
];

const cities = [
  { name: "New York", count: "2.5k+" },
  { name: "London", count: "2k+" },
  { name: "Madrid", count: "1.8k+" },
  { name: "Berlin", count: "1.5k+" },
];

// Computed
const filteredRegions = computed(() => {
  const search = locationSearch.value.toLowerCase();
  return regions.filter((region) => region.name.toLowerCase().includes(search));
});

const filteredCities = computed(() => {
  const search = locationSearch.value.toLowerCase();
  return cities.filter((city) => city.name.toLowerCase().includes(search));
});

// Methods
const applyLocationFilter = (location) => {
  currentLocation.value = location;
  showLocationFilter.value = false;
  // Add your filtering logic here
};

const clearLocationFilter = () => {
  currentLocation.value = null;
  // Add your clear filter logic here
};

const createPost = (type) => {
  showCreateMenu.value = false;
  console.log(`Creating new ${type}`);
  // Add your create post logic here
};

// Add click outside directive
const vClickOutside = {
  mounted(el, binding) {
    el.clickOutsideEvent = (event) => {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};

// Add post type filter
const selectedPostType = ref("all");

const postTypeOptions = [
  { value: "all", label: "All Posts" },
  { value: "event", label: "Events" },
  { value: "meet", label: "Meet" },
  { value: "note", label: "Notes" },
  { value: "article", label: "Articles" },
  { value: "review", label: "Reviews" },
  { value: "gig", label: "Gigs" },
  { value: "ask_locals", label: "Ask Locals" },
  { value: "video", label: "Videos" },
];
</script>

<template>
  <DanceStyleLayout
    title="Salsa Cubana"
    description="Connect, organize, and grow with your local salsa community. Find dance partners, join events, and share your passion across 40K+ dancers worldwide."
  >
    <div class="bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <!-- Post Type Filter -->
          <div class="flex items-center gap-2 overflow-x-auto">
            <Button
              v-for="type in postTypeOptions"
              :key="type.value"
              :variant="selectedPostType === type.value ? 'default' : 'outline'"
              @click="selectedPostType = type.value"
              class="whitespace-nowrap"
            >
              {{ type.label }}
            </Button>
          </div>

          <div class="flex items-center gap-4">
            <Button
              variant="ghost"
              @click="showLocationFilter = true"
              class="flex items-center gap-2"
            >
              <Icon name="ph:map-pin" class="w-5 h-5" />
              Filter by Location
            </Button>

            <Create />
          </div>
        </div>
      </div>
    </div>

    <div class="my-4">
      <Feed :type="selectedPostType" />
    </div>

    <Dialog
      :open="showLocationFilter"
      @update:open="showLocationFilter = false"
    >
      <DialogContent class="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Filter by Location</DialogTitle>
        </DialogHeader>
        <div class="py-4">
          <Input
            v-model="locationSearch"
            placeholder="Search location..."
            class="mb-4"
          />

          <h4 class="font-medium mb-2">Popular Regions</h4>
          <div class="grid grid-cols-2 gap-2">
            <Button
              v-for="region in filteredRegions"
              :key="region.name"
              variant="ghost"
              class="justify-start"
              @click="applyLocationFilter(region.name)"
            >
              {{ region.name }}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </DanceStyleLayout>
</template>
