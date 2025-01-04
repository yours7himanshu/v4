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
            Create Unforgettable Dance Events
          </h1>
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Everything you need to organize, promote, and manage successful
            dance events
          </p>
          <div class="flex justify-center gap-4">
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
                Start Organizing
                <Icon name="ph:arrow-right" class="w-5 h-5" />
              </NuxtLink>
            </Button>
          </div>
          <div class="text-sm text-white/60 mt-4">
            ⚡️ 5-minute setup • No credit card required
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">
          Organize Events with Confidence
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <Icon name="ph:ticket" class="w-12 h-12 text-purple-600 mb-6" />
            <h3 class="text-xl font-semibold mb-4">Ticketing Made Simple</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Create multiple ticket types and pricing</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Manage registrations and check-ins</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Secure payment processing</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <Icon name="ph:megaphone" class="w-12 h-12 text-purple-600 mb-6" />
            <h3 class="text-xl font-semibold mb-4">Reach Your Audience</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Target local dance communities</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Share events across social media</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Email marketing and notifications</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <Icon name="ph:users" class="w-12 h-12 text-purple-600 mb-6" />
            <h3 class="text-xl font-semibold mb-4">Build Community</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Engage with attendees</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Collect feedback and reviews</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Grow your following</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">
          Everything You Need in One Place
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6">
            <Icon
              name="ph:calendar-check"
              class="w-8 h-8 text-purple-600 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Event Management</h3>
            <p class="text-gray-600">
              Create and manage events with customizable registration forms
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:buildings" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Venue Directory</h3>
            <p class="text-gray-600">
              Find and book perfect venues for your events
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:users" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Artist Network</h3>
            <p class="text-gray-600">
              Connect with performers, DJs, and instructors
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:chart-line" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Analytics</h3>
            <p class="text-gray-600">
              Track ticket sales, attendance, and revenue
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:chat-circle" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Communication</h3>
            <p class="text-gray-600">
              Chat with attendees, artists, and venues
            </p>
          </div>
          <div class="p-6">
            <Icon
              name="ph:share-network"
              class="w-8 h-8 text-purple-600 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Marketing Tools</h3>
            <p class="text-gray-600">
              Promote your events to the right audience
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">
          What Organizers Say
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full"></div>
              <div>
                <div class="font-semibold">David Martinez</div>
                <div class="text-gray-600">Festival Organizer</div>
              </div>
            </div>
            <p class="text-gray-600">
              "WeDance streamlines everything from ticket sales to artist
              bookings. It's transformed how we organize our annual festival."
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full"></div>
              <div>
                <div class="font-semibold">Lisa Wong</div>
                <div class="text-gray-600">Social Dance Host</div>
              </div>
            </div>
            <p class="text-gray-600">
              "The platform helps me reach more dancers and manage events
              efficiently. The community features are a game-changer."
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full"></div>
              <div>
                <div class="font-semibold">Alex Thompson</div>
                <div class="text-gray-600">Workshop Coordinator</div>
              </div>
            </div>
            <p class="text-gray-600">
              "Finding venues and instructors is so much easier now. The
              all-in-one platform saves us countless hours of work."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Host Amazing Events?</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join organizers worldwide who trust WeDance to create successful dance
          events
        </p>
        <div class="flex flex-col items-center gap-4">
          <Button size="lg" variant="secondary" class="text-lg px-12" as-child>
            <NuxtLink
              to="/register"
              class="flex items-center justify-center gap-2"
            >
              Get Started Free
              <Icon name="ph:arrow-right" class="w-5 h-5" />
            </NuxtLink>
          </Button>
          <p class="text-gray-600">
            Do you own a dance venue?
            <NuxtLink
              to="/for/venues"
              class="text-purple-600 hover:text-purple-700 font-medium"
            >
              Check out our venue solutions
              <Icon name="ph:arrow-right" class="inline-block w-4 h-4 ml-0.5" />
            </NuxtLink>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
