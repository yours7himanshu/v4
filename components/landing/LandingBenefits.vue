<template>
  <section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold">One Platform for Everyone</h2>
        <p class="text-gray-600 mt-2">
          Discover how WeDance helps different members of the dance community
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
              Everything you need to grow in your dance journey
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon name="ph:calendar" class="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div>
                <h4 class="font-medium mb-1">Event Discovery</h4>
                <p class="text-sm text-gray-600">
                  Find relevant dance events easily, filter by style and
                  location, and see who's going
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
                <h4 class="font-medium mb-1">Partner Finding</h4>
                <p class="text-sm text-gray-600">
                  Find dance partners for practice, match based on level and
                  goals
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
                <h4 class="font-medium mb-1">Learning Journey</h4>
                <p class="text-sm text-gray-600">
                  Track your progress, get recommendations, and connect with
                  experienced dancers
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
              Tools to grow your teaching business and reach more students
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
                <h4 class="font-medium mb-1">Class Management</h4>
                <p class="text-sm text-gray-600">
                  Manage your schedule, handle bookings, and track student
                  progress
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
                <h4 class="font-medium mb-1">Content Sharing</h4>
                <p class="text-sm text-gray-600">
                  Share your knowledge through tutorials, performances, and
                  class content
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
                <h4 class="font-medium mb-1">Student Community</h4>
                <p class="text-sm text-gray-600">
                  Build your student base, maintain relationships, and foster
                  connections
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
              Everything you need to create successful dance events
            </p>
          </div>

          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon
                  name="ph:calendar-plus"
                  class="w-3.5 h-3.5 text-purple-600"
                />
              </div>
              <div>
                <h4 class="font-medium mb-1">Event Creation</h4>
                <p class="text-sm text-gray-600">
                  Create and publish events easily, manage tickets and check-ins
                </p>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div
                class="w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 flex-shrink-0 mt-0.5"
              >
                <Icon
                  name="ph:chart-line-up"
                  class="w-3.5 h-3.5 text-purple-600"
                />
              </div>
              <div>
                <h4 class="font-medium mb-1">Analytics & Growth</h4>
                <p class="text-sm text-gray-600">
                  Track attendance, analyze trends, and grow your community
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
                <h4 class="font-medium mb-1">Community Building</h4>
                <p class="text-sm text-gray-600">
                  Foster connections, maintain quality, and drive engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
