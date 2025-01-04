<script setup lang="ts">
import { mockEvents } from "@/data/mockEvents";
import type { AnyEvent } from "~/schemas/event";

const featuredEvents = computed(
  () =>
    mockEvents
      .filter((event) => event.status === "upcoming")
      .slice(0, 3) as unknown as AnyEvent[]
);
</script>

<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-12">
        <div>
          <h2 class="text-3xl font-bold">1,002 Events</h2>
          <p class="text-gray-600 mt-2">Don't miss these upcoming highlights</p>
        </div>
        <Button variant="outline" as-child>
          <NuxtLink to="/events" class="flex items-center gap-2">
            View All Events
            <Icon name="ph:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </Button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <EventCard
          v-for="event in featuredEvents"
          :key="event.id"
          :event="event"
        />
      </div>
    </div>
  </section>
</template>
