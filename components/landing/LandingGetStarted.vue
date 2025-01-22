<script setup lang="ts">
defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  secondary: {
    type: String,
    default: "Compare Platforms",
  },
  secondaryLink: {
    type: String,
    default: "/vs",
  },
  time: {
    type: String,
    default: "5",
  },
});
</script>

<template>
  <section class="py-24 relative overflow-hidden">
    <GradientBackground />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center md:text-left">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            {{ title }}
          </h2>
          <p class="text-xl text-white/80 mb-8 max-w-lg">
            {{ description }}
          </p>

          <div
            class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
          >
            <Button
              size="lg"
              variant="secondary-on-dark"
              class="text-lg px-8"
              as-child
            >
              <NuxtLink
                to="/register"
                class="flex items-center justify-center gap-2"
              >
                Get Started Free
                <Icon name="ph:arrow-right" class="w-5 h-5" />
              </NuxtLink>
            </Button>
            <Button
              size="lg"
              variant="secondary-on-dark"
              class="text-lg px-8 !bg-transparent"
              as-child
            >
              <NuxtLink
                :to="secondaryLink"
                class="flex items-center justify-center gap-2 text-white hover:text-white/90"
              >
                {{ secondary }}
                <Icon name="ph:arrow-right" class="w-5 h-5" />
              </NuxtLink>
            </Button>
          </div>

          <div class="text-sm text-white/60">
            ⚡️ {{ time }}-minute setup • No credit card required
          </div>
        </div>

        <div class="hidden md:block">
          <div class="grid grid-cols-2 gap-4 relative">
            <div class="space-y-4">
              <div
                class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:-translate-y-1 transition-transform"
              >
                <div
                  class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3"
                >
                  <Icon name="ph:users-three" class="w-5 h-5 text-white" />
                </div>
                <div class="font-semibold text-white text-lg mb-1">
                  For Dancers
                </div>
                <p class="text-white/80">
                  Promote events and earn rewards<NuxtLink
                    to="/for/dancers"
                    class="text-white hover:text-purple-200 font-medium ml-1 whitespace-nowrap"
                  >
                    Learn more
                    <Icon
                      name="ph:arrow-right"
                      class="inline-block w-4 h-4 ml-0.5"
                    />
                  </NuxtLink>
                </p>
              </div>
              <div
                class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:-translate-y-1 transition-transform"
              >
                <div
                  class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3"
                >
                  <Icon name="ph:microphone-stage" class="w-5 h-5 text-white" />
                </div>
                <div class="font-semibold text-white text-lg mb-1">
                  For Artists
                </div>
                <p class="text-white/80">
                  Grow your audience & business
                  <NuxtLink
                    to="/for/artists"
                    class="text-white hover:text-purple-200 font-medium ml-1"
                  >
                    Learn more
                    <Icon
                      name="ph:arrow-right"
                      class="inline-block w-4 h-4 ml-0.5"
                    />
                  </NuxtLink>
                </p>
              </div>
            </div>
            <div class="space-y-4 mt-8">
              <div
                class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:-translate-y-1 transition-transform"
              >
                <div
                  class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3"
                >
                  <Icon name="ph:buildings" class="w-5 h-5 text-white" />
                </div>
                <div class="font-semibold text-white text-lg mb-1">
                  For Venues
                </div>
                <p class="text-white/80">
                  Fill your space with amazing events
                  <NuxtLink
                    to="/for/venues"
                    class="text-white hover:text-purple-200 font-medium ml-1"
                  >
                    Learn more
                    <Icon
                      name="ph:arrow-right"
                      class="inline-block w-4 h-4 ml-0.5"
                    />
                  </NuxtLink>
                </p>
              </div>
              <div
                class="bg-white/10 backdrop-blur rounded-xl p-6 transform hover:-translate-y-1 transition-transform"
              >
                <div
                  class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-3"
                >
                  <Icon name="ph:users" class="w-5 h-5 text-white" />
                </div>
                <div class="font-semibold text-white text-lg mb-1">
                  For Organizers
                </div>
                <p class="text-white/80">
                  Create & promote events easily
                  <NuxtLink
                    to="/for/organizers"
                    class="text-white hover:text-purple-200 font-medium ml-1"
                  >
                    Learn more
                    <Icon
                      name="ph:arrow-right"
                      class="inline-block w-4 h-4 ml-0.5"
                    />
                  </NuxtLink>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
