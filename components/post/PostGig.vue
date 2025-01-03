<script setup lang="ts">
import type { GigContent } from "~/schemas/post";

defineProps<{
  content: GigContent;
}>();
</script>

<template>
  <div class="p-4 flex-1">
    <div class="space-y-4">
      <PostTitle :title="content.title" />
      <p class="text-gray-600">{{ content.description }}</p>
      <div class="bg-purple-50 rounded-lg p-4 space-y-2">
        <div
          v-for="detail in content.details"
          :key="detail.text"
          class="flex items-center gap-2"
        >
          <Icon :name="detail.icon" class="w-4 h-4 text-purple-600" />
          <span>{{ detail.text }}</span>
        </div>
      </div>
    </div>
  </div>
  <PostTags v-if="content.tags" :tags="content.tags" />
</template>
