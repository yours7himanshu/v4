<script setup lang="ts">
import type { MeetContent } from "~/schemas/post";

const DETAIL_ICONS = {
  type: "ph:users",
  format: "ph:layout",
  gender: "ph:gender-intersex",
  when: "ph:calendar",
  where: "ph:map-pin",
  level: "ph:chart-line",
  style: "ph:music-notes",
  seats: "ph:car",
  contribution: "ph:money",
} as const;

defineProps<{
  content: MeetContent;
}>();
</script>

<template>
  <div class="p-4 flex-1">
    <div class="space-y-4">
      <PostTitle :title="content.title" />
      <p class="text-gray-600 whitespace-pre-wrap">
        {{ content.text }}
      </p>
      <div class="bg-purple-50 rounded-lg p-4 space-y-2">
        <div
          v-for="(value, key) in content.details"
          :key="key"
          class="flex items-center gap-2"
        >
          <Icon
            :name="DETAIL_ICONS[key as keyof typeof DETAIL_ICONS]"
            class="w-4 h-4 text-purple-600"
          />
          <span class="capitalize text-gray-600">{{ key }}:</span>
          <span class="text-purple-600">{{ value }}</span>
        </div>
      </div>
    </div>
  </div>
  <PostTags v-if="content.tags" :tags="content.tags" />
</template>
