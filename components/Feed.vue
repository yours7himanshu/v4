<script setup lang="ts">
import { usePostsList, useUpdateStats } from "~/composables/trpc";
import { useQueryClient } from "vue-query";
import type { Post } from "~/server/trpc/schemas/post";

const props = defineProps({
  type: {
    type: String,
    default: "all",
  },
  limit: {
    type: Number,
    default: 10,
  },
});

// Query params with ref to make it reactive
const queryParams = ref({
  type: props.type,
  limit: props.limit,
});

// Watch for type changes
watch(
  () => props.type,
  (newType) => {
    queryParams.value.type = newType;
  }
);

// Query client for cache invalidation
const queryClient = useQueryClient();

// Posts query with infinite loading
const { data, isLoading, error, fetchNextPage, hasNextPage } = usePostsList(
  queryParams.value
);

// Computed posts from all pages
const posts = computed(() => {
  if (!data.value) return [] as Post[];
  return data.value.pages
    .flatMap((page) => page.items)
    .map((item) => ({
      ...item,
      stats: {
        likes: item.stats?.likes ?? 0,
        shares: item.stats?.shares ?? 0,
        comments: item.stats?.comments ?? 0,
      },
    })) as Post[];
});

// Watch for type changes and refetch
watchEffect(() => {
  if (props.type) {
    // Clear cache and refetch when type changes
    queryClient.invalidateQueries(["posts.list"]);
  }
});

// Load more posts
const loadMore = async () => {
  if (hasNextPage?.value && !isLoading.value && fetchNextPage.value) {
    await fetchNextPage.value();
  }
};

// Post interactions mutation
const { mutate: updateStats } = useUpdateStats();

const handleLike = (postId: number) => {
  updateStats({ postId, action: "like" });
};

const handleShare = (postId: number) => {
  updateStats({ postId, action: "share" });
};

const handleComment = (postId: number) => {
  updateStats({ postId, action: "comment" });
};
</script>

<template>
  <div class="max-w-xl mx-auto">
    <!-- Error state -->
    <div v-if="error" class="p-4 mb-4 text-red-500 bg-red-50 rounded-lg">
      {{ error.message }}
    </div>

    <!-- Loading state -->
    <div v-if="isLoading && !posts.length" class="space-y-4">
      <PostSkeleton v-for="n in 3" :key="n" />
    </div>

    <!-- Posts list -->
    <div v-else class="space-y-4">
      <Post
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @like="handleLike(post.id)"
        @share="handleShare(post.id)"
        @comment="handleComment(post.id)"
      />

      <!-- Empty state -->
      <div v-if="!posts.length" class="text-center py-8">
        <Icon name="ph:note" class="mx-auto h-12 w-12 text-gray-400" />
        <h3 class="mt-2 text-sm font-medium text-gray-900">No posts</h3>
        <p class="mt-1 text-sm text-gray-500">
          Get started by creating a new post.
        </p>
      </div>
    </div>

    <!-- Load more button -->
    <div class="text-center mt-8">
      <Button
        variant="link"
        @click="loadMore"
        :disabled="isLoading || !hasNextPage?.value"
      >
        <span v-if="isLoading">Loading...</span>
        <span v-else-if="hasNextPage?.value">Load More Posts</span>
        <span v-else>No more posts</span>
      </Button>
    </div>
  </div>
</template>
