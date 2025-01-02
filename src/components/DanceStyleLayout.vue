<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stats: {
    type: Array,
    default: () => [
      { label: "Members", value: "1,200" },
      { label: "Posts", value: "500" },
      { label: "Projects", value: "50" },
      { label: "Response Rate", value: "92%" },
    ],
  },
  videoUrl: {
    type: String,
    default: "https://www.youtube.com/embed/R7E9cNydevg",
  },
});
</script>

<template>
  <!-- Hero Section -->
  <div class="pt-32 pb-12 bg-gradient-to-b from-purple-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Left: Content -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ title }}</h1>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl md:max-w-none mx-auto">
            {{ description }}
          </p>
          <div class="flex justify-center md:justify-start gap-4">
            <slot name="actions">
              <Button variant="default" size="lg">Join Community</Button>
            </slot>
          </div>

          <div
            class="flex justify-center md:justify-start gap-8 mt-8 text-gray-500"
          >
            <div v-for="stat in stats" :key="stat.label">
              <div class="text-xl font-bold text-gray-900">
                {{ stat.value }}
              </div>
              <div class="text-sm">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Right: Video -->
        <div class="space-y-4">
          <div class="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              class="w-full h-full"
              :src="videoUrl"
              :title="`${title} Video`"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <slot name="video-extra">
            <!-- Video Game Invitation -->
            <div class="bg-purple-50 rounded-lg p-4">
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-sm font-medium text-purple-900">
                    Help choose the best inspiration
                  </p>
                  <p class="text-xs text-purple-700">
                    Vote between pairs of videos
                  </p>
                </div>
                <Button variant="default" size="sm"> Play Video Game </Button>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </div>

  <!-- Navigation -->
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="border-b border-gray-200">
        <div class="flex space-x-8 overflow-x-auto">
          <NuxtLink
            to="/salsa"
            class="border-b-[3px] px-1 py-4 text-sm font-medium whitespace-nowrap -mb-[1px]"
            :class="[
              $route.path === '/salsa'
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700',
            ]"
          >
            Feed
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="border-b-[3px] px-1 py-4 text-sm font-medium whitespace-nowrap -mb-[1px]"
            :class="[
              $route.path.includes('/about')
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700',
            ]"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/artists"
            class="border-b-[3px] px-1 py-4 text-sm font-medium whitespace-nowrap -mb-[1px]"
            :class="[
              $route.path.includes('/artists')
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700',
            ]"
          >
            Artists
          </NuxtLink>
          <NuxtLink
            to="/events"
            class="border-b-[3px] px-1 py-4 text-sm font-medium whitespace-nowrap -mb-[1px]"
            :class="[
              $route.path.includes('/events')
                ? 'border-purple-600 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700',
            ]"
          >
            Events
          </NuxtLink>
          <a
            href="#"
            class="border-b-[3px] border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap -mb-[1px]"
          >
            Learning
          </a>
          <a
            href="#"
            class="border-b-[3px] border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap -mb-[1px]"
          >
            Community
          </a>
        </div>
      </nav>
      <slot />
    </div>
  </div>

  <!-- Footer -->
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <p class="text-gray-600">&copy; 2024 WeDance. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>
