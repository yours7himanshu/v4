<script setup lang="ts">
import type { ArtistProfile } from "~/schemas/profile";
import Feed from "~/components/Feed.vue";
import EmptyState from "~/components/common/EmptyState.vue";

const { artist, artistId } = useArtist();
</script>

<template>
  <ArtistLayout v-if="artist" :artist="artist">
    <div class="max-w-xl mx-auto">
      <Feed :type="'all'" :limit="3" :author-id="artistId" />
    </div>
  </ArtistLayout>

  <EmptyState v-else variant="artist-not-found" />
</template>
