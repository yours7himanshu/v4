<script setup lang="ts">
const emit = defineEmits<{
  (e: "update:type", value: string): void;
  (e: "update:location", value: string | null): void;
}>();

const props = defineProps({
  type: {
    type: String,
    default: "all",
  },
  location: {
    type: String as () => string | null,
    default: null,
  },
});

// Post type options
const postTypeOptions = [
  { value: "all", label: "All Posts", icon: "ph:list" },
  { value: "event", label: "Events", icon: "ph:calendar" },
  { value: "meet", label: "Meet", icon: "ph:users" },
  { value: "note", label: "Notes", icon: "ph:note" },
  { value: "article", label: "Articles", icon: "ph:article" },
  { value: "review", label: "Reviews", icon: "ph:star" },
  { value: "gig", label: "Gigs", icon: "ph:music-notes" },
  { value: "ask_locals", label: "Ask Locals", icon: "ph:question" },
  { value: "video", label: "Videos", icon: "ph:video-camera" },
];

// Location filter
const showLocationFilter = ref(false);
const locationSearch = ref("");

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

const filteredRegions = computed(() => {
  const search = locationSearch.value.toLowerCase();
  return regions.filter((region) => region.name.toLowerCase().includes(search));
});

const filteredCities = computed(() => {
  const search = locationSearch.value.toLowerCase();
  return cities.filter((city) => city.name.toLowerCase().includes(search));
});

const applyLocationFilter = (location: string) => {
  emit("update:location", location);
  showLocationFilter.value = false;
};

const clearLocationFilter = () => {
  emit("update:location", null);
};

// UI State
const showFilters = ref(false);

// Location Panel Component
const LocationPanel = defineComponent({
  setup() {
    return () => (
      <div class="flex flex-col gap-2">
        <Input v-model={locationSearch.value} placeholder="Search location...">
          <template #prefix>
            <Icon name="ph:magnifying-glass" class="w-4 h-4 text-gray-400" />
          </template>
        </Input>

        <div class="flex flex-col gap-1">
          <div class="font-medium text-sm text-gray-500">Popular Regions</div>
          {filteredRegions.value.map((region) => (
            <Button
              key={region.name}
              variant="ghost"
              class="justify-start"
              classList={{ "bg-accent": props.location === region.name }}
              onClick={() => applyLocationFilter(region.name)}
            >
              {region.name}
              <span class="ml-auto text-sm text-gray-500">{region.count}</span>
            </Button>
          ))}

          <div class="font-medium text-sm text-gray-500 mt-2">
            Popular Cities
          </div>
          {filteredCities.value.map((city) => (
            <Button
              key={city.name}
              variant="ghost"
              class="justify-start"
              classList={{ "bg-accent": props.location === city.name }}
              onClick={() => applyLocationFilter(city.name)}
            >
              {city.name}
              <span class="ml-auto text-sm text-gray-500">{city.count}</span>
            </Button>
          ))}
        </div>
      </div>
    );
  },
});
</script>

<template>
  <div class="w-full">
    <!-- Desktop View -->
    <div class="hidden md:flex flex-col gap-4 w-60 shrink-0">
      <div class="flex flex-col gap-1">
        <Button
          v-for="type in postTypeOptions"
          :key="type.value"
          :variant="props.type === type.value ? 'default' : 'ghost'"
          @click="emit('update:type', type.value)"
          class="justify-start"
        >
          <Icon :name="type.icon" class="w-4 h-4 mr-2" />
          {{ type.label }}
        </Button>
      </div>

      <div class="font-medium text-sm text-gray-500 mt-4">Location</div>
      <LocationPanel />
    </div>

    <!-- Mobile View -->
    <div class="md:hidden flex items-center gap-2">
      <!-- Type Filter -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline" class="flex items-center gap-2">
            <Icon
              :name="
                postTypeOptions.find((t) => t.value === props.type)?.icon ||
                'ph:list'
              "
              class="w-4 h-4"
            />
            {{ postTypeOptions.find((t) => t.value === props.type)?.label }}
            <Icon name="ph:caret-down" class="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            v-for="type in postTypeOptions"
            :key="type.value"
            @click="emit('update:type', type.value)"
            :class="{ 'bg-accent': props.type === type.value }"
          >
            <Icon :name="type.icon" class="w-4 h-4 mr-2" />
            {{ type.label }}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <!-- Location Filter -->
      <Button
        variant="ghost"
        @click="showLocationFilter = true"
        class="flex items-center gap-2"
        :class="{ 'text-primary': props.location }"
      >
        <Icon name="ph:map-pin" class="w-5 h-5" />
        <span>{{ props.location || "Location" }}</span>
      </Button>
      <Button
        v-if="props.location"
        variant="ghost"
        size="icon"
        @click="clearLocationFilter"
      >
        <Icon name="ph:x" class="w-4 h-4" />
      </Button>

      <!-- Location Sheet -->
      <Sheet
        :open="showLocationFilter"
        @update:open="showLocationFilter = false"
      >
        <SheetContent side="bottom" class="h-[80vh]">
          <SheetHeader>
            <SheetTitle>Filter by Location</SheetTitle>
          </SheetHeader>
          <div class="mt-4">
            <LocationPanel />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</template>
