<script setup lang="ts">
import { mockCourses } from "@/data/mockCourses";

defineProps({
  title: {
    type: String,
    default: "Your Dance Community Awaits",
  },
  description: {
    type: String,
    default:
      "Join thousands of dancers, artists, and organizers making dance more accessible and connected",
  },
  muted: {
    type: Boolean,
    default: false,
  },
});

const featuredCourses = computed(() => mockCourses.slice(0, 3));
</script>

<template>
  <section class="py-16 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-foreground">
          {{ title }}
        </h2>
        <p class="text-muted-foreground mt-2">
          {{ description }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- For Dancers -->
        <div class="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div class="text-center mb-6">
            <div
              class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-xl"
            >
              <Icon name="ph:users-three" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-2 text-foreground">For Dancers</h3>
            <p class="text-muted-foreground text-sm">
              Never dance alone - find your perfect partners, events, and
              community
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:users" class="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <h4 class="font-medium mb-1 text-foreground">
                  Dance Partners & Hangouts
                </h4>
                <p class="text-sm text-muted-foreground">
                  Find practice partners that match your style and level, join
                  social dance meetups
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:calendar" class="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <h4 class="font-medium mb-1 text-foreground">
                  Festival & Event Planning
                </h4>
                <p class="text-sm text-muted-foreground">
                  Share rides, split accommodation costs, and coordinate
                  festival trips with other dancers
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:star" class="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <h4 class="font-medium mb-1 text-foreground">
                  Local Scene Integration
                </h4>
                <p class="text-sm text-muted-foreground">
                  Get insider tips, join active groups, and feel at home in any
                  city's dance scene
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- For Artists -->
        <div class="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div class="text-center mb-6">
            <div
              class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-xl"
            >
              <Icon name="ph:microphone-stage" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-2 text-foreground">For Artists</h3>
            <p class="text-muted-foreground text-sm">
              Create courses, get bookings, and grow your dance business
              <NuxtLink
                to="/for/artists"
                class="text-primary hover:text-primary/90 font-medium ml-1"
              >
                Learn more
                <Icon
                  name="ph:arrow-right"
                  class="inline-block w-4 h-4 ml-0.5"
                />
              </NuxtLink>
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:video-camera" class="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <h4 class="font-medium mb-1 text-foreground">Online Courses</h4>
                <p class="text-sm text-muted-foreground">
                  Create pre-recorded courses and live classes
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5"
              >
                <Icon
                  name="ph:calendar-check"
                  class="w-3.5 h-3.5 text-primary"
                />
              </div>
              <div>
                <h4 class="font-medium mb-1 text-foreground">
                  Private Bookings
                </h4>
                <p class="text-sm text-muted-foreground">
                  Get booked for classes and performances
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:storefront" class="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <h4 class="font-medium mb-1 text-foreground">Business Tools</h4>
                <p class="text-sm text-muted-foreground">
                  Professional profile, payments, and analytics included
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- For Organizers -->
        <div class="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <div class="text-center mb-6">
            <div
              class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-xl"
            >
              <Icon name="ph:buildings" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-2 text-foreground">
              For Organizers
            </h3>
            <p class="text-muted-foreground text-sm">
              Create events, sell tickets, and grow your dance business
              <NuxtLink
                to="/for/organizers"
                class="text-primary hover:text-primary/90 font-medium ml-1"
              >
                Learn more
                <Icon
                  name="ph:arrow-right"
                  class="inline-block w-4 h-4 ml-0.5"
                />
              </NuxtLink>
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:ticket" class="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <h4 class="font-medium mb-1 text-foreground">
                  Events & Festivals
                </h4>
                <p class="text-sm text-muted-foreground">
                  Manage parties, courses, and festivals with simple ticketing
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:users-three" class="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <h4 class="font-medium mb-1 text-foreground">Artist Booking</h4>
                <p class="text-sm text-muted-foreground">
                  Book teachers, DJs, and find volunteers for your events
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-primary/10 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:chart-line" class="w-3.5 h-3.5 text-primary" />
              </div>
              <div>
                <h4 class="font-medium mb-1 text-foreground">Business Tools</h4>
                <p class="text-sm text-muted-foreground">
                  Marketing tools, analytics, and venue management included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
