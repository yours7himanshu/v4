<script setup lang="ts">
import { onErrorCaptured, ref } from "vue";

const error = ref<Error | null>(null);
const hasError = ref(false);

onErrorCaptured((err) => {
  error.value = err as Error;
  hasError.value = true;
  return false; // Prevent error from propagating
});
</script>

<template>
  <template v-if="!hasError">
    <slot />
  </template>
  <div v-else class="p-4 rounded-md bg-red-50 border border-red-200">
    <div class="text-red-700 font-medium">Something went wrong</div>
    <div class="text-red-600 text-sm mt-1">
      {{ error?.message || "An unexpected error occurred" }}
    </div>
  </div>
</template>
