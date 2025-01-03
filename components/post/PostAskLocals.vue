<script setup lang="ts">
import type { AskLocalsContent } from "~/schemas/post";

defineProps<{
  content: AskLocalsContent;
}>();
</script>

<template>
  <div class="p-4 flex-1">
    <div class="space-y-4">
      <PostTitle :title="content.title" />
      <p class="text-gray-600 whitespace-pre-wrap">
        {{ content.text }}
      </p>
    </div>
  </div>
  <PostTags v-if="content.tags" :tags="content.tags" />
</template>
