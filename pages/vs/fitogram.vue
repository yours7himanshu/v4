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
            WeDance vs Fitogram
          </h1>
          <p class="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            A dance-focused platform that helps you manage your studio, grow
            your community, and fill your classes
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
                Start Free Trial
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

    <!-- Pain Points Section -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">
          Common Studio Management Challenges
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-gray-50 rounded-xl p-6">
            <Icon
              name="ph:users-three"
              class="w-10 h-10 text-purple-600 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Finding New Students</h3>
            <p class="text-gray-600">
              Limited exposure to dancers actively looking for classes in your
              area
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <Icon name="ph:stack" class="w-10 h-10 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Multiple Tools</h3>
            <p class="text-gray-600">
              Using different platforms for bookings, payments, and
              communication
            </p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <Icon name="ph:handshake" class="w-10 h-10 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Student Retention</h3>
            <p class="text-gray-600">
              Difficulty keeping students engaged and coming back to classes
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
              <Icon name="ph:barbell" class="w-8 h-8 text-gray-600" />
              <h3 class="text-2xl font-semibold">Fitogram</h3>
            </div>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>Generic fitness platform</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>No dance-specific features</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>Limited community features</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>Basic booking system</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="ph:x-circle" class="w-5 h-5 text-red-500 mt-1" />
                <span>Higher monthly costs</span>
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
                <span>Built for dance studios</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1"
                />
                <span>Partner & level matching</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1"
                />
                <span>Active dance community</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1"
                />
                <span>Advanced class management</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon
                  name="ph:check-circle"
                  class="w-5 h-5 text-green-500 mt-1"
                />
                <span>Affordable pricing</span>
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
          Everything Your Studio Needs
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="p-6">
            <Icon
              name="ph:calendar-check"
              class="w-8 h-8 text-purple-600 mb-4"
            />
            <h3 class="text-xl font-semibold mb-2">Smart Scheduling</h3>
            <p class="text-gray-600">
              Manage multiple classes, teachers, and rooms with ease
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
            <Icon name="ph:users-four" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Student Management</h3>
            <p class="text-gray-600">
              Track attendance, progress, and communicate with students
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:chart-line" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Business Insights</h3>
            <p class="text-gray-600">
              Analytics on class popularity, revenue, and student retention
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:bell-ringing" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Automated Reminders</h3>
            <p class="text-gray-600">
              Send class notifications and follow-ups automatically
            </p>
          </div>
          <div class="p-6">
            <Icon name="ph:storefront" class="w-8 h-8 text-purple-600 mb-4" />
            <h3 class="text-xl font-semibold mb-2">Studio Profile</h3>
            <p class="text-gray-600">
              Showcase your classes and attract new students
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Studio?</h2>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join dance studios that are growing their business with WeDance
        </p>
        <div class="flex justify-center">
          <Button size="lg" variant="secondary" class="text-lg px-12" as-child>
            <NuxtLink
              to="/register"
              class="flex items-center justify-center gap-2"
            >
              Start Free Trial
              <Icon name="ph:arrow-right" class="w-5 h-5" />
            </NuxtLink>
          </Button>
        </div>
      </div>
    </section>
  </div>
</template>
