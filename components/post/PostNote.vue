<script setup lang="ts">
import type { NoteContent } from "~/schemas/post";

defineProps<{
  content: NoteContent;
}>();
</script>

<template>
  <div class="p-4 flex-1">
    <div class="space-y-4">
      <p class="text-gray-600 whitespace-pre-wrap">
        {{ content.text }}
      </p>
      <PostPoll v-if="content.poll" :poll="content.poll" />
      <PostLinks v-if="content.links" :links="content.links" />
    </div>
  </div>
  <PostTags v-if="content.tags" :tags="content.tags" />
</template>
