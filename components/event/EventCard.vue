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
  <article
    class="group bg-white rounded-lg border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
  >
    <!-- Card Content Wrapper -->
    <div class="flex-1 flex flex-col">
      <!-- Card Header with Image -->
      <div class="relative h-64 overflow-hidden">
        <PostImage
          :src="event.image"
          :alt="event.name"
          :width="800"
          :height="400"
          class="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />
        <!-- Type Badge -->
        <div class="absolute top-4 left-4">
          <Badge variant="secondary" class="capitalize">
            {{ event.type }}
          </Badge>
        </div>
        <!-- Price Tag -->
        <div class="absolute top-4 right-4">
          <div
            class="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium shadow-sm"
            :class="{
              'text-green-600': !event.price,
              'text-purple-600': event.price,
            }"
          >
            {{
              event.price
                ? formatCurrency(event.price.amount, event.price.currency)
                : "Free"
            }}
          </div>
        </div>
        <!-- Gradient Overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
        />
        <!-- Event Info -->
        <div class="absolute bottom-0 left-0 right-0 p-4">
          <PostTitle
            :title="event.name"
            class="text-white drop-shadow-sm mb-3"
          />
          <div class="flex items-center gap-4 text-sm text-white/90">
            <div
              class="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1"
            >
              <Icon name="ph:calendar-duotone" class="h-4 w-4" />
              <span>{{ formatDate(event.date.start) }}</span>
            </div>
            <div
              class="flex items-center gap-2 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1"
            >
              <Icon name="ph:map-pin-duotone" class="h-4 w-4" />
              <span>{{ event.location.name }}, {{ event.location.city }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Event Details -->
      <div class="p-4 flex-1">
        <p class="text-gray-600 line-clamp-2 mb-3">{{ event.description }}</p>
        <div class="flex flex-wrap gap-2">
          <Badge
            v-for="tag in event.tags"
            :key="tag"
            variant="outline"
            class="text-xs"
          >
            {{ tag }}
          </Badge>
        </div>
      </div>

      <!-- Card Footer -->
      <div class="px-4 pb-4">
        <PostActions
          :stats="{
            interested: event.interested || 12,
            bookmarks: event.saves || 0,
          }"
          type="event"
          @share="$emit('share', event)"
          @bookmark="$emit('bookmark', event)"
        />
        <Button
          variant="default"
          class="w-full mt-3"
          @click="$emit('book', event)"
        >
          Book Now
        </Button>
      </div>
    </div>
  </article>
</template>
