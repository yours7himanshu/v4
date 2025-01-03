<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  src: string;
  alt: string;
  aspectVideo?: boolean;
}>();

const isLoading = ref(true);
const hasError = ref(false);

const onLoad = () => {
  isLoading.value = false;
};

const onError = () => {
  isLoading.value = false;
  hasError.value = true;
};
</script>

<template>
  <div class="relative" :class="{ 'aspect-video': aspectVideo }">
    <div v-if="isLoading" class="absolute inset-0 bg-gray-100 animate-pulse" />

    <div
      v-if="hasError"
      class="absolute inset-0 bg-gray-100 flex items-center justify-center"
    >
      <Icon name="ph:image-square" class="w-8 h-8 text-gray-400" />
    </div>

    <img
      v-show="!isLoading && !hasError"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover"
      @load="onLoad"
      @error="onError"
    />
  </div>
</template>
