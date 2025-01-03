<script setup lang="ts">
import type { Post } from "~/schemas/post";
import PostNote from "./PostNote.vue";
import PostArticle from "./PostArticle.vue";
import PostEvent from "./PostEvent.vue";
import PostMeet from "./PostMeet.vue";
import PostReview from "./PostReview.vue";
import PostGig from "./PostGig.vue";
import PostAskLocals from "./PostAskLocals.vue";
import PostAd from "./PostAd.vue";
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
} as const;

const props = defineProps<{
  post: Post;
}>();

const getComponentName = (type: Post["type"]) => {
  return `Post${type
    .split("_")
    .map(capitalize)
    .join("")}` as keyof typeof components;
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
