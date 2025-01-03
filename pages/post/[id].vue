<script setup lang="ts">
import type { Post } from "~/schemas/post";
import { mockPosts } from "~/data/mockPosts";

const route = useRoute();
const id = parseInt(route.params.id as string);

const post = computed(() => mockPosts.find((p) => p.id === id) as Post);
</script>

<template>
  <div class="container max-w-xl mx-auto px-4 py-20">
    <div class="flex items-center gap-2 mb-4">
      <NuxtLink
        to="/"
        class="flex items-center text-gray-500 hover:text-gray-700"
      >
        <Icon name="heroicons:arrow-left" class="w-6 h-6" />
      </NuxtLink>
      <h1 class="text-xl font-semibold leading-none">Post</h1>
    </div>

    <Post v-if="post" :post="post" />
    <div v-else class="text-center py-8">
      <p class="text-gray-500">Post not found</p>
    </div>
  </div>
</template>
