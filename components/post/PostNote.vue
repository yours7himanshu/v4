<script setup lang="ts">
import type { NoteContent } from "~/schemas/post";

defineProps<{
  content: NoteContent;
}>();
</script>

<template>
  <div class="p-4 flex-1">
    <div class="space-y-4">
      <!-- Text Content -->
      <p class="text-gray-600 whitespace-pre-wrap">
        {{ content.text }}
      </p>

      <!-- Poll if any -->
      <div v-if="content.poll" class="space-y-2">
        <div
          v-for="option in content.poll.options"
          :key="option.id"
          class="relative bg-purple-50 rounded-lg p-3 cursor-pointer hover:bg-purple-100"
        >
          <div class="flex justify-between items-center relative z-10">
            <span>{{ option.text }}</span>
            <span class="text-sm text-gray-500">
              {{ Math.round((option.votes / content.poll.totalVotes) * 100) }}%
            </span>
          </div>
          <div
            class="absolute left-0 top-0 h-full bg-purple-200 rounded-lg opacity-50"
            :style="{
              width: `${(option.votes / content.poll.totalVotes) * 100}%`,
            }"
          />
        </div>
        <div class="text-sm text-gray-500">
          {{ content.poll.totalVotes }} votes
        </div>
      </div>

      <!-- Links if any -->
      <div v-if="content.links" class="space-y-2">
        <a
          v-for="link in content.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="block bg-gray-50 p-3 rounded-lg hover:bg-gray-100"
        >
          <div class="flex items-center gap-2">
            <Icon name="ph:link" class="w-4 h-4 text-purple-600" />
            <span class="text-purple-600">{{ link.title }}</span>
          </div>
          <p v-if="link.description" class="text-sm text-gray-600 mt-1">
            {{ link.description }}
          </p>
        </a>
      </div>
    </div>
  </div>

  <PostTags v-if="content.tags" :tags="content.tags" />
</template>
