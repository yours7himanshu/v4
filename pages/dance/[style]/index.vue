<script setup>
import { ref } from "vue";

// State
const selectedPostType = ref("all");
const selectedLocation = ref(null);
</script>

<template>
  <DanceStyleLayout
    title="Salsa Cubana"
    description="Connect, organize, and grow with your local salsa community. Find dance partners, join events, and share your passion across 40K+ dancers worldwide."
  >
    <!-- Mobile Toolbar -->
    <div class="md:hidden bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <PostFilters
            v-model:type="selectedPostType"
            v-model:location="selectedLocation"
          />
        </div>
      </div>
    </div>

    <!-- Desktop Layout -->
    <div class="hidden md:flex px-2 gap-8 my-8">
      <!-- Sidebar -->
      <PostFilters
        v-model:type="selectedPostType"
        v-model:location="selectedLocation"
      />

      <!-- Main Content -->
      <div class="hidden flex-1 md:flex flex-col gap-4 max-w-xl mx-auto">
        <Create />
        <Feed :type="selectedPostType" />
      </div>
    </div>

    <!-- Mobile Content -->
    <div class="md:hidden flex flex-col my-4 gap-4">
      <Create />
      <Feed :type="selectedPostType" />
    </div>
  </DanceStyleLayout>
</template>
