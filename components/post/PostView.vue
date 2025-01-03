<script setup lang="ts">
import type { Post } from "~/schemas/post";

const props = defineProps<{
  post: Post;
}>();

const router = useRouter();
</script>

<template>
  <div>
    <Post :post="post" standalone />
    <PostComments />
  </div>
</template>
