<template>
  <div>
    <!-- Hero Section -->
    <div class="relative min-h-[80vh] flex items-center overflow-hidden">
      <GradientBackground />

      <!-- Content -->
      <div class="relative w-full py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <!-- Left: Content -->
            <div class="text-center lg:text-left">
              <div
                class="flex items-center justify-center lg:justify-start gap-2 text-white/80 mb-4"
              >
                <Badge variant="secondary">
                  <Icon name="ph:sparkle" class="w-4 h-4 mr-1" />
                  Early Access
                </Badge>
              </div>
              <h1
                class="text-4xl lg:text-7xl font-extrabold text-white tracking-tight mb-6"
              >
                The Future of Event Management
              </h1>
              <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0">
                Be among the first organizers to join our platform. Create
                events, sell tickets, and grow your dance business globally.
              </p>
              <div
                class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <Button size="lg" variant="primary-on-dark" as-child>
                  <NuxtLink to="/register">
                    Join Early Access
                    <Icon name="ph:arrow-right" class="w-5 h-5" />
                  </NuxtLink>
                </Button>
                <Button size="lg" variant="secondary-on-dark" as-child>
                  <NuxtLink to="#how-it-works">
                    How It Works
                    <Icon name="ph:play-circle" class="w-5 h-5" />
                  </NuxtLink>
                </Button>
              </div>
              <div
                class="mt-8 flex items-center justify-center lg:justify-start gap-8 text-white/80"
              >
                <div class="flex items-center gap-2">
                  <Icon name="ph:check-circle" class="w-5 h-5 text-green-400" />
                  <span>5-minute setup</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="ph:crown" class="w-5 h-5 text-green-400" />
                  <span>Founding member benefits</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="ph:star" class="w-5 h-5 text-green-400" />
                  <span>First month free</span>
                </div>
              </div>
            </div>

            <!-- Right: Value Proposition -->
            <div class="grid grid-cols-2 gap-6">
              <div
                class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <Icon
                  name="ph:calendar-check"
                  class="w-8 h-8 text-white/80 mb-4"
                />
                <div class="text-xl font-bold text-white mb-2">
                  Events & Festivals
                </div>
                <div class="text-white/80">
                  From regular parties to large festivals, all in one place
                </div>
              </div>
              <div
                class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <Icon
                  name="ph:users-three"
                  class="w-8 h-8 text-white/80 mb-4"
                />
                <div class="text-xl font-bold text-white mb-2">
                  Artist Booking
                </div>
                <div class="text-white/80">
                  Find and book the perfect talent for your events
                </div>
              </div>
              <div
                class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <Icon name="ph:buildings" class="w-8 h-8 text-white/80 mb-4" />
                <div class="text-xl font-bold text-white mb-2">
                  Venue Management
                </div>
                <div class="text-white/80">
                  Book and manage dance studios with ease
                </div>
              </div>
              <div
                class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <Icon name="ph:chart-line" class="w-8 h-8 text-white/80 mb-4" />
                <div class="text-xl font-bold text-white mb-2">
                  Business Tools
                </div>
                <div class="text-white/80">
                  Everything you need to grow your events
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-4">
          Simple & Transparent Pricing
        </h2>
        <p
          class="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          No hidden fees. No monthly charges. Only pay when you sell tickets.
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <Icon
              name="ph:calendar-check"
              class="w-12 h-12 text-purple-600 mb-6"
            />
            <h3 class="text-xl font-semibold mb-4">Events & Festivals</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Regular parties & socials</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Festivals & congresses</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Courses & workshops</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Schedule management</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Automatic check-in</span>
              </li>
            </ul>
            <div class="mt-6 pt-6 border-t border-gray-200">
              <div class="text-sm text-gray-500">Platform fee</div>
              <div class="text-3xl font-bold text-purple-600">€0.25</div>
              <div class="text-sm text-gray-500 mt-1">per ticket</div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <Icon
              name="ph:users-three"
              class="w-12 h-12 text-purple-600 mb-6"
            />
            <h3 class="text-xl font-semibold mb-4">Artist Booking</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Book teachers, DJs, and performers</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Find photographers and vendors</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Post volunteer opportunities</span>
              </li>
            </ul>
            <div class="mt-6 pt-6 border-t border-gray-200">
              <div class="text-sm text-gray-500">Platform fee</div>
              <div class="text-3xl font-bold text-purple-600">5%</div>
              <div class="text-sm text-gray-500 mt-1">per booking</div>
            </div>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <Icon name="ph:buildings" class="w-12 h-12 text-purple-600 mb-6" />
            <h3 class="text-xl font-semibold mb-4">Venue Management</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Studio & venue bookings</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Calendar management</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Automated scheduling</span>
              </li>
            </ul>
            <div class="mt-6 pt-6 border-t border-gray-200">
              <div class="text-sm text-gray-500">Platform fee</div>
              <div class="text-3xl font-bold text-purple-600">5%</div>
              <div class="text-sm text-gray-500 mt-1">per booking</div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="text-sm text-gray-500 max-w-2xl mx-auto">
            All fees include payment processing, hosting, and platform tools.
            Get paid directly to your bank account every week.
          </p>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-4">All-in-One Platform</h2>
        <p
          class="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Everything you need to run successful dance events
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6 bg-white rounded-xl">
            <Icon name="ph:ticket" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Ticketing System</h3>
            <p class="text-gray-600">
              Multiple ticket types, promo codes, and automatic check-in
            </p>
          </div>
          <div class="p-6 bg-white rounded-xl">
            <Icon name="ph:users-three" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Artist Management</h3>
            <p class="text-gray-600">
              Find and coordinate with teachers, DJs, musicians, photographers,
              vendors, and volunteers
            </p>
          </div>
          <div class="p-6 bg-white rounded-xl">
            <Icon name="ph:calendar" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Schedule Builder</h3>
            <p class="text-gray-600">
              Create and manage event schedules and activities
            </p>
          </div>
          <div class="p-6 bg-white rounded-xl">
            <Icon name="ph:megaphone" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Marketing Tools</h3>
            <p class="text-gray-600">
              Promote events to the local dance community
            </p>
          </div>
          <div class="p-6 bg-white rounded-xl">
            <Icon name="ph:chart-line" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Analytics</h3>
            <p class="text-gray-600">
              Track sales, attendance, and event performance
            </p>
          </div>
          <div class="p-6 bg-white rounded-xl">
            <Icon name="ph:credit-card" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Payment System</h3>
            <p class="text-gray-600">Secure payments and automatic payouts</p>
          </div>
          <div class="p-6 bg-white rounded-xl">
            <Icon name="ph:buildings" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Venue Management</h3>
            <p class="text-gray-600">
              Book and manage dance studios, track availability, and handle
              scheduling
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-4">Join Our Vision</h2>
        <p
          class="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Be among the first organizers to shape the future of dance events
        </p>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full"></div>
              <div>
                <div class="font-semibold">For Party Organizers</div>
                <div class="text-gray-600">Regular Events</div>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              "Looking forward to a platform that makes it easy to manage
              regular parties and courses. The ticketing system looks perfect
              for social dances."
            </p>
            <div class="text-sm text-purple-600 font-medium">
              🎉 Parties & workshops
            </div>
          </div>
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full"></div>
              <div>
                <div class="font-semibold">For Festival Directors</div>
                <div class="text-gray-600">Large Events</div>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              "Can't wait to use the comprehensive tools for managing festivals.
              Having everything in one place will save us so much time."
            </p>
            <div class="text-sm text-purple-600 font-medium">
              🎪 Festivals & congresses
            </div>
          </div>
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full"></div>
              <div>
                <div class="font-semibold">For Dance Schools</div>
                <div class="text-gray-600">Course Management</div>
              </div>
            </div>
            <p class="text-gray-600 mb-4">
              "The course management and payment system looks exactly what we
              need for our dance school programs."
            </p>
            <div class="text-sm text-purple-600 font-medium">
              🎓 Classes & courses
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-4">Be Among the First Organizers</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join now and get exclusive founding member benefits
        </p>
        <div class="flex justify-center gap-4">
          <Button size="lg" variant="secondary" class="text-lg px-12" as-child>
            <NuxtLink
              to="/register"
              class="flex items-center justify-center gap-2"
            >
              Join Early Access
              <Icon name="ph:arrow-right" class="w-5 h-5" />
            </NuxtLink>
          </Button>
        </div>
        <div class="mt-6 text-sm text-gray-500">
          Limited spots available for early access
        </div>
      </div>
    </section>
  </div>
</template>
