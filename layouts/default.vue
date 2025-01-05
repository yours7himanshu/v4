<template>
  <div class="min-h-screen flex flex-col">
    <AppNavigation />
    <main class="flex-1">
      <slot />
    </main>
    <LandingFooter />
    <PrototypeBanner />
  </div>
</template>

<script setup lang="ts">
import PrototypeBanner from "@/components/PrototypeBanner.vue";
</script>
