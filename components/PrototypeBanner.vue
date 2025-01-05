<script setup lang="ts">
import { ref } from "vue";

const isVisible = ref(true);

const hide = () => {
  isVisible.value = false;
};
</script>

<template>
  <div
    v-if="isVisible"
    class="fixed bottom-4 right-4 max-w-sm bg-white rounded-lg shadow-lg border border-purple-100 p-4 animate-fade-in"
  >
    <div class="flex items-start gap-3">
      <div class="flex-1">
        <div class="font-medium">✨ Early Preview</div>
        <p class="text-sm text-gray-600 mt-1">
          Be among the first to shape the future of dance community
        </p>
        <a
          href="https://t.me/WeDancePlatform"
          target="_blank"
          class="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700 text-sm mt-2"
        >
          <Icon name="ph:telegram-logo" class="w-4 h-4" />
          Join Development Updates
        </a>
      </div>
      <button
        @click="hide"
        class="text-gray-400 hover:text-gray-500"
        aria-label="Close"
      >
        <Icon name="ph:x" class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>
