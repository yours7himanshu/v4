<script setup lang="ts">
defineProps<{
  points?: number;
}>();

const formatNumber = (num: number) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num;
};
</script>

<template>
  <span v-if="points" class="text-sm text-orange-500 flex items-center gap-0.5">
    <Icon name="heroicons:fire" class="w-4 h-4" />
    {{ formatNumber(points) }}
  </span>
</template>
