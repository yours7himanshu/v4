<script setup lang="ts">
import { mockArtists } from "@/data/mockArtists";
import GradientBackground from "~/components/common/GradientBackground.vue";
import type { ArtistProfile } from "~/schemas/profile";
import Post from "~/components/post/Post.vue";

const route = useRoute();
const artist = computed(() =>
  mockArtists.find((a) => String(a.id) === String(route.params.id))
);

// Computed properties for UI
const teachingLevels = computed(() => {
  if (!artist.value?.experience?.teachingLevels) return [];
  return artist.value.experience.teachingLevels.map(
    (level) => level.charAt(0).toUpperCase() + level.slice(1)
  );
});

const specialties = computed(() => {
  if (!artist.value?.specialties) return [];
  return artist.value.specialties.map(
    (specialty) => specialty.charAt(0).toUpperCase() + specialty.slice(1)
  );
});

const achievements = computed(() => {
  if (!artist.value?.experience?.achievements) return [];
  return artist.value.experience.achievements;
});

const certifications = computed(() => {
  if (!artist.value?.certifications) return [];
  return artist.value.certifications;
});

const socialMedia = computed(() => {
  if (!artist.value?.socialMedia) return null;
  return artist.value.socialMedia;
});

// Actions
const handleContact = () => {
  if (!artist.value) return;
  console.log("Contact artist:", artist.value.name);
};

const handleBook = () => {
  if (!artist.value) return;
  console.log("Book artist:", artist.value.name);
};

const handleFollow = () => {
  if (!artist.value) return;
  console.log("Follow artist:", artist.value.name);
};
</script>

<template>
  <div v-if="artist">
    <!-- Hero Section -->
    <div class="pt-16 relative min-h-[50vh]">
      <div
        class="relative flex items-center overflow-hidden min-h-[50vh] py-12"
      >
        <GradientBackground />

        <!-- Content -->
        <div class="relative w-full">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <!-- Left: Content -->
              <div class="text-center md:text-left">
                <div
                  class="flex items-center justify-center md:justify-start gap-2 text-white/80 mb-4"
                >
                  <Icon name="ph:map-pin" class="w-4 h-4 md:w-5 md:h-5" />
                  <span class="text-sm md:text-base">{{
                    artist.availability?.currentLocation
                  }}</span>
                </div>
                <h1
                  class="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
                >
                  {{ artist.name }}
                </h1>
                <div
                  class="flex flex-wrap items-center justify-center md:justify-start gap-2 text-white/80 mb-6"
                >
                  <Badge
                    v-if="artist.level === 'master'"
                    variant="secondary"
                    class="bg-amber-50 text-amber-700 border-amber-200"
                  >
                    Master
                  </Badge>
                  <Badge
                    v-for="role in artist.roles"
                    :key="role"
                    variant="secondary"
                    class="capitalize"
                  >
                    {{ role }}
                  </Badge>
                </div>

                <!-- Stats -->
                <div
                  class="flex justify-center md:justify-start gap-8 text-white/80 mb-8"
                >
                  <div>
                    <div class="text-xl font-bold text-white">
                      {{ artist.followers }}
                    </div>
                    <div class="text-sm">followers</div>
                  </div>
                  <div>
                    <div class="text-xl font-bold text-white">
                      {{ artist.rating }}
                    </div>
                    <div class="text-sm">rating</div>
                  </div>
                  <div>
                    <div class="text-xl font-bold text-white">
                      {{ artist.reviewCount }}
                    </div>
                    <div class="text-sm">reviews</div>
                  </div>
                  <div>
                    <div class="text-xl font-bold text-white">
                      {{ artist.experience?.years }}
                    </div>
                    <div class="text-sm">years</div>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex justify-center md:justify-start gap-4">
                  <Button variant="secondary" size="lg" @click="handleBook"
                    >Book Now</Button
                  >
                  <Button
                    variant="outline"
                    size="lg"
                    class="bg-white/10"
                    @click="handleFollow"
                    >Follow</Button
                  >
                </div>
              </div>

              <!-- Right: Image -->
              <div
                class="relative aspect-square rounded-xl overflow-hidden shadow-xl max-w-lg mx-auto"
              >
                <img
                  :src="artist.image"
                  :alt="artist.name"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="flex flex-col-reverse md:flex-row gap-8 justify-center">
        <!-- Left Column: Details -->
        <div class="flex-1 space-y-8 max-w-xl">
          <!-- Specialties -->
          <div v-if="specialties.length > 0">
            <h2 class="text-2xl font-bold mb-4">Specialties</h2>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="specialty in specialties"
                :key="specialty"
                variant="secondary"
                class="capitalize"
              >
                {{ specialty }}
              </Badge>
            </div>
          </div>

          <!-- Achievements -->
          <div v-if="achievements.length > 0">
            <h2 class="text-2xl font-bold mb-4">Achievements</h2>
            <div class="space-y-4">
              <div
                v-for="(achievement, index) in achievements"
                :key="index"
                class="flex items-start gap-4"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="ph:trophy" class="w-4 h-4 text-purple-600" />
                </div>
                <div class="text-gray-600 pt-1">{{ achievement }}</div>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div v-if="certifications.length > 0">
            <h2 class="text-2xl font-bold mb-4">Certifications</h2>
            <div class="space-y-4">
              <div
                v-for="(certification, index) in certifications"
                :key="index"
                class="flex items-start gap-4"
              >
                <div
                  class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
                >
                  <Icon name="ph:certificate" class="w-4 h-4 text-purple-600" />
                </div>
                <div class="text-gray-600 pt-1">{{ certification }}</div>
              </div>
            </div>
          </div>

          <!-- Teaching Levels -->
          <div v-if="teachingLevels.length > 0">
            <h2 class="text-2xl font-bold mb-4">Teaching Levels</h2>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="level in teachingLevels"
                :key="level"
                variant="secondary"
                class="capitalize"
              >
                {{ level }}
              </Badge>
            </div>
          </div>

          <!-- Languages -->
          <div v-if="artist.languages.length > 0">
            <h2 class="text-2xl font-bold mb-4">Languages</h2>
            <div class="flex flex-wrap gap-2">
              <Badge
                v-for="language in artist.languages"
                :key="language"
                variant="secondary"
              >
                {{ language }}
              </Badge>
            </div>
          </div>
        </div>

        <!-- Right Column: Sidebar -->
        <div class="flex-shrink-0 space-y-6">
          <!-- Availability -->
          <div
            v-if="artist.availability"
            class="bg-white rounded-lg border p-6"
          >
            <h3 class="text-lg font-bold mb-4">Availability</h3>
            <div class="space-y-4">
              <table class="w-full">
                <tbody class="divide-y">
                  <tr v-if="artist.availability.privateClasses" class="group">
                    <td class="py-3">
                      <div class="flex items-center gap-2 text-gray-600">
                        <Icon name="ph:user" class="w-5 h-5 text-purple-600" />
                        Private Classes
                      </div>
                    </td>
                    <td
                      v-if="artist.availability.pricing?.privateClass"
                      class="py-3 text-right text-gray-600"
                    >
                      {{ artist.availability.pricing.privateClass.amount }}€
                      <span class="text-sm text-gray-500"
                        >/{{
                          artist.availability.pricing.privateClass.duration
                        }}min</span
                      >
                    </td>
                  </tr>
                  <tr v-if="artist.availability.workshops" class="group">
                    <td class="py-3">
                      <div class="flex items-center gap-2 text-gray-600">
                        <Icon
                          name="ph:users-three"
                          class="w-5 h-5 text-purple-600"
                        />
                        Workshops
                      </div>
                    </td>
                    <td
                      v-if="artist.availability.pricing?.workshop"
                      class="py-3 text-right text-gray-600"
                    >
                      {{ artist.availability.pricing.workshop.amount }}€
                      <span class="text-sm text-gray-500"
                        >/{{
                          artist.availability.pricing.workshop.duration
                        }}min</span
                      >
                    </td>
                  </tr>
                  <tr v-if="artist.availability.touring" class="group">
                    <td class="py-3">
                      <div class="flex items-center gap-2 text-gray-600">
                        <Icon
                          name="ph:airplane"
                          class="w-5 h-5 text-purple-600"
                        />
                        Available for Tours
                      </div>
                    </td>
                    <td class="py-3 text-right text-gray-600"></td>
                  </tr>
                </tbody>
              </table>

              <Button class="w-full" variant="default" @click="handleBook"
                >Book Now</Button
              >
            </div>
          </div>

          <!-- Social Media -->
          <div v-if="socialMedia" class="bg-white rounded-lg border p-6">
            <h3 class="text-lg font-bold mb-4">Social Media</h3>
            <div class="space-y-3">
              <a
                v-if="socialMedia.instagram"
                :href="`https://instagram.com/${socialMedia.instagram}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Icon name="ph:instagram-logo" class="w-5 h-5" />
                {{ socialMedia.instagram }}
              </a>
              <a
                v-if="socialMedia.youtube"
                :href="`https://youtube.com/${socialMedia.youtube}`"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
              >
                <Icon name="ph:youtube-logo" class="w-5 h-5" />
                {{ socialMedia.youtube }}
              </a>
            </div>
          </div>

          <!-- Contact -->
          <div class="bg-white rounded-lg border p-6">
            <h3 class="text-lg font-bold mb-4">Contact</h3>
            <Button class="w-full" variant="outline" @click="handleContact">
              <Icon name="ph:envelope" class="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Empty State -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <Icon
        name="ph:user-circle-x"
        class="w-16 h-16 text-gray-400 mx-auto mb-4"
      />
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Artist Not Found</h2>
      <p class="text-gray-600 mb-6">
        The artist you're looking for doesn't exist or has been removed.
      </p>
      <Button as-child>
        <NuxtLink to="/artists">Browse Artists</NuxtLink>
      </Button>
    </div>
  </div>
</template>
