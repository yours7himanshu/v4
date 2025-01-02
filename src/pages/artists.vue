<script setup>
import { ref, computed } from "vue";

const artists = [
  {
    id: 1,
    name: "Maykel Fonts",
    roles: ["instructor", "performer"],
    specialties: ["casino", "rueda", "son", "afro-cuban"],
    level: "master",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=maykel",
    followers: "50k+",
    rating: 4.9,
    reviewCount: 128,
    languages: ["Spanish", "English", "Italian"],
    experience: {
      years: 25,
      teachingLevels: ["beginner", "intermediate", "advanced"],
      achievements: [
        "World Salsa Champion 2018",
        "Best Casino Instructor 2019",
      ],
    },
    availability: {
      privateClasses: true,
      workshops: true,
      touring: true,
      currentLocation: "Madrid, Spain",
    },
    certifications: [
      "International Casino Instructor",
      "Cuban Dance Federation Master",
    ],
    socialMedia: {
      instagram: "@maykelfontssalsa",
      youtube: "@maykelfontscuba",
    },
  },
  {
    id: 2,
    name: "Yanet Fuentes",
    roles: ["choreographer", "performer"],
    specialties: ["ladies styling", "body movement", "performance"],
    level: "master",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=yanet",
    followers: "45k+",
    rating: 4.8,
    reviewCount: 95,
    languages: ["Spanish", "English"],
    experience: {
      years: 20,
      teachingLevels: ["intermediate", "advanced"],
      achievements: ["Choreographer of the Year 2020"],
    },
    availability: {
      privateClasses: false,
      workshops: true,
      touring: true,
      currentLocation: "Barcelona, Spain",
    },
  },
  {
    id: 3,
    name: "Yoannis Tamayo",
    roles: ["instructor", "performer"],
    specialties: ["casino", "rueda", "partner work"],
    level: "advanced",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=yoannis",
    followers: "35k+",
    rating: 4.7,
    reviewCount: 82,
    languages: ["Spanish", "English", "French"],
    experience: {
      years: 15,
      teachingLevels: ["beginner", "intermediate"],
      achievements: ["Best Rising Star 2021"],
    },
    availability: {
      privateClasses: true,
      workshops: true,
      touring: false,
      currentLocation: "Havana, Cuba",
    },
  },
  {
    id: 4,
    name: "Yeny Vargas",
    roles: ["choreographer", "performer", "instructor"],
    specialties: ["performance routines", "showdance", "ladies styling"],
    level: "advanced",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=yeny",
    followers: "30k+",
    rating: 4.6,
    reviewCount: 64,
    languages: ["Spanish", "English"],
    experience: {
      years: 12,
      teachingLevels: ["intermediate", "advanced"],
      achievements: ["Best Show Performance 2022"],
    },
    availability: {
      privateClasses: true,
      workshops: true,
      touring: true,
      currentLocation: "London, UK",
    },
  },
  {
    id: 5,
    name: "Fernando Sosa",
    roles: ["instructor", "dj"],
    specialties: ["casino", "musicality", "cuban salsa"],
    level: "master",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=fernando",
    followers: "40k+",
    rating: 4.8,
    reviewCount: 110,
    languages: ["Spanish", "English", "German"],
    experience: {
      years: 18,
      teachingLevels: ["beginner", "intermediate", "advanced"],
      achievements: ["Best Timba DJ 2021", "Casino Master Certification"],
    },
    availability: {
      privateClasses: true,
      workshops: true,
      touring: true,
      currentLocation: "Berlin, Germany",
    },
  },
  {
    id: 6,
    name: "Diana Rodriguez",
    roles: ["choreographer", "performer"],
    specialties: ["afro-cuban", "rumba", "contemporary fusion"],
    level: "advanced",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=diana",
    followers: "38k+",
    rating: 4.7,
    reviewCount: 88,
    languages: ["Spanish", "English", "Portuguese"],
    experience: {
      years: 14,
      teachingLevels: ["intermediate", "advanced"],
      achievements: ["Best Choreography 2023"],
    },
    availability: {
      privateClasses: false,
      workshops: true,
      touring: true,
      currentLocation: "Miami, USA",
    },
  },
  {
    id: 7,
    name: "Carlos Mendoza",
    roles: ["musician", "performer"],
    specialties: ["timba", "son", "percussion"],
    level: "master",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=carlos",
    followers: "42k+",
    rating: 4.9,
    reviewCount: 115,
    languages: ["Spanish", "English"],
    experience: {
      years: 22,
      teachingLevels: ["all levels"],
      achievements: ["Grammy Nominee 2020", "Best Timba Band Leader 2019"],
    },
    availability: {
      privateClasses: true,
      workshops: true,
      touring: true,
      currentLocation: "Paris, France",
    },
    instruments: ["piano", "timbales", "congas"],
  },
  {
    id: 8,
    name: "DJ Melao",
    roles: ["dj", "instructor"],
    specialties: ["timba", "salsa dura", "classic son"],
    level: "master",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=melao",
    followers: "55k+",
    rating: 4.8,
    reviewCount: 150,
    languages: ["Spanish", "English", "French"],
    experience: {
      years: 20,
      teachingLevels: ["beginner", "intermediate"],
      achievements: [
        "Best Latin DJ Europe 2022",
        "Musicality Workshop Specialist",
      ],
    },
    availability: {
      privateClasses: false,
      workshops: true,
      touring: true,
      currentLocation: "Amsterdam, Netherlands",
    },
    equipment: ["Pioneer CDJ-3000", "DJM-900NXS2"],
  },
  {
    id: 9,
    name: "Laura Santos",
    roles: ["videographer", "photographer"],
    specialties: [
      "dance documentation",
      "event coverage",
      "promotional content",
    ],
    level: "advanced",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=laura",
    followers: "28k+",
    rating: 4.7,
    reviewCount: 75,
    languages: ["Spanish", "English"],
    experience: {
      years: 10,
      achievements: [
        "Best Dance Documentary 2023",
        "Official Congress Videographer",
      ],
    },
    availability: {
      privateClasses: false,
      workshops: false,
      touring: true,
      currentLocation: "Mexico City, Mexico",
    },
    equipment: ["Sony FX6", "Canon R5", "DJI RS 3 Pro"],
    portfolio: "@laurasantosmedia",
  },
  {
    id: 10,
    name: "Manolito Rodriguez",
    roles: ["musician", "dj"],
    specialties: ["live mixing", "percussion", "electronic fusion"],
    level: "master",
    location: "Cuba",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=manolito",
    followers: "33k+",
    rating: 4.6,
    reviewCount: 92,
    languages: ["Spanish", "English"],
    experience: {
      years: 15,
      teachingLevels: ["intermediate", "advanced"],
      achievements: [
        "Best Live DJ Performance 2022",
        "Innovation in Cuban Music Award",
      ],
    },
    availability: {
      privateClasses: true,
      workshops: true,
      touring: true,
      currentLocation: "Tokyo, Japan",
    },
    instruments: ["congas", "bongos", "electronic percussion"],
    equipment: ["Ableton Live", "Roland SPD-SX"],
  },
];

// Primary filter states
const searchQuery = ref("");
const selectedRole = ref("all");
const selectedLocation = ref("all");
const selectedLanguage = ref("all");

// Secondary filter states
const selectedLevel = ref("all");
const selectedSpecialty = ref("all");
const showAvailable = ref(false);

// Role-specific filter states
const selectedTeachingLevel = ref("all");
const selectedEquipment = ref("all");
const selectedInstruments = ref("all");
const selectedServices = ref([]);

// Filter options
const roleOptions = [
  { value: "all", label: "All" },
  { value: "instructor", label: "Instructors" },
  { value: "performer", label: "Performers" },
  { value: "choreographer", label: "Choreographers" },
  { value: "musician", label: "Musicians" },
  { value: "dj", label: "DJs" },
  { value: "videographer", label: "Videographers" },
];

const levelOptions = [
  { value: "all", label: "All Experience" },
  { value: "master", label: "Master" },
  { value: "advanced", label: "Advanced" },
];

const teachingLevelOptions = [
  { value: "all", label: "All Class Levels" },
  { value: "beginner", label: "Beginner Classes" },
  { value: "intermediate", label: "Intermediate Classes" },
  { value: "advanced", label: "Advanced Classes" },
];

// Dynamic filter options based on role
const serviceOptions = computed(() => {
  switch (selectedRole.value) {
    case "instructor":
      return [
        { value: "privateClasses", label: "Private Classes" },
        { value: "workshops", label: "Workshops" },
      ];
    case "videographer":
      return [
        { value: "eventCoverage", label: "Event Coverage" },
        { value: "promotional", label: "Promotional Content" },
      ];
    default:
      return [];
  }
});

const specialtiesOptions = computed(() => {
  const roleSpecificSpecialties = artists
    .filter(
      (artist) =>
        selectedRole.value === "all" ||
        artist.roles.includes(selectedRole.value)
    )
    .flatMap((artist) => artist.specialties || []);

  const specialties = new Set(roleSpecificSpecialties);
  return [
    { value: "all", label: "All Specialties" },
    ...Array.from(specialties).map((s) => ({ value: s, label: s })),
  ];
});

const equipmentOptions = computed(() => {
  const equipment = new Set(
    artists
      .filter(
        (artist) =>
          artist.roles.includes("dj") || artist.roles.includes("videographer")
      )
      .flatMap((artist) => artist.equipment || [])
  );
  return [
    { value: "all", label: "All Equipment" },
    ...Array.from(equipment).map((e) => ({ value: e, label: e })),
  ];
});

const instrumentOptions = computed(() => {
  const instruments = new Set(
    artists
      .filter((artist) => artist.roles.includes("musician"))
      .flatMap((artist) => artist.instruments || [])
  );
  return [
    { value: "all", label: "All Instruments" },
    ...Array.from(instruments).map((i) => ({ value: i, label: i })),
  ];
});

// Show filters based on role
const showTeachingLevels = computed(() => selectedRole.value === "instructor");
const showEquipment = computed(() =>
  ["dj", "videographer"].includes(selectedRole.value)
);
const showInstruments = computed(() => selectedRole.value === "musician");
const showServices = computed(() =>
  ["instructor", "videographer"].includes(selectedRole.value)
);

// Get unique locations from artists
const locationOptions = computed(() => {
  const locations = new Set(
    artists.map(
      (artist) => artist.availability?.currentLocation || artist.location
    )
  );
  return [
    { value: "all", label: "All Locations" },
    ...Array.from(locations).map((loc) => ({ value: loc, label: loc })),
  ];
});

// Get unique languages from artists
const languageOptions = computed(() => {
  const languages = new Set(
    artists.flatMap((artist) => artist.languages || [])
  );
  return [
    { value: "all", label: "All Languages" },
    ...Array.from(languages).map((lang) => ({ value: lang, label: lang })),
  ];
});

const filteredArtists = computed(() => {
  let filtered = artists;

  if (searchQuery.value) {
    filtered = filtered.filter(
      (artist) =>
        artist.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        artist.roles.some((role) =>
          role.includes(searchQuery.value.toLowerCase())
        ) ||
        artist.location.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  if (selectedRole.value !== "all") {
    filtered = filtered.filter((artist) =>
      artist.roles.includes(selectedRole.value)
    );
  }

  // Level filter
  if (selectedLevel.value !== "all") {
    filtered = filtered.filter(
      (artist) => artist.level === selectedLevel.value
    );
  }

  // Location filter
  if (selectedLocation.value !== "all") {
    filtered = filtered.filter(
      (artist) =>
        (artist.availability?.currentLocation || artist.location) ===
        selectedLocation.value
    );
  }

  // Language filter
  if (selectedLanguage.value !== "all") {
    filtered = filtered.filter((artist) =>
      artist.languages?.includes(selectedLanguage.value)
    );
  }

  // Availability filter
  if (showAvailable.value) {
    filtered = filtered.filter(
      (artist) =>
        (artist.availability?.privateClasses ||
          artist.availability?.workshops) &&
        (!artist.availability?.touring || artist.availability?.currentLocation)
    );
  }

  // Teaching Level filter
  if (selectedTeachingLevel.value !== "all") {
    filtered = filtered.filter((artist) =>
      artist.experience?.teachingLevels?.includes(selectedTeachingLevel.value)
    );
  }

  // Specialty filter
  if (selectedSpecialty.value !== "all") {
    filtered = filtered.filter((artist) =>
      artist.specialties?.includes(selectedSpecialty.value)
    );
  }

  // Services filter
  if (selectedServices.value.length > 0) {
    filtered = filtered.filter((artist) =>
      selectedServices.value.some((service) => artist.availability?.[service])
    );
  }

  // Equipment filter (for DJs and Videographers)
  if (selectedEquipment.value !== "all") {
    filtered = filtered.filter((artist) =>
      artist.equipment?.includes(selectedEquipment.value)
    );
  }

  // Instruments filter (for Musicians)
  if (selectedInstruments.value !== "all") {
    filtered = filtered.filter((artist) =>
      artist.instruments?.includes(selectedInstruments.value)
    );
  }

  return filtered;
});

const hasActiveFilters = computed(() => {
  return (
    selectedRole.value !== "all" ||
    selectedLocation.value !== "all" ||
    selectedLanguage.value !== "all" ||
    selectedServices.value.length > 0 ||
    selectedTeachingLevel.value !== "all" ||
    selectedSpecialty.value !== "all" ||
    selectedEquipment.value !== "all" ||
    selectedInstruments.value !== "all" ||
    showAvailable.value ||
    searchQuery.value !== ""
  );
});

function clearFilters() {
  selectedRole.value = "all";
  selectedLocation.value = "all";
  selectedLanguage.value = "all";
  selectedServices.value = [];
  selectedTeachingLevel.value = "all";
  selectedSpecialty.value = "all";
  showAvailable.value = false;
  searchQuery.value = "";
  selectedEquipment.value = "all";
  selectedInstruments.value = "all";
}

function toggleService(service) {
  if (selectedServices.value.includes(service)) {
    selectedServices.value = selectedServices.value.filter(
      (s) => s !== service
    );
  } else {
    selectedServices.value.push(service);
  }
}

const showSearch = ref(false);
</script>

<template>
  <DanceStyleLayout
    title="Salsa Cubana"
    description="Connect, organize, and grow with your local salsa community. Find dance partners, join events, and share your passion across 40K+ dancers worldwide."
  >
    <!-- Filter and Search Section -->
    <div class="px-4 space-y-6 my-6">
      <!-- Role Filter with Search -->
      <div class="flex items-center gap-4 overflow-x-auto pb-2 -mx-4 px-4">
        <div class="flex gap-2 flex-1">
          <Button
            v-for="role in roleOptions"
            :key="role.value"
            :variant="selectedRole === role.value ? 'default' : 'outline'"
            @click="selectedRole = role.value"
            class="whitespace-nowrap"
          >
            {{ role.label }}
          </Button>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <Button
            variant="ghost"
            size="sm"
            class="text-gray-500"
            @click="showSearch = !showSearch"
          >
            <Icon
              :name="showSearch ? 'ph:x' : 'ph:magnifying-glass'"
              class="h-4 w-4"
            />
          </Button>
          <Input
            v-show="showSearch"
            v-model="searchQuery"
            placeholder="Search by name..."
            type="search"
            class="w-[180px] transition-all duration-200"
          />
        </div>

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

        <Select v-model="selectedLanguage">
          <SelectTrigger class="w-[140px]">
            <SelectValue placeholder="Language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="option in languageOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </SelectItem>
          </SelectContent>
        </Select>

        <Select v-model="selectedLevel">
          <SelectTrigger class="w-[160px]">
            <SelectValue placeholder="Experience Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              v-for="option in levelOptions"
              :key="option.value"
              :value="option.value"
            >
              {{ option.label }}
            </SelectItem>
          </SelectContent>
        </Select>

        <!-- Availability Toggle -->
        <div class="flex items-center gap-2">
          <Switch v-model="showAvailable" />
          <span class="text-sm text-gray-600">Available for Booking</span>
        </div>
      </div>

      <!-- Role-Specific Filters -->
      <div v-if="selectedRole !== 'all'" class="space-y-4 pt-4 border-t">
        <div class="flex flex-wrap items-center gap-3">
          <!-- Teaching Levels -->
          <Select v-if="showTeachingLevels" v-model="selectedTeachingLevel">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="Class Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="option in teachingLevelOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>

          <!-- Equipment -->
          <Select v-if="showEquipment" v-model="selectedEquipment">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="Equipment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="option in equipmentOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>

          <!-- Instruments -->
          <Select v-if="showInstruments" v-model="selectedInstruments">
            <SelectTrigger class="w-[160px]">
              <SelectValue placeholder="Instruments" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="option in instrumentOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>

          <!-- Specialties -->
          <Select v-model="selectedSpecialty">
            <SelectTrigger class="w-[180px]">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem
                v-for="option in specialtiesOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <!-- Services Buttons -->
        <div v-if="showServices" class="flex flex-wrap gap-2">
          <Button
            v-for="service in serviceOptions"
            :key="service.value"
            size="sm"
            :variant="
              selectedServices.includes(service.value) ? 'default' : 'outline'
            "
            @click="toggleService(service.value)"
          >
            {{ service.label }}
          </Button>
        </div>
      </div>
    </div>

    <!-- Artists Grid -->
    <div class="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <!-- Artist Card -->
      <div
        v-for="artist in filteredArtists"
        :key="artist.id"
        class="relative rounded-lg border border-gray-300 bg-white shadow-sm hover:border-gray-400 transition-all duration-200 flex flex-col h-full"
      >
        <!-- Card Content Wrapper -->
        <div class="flex-1 flex flex-col">
          <!-- Card Header with Image and Basic Info -->
          <div class="p-4 flex gap-4">
            <div class="flex-shrink-0">
              <img
                class="h-16 w-16 rounded-full object-cover"
                :src="artist.image"
                :alt="artist.name"
                loading="lazy"
              />
            </div>

            <div class="min-w-0 flex-1">
              <NuxtLink
                :to="`/artists/${artist.id}`"
                class="focus:outline-none"
              >
                <span class="absolute inset-0" aria-hidden="true" />

                <!-- Name and Master Badge -->
                <div class="flex items-center gap-2">
                  <h3 class="text-sm font-medium text-gray-900 truncate">
                    {{ artist.name }}
                  </h3>
                  <span
                    v-if="artist.level === 'master'"
                    class="shrink-0 px-2 py-0.5 text-xs bg-amber-50 text-amber-700 rounded"
                  >
                    Master
                  </span>
                </div>

                <!-- Roles -->
                <div class="flex flex-wrap gap-1.5 mt-2">
                  <span
                    v-for="role in artist.roles"
                    :key="role"
                    class="shrink-0 px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full"
                  >
                    {{ role.charAt(0).toUpperCase() + role.slice(1) }}
                  </span>
                </div>

                <!-- Languages -->
                <div class="flex flex-wrap items-center gap-1.5 mt-2">
                  <span
                    v-for="lang in artist.languages"
                    :key="lang"
                    class="text-xs text-gray-500"
                  >
                    {{ lang }}
                  </span>
                </div>

                <!-- Specialties -->
                <p
                  v-if="artist.specialties?.length"
                  class="mt-2 text-sm text-gray-600 line-clamp-2"
                >
                  {{ artist.specialties.join(" • ") }}
                </p>

                <!-- Experience -->
                <div
                  v-if="artist.experience"
                  class="mt-2 text-sm text-gray-600"
                >
                  {{ artist.experience.years }}+ years
                  <template v-if="artist.experience.teachingLevels">
                    • {{ artist.experience.teachingLevels.join(", ") }}
                  </template>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Availability - Move inside content wrapper -->
          <div
            v-if="artist.availability"
            class="px-4 pb-4 mt-auto flex items-center gap-2 text-xs text-gray-500"
          >
            <span
              v-if="artist.availability.privateClasses"
              class="flex items-center gap-1"
            >
              <Icon name="ph:check-circle" class="h-3 w-3 text-green-500" />
              Private Classes
            </span>
            <span
              v-if="artist.availability.workshops"
              class="flex items-center gap-1"
            >
              <Icon name="ph:check-circle" class="h-3 w-3 text-green-500" />
              Workshops
            </span>
          </div>
        </div>

        <!-- Card Footer -->
        <div
          class="px-4 py-3 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 rounded-b-lg"
        >
          <div class="flex items-center gap-1.5 shrink-0">
            <Icon name="ph:map-pin" class="h-4 w-4" />
            <span>
              {{ artist.availability?.currentLocation || artist.location }}
              <span
                v-if="artist.availability?.currentLocation"
                class="text-xs text-gray-400"
              >
                (from {{ artist.location }})
              </span>
            </span>
          </div>

          <div class="ml-auto flex items-center gap-4 shrink-0">
            <div class="flex items-center gap-1">
              <Icon name="ph:users" class="h-4 w-4" />
              <span>{{ artist.followers }}</span>
            </div>
            <div v-if="artist.rating" class="flex items-center gap-1">
              <Icon name="ph:star-fill" class="h-4 w-4 text-yellow-400" />
              <span>{{ artist.rating }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div
        v-if="filteredArtists.length === 0"
        class="col-span-full text-center py-12"
      >
        <Icon
          name="ph:user-circle-minus"
          class="mx-auto h-12 w-12 text-gray-400"
        />
        <h3 class="mt-2 text-sm font-semibold text-gray-900">
          No artists found
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Try adjusting your search terms or clear the search.
        </p>
      </div>
    </div>
  </DanceStyleLayout>
</template>
