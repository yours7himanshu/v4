<script setup lang="ts">
import type { Post } from "~/schemas/post";
import { z } from "zod";
import { defineAsyncComponent } from "vue";
import PostSkeleton from "../common/PostSkeleton.vue";
import ErrorBoundary from "../common/ErrorBoundary.vue";

// Prop validation schema
const postSchema = z.object({
  type: z.string(),
  content: z.any(),
  author: z.object({
    id: z.string(),
    name: z.string(),
    avatar: z.string().optional(),
  }),
  timestamp: z.string().or(z.date()),
  stats: z.object({
    likes: z.number().optional(),
    comments: z.number().optional(),
    shares: z.number().optional(),
    interested: z.number().optional(),
    bookmarks: z.number().optional(),
  }),
});

// Props with runtime validation
const props = defineProps<{
  post: Post;
}>();

// Validate props at runtime
try {
  postSchema.parse(props.post);
} catch (error) {
  console.error("Invalid post props:", error);
}

const { components, getComponentName, isLoading, loadError, loadComponent } =
  usePostComponent();

const getAsyncComponent = (type: Post["type"]) =>
  defineAsyncComponent({
    loader: () => components[getComponentName(type)](),
    loadingComponent: PostSkeleton,
    errorComponent: ErrorBoundary,
  });

const { hasError, validationError } = usePostValidation(props.post);

// Preload the component
onMounted(() => {
  loadComponent(props.post.type);
});
</script>

<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-100">
    <ErrorBoundary>
      <PostHeader
        :author="post.author"
        :timestamp="post.timestamp"
        :type="post.type"
      />
    </ErrorBoundary>

    <div v-if="hasError" class="p-4 text-red-600">
      <div class="font-medium">
        Invalid content for post type: {{ post.type }}
      </div>
      <div v-if="validationError" class="mt-1 text-sm">
        {{ validationError }}
      </div>
    </div>

    <ErrorBoundary v-else-if="loadError" v-slot="{ error }">
      <div class="p-4 text-red-600">
        <div class="font-medium">Failed to load post content</div>
        <div class="text-sm mt-1">{{ error?.message }}</div>
      </div>
    </ErrorBoundary>

    <template v-else>
      <Suspense>
        <template #default>
          <ErrorBoundary>
            <component
              :is="getAsyncComponent(post.type)"
              :content="post.content"
            />
          </ErrorBoundary>
        </template>
        <template #fallback>
          <PostSkeleton />
        </template>
      </Suspense>
    </template>

    <ErrorBoundary>
      <PostActions :stats="post.stats" :type="post.type" />
    </ErrorBoundary>
  </div>
</template>
