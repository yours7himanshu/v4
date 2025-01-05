<template>
  <section class="py-24 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 text-foreground">
          Start Dancing Today
        </h2>
        <p class="text-xl text-muted-foreground">
          Join 10,000+ dancers who found their dance community with WeDance
        </p>
      </div>

      <div class="relative">
        <!-- Connection Line (Desktop) -->
        <div
          class="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"
        ></div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          <!-- Step 1 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110"
              >
                <Icon
                  name="ph:compass"
                  class="w-10 h-10 text-primary-foreground"
                />
              </div>
              <div class="text-center">
                <div class="text-primary font-medium mb-2">Step 1</div>
                <h3 class="text-xl font-bold mb-3 text-foreground">
                  Find Your Scene
                </h3>
                <p class="text-muted-foreground">
                  Choose your city and dance styles - we'll show you what's
                  happening tonight
                </p>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110"
              >
                <Icon
                  name="ph:users-three"
                  class="w-10 h-10 text-primary-foreground"
                />
              </div>
              <div class="text-center">
                <div class="text-primary font-medium mb-2">Step 2</div>
                <h3 class="text-xl font-bold mb-3 text-foreground">
                  Meet Dancers
                </h3>
                <p class="text-muted-foreground">
                  Join local groups, find dance buddies, and plan festival trips
                  together
                </p>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110"
              >
                <Icon
                  name="ph:calendar-check"
                  class="w-10 h-10 text-primary-foreground"
                />
              </div>
              <div class="text-center">
                <div class="text-primary font-medium mb-2">Step 3</div>
                <h3 class="text-xl font-bold mb-3 text-foreground">
                  Join Events
                </h3>
                <p class="text-muted-foreground">
                  Book classes, attend socials, and experience amazing festivals
                </p>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-primary to-primary/90 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110"
              >
                <Icon
                  name="ph:heart-fill"
                  class="w-10 h-10 text-primary-foreground"
                />
              </div>
              <div class="text-center">
                <div class="text-primary font-medium mb-2">Step 4</div>
                <h3 class="text-xl font-bold mb-3 text-foreground">
                  Fall in Love
                </h3>
                <p class="text-muted-foreground">
                  With the dance, the music, the community, and the lifestyle
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
