<script setup lang="ts">
import type { AnyEvent } from "~/schemas/event";
import { formatDate, formatCurrency } from "~/utils/format";
import PostImage from "../post/PostImage.vue";
import PostTitle from "../post/PostTitle.vue";
import PostActions from "../post/PostActions.vue";

defineProps<{
  event: AnyEvent;
}>();

const emit = defineEmits<{
  share: [event: AnyEvent];
  bookmark: [event: AnyEvent];
  book: [event: AnyEvent];
}>();

const handleShare = (event: AnyEvent) => emit("share", event);
const handleBookmark = (event: AnyEvent) => emit("bookmark", event);
const handleBook = (event: AnyEvent) => emit("book", event);
</script>

<template>
  <article
    class="bg-white rounded-lg border border-gray-100 overflow-hidden flex flex-col h-full hover:border-purple-100 transition-all duration-300"
  >
    <!-- Image Section -->
    <div class="relative aspect-[3/2]">
      <PostImage
        :src="event.image || '/images/event-placeholder.jpg'"
        :alt="event.name"
        :width="800"
        :height="400"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
      />

      <!-- Overlays -->
      <div class="absolute inset-x-0 bottom-0 p-4 space-y-2">
        <!-- Title and Meta -->
        <h3 class="text-2xl font-bold text-white">
          {{ event.name }}
        </h3>
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-2">
            <Icon name="ph:calendar" />
            <span>{{ formatDate(event.date.start) }}</span>
          </div>
          <div class="flex items-center gap-2">
            <Icon name="ph:map-pin" />
            <span>{{ event.location.name }}, {{ event.location.city }}</span>
          </div>
        </div>
      </div>

      <!-- Top Badges -->
      <div class="absolute top-4 left-4 flex gap-1">
        <Badge
          variant="default"
          class="bg-white/90 backdrop-blur-sm text-black"
        >
          {{ event.type }}
        </Badge>
        <Badge
          variant="default"
          class="bg-white/90 backdrop-blur-sm text-black"
        >
          {{ event.status }}
        </Badge>
      </div>

      <!-- Price -->
      <div class="absolute top-4 right-4">
        <div
          class="text-sm font-medium"
          :class="!event.price ? 'text-green-500' : 'text-purple-500'"
        >
          {{
            event.price
              ? formatCurrency(event.price.amount, event.price.currency)
              : "Free"
          }}
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1 p-4">
      <p class="text-gray-600 text-sm line-clamp-2">{{ event.description }}</p>

      <!-- Tags -->
      <div class="mt-3 flex flex-wrap gap-2">
        <Badge
          v-for="tag in event.tags"
          :key="tag"
          variant="secondary"
          class="text-xs"
        >
          {{ tag }}
        </Badge>
      </div>
    </div>

    <!-- Footer -->
    <div class="border-t border-gray-100 pt-2">
      <div class="flex items-center justify-between px-4">
        <div class="flex items-center gap-4">
          <button class="hover:text-purple-600">
            <Icon name="ph:heart" class="h-5 w-5" />
          </button>
          <button class="hover:text-purple-600">
            <Icon name="ph:bookmark" class="h-5 w-5" />
          </button>
          <button class="hover:text-purple-600">
            <Icon name="ph:share" class="h-5 w-5" />
          </button>
        </div>
        <Button variant="default" @click="handleBook(event)"> Book Now </Button>
      </div>
    </div>
  </article>
</template>
