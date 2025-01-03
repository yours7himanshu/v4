<script setup>
import { useContentStore } from "~/stores/content";
import { useContextStore } from "~/stores/context";
import { storeToRefs } from "pinia";

const props = defineProps({
  type: {
    type: String,
    default: "all",
  },
  limit: {
    type: Number,
  },
});

// Initialize stores
const contentStore = useContentStore();
const contextStore = useContextStore();

// Use storeToRefs to maintain reactivity
const { posts, isLoading, error, filters } = storeToRefs(contentStore);
const { filteredPosts } = storeToRefs(contentStore);

// Watch for prop changes to update filters
watch(
  () => props.type,
  (newType) => {
    contentStore.updateFilters({ type: newType });
  }
);

// Load posts when component mounts
onMounted(async () => {
  const cachedPosts = contextStore.getCacheValue("feed-posts");
  if (cachedPosts) {
    posts.value = cachedPosts;
  } else {
    await contentStore.fetchPosts();
    contextStore.setCacheValue("feed-posts", posts.value);
  }
});

// Apply limit to filtered posts
const displayedPosts = computed(() => {
  let postsToShow = filteredPosts.value;
  if (props.limit) {
    postsToShow = postsToShow.slice(0, props.limit);
  }
  return postsToShow;
});

const loadMore = async () => {
  // TODO: Implement pagination
  await contentStore.fetchPosts();
};
</script>

<template>
  <div class="max-w-xl mx-auto">
    <div v-if="error" class="p-4 mb-4 text-red-500 bg-red-50 rounded-lg">
      {{ error }}
    </div>

    <div v-if="isLoading && !posts.length" class="space-y-4">
      <PostSkeleton v-for="n in 3" :key="n" />
    </div>

    <div v-else class="space-y-4">
      <Post v-for="post in displayedPosts" :key="post.id" :post="post" />

      <div v-if="!displayedPosts.length" class="text-center py-8">
        <Icon name="ph:note" class="mx-auto h-12 w-12 text-gray-400" />
        <h3 class="mt-2 text-sm font-medium text-gray-900">No posts</h3>
        <p class="mt-1 text-sm text-gray-500">
          Get started by creating a new post.
        </p>
      </div>
    </div>

    <div class="text-center mt-8">
      <Button variant="link" @click="loadMore" :disabled="isLoading">
        <span v-if="isLoading">Loading...</span>
        <span v-else>Load More Posts</span>
      </Button>
    </div>
  </div>
</template>
