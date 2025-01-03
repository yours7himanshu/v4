<script setup>
import { ref, computed } from "vue";
import { mockPosts } from "~/data/mockPosts";

const props = defineProps({
  type: {
    type: String,
    default: "all",
  },
  limit: {
    type: Number,
  },
});

const posts = ref(mockPosts);

// Filter posts based on type
const filteredPosts = computed(() => {
  let postsToShow = posts.value;

  if (props.type === "all") {
    postsToShow = posts.value;
  } else {
    postsToShow = posts.value.filter((post) => post.type === props.type);
  }

  if (props.limit) {
    postsToShow = postsToShow.slice(0, props.limit);
  }

  return postsToShow;
});

const loadMore = () => {
  // TODO: Implement load more functionality
  console.log("Load more clicked");
};
</script>

<template>
  <div class="max-w-xl mx-auto">
    <div class="space-y-4">
      <Post v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>

    <div class="text-center mt-8">
      <Button variant="link" @click="loadMore">Load More Posts</Button>
    </div>
  </div>
</template>
