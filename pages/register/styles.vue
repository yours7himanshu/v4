<script setup lang="ts">
const route = useRoute();
const router = useRouter();

const preselectedType = ref((route.query.type as string) || "");
const selectedCommunities = ref<string[]>([]);
const searchQuery = ref("");

// Simulated large list of dance styles (replace with actual data)
const allDanceStyles = [
  // Latin
  { id: "salsa", label: "Salsa", category: "Latin", popular: true },
  { id: "bachata", label: "Bachata", category: "Latin", popular: true },
  { id: "merengue", label: "Merengue", category: "Latin" },
  { id: "cha-cha", label: "Cha Cha", category: "Latin" },
  { id: "samba", label: "Samba", category: "Latin" },
  { id: "rumba", label: "Rumba", category: "Latin" },
  // Ballroom
  { id: "waltz", label: "Waltz", category: "Ballroom", popular: true },
  { id: "tango", label: "Tango", category: "Ballroom", popular: true },
  { id: "foxtrot", label: "Foxtrot", category: "Ballroom" },
  // Urban
  { id: "hiphop", label: "Hip Hop", category: "Urban", popular: true },
  { id: "breakdance", label: "Breakdance", category: "Urban" },
  { id: "house", label: "House", category: "Urban" },
  { id: "popping", label: "Popping", category: "Urban" },
  { id: "locking", label: "Locking", category: "Urban" },
  // And many more... (this is just a sample)
];

// Popular styles shown first
const popularStyles = computed(() =>
  allDanceStyles.filter((style) => style.popular)
);

// Filtered styles based on search
const filteredStyles = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return allDanceStyles.filter(
    (style) =>
      style.label.toLowerCase().includes(query) ||
      style.category.toLowerCase().includes(query)
  );
});

// Group styles by category
const groupedStyles = computed(() => {
  const groups: Record<string, typeof allDanceStyles> = {};
  filteredStyles.value.forEach((style) => {
    if (!groups[style.category]) {
      groups[style.category] = [];
    }
    groups[style.category].push(style);
  });
  return groups;
});

// Preselect communities based on user type or query
onMounted(() => {
  if (preselectedType.value) {
    selectedCommunities.value = [preselectedType.value];
  }
});

const toggleCommunity = (id: string) => {
  const index = selectedCommunities.value.indexOf(id);
  if (index === -1) {
    selectedCommunities.value.push(id);
  } else {
    selectedCommunities.value.splice(index, 1);
  }
};

const handleSubmit = () => {
  if (selectedCommunities.value.length === 0) {
    // TODO: Show error message
    return;
  }
  // TODO: Handle community selection submission
  console.log("Selected communities:", selectedCommunities.value);
  router.push("/register/success");
};

const removeStyle = (id: string) => {
  selectedCommunities.value = selectedCommunities.value.filter((s) => s !== id);
};
</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold mb-4">Choose Your Dance Styles</h1>
        <p class="text-gray-600 text-lg">
          Select the dance styles you're interested in to personalize your
          experience
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <form @submit.prevent="handleSubmit" class="space-y-8">
          <!-- Search Input -->
          <div class="relative">
            <Input
              v-model="searchQuery"
              type="search"
              placeholder="Search dance styles..."
              class="pl-10"
            />
            <Icon
              name="ph:magnifying-glass"
              class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
            />
          </div>

          <!-- Selected Styles -->
          <div v-if="selectedCommunities.length > 0" class="space-y-3">
            <label class="block text-sm font-medium text-gray-700">
              Selected Styles
            </label>
            <div class="flex flex-wrap gap-2">
              <div
                v-for="id in selectedCommunities"
                :key="id"
                class="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-100 text-purple-700"
              >
                <span class="text-sm font-medium">
                  {{ allDanceStyles.find((s) => s.id === id)?.label }}
                </span>
                <button
                  type="button"
                  @click="removeStyle(id)"
                  class="w-4 h-4 rounded-full hover:bg-purple-200 inline-flex items-center justify-center"
                >
                  <Icon name="ph:x" class="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          <!-- Popular Styles -->
          <div
            v-if="!searchQuery && popularStyles.length > 0"
            class="space-y-3"
          >
            <label class="block text-sm font-medium text-gray-700">
              Popular Styles
            </label>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="style in popularStyles"
                :key="style.id"
                type="button"
                @click="toggleCommunity(style.id)"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all duration-200 hover:border-purple-500 hover:bg-purple-50"
                :class="[
                  selectedCommunities.includes(style.id)
                    ? 'border-purple-500 bg-purple-50'
                    : 'border-gray-200',
                ]"
              >
                <Icon name="ph:music-notes" class="w-5 h-5 text-purple-600" />
                <span class="font-medium">{{ style.label }}</span>
              </button>
            </div>
          </div>

          <!-- All Styles by Category -->
          <div v-if="filteredStyles.length > 0" class="space-y-8">
            <div
              v-for="(styles, category) in groupedStyles"
              :key="category"
              class="space-y-3"
            >
              <label class="block text-sm font-medium text-gray-700">
                {{ category }}
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  v-for="style in styles"
                  :key="style.id"
                  type="button"
                  @click="toggleCommunity(style.id)"
                  class="flex items-center gap-2 p-3 rounded-lg border-2 transition-all duration-200 hover:border-purple-500 hover:bg-purple-50 text-left"
                  :class="[
                    selectedCommunities.includes(style.id)
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200',
                  ]"
                >
                  <Icon
                    name="ph:music-notes"
                    class="w-5 h-5 text-purple-600 flex-shrink-0"
                  />
                  <span class="font-medium">{{ style.label }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- No Results -->
          <div v-else-if="searchQuery" class="text-center py-12 text-gray-500">
            No dance styles found for "{{ searchQuery }}"
          </div>

          <div class="flex flex-col items-center gap-4 pt-8">
            <Button
              type="submit"
              size="lg"
              class="w-full max-w-md"
              :disabled="selectedCommunities.length === 0"
            >
              Continue
            </Button>
            <p class="text-sm text-gray-500">
              You can always update your preferences later in your profile
              settings
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
