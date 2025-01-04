<template>
  <section
    class="py-24 bg-gradient-to-br from-purple-600 to-purple-900 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    ></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="text-center md:text-left">
          <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to join the community?
          </h2>
          <p class="text-xl text-white/80 mb-8 max-w-lg">
            Start your dance journey today and connect with dancers worldwide
          </p>
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button size="lg" variant="secondary" class="text-lg px-8" as-child>
              <NuxtLink
                to="/register"
                class="flex items-center justify-center gap-2"
              >
                Get Started
                <Icon name="ph:arrow-right" class="w-5 h-5" />
              </NuxtLink>
            </Button>
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
                <p class="text-white/80">Find events & partners near you</p>
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
                <p class="text-white/80">Grow your audience & business</p>
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
                  For Organizers
                </div>
                <p class="text-white/80">Create & promote events easily</p>
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
                  For Communities
                </div>
                <p class="text-white/80">Connect & grow together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
