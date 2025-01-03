<script setup lang="ts">
import type { EventContent } from "~/schemas/post";

defineProps<{
  content: EventContent;
}>();
</script>

<template>
  <div class="flex-1 flex flex-col">
    <div v-if="content.image" class="relative aspect-video">
      <PostImage :src="content.image" :alt="content.title" aspect-video />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
      />
      <div class="absolute bottom-0 left-0 right-0 p-4">
        <PostTitle :title="content.title" white />
      </div>
    </div>
    <div class="p-4 space-y-4">
      <p class="text-gray-600">{{ content.description }}</p>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <Icon name="ph:calendar" class="w-5 h-5 text-purple-600" />
          <span>{{ content.date }}</span>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="ph:map-pin" class="w-5 h-5 text-purple-600" />
          <span>{{ content.location }}</span>
        </div>
        <div v-if="content.price" class="flex items-center gap-2">
          <Icon name="ph:ticket" class="w-5 h-5 text-green-600" />
          <span class="text-green-600">
            {{ content.price.amount }}
            {{ content.price.currency }}
          </span>
        </div>
      </div>
    </div>
    <PostTags v-if="content.tags" :tags="content.tags" />
  </div>
</template>
