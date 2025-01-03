<script setup lang="ts">
import type { EventContent } from "~/schemas/post";
import { formatDate, formatCurrency } from "~/utils/format";

const props = defineProps<{
  content: EventContent;
}>();

const formattedDate = computed(() => formatDate(props.content.date));
const formattedPrice = computed(() => {
  if (!props.content.price) return null;
  return formatCurrency(
    props.content.price.amount,
    props.content.price.currency
  );
});
</script>

<template>
  <article class="flex-1 flex flex-col">
    <div v-if="content.image" class="relative aspect-video">
      <PostImage
        :src="content.image"
        :alt="content.title"
        :width="800"
        :height="400"
        class="w-full h-full object-cover"
      />
    </div>

    <div class="p-4 space-y-4">
      <PostTitle :title="content.title" />
      <p class="text-gray-600">{{ content.description }}</p>

      <dl class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <dt class="sr-only">Date and Time</dt>
          <Icon
            name="ph:calendar"
            class="w-5 h-5 text-purple-600"
            aria-hidden="true"
          />
          <dd>{{ formattedDate }}</dd>
        </div>

        <div class="flex items-center gap-2">
          <dt class="sr-only">Location</dt>
          <Icon
            name="ph:map-pin"
            class="w-5 h-5 text-purple-600"
            aria-hidden="true"
          />
          <dd>{{ content.location }}</dd>
        </div>

        <div v-if="formattedPrice" class="flex items-center gap-2">
          <dt class="sr-only">Price</dt>
          <Icon
            name="ph:ticket"
            class="w-5 h-5 text-green-600"
            aria-hidden="true"
          />
          <dd class="text-green-600">{{ formattedPrice }}</dd>
        </div>
      </dl>
    </div>

    <div class="mt-auto">
      <PostTags v-if="content.tags" :tags="content.tags" />
    </div>
  </article>
</template>
