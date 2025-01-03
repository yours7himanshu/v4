<script setup lang="ts">
defineProps<{
  tags: string[];
}>();
</script>

<template>
  <div class="px-4 pb-4 flex flex-wrap gap-2">
    <span
      v-for="tag in tags"
      :key="tag"
      class="bg-purple-50 text-purple-600 text-sm px-3 py-1 rounded-full"
    >
      {{ tag }}
    </span>
  </div>
</template>
