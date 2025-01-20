<template>
  <div v-if="organizer">
    <!-- Hero Section -->
    <div class="relative min-h-[50vh]">
      <div
        class="relative flex items-center overflow-hidden min-h-[50vh] py-12"
      >
        <GradientBackground />

        <!-- Content -->
        <div class="relative w-full">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <!-- Left: Content -->
              <div class="text-center md:text-left">
                <h1
                  class="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                  {{ organizer.name }}
                </h1>
                <div
                  class="flex flex-wrap items-center justify-center md:justify-start gap-4 text-white/80 mb-6"
                >
                  <div class="flex items-center gap-2">
                    <Icon name="ph:map-pin" class="w-4 h-4 md:w-5 md:h-5" />
                    <span class="text-sm md:text-base">{{
                      organizer.location
                    }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <Icon name="ph:users" class="w-4 h-4 md:w-5 md:h-5" />
                    <span class="text-sm md:text-base"
                      >{{ organizer.eventCount }} events</span
                    >
                  </div>
                </div>

                <!-- Dance Styles -->
                <div
                  class="flex flex-wrap justify-center md:justify-start gap-2 mb-8"
                >
                  <Badge
                    v-for="style in organizer.styles"
                    :key="style"
                    variant="secondary"
                  >
                    {{ getDanceStyle(style)?.label }}
                  </Badge>
                </div>

                <!-- Action Buttons -->
                <div class="flex justify-center md:justify-start gap-4">
                  <Button variant="primary-on-dark" size="lg">
                    <Icon name="ph:user-plus" class="w-5 h-5 mr-2" />
                    Follow
                  </Button>
                  <Button
                    variant="secondary-on-dark"
                    size="lg"
                    class="bg-white/10 hover:bg-white/20"
                  >
                    <Icon name="ph:chat-circle" class="w-5 h-5 mr-2" />
                    Message
                  </Button>
                </div>
              </div>

              <!-- Right: Image -->
              <div
                class="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  v-if="organizer.coverImage"
                  :src="organizer.coverImage"
                  :alt="organizer.name"
                  class="w-full h-full object-cover"
                />
                <div v-else class="w-full h-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div
        class="flex flex-col md:flex-row justify-center gap-8 max-w-7xl mx-auto"
      >
        <!-- Left Column: Details -->
        <div class="space-y-8 max-w-xl">
          <!-- About -->
          <div class="bg-card rounded-xl border p-6">
            <h3 class="text-lg font-bold mb-4">About</h3>
            <p class="text-muted-foreground">{{ organizer.bio }}</p>
          </div>

          <!-- Event Types -->
          <div class="bg-card rounded-xl border p-6">
            <h3 class="text-lg font-bold mb-4">Event Types</h3>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="type in organizer.eventTypes"
                :key="type"
                variant="secondary"
              >
                {{ getEventType(type)?.label }}
              </Badge>
            </div>
          </div>

          <!-- Upcoming Events -->
          <div class="bg-card rounded-xl border p-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-bold">Upcoming Events</h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div class="text-muted-foreground">No upcoming events</div>
          </div>

          <!-- Photos -->
          <div class="bg-card rounded-xl border p-6">
            <div class="flex justify-between items-center mb-4">
              <h3 class="text-lg font-bold">Photos</h3>
              <Button variant="ghost" size="sm">View All</Button>
            </div>
            <div
              v-if="organizer.coverImage"
              class="aspect-video rounded-lg overflow-hidden"
            >
              <img
                :src="organizer.coverImage"
                :alt="organizer.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div v-else class="text-muted-foreground">No photos yet</div>
          </div>

          <!-- Location -->
          <div class="bg-card rounded-xl border p-6">
            <h3 class="text-lg font-bold mb-4">Location</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <Icon
                  name="ph:map-pin"
                  class="w-5 h-5 text-primary flex-shrink-0 mt-1"
                />
                <div>
                  <div class="font-medium">{{ organizer.name }}</div>
                  <div class="text-muted-foreground">
                    {{ organizer.location }}
                  </div>
                </div>
              </div>
              <!-- Map placeholder -->
              <div class="aspect-[4/3] bg-muted rounded-lg"></div>
            </div>
          </div>
        </div>

        <!-- Right Column: Contact & Social -->
        <div class="w-full md:w-96 space-y-8">
          <!-- Contact Card -->
          <div class="bg-card rounded-xl border p-6 sticky top-8">
            <h3 class="text-lg font-bold mb-4">Connect With Us</h3>
            <div class="space-y-4">
              <div v-if="organizer.links" class="grid grid-cols-3 gap-4">
                <a
                  v-if="organizer.links.website"
                  :href="organizer.links.website"
                  target="_blank"
                  class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Icon name="ph:globe" class="w-6 h-6 text-primary" />
                  <span class="text-sm">Website</span>
                </a>
                <a
                  v-if="organizer.links.instagram"
                  :href="
                    'https://instagram.com/' +
                    organizer.links.instagram.slice(1)
                  "
                  target="_blank"
                  class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Icon name="ph:instagram-logo" class="w-6 h-6 text-primary" />
                  <span class="text-sm">Instagram</span>
                </a>
                <a
                  v-if="organizer.links.facebook"
                  :href="'#'"
                  target="_blank"
                  class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Icon name="ph:facebook-logo" class="w-6 h-6 text-primary" />
                  <span class="text-sm">Facebook</span>
                </a>
                <a
                  v-if="organizer.links.whatsapp"
                  :href="organizer.links.whatsapp"
                  target="_blank"
                  class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Icon name="ph:whatsapp-logo" class="w-6 h-6 text-primary" />
                  <span class="text-sm">WhatsApp</span>
                </a>
                <a
                  v-if="organizer.links.telegram"
                  :href="'https://' + organizer.links.telegram"
                  target="_blank"
                  class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Icon name="ph:telegram-logo" class="w-6 h-6 text-primary" />
                  <span class="text-sm">Telegram</span>
                </a>
                <a
                  v-if="organizer.links.discord"
                  :href="'https://' + organizer.links.discord"
                  target="_blank"
                  class="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors"
                >
                  <Icon name="ph:discord-logo" class="w-6 h-6 text-primary" />
                  <span class="text-sm">Discord</span>
                </a>
              </div>
              <Button class="w-full" size="lg">
                <Icon name="ph:chat-circle" class="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { organizers, danceStyles, eventTypes } from "~/data/mockOrganizers";

const route = useRoute();
const id = route.params.id as string;

const organizer = computed(() => organizers.find((o) => o.id === id));

const getDanceStyle = (value: string) =>
  danceStyles.find((s) => s.value === value);
const getEventType = (value: string) =>
  eventTypes.find((t) => t.value === value);
</script>
