<script setup lang="ts">
import GradientBackground from "~/components/common/GradientBackground.vue";

defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
</script>

<template>
  <section class="py-16 relative overflow-hidden">
    <GradientBackground />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-primary-foreground">
          {{ title }}
        </h2>
        <p class="text-primary-foreground/80 mt-2">
          {{ description }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform hover:-translate-y-1 transition-transform shadow-xl"
        >
          <div class="flex items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              alt="Sarah Martinez"
              class="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20"
            />
            <div>
              <div class="font-medium text-primary-foreground">
                Sarah Martinez
              </div>
              <div class="text-sm text-primary-foreground/60">Salsa Dancer</div>
            </div>
          </div>
          <p class="text-primary-foreground/80 text-sm">
            "WeDance made it so easy to find dance partners and events in my
            city. I've met amazing people and improved my dancing
            significantly!"
          </p>
        </div>

        <div
          class="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform hover:-translate-y-1 transition-transform shadow-xl"
        >
          <div class="flex items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              alt="Michael Chen"
              class="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20"
            />
            <div>
              <div class="font-medium text-primary-foreground">
                Michael Chen
              </div>
              <div class="text-sm text-primary-foreground/60">
                Dance Teacher
              </div>
            </div>
          </div>
          <p class="text-primary-foreground/80 text-sm">
            "As a dance teacher, WeDance has helped me grow my student base and
            manage my classes more efficiently. The platform is a game-changer!"
          </p>
        </div>

        <div
          class="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 transform hover:-translate-y-1 transition-transform shadow-xl"
        >
          <div class="flex items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="Emma Thompson"
              class="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20"
            />
            <div>
              <div class="font-medium text-primary-foreground">
                Emma Thompson
              </div>
              <div class="text-sm text-primary-foreground/60">
                Event Organizer
              </div>
            </div>
          </div>
          <p class="text-primary-foreground/80 text-sm">
            "Organizing dance events has never been easier. WeDance helps us
            reach the right audience and manage everything in one place."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
