<script setup>
const artists = [
  {
    id: 1,
    name: "Maykel Fonts",
    role: "Dancer & Instructor",
    location: "Cuba",
    image: "/images/placeholder.jpg",
    followers: "50k+",
  },
  {
    id: 2,
    name: "Yanet Fuentes",
    role: "Dancer & Choreographer",
    location: "Cuba",
    image: "/images/placeholder.jpg",
    followers: "45k+",
  },
  // Add more artists as needed
];
</script>

<template>
  <DanceStyleLayout
    title="Salsa Cubana"
    description="Connect, organize, and grow with your local salsa community. Find dance partners, join events, and share your passion across 40K+ dancers worldwide."
  >
    <div class="p-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="artist in artists"
        :key="artist.id"
        class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm hover:border-gray-400"
      >
        <div class="flex-shrink-0">
          <img
            class="h-16 w-16 rounded-full object-cover"
            :src="artist.image"
            :alt="artist.name"
          />
        </div>
        <div class="min-w-0 flex-1">
          <NuxtLink :to="`/artists/${artist.id}`" class="focus:outline-none">
            <span class="absolute inset-0" aria-hidden="true" />
            <p class="text-sm font-medium text-gray-900">{{ artist.name }}</p>
            <p class="truncate text-sm text-gray-500">{{ artist.role }}</p>
            <div class="mt-1 flex items-center gap-2 text-sm text-gray-500">
              <Icon name="ph:map-pin" class="h-4 w-4" />
              <span>{{ artist.location }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </DanceStyleLayout>
</template>
