<script setup>
const route = useRoute();
const isMobileMenuOpen = ref(false);

const navigationItems = [
  { to: "/feed", label: "Feed" },
  { to: "/events", label: "Events" },
  { to: "/artists", label: "Artists" },
  { to: "/venues", label: "Venues" },
];

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false;
  }
);
</script>

<template>
  <nav
    class="bg-white shadow-sm fixed w-full z-50 dark:bg-slate-950 dark:border-b dark:border-slate-800"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-2xl font-bold text-foreground"
              >WeDance</NuxtLink
            >
          </div>
        </div>
        <!-- Desktop Navigation -->
        <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
          <NuxtLink
            v-for="item in navigationItems"
            :key="item.to"
            :to="item.to"
            class="text-gray-700 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
            active-class="text-purple-600 dark:text-purple-400"
            >{{ item.label }}</NuxtLink
          >
          <ThemeToggle />
          <Button variant="default">Sign In</Button>
        </div>
        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <Button variant="ghost" size="icon" @click="toggleMobileMenu">
            <Icon
              :name="isMobileMenuOpen ? 'lucide:x' : 'lucide:menu'"
              class="h-6 w-6"
            />
          </Button>
        </div>
      </div>
    </div>
    <!-- Mobile Navigation -->
    <div v-show="isMobileMenuOpen" class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="item in navigationItems"
          :key="item.to"
          :to="item.to"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-800"
          active-class="text-purple-600 bg-gray-50 dark:text-purple-400 dark:bg-gray-800"
          >{{ item.label }}</NuxtLink
        >
        <div class="flex items-center gap-2 px-3 py-2">
          <ThemeToggle />
          <span class="text-sm text-gray-600 dark:text-gray-400"
            >Toggle theme</span
          >
        </div>
        <Button variant="default" class="w-full mt-4">Sign In</Button>
      </div>
    </div>
  </nav>
  <div class="h-16"></div>
</template>
