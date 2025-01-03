<script setup lang="ts">
import type { AdContent } from "~/schemas/post";

defineProps<{
  content: AdContent;
}>();
</script>

<template>
  <div class="flex-1 flex flex-col">
    <PostImage
      v-if="content.image"
      :src="content.image"
      :alt="content.title"
      aspect-video
    />
    <div class="p-4 space-y-4">
      <PostTitle :title="content.title" />
      <p class="text-gray-600">{{ content.description }}</p>
    </div>
    <PostTags v-if="content.tags" :tags="content.tags" />
  </div>
</template>
