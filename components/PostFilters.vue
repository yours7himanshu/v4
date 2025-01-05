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
const clearLocationFilter = () => {
  emit("update:location", null);
  showLocationFilter.value = false;
};

const selectedType = computed({
  get: () => props.type,
  set: (value) => emit("update:type", value),
});

const selectedLocation = computed({
  get: () => props.location,
  set: (value) => {
    emit("update:location", value);
    showLocationFilter.value = false;
  },
});
</script>

<template>
  <!-- Mobile View -->
  <div class="md:hidden flex items-center gap-2">
    <DropdownMenu>
      <DropdownMenuTrigger as-child>
        <Button variant="outline" class="flex items-center gap-2">
          <Icon
            :name="
              postTypeOptions.find((t) => t.value === selectedType)?.icon ||
              'ph:list'
            "
            class="w-4 h-4"
          />
          {{ postTypeOptions.find((t) => t.value === selectedType)?.label }}
          <Icon name="ph:caret-down" class="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          v-for="type in postTypeOptions"
          :key="type.value"
          @click="selectedType = type.value"
          :class="{ 'bg-accent': selectedType === type.value }"
        >
          <Icon :name="type.icon" class="w-4 h-4 mr-2" />
          {{ type.label }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

    <Button
      variant="ghost"
      @click="showLocationFilter = true"
      class="flex items-center gap-2"
      :class="{ 'text-primary': selectedLocation }"
    >
      <Icon name="ph:map-pin" class="w-5 h-5" />
      <span>{{ selectedLocation || "Location" }}</span>
    </Button>
    <Button
      v-if="selectedLocation"
      variant="ghost"
      size="icon"
      @click="clearLocationFilter"
    >
      <Icon name="ph:x" class="w-4 h-4" />
    </Button>

    <Sheet :open="showLocationFilter" @update:open="showLocationFilter = false">
      <SheetContent side="bottom" class="h-[80vh]">
        <SheetHeader>
          <SheetTitle>Filter by Location</SheetTitle>
        </SheetHeader>
        <div class="mt-4">
          <LocationPanel
            :location="selectedLocation"
            @update:location="selectedLocation = $event"
          />
        </div>
      </SheetContent>
    </Sheet>
  </div>

  <!-- Desktop View -->
  <div class="hidden md:flex flex-col gap-4 w-60">
    <div class="flex flex-col gap-1">
      <Button
        v-for="type in postTypeOptions"
        :key="type.value"
        :variant="selectedType === type.value ? 'default' : 'ghost'"
        @click="selectedType = type.value"
        class="justify-start"
      >
        <Icon :name="type.icon" class="w-4 h-4 mr-2" />
        {{ type.label }}
      </Button>
    </div>

    <div class="flex items-center gap-2">
      <Button
        variant="ghost"
        @click="showLocationFilter = true"
        class="flex-1 justify-start"
        :class="{ 'text-primary': selectedLocation }"
      >
        <Icon name="ph:map-pin" class="w-5 h-5 mr-2" />
        <span>{{ selectedLocation || "Location" }}</span>
      </Button>
      <Button
        v-if="selectedLocation"
        variant="ghost"
        size="icon"
        @click="clearLocationFilter"
      >
        <Icon name="ph:x" class="w-4 h-4" />
      </Button>
    </div>
  </div>

  <!-- Location Sheet (shared between mobile and desktop) -->
  <Sheet :open="showLocationFilter" @update:open="showLocationFilter = false">
    <SheetContent side="bottom" class="h-[80vh]">
      <SheetHeader>
        <SheetTitle>Filter by Location</SheetTitle>
      </SheetHeader>
      <div class="mt-4">
        <LocationPanel
          :location="selectedLocation"
          @update:location="selectedLocation = $event"
        />
      </div>
    </SheetContent>
  </Sheet>
</template>
