<script setup lang="ts">
import type { EventContent } from "~/schemas/post";
import type { AnyEvent } from "~/schemas/event";

const props = defineProps<{
  content: EventContent;
}>();

// Transform PostEvent content into AnyEvent format
const eventData = computed<AnyEvent>(() => ({
  type: "event",
  status: "upcoming", // You might want to compute this based on date
  name: props.content.title,
  description: props.content.description,
  image: props.content.image,
  date: {
    start: props.content.date,
    end: props.content.date, // Adjust if you have end date
  },
  location: {
    name: props.content.location,
    city: "", // Add if available in your content
  },
  price: props.content.price,
  tags: props.content.tags || [],
}));
</script>

<template>
  <EventCard :event="eventData" class="border-0 shadow-none" />
</template>
