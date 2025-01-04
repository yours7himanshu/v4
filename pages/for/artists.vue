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
            Grow Your Dance Business
          </h1>
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Connect with students, promote your events, and build your brand in
            the dance community
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
                Create Artist Profile
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
          Everything You Need to Succeed
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <Icon
              name="ph:users-three"
              class="w-12 h-12 text-purple-600 mb-6"
            />
            <h3 class="text-xl font-semibold mb-4">Reach More Students</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Get discovered by dancers looking for classes</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Showcase your teaching style and experience</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Build your student community</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <Icon
              name="ph:calendar-check"
              class="w-12 h-12 text-purple-600 mb-6"
            />
            <h3 class="text-xl font-semibold mb-4">Manage Events Easily</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Create and promote classes & workshops</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Handle registrations and payments</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Track attendance and engagement</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-50 rounded-xl p-8">
            <Icon name="ph:chart-line" class="w-12 h-12 text-purple-600 mb-6" />
            <h3 class="text-xl font-semibold mb-4">Grow Your Brand</h3>
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Professional artist profile and portfolio</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Share updates and content with followers</span>
              </li>
              <li class="flex items-start gap-2">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1 shrink-0"
                />
                <span>Get reviews and testimonials</span>
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
          Tools Built for Dance Professionals
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6">
            <Icon
              name="ph:calendar-check"
              class="w-8 h-8 text-purple-600 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Class Management</h3>
            <p class="text-gray-600">
              Schedule classes, manage registrations, and track attendance
              easily
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:credit-card" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Payment Processing</h3>
            <p class="text-gray-600">
              Accept payments, sell packages, and manage subscriptions
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:users-three" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Student Community</h3>
            <p class="text-gray-600">
              Create practice groups, share updates, and foster connections
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:megaphone" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Marketing Tools</h3>
            <p class="text-gray-600">
              Promote your classes and events to local dancers
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:chart-line" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Business Insights</h3>
            <p class="text-gray-600">
              Track your growth with detailed analytics and reports
            </p>
          </div>
          <div class="p-6">
            <Icon
              name="ph:device-mobile"
              class="w-8 h-8 text-purple-600 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Mobile Optimized</h3>
            <p class="text-gray-600">
              Manage your business on the go with our mobile app
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">
          What Dance Artists Say
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full"></div>
              <div>
                <div class="font-semibold">Sarah Johnson</div>
                <div class="text-gray-600">Salsa Instructor</div>
              </div>
            </div>
            <p class="text-gray-600">
              "WeDance has helped me grow my student base and manage my classes
              more efficiently. The platform makes it easy to connect with
              dancers looking for instruction."
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full"></div>
              <div>
                <div class="font-semibold">Michael Chen</div>
                <div class="text-gray-600">Dance Studio Owner</div>
              </div>
            </div>
            <p class="text-gray-600">
              "The event management and payment processing features save me
              hours every week. I can focus on teaching instead of
              administration."
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-8">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full"></div>
              <div>
                <div class="font-semibold">Maria Garcia</div>
                <div class="text-gray-600">Bachata Performer</div>
              </div>
            </div>
            <p class="text-gray-600">
              "The platform helps me promote my workshops and performances to a
              targeted audience of dance enthusiasts. It's been great for
              building my brand."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join thousands of dance professionals who trust WeDance to manage and
          grow their business
        </p>
        <div class="flex justify-center gap-4">
          <Button size="lg" variant="secondary" class="text-lg px-12" as-child>
            <NuxtLink
              to="/register"
              class="flex items-center justify-center gap-2"
            >
              Get Started Free
              <Icon name="ph:arrow-right" class="w-5 h-5" />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
