<template>
  <div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="flex flex-col md:flex-row gap-8 mb-8">
        <div class="w-32 h-32 rounded-lg shrink-0 overflow-hidden">
          <img
            v-if="organizer?.avatar"
            :src="organizer.avatar"
            :alt="organizer?.name"
            class="w-full h-full object-cover"
          />
          <div v-else class="w-full h-full bg-gray-200"></div>
        </div>
        <div class="flex-1">
          <h1 class="text-3xl font-bold mb-2">{{ organizer?.name }}</h1>
          <p class="text-gray-600 mb-4">{{ organizer?.bio }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <Badge
              v-for="style in organizer?.styles"
              :key="style"
              variant="secondary"
            >
              {{ getDanceStyle(style)?.label }}
            </Badge>
          </div>
          <div class="flex gap-4">
            <Button>Follow</Button>
            <Button variant="outline">Message</Button>
          </div>
        </div>
      </div>

      <!-- Content Tabs -->
      <Tabs defaultValue="about" class="w-full">
        <TabsList>
          <TabsTrigger value="about">About</TabsTrigger>
          <TabsTrigger value="events"
            >Events ({{ organizer?.eventCount }})</TabsTrigger
          >
          <TabsTrigger value="photos">Photos</TabsTrigger>
        </TabsList>
        <TabsContent value="about">
          <Card>
            <CardHeader>
              <CardTitle>About Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="space-y-6">
                <div>
                  <h3 class="font-semibold mb-2">Location</h3>
                  <p class="text-gray-600">{{ organizer?.location }}</p>
                </div>
                <div>
                  <h3 class="font-semibold mb-2">Event Types</h3>
                  <div class="flex flex-wrap gap-2">
                    <Badge
                      v-for="type in organizer?.eventTypes"
                      :key="type"
                      variant="outline"
                    >
                      {{ getEventType(type)?.label }}
                    </Badge>
                  </div>
                </div>
                <div v-if="organizer?.links">
                  <h3 class="font-semibold mb-2">Connect With Us</h3>
                  <div class="flex flex-wrap gap-4">
                    <a
                      v-if="organizer.links.website"
                      :href="organizer.links.website"
                      target="_blank"
                      class="text-purple-600 hover:text-purple-700"
                    >
                      <Icon name="ph:globe" class="w-5 h-5" />
                    </a>
                    <a
                      v-if="organizer.links.instagram"
                      :href="
                        'https://instagram.com/' +
                        organizer.links.instagram.slice(1)
                      "
                      target="_blank"
                      class="text-purple-600 hover:text-purple-700"
                    >
                      <Icon name="ph:instagram-logo" class="w-5 h-5" />
                    </a>
                    <a
                      v-if="organizer.links.facebook"
                      :href="'#'"
                      target="_blank"
                      class="text-purple-600 hover:text-purple-700"
                    >
                      <Icon name="ph:facebook-logo" class="w-5 h-5" />
                    </a>
                    <a
                      v-if="organizer.links.whatsapp"
                      :href="organizer.links.whatsapp"
                      target="_blank"
                      class="text-purple-600 hover:text-purple-700"
                    >
                      <Icon name="ph:whatsapp-logo" class="w-5 h-5" />
                    </a>
                    <a
                      v-if="organizer.links.telegram"
                      :href="'https://' + organizer.links.telegram"
                      target="_blank"
                      class="text-purple-600 hover:text-purple-700"
                    >
                      <Icon name="ph:telegram-logo" class="w-5 h-5" />
                    </a>
                    <a
                      v-if="organizer.links.discord"
                      :href="'https://' + organizer.links.discord"
                      target="_blank"
                      class="text-purple-600 hover:text-purple-700"
                    >
                      <Icon name="ph:discord-logo" class="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="events">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid gap-4">
                <p class="text-gray-600">No upcoming events</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="photos">
          <Card>
            <CardHeader>
              <CardTitle>Photos</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="grid gap-4">
                <div
                  v-if="organizer?.coverImage"
                  class="aspect-video rounded-lg overflow-hidden"
                >
                  <img
                    :src="organizer.coverImage"
                    :alt="organizer.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <p v-else class="text-gray-600">No photos yet</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
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
