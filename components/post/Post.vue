<script setup lang="ts">
import type { Post } from "~/schemas/post";
import { defineAsyncComponent } from "vue";
import PostSkeleton from "../common/PostSkeleton.vue";
import ErrorBoundary from "../common/ErrorBoundary.vue";

const props = defineProps<{
  post: Post;
}>();

const { components, getComponentName } = usePostComponent();

const getAsyncComponent = (type: Post["type"]) => {
  const componentName = getComponentName(type);
  const component = components[componentName];

  return defineAsyncComponent({
    loader: () => component(),
    loadingComponent: PostSkeleton,
    errorComponent: ErrorBoundary,
  });
};
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-100">
    <ErrorBoundary>
      <PostHeader
        :author="post.author"
        :timestamp="post.timestamp"
        :type="post.type"
      />

      <Suspense>
        <template #default>
          <component
            :is="getAsyncComponent(post.type)"
            :content="post.content"
          />
        </template>
        <template #fallback>
          <PostSkeleton />
        </template>
      </Suspense>

      <PostTags v-if="post.content.tags" :tags="post.content.tags" />
      <PostActions :stats="post.stats" :type="post.type" />
    </ErrorBoundary>
  </div>
</template>
