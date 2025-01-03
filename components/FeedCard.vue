<script setup lang="ts">
import type { Post } from "~/schemas/post";
import PostNote from "./post/PostNote.vue";
import PostArticle from "./post/PostArticle.vue";
import PostEvent from "./post/PostEvent.vue";
import PostMeet from "./post/PostMeet.vue";
import PostReview from "./post/PostReview.vue";
import PostGig from "./post/PostGig.vue";
import PostAskLocals from "./post/PostAskLocals.vue";
import PostAd from "./post/PostAd.vue";
import { validateContent } from "~/utils/post";
import { computed } from "vue";

const components = {
  PostNote,
  PostArticle,
  PostEvent,
  PostMeet,
  PostReview,
  PostGig,
  PostAskLocals,
  PostAd,
};

const props = defineProps<{
  post: Post;
}>();

const getComponentName = (type: Post["type"]) => {
  return `Post${type.split("_").map(capitalize).join("")}`;
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const validationResult = computed(() => {
  return validateContent(props.post.type, props.post.content);
});

const hasError = computed(() => !validationResult.value.success);

const validationError = computed(() => {
  if (validationResult.value.success) return null;
  return validationResult.value.error.issues
    .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
    .join(", ");
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-100">
    <PostHeader
      :author="post.author"
      :timestamp="post.timestamp"
      :type="post.type"
    />

    <div v-if="hasError" class="p-4 text-red-600">
      <div class="font-medium">
        Invalid content for post type: {{ post.type }}
      </div>
      <div v-if="validationError" class="mt-1 text-sm">
        {{ validationError }}
      </div>
    </div>
    <component
      v-else
      :is="components[getComponentName(post.type)]"
      :content="post.content"
    />

    <PostActions :stats="post.stats" :type="post.type" />
  </div>
</template>
