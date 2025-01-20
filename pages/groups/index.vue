<template>
  <PageSimple
    title="Dance Groups"
    description="Find and connect with dance groups, promoters, and organizers"
  >
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card
        v-for="organizer in organizers"
        :key="organizer.id"
        class="overflow-hidden"
      >
        <NuxtLink :to="`/groups/${organizer.id}`">
          <div class="aspect-video w-full relative">
            <img
              :src="organizer.coverImage"
              :alt="organizer.name"
              class="w-full h-full object-cover"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
            ></div>
            <div class="absolute bottom-4 left-4 right-4 text-white">
              <div class="flex items-center gap-3 mb-2">
                <div
                  class="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0"
                >
                  <img
                    v-if="organizer.avatar"
                    :src="organizer.avatar"
                    :alt="organizer.name"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 class="font-semibold">{{ organizer.name }}</h3>
                  <p class="text-sm text-white/80">{{ organizer.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </NuxtLink>
        <CardContent class="pt-4">
          <p class="text-gray-600 text-sm mb-3">{{ organizer.bio }}</p>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="style in organizer.styles"
              :key="style"
              variant="secondary"
            >
              {{ getDanceStyle(style)?.label }}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  </PageSimple>
</template>

<script setup lang="ts">
import { organizers, danceStyles } from "~/data/mockOrganizers";

const getDanceStyle = (value: string) =>
  danceStyles.find((s) => s.value === value);
</script>
