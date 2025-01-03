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
</script>

<template>
  <div
    class="bg-white rounded-lg border-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 overflow-hidden flex flex-col h-full"
  >
    <!-- Card Content Wrapper -->
    <div class="flex-1 flex flex-col">
      <!-- Card Header with Image -->
      <div class="relative h-64 aspect-video">
        <PostImage
          :src="event.image"
          :alt="event.name"
          :width="800"
          :height="400"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
        />
        <div class="absolute top-4 right-4">
          <div class="bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
            {{
              event.price
                ? formatCurrency(event.price.amount, event.price.currency)
                : "Free"
            }}
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <PostTitle :title="event.name" class="text-white drop-shadow" />
          <div class="flex items-center gap-3 mt-2 text-sm text-white/90">
            <div class="flex items-center gap-1">
              <Icon name="ph:calendar" class="h-4 w-4" />
              <span>{{ formatDate(event.date.start) }}</span>
            </div>
            <div class="flex items-center gap-1">
              <Icon name="ph:map-pin" class="h-4 w-4" />
              <span>{{ event.location.name }}, {{ event.location.city }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Event Details -->
      <div class="p-4 flex-1">
        <p class="text-gray-600 line-clamp-2">{{ event.description }}</p>
      </div>

      <!-- Card Footer -->
      <PostActions
        :stats="{
          interested: event.interested || 12,
          bookmarks: event.saves || 0,
        }"
        type="event"
        @share="$emit('share', event)"
        @bookmark="$emit('bookmark', event)"
      />
    </div>
  </div>
</template>
