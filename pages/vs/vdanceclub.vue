<template>
  <div>
    <!-- Hero Section -->
    <section
      class="pt-32 pb-24 bg-gradient-to-br from-purple-600 to-purple-900 relative overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            WeDance vs VDanceClub
          </h1>
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            A complete dance platform that connects you with local dancers,
            events, and communities - not just another social network
          </p>
          <div class="flex justify-center">
            <Button
              size="lg"
              variant="secondary"
              class="text-lg px-12"
              as-child
            >
              <NuxtLink
                to="/register"
                class="flex items-center justify-center gap-2"
              >
                Join Your Community
                <Icon name="ph:arrow-right" class="w-5 h-5" />
              </NuxtLink>
            </Button>
          </div>
          <div class="text-sm text-white/60 mt-4">
            ⚡️ 2-minute setup • No credit card required
          </div>
        </div>
      </div>
    </section>

    <!-- Pain Points Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">
          Common Social Dancing Challenges
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <Icon name="ph:map-pin" class="w-10 h-10 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Finding Local Scene</h3>
            <p class="text-gray-600">
              Hard to discover active dance communities and events in your area
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <Icon
              name="ph:users-three"
              class="w-10 h-10 text-purple-600 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Partner Finding</h3>
            <p class="text-gray-600">
              No easy way to find practice partners matching your style and
              level
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <Icon name="ph:calendar" class="w-10 h-10 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Event Planning</h3>
            <p class="text-gray-600">
              Difficult to coordinate festival trips, share rides, and find
              accommodation
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">
          Why Choose WeDance?
        </h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl p-8 shadow-sm">
            <div class="flex items-center gap-4 mb-6">
              <Icon name="ph:chat-circle" class="w-8 h-8 text-gray-600" />
              <h3 class="text-2xl font-semibold">VDanceClub</h3>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>Just another social network</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>Limited event features</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>No local scene focus</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>Basic partner search</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>No festival coordination tools</span>
              </li>
            </ul>
          </div>
          <div
            class="bg-white rounded-xl p-8 shadow-sm border-2 border-purple-600"
          >
            <div class="flex items-center gap-4 mb-6">
              <div
                class="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center"
              >
                <Icon
                  name="ph:heart-straight-fill"
                  class="w-5 h-5 text-white"
                />
              </div>
              <h3 class="text-2xl font-semibold">WeDance Platform</h3>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1"
                />
                <span>Complete dance ecosystem</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1"
                />
                <span>Full event management</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1"
                />
                <span>Active local communities</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1"
                />
                <span>Smart partner matching</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1"
                />
                <span>Festival planning tools</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">
          Everything You Need to Dance More
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6">
            <Icon name="ph:map-pin" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Local Scene</h3>
            <p class="text-gray-600">
              Find active dance communities and events in your city
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:users-three" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Partner Finding</h3>
            <p class="text-gray-600">
              Connect with dancers who match your style, level, and schedule
            </p>
          </div>
          <div class="p-6">
            <Icon
              name="ph:calendar-check"
              class="w-8 h-8 text-purple-600 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Event Discovery</h3>
            <p class="text-gray-600">
              Never miss a dance with personalized event recommendations
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:car" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Festival Planning</h3>
            <p class="text-gray-600">
              Share rides, find accommodation, and coordinate with dance friends
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:chats" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Community Chat</h3>
            <p class="text-gray-600">
              Join discussions, share tips, and stay updated with local news
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:user-circle" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Rich Profiles</h3>
            <p class="text-gray-600">
              Showcase your dance journey and connect with like-minded dancers
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">
          Ready to Join Your Dance Community?
        </h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with dancers in your city and start your next dance adventure
        </p>
        <div class="flex justify-center">
          <Button size="lg" variant="secondary" class="text-lg px-12" as-child>
            <NuxtLink
              to="/register"
              class="flex items-center justify-center gap-2"
            >
              Join Now Free
              <Icon name="ph:arrow-right" class="w-5 h-5" />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
