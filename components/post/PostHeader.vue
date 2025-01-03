<script setup lang="ts">
import type { PostAuthor, PostType } from "~/schemas/post";
import { POST_TYPE_ICONS } from "~/constants/post";

defineProps<{
  author: PostAuthor;
  timestamp: string;
  type: PostType;
}>();
</script>

<template>
  <div class="p-4 flex items-center gap-3">
    <img
      :src="author.image"
      :alt="author.name"
      class="w-10 h-10 rounded-full object-cover"
    />
    <div class="flex-1">
      <div class="font-medium">{{ author.name }}</div>
      <div class="text-sm text-gray-500 flex items-center gap-1">
        <span>{{ timestamp }}</span>
        <span>·</span>
        <span class="text-purple-600">{{ author.location }}</span>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-full">
        <Icon
          v-if="POST_TYPE_ICONS[type]"
          :name="POST_TYPE_ICONS[type]"
          class="w-4 h-4 text-purple-600"
        />
        <span class="text-sm text-purple-600 capitalize">{{
          type.replace("_", " ")
        }}</span>
      </div>
      <Button variant="ghost" size="icon">
        <Icon name="ph:dots-three" class="w-5 h-5" />
      </Button>
    </div>
  </div>
</template>
