<script setup lang="ts">
import type { ReviewContent } from "~/schemas/post";

defineProps<{
  content: ReviewContent;
}>();
</script>

<template>
  <div class="px-4 pb-4 flex-1">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">{{ content.title }}</h2>
      <div class="flex items-center gap-1">
        <Icon
          v-for="i in 5"
          :key="i"
          :name="i <= content.rating ? 'ph:star-fill' : 'ph:star'"
          class="w-5 h-5"
          :class="i <= content.rating ? 'text-yellow-400' : 'text-gray-300'"
        />
      </div>
      <p class="text-gray-600">{{ content.description }}</p>
    </div>
  </div>
</template>
