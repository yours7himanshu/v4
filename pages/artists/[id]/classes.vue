<script setup lang="ts">
const { artist, artistId } = useArtist();
</script>

<template>
  <ArtistLayout v-if="artist" :artist="artist">
    <div class="max-w-xl mx-auto">Classes</div>
  </ArtistLayout>

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
