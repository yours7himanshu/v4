<script setup lang="ts">
import { mockPosts } from "~/data/mockPosts";
import { mockEvents } from "~/data/mockEvents";
import { mockArtists } from "~/data/mockArtists";
import { mockVenues } from "~/data/mockVenues";
import { mockCourses } from "~/data/mockCourses";

const dialog = useDialog();
const router = useRouter();
const searchQuery = ref("");
const searchInput = ref();

const searchResults = computed(() => {
  if (!searchQuery.value) return [];

  const query = searchQuery.value.toLowerCase();
  const results = [];

  // Search in courses
  results.push(
    ...mockCourses
      .filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query)
      )
      .map((course) => ({
        type: "course",
        title: course.title,
        description: course.description,
        image: course.instructor.image,
        to: `/courses/${course.id}`,
      }))
  );

  // Search in events
  results.push(
    ...mockEvents
      .filter(
        (event) =>
          event.name.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.tags?.some((tag) => tag.toLowerCase().includes(query))
      )
      .map((event) => ({
        type: "event",
        title: event.name,
        description: event.description,
        image: event.image,
        to: `/events/${event.id}`,
      }))
  );

  // Search in artists
  results.push(
    ...mockArtists
      .filter(
        (artist) =>
          artist.name.toLowerCase().includes(query) ||
          artist.specialties?.some((specialty) =>
            specialty.toLowerCase().includes(query)
          )
      )
      .map((artist) => ({
        type: "artist",
        title: artist.name,
        description: artist.specialties?.join(", "),
        image: artist.image,
        to: `/artists/${artist.id}`,
      }))
  );

  // Search in venues
  results.push(
    ...mockVenues
      .filter(
        (venue) =>
          venue.name.toLowerCase().includes(query) ||
          venue.description.toLowerCase().includes(query)
      )
      .map((venue) => ({
        type: "venue",
        title: venue.name,
        description: venue.description,
        image: venue.image,
        to: `/venues/${venue.id}`,
      }))
  );

  // Search in posts
  results.push(
    ...mockPosts
      .filter((post) => {
        const content = post.content;
        return (
          ("text" in content && content.text?.toLowerCase().includes(query)) ||
          ("title" in content &&
            content.title?.toLowerCase().includes(query)) ||
          ("description" in content &&
            content.description?.toLowerCase().includes(query)) ||
          content.tags?.some((tag) => tag.toLowerCase().includes(query))
        );
      })
      .map((post) => {
        const content = post.content;
        return {
          type: "post",
          title:
            "title" in content
              ? content.title
              : "text" in content
                ? content.text?.slice(0, 50)
                : "",
          description:
            "description" in content
              ? content.description
              : "text" in content
                ? content.text
                : "",
          image: "cover" in content ? content.cover : post.author.image,
          to: `/posts/${post.id}`,
        };
      })
  );

  return results;
});

const handleSearch = () => {
  if (!searchQuery.value) return;

  // Close dialog
  dialog.close();

  // Navigate to search results
  router.push({
    path: "/search",
    query: { q: searchQuery.value },
  });
};

// Focus input when dialog opens
onMounted(() => {
  nextTick(() => {
    const input = searchInput.value?.$el?.querySelector("input");
    input?.focus();
  });
});
</script>

<template>
  <div class="w-full max-w-lg flex flex-col min-h-[420px] overflow-hidden">
    <DialogHeader>
      <DialogTitle>Search</DialogTitle>
    </DialogHeader>

    <div class="flex-1 py-4 px-2 flex flex-col min-h-0">
      <div class="flex-none">
        <Input
          ref="searchInput"
          v-model="searchQuery"
          placeholder="Search everything..."
          class="w-full"
          @keyup.enter="handleSearch"
        >
          <template #prefix>
            <Icon
              name="ph:magnifying-glass"
              class="w-4 h-4 text-muted-foreground"
            />
          </template>
        </Input>
      </div>

      <ScrollArea v-if="searchResults.length" class="mt-4 max-h-[300px]">
        <div class="space-y-2">
          <div
            v-for="result in searchResults"
            :key="result.to"
            class="flex gap-4"
          >
            <NuxtLink
              :to="result.to"
              class="flex gap-4 items-center w-full hover:bg-muted p-3 rounded-lg"
              @click="dialog.close()"
            >
              <img
                :src="result.image"
                class="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg shrink-0"
              />
              <div class="flex-1 min-w-0">
                <div class="flex flex-col sm:flex-row sm:items-center gap-2">
                  <Badge
                    variant="outline"
                    class="capitalize w-fit text-xs sm:text-sm"
                  >
                    {{ result.type }}
                  </Badge>
                  <p class="font-medium truncate text-sm sm:text-base">
                    {{ result.title }}
                  </p>
                </div>
                <p
                  class="text-xs sm:text-sm text-muted-foreground truncate mt-1"
                >
                  {{ result.description }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
      </ScrollArea>
    </div>
  </div>
</template>
