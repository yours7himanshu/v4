<script setup lang="ts">
import GradientBackground from "~/components/common/GradientBackground.vue";
import { getDanceStyles } from "@/data/mockStyles";

// Search state
const searchQuery = ref("");

// Dance styles with filter
const danceStyles = computed(() => {
  const styles = getDanceStyles();
  if (!searchQuery.value) return styles;

  const query = searchQuery.value.toLowerCase();
  return styles.filter((style) => style.name.toLowerCase().includes(query));
});
</script>

<template>
  <div class="pt-16 relative min-h-[60vh] flex items-center overflow-hidden">
    <GradientBackground />

    <!-- Content -->
    <div class="relative w-full py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto">
          <h1
            class="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
          >
            Let's dance?
          </h1>
          <p
            class="text-lg md:text-xl text-white/80 mt-4 mb-12 max-w-2xl mx-auto"
          >
            Join a global community of dancers, learn from the best, and
            discover events worldwide
          </p>

          <!-- Dance Style Selection -->
          <div class="flex flex-col items-center gap-8">
            <div class="w-full max-w-lg">
              <div class="relative group">
                <Input
                  v-model="searchQuery"
                  placeholder="Search dance styles..."
                  class="h-14 pl-12 pr-4 bg-white text-gray-900 placeholder:text-gray-500 text-lg font-medium rounded-2xl shadow-xl ring-1 ring-purple-300/50 hover:ring-purple-400 focus:ring-2 focus:ring-purple-500 border-transparent transition-all duration-200"
                />
                <Icon
                  name="ph:magnifying-glass"
                  class="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200"
                />
              </div>
              <div class="mt-3 text-center">
                <p class="text-white/70">
                  New to dancing?
                  <NuxtLink
                    to="/quiz"
                    class="text-white hover:text-purple-200 font-medium ml-1"
                  >
                    Take our style quiz
                    <Icon
                      name="ph:arrow-right"
                      class="inline-block w-4 h-4 ml-0.5"
                    />
                  </NuxtLink>
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
              <StyleCard
                v-for="style in danceStyles"
                :key="style.name"
                :style="style"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
