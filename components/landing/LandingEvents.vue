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
      <div class="space-y-6 mb-12">
        <div>
          <h2 class="text-3xl font-bold">Dance Events</h2>
          <p class="text-gray-600 mt-2">
            Discover amazing dance events happening near you
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
          <div class="relative flex-1">
            <Input
              type="search"
              placeholder="Search events..."
              class="w-full pl-9"
            />
            <Icon
              name="ph:magnifying-glass"
              class="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            />
          </div>
          <div class="flex gap-3">
            <Button
              variant="outline"
              class="gap-2 flex-1 sm:flex-initial flex items-center justify-center"
            >
              <Icon name="ph:map-pin" class="w-4 h-4" />
              Near me
            </Button>
            <Button variant="outline" as-child class="flex-1 sm:flex-initial">
              <NuxtLink
                to="/events"
                class="flex items-center justify-center gap-2"
              >
                Browse All
                <Icon name="ph:arrow-right" class="w-4 h-4" />
              </NuxtLink>
            </Button>
          </div>
        </div>
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
