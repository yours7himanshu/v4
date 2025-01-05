<script setup>
const selectedPostType = ref("all");
const selectedLocation = ref(null);
</script>

<template>
  <DanceStyleLayout
    title="Salsa Cubana"
    description="Connect, organize, and grow with your local salsa community. Find dance partners, join events, and share your passion across 40K+ dancers worldwide."
  >
    <FeedList />
  </DanceStyleLayout>
</template>
