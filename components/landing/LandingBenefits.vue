<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold">Your Dance Community Awaits</h2>
        <p class="text-gray-600 mt-2">
          Join thousands of dancers, artists, and organizers making dance more
          accessible and connected
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- For Dancers -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="text-center mb-6">
            <div
              class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-xl"
            >
              <Icon name="ph:users-three" class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold mb-2">For Dancers</h3>
            <p class="text-gray-600 text-sm">
              Never dance alone - find your perfect partners, events, and
              community
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:users" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Dance Partners & Hangouts</h4>
                <p class="text-sm text-gray-600">
                  Find practice partners that match your style and level, join
                  social dance meetups
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:calendar" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Festival & Event Planning</h4>
                <p class="text-sm text-gray-600">
                  Share rides, split accommodation costs, and coordinate
                  festival trips with other dancers
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:star" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Local Scene Integration</h4>
                <p class="text-sm text-gray-600">
                  Get insider tips, join active groups, and feel at home in any
                  city's dance scene
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- For Artists -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="text-center mb-6">
            <div
              class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-xl"
            >
              <Icon
                name="ph:microphone-stage"
                class="w-6 h-6 text-purple-600"
              />
            </div>
            <h3 class="text-xl font-bold mb-2">For Artists</h3>
            <p class="text-gray-600 text-sm">
              Focus on your art - we'll handle the business side
              <NuxtLink
                to="/for/artists"
                class="text-purple-600 hover:text-purple-700 font-medium ml-1"
              >
                Learn more
                <Icon
                  name="ph:arrow-right"
                  class="inline-block w-4 h-4 ml-0.5"
                />
              </NuxtLink>
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:book" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Effortless Business Growth</h4>
                <p class="text-sm text-gray-600">
                  Accept bookings, manage classes, and get discovered by new
                  students - all in one place
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon
                  name="ph:video-camera"
                  class="w-3.5 h-3.5 text-purple-600"
                />
              </div>
              <div>
                <h4 class="font-medium mb-1">Showcase Your Talent</h4>
                <p class="text-sm text-gray-600">
                  Share performances, tutorials, and updates - build your brand
                  and attract opportunities
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:users" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Engaged Community</h4>
                <p class="text-sm text-gray-600">
                  Keep students motivated, share resources, and build a loyal
                  following that grows with you
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- For Organizers -->
        <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div class="text-center mb-6">
            <div
              class="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-purple-100 rounded-xl"
            >
              <Icon name="ph:buildings" class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold mb-2">For Organizers</h3>
            <p class="text-gray-600 text-sm">
              Create, promote, and sell out your events with ease
              <NuxtLink
                to="/for/organizers"
                class="text-purple-600 hover:text-purple-700 font-medium ml-1"
              >
                Learn more
                <Icon
                  name="ph:arrow-right"
                  class="inline-block w-4 h-4 ml-0.5"
                />
              </NuxtLink>
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:star" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Find Perfect Talent & Venues</h4>
                <p class="text-sm text-gray-600">
                  Book artists, musicians, and spaces - all vetted by the dance
                  community
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:ticket" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Smart Ticket Sales</h4>
                <p class="text-sm text-gray-600">
                  Set early bird prices, create promo codes, and track sales in
                  real-time
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:megaphone" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Powerful Marketing Tools</h4>
                <p class="text-sm text-gray-600">
                  Run referral campaigns, reward ambassadors, and reach the
                  right audience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
