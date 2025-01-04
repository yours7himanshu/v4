<script setup lang="ts">
import type { AnyEvent } from "~/schemas/event";
import { formatDate } from "~/utils/format";

defineProps<{
  event: AnyEvent;
}>();

const getPrice = (event: AnyEvent) => {
  if (event.type === "workshop" && event.prices?.length > 0) {
    const lowestPrice = event.prices.reduce(
      (min, p) => (p.amount < min.amount ? p : min),
      event.prices[0]
    );
    return `From ${lowestPrice.amount} ${lowestPrice.currency}`;
  }
  return event.price ? `${event.price.amount} ${event.price.currency}` : "Free";
};
</script>

<template>
  <article class="bg-white rounded-xl border shadow-sm overflow-hidden">
    <div class="aspect-[16/9] bg-purple-100 relative overflow-hidden">
      <img
        :src="event.image || '/images/event-placeholder.jpg'"
        :alt="event.name"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
      ></div>
      <div class="absolute bottom-4 left-4 right-4 text-white">
        <div class="text-sm font-medium mb-1">
          {{ formatDate(event.date.start) }}
        </div>
        <div class="font-bold truncate">{{ event.name }}</div>
      </div>
    </div>
    <div class="p-4">
      <div class="flex items-center justify-between gap-4">
        <div class="min-w-0">
          <div class="flex items-center gap-2 text-sm text-gray-600 mb-2">
            <Icon name="ph:map-pin" class="w-4 h-4 flex-shrink-0" />
            <span class="truncate"
              >{{ event.location.name }}, {{ event.location.city }}</span
            >
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-600">
            <Icon name="ph:ticket" class="w-4 h-4 flex-shrink-0" />
            <span class="truncate">{{ getPrice(event) }}</span>
          </div>
        </div>
        <Button size="sm" class="flex-shrink-0" as-child>
          <NuxtLink :to="`/events/${event.id}`">Details</NuxtLink>
        </Button>
      </div>
    </div>
  </article>
</template>
