<template>
  <nav class="bg-white shadow-sm fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-purple-600"
              >WeDance</NuxtLink
            >
          </div>
        </div>
        <!-- Desktop Navigation -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
          <NuxtLink to="/cities" class="text-gray-700 hover:text-purple-600"
            >Cities</NuxtLink
          >
          <NuxtLink to="/events" class="text-gray-700 hover:text-purple-600"
            >Events</NuxtLink
          >
          <NuxtLink to="/teachers" class="text-gray-700 hover:text-purple-600"
            >Teachers</NuxtLink
          >
          <NuxtLink to="/venues" class="text-gray-700 hover:text-purple-600"
            >Venues</NuxtLink
          >
          <button
            class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Join Community
          </button>
        </div>
        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="text-gray-700 hover:text-purple-600"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!isMobileMenuOpen"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Navigation -->
    <div v-show="isMobileMenuOpen" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          to="/cities"
          class="block px-3 py-2 text-gray-700 hover:text-purple-600"
          >Cities</NuxtLink
        >
        <NuxtLink
          to="/events"
          class="block px-3 py-2 text-gray-700 hover:text-purple-600"
          >Events</NuxtLink
        >
        <NuxtLink
          to="/teachers"
          class="block px-3 py-2 text-gray-700 hover:text-purple-600"
          >Teachers</NuxtLink
        >
        <NuxtLink
          to="/venues"
          class="block px-3 py-2 text-gray-700 hover:text-purple-600"
          >Venues</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>
