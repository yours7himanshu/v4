<script setup>
const steps = [
  {
    title: "Complete Your Profile",
    description:
      "Add your dance styles, experience level, and a profile photo to help others find you.",
    icon: "ph:user-circle",
    action: "Edit Profile",
    to: "/settings/profile",
  },
  {
    title: "Join Your Local Community",
    description:
      "Find and connect with dancers in your city to stay updated on local events.",
    icon: "ph:map-pin",
    action: "Find City",
    to: "/cities",
  },
  {
    title: "Explore Events",
    description:
      "Discover dance events, workshops, and socials happening near you.",
    icon: "ph:calendar",
    action: "Browse Events",
    to: "/events",
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-32">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Success Message -->
      <div class="text-center mb-12">
        <div
          class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6"
        >
          <Icon name="ph:check-bold" class="w-8 h-8 text-green-600" />
        </div>
        <h1 class="text-3xl font-bold mb-4">Welcome to WeDance!</h1>
        <p class="text-gray-600 text-lg">
          Your account has been successfully created. Let's get you started!
        </p>
      </div>

      <!-- Next Steps -->
      <div class="bg-white rounded-xl shadow-sm border p-8">
        <h2 class="text-xl font-semibold mb-8">Next Steps</h2>
        <div class="space-y-8">
          <div v-for="(step, index) in steps" :key="index" class="flex gap-6">
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center"
              >
                <Icon :name="step.icon" class="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-lg font-medium mb-1">{{ step.title }}</h3>
              <p class="text-gray-600 mb-4">{{ step.description }}</p>
              <Button variant="outline" as-child>
                <NuxtLink :to="step.to" class="flex items-center gap-2">
                  {{ step.action }}
                  <Icon name="ph:arrow-right" class="w-4 h-4" />
                </NuxtLink>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <!-- Skip Option -->
      <div class="text-center mt-8">
        <NuxtLink to="/" class="text-gray-600 hover:text-purple-600">
          Skip for now and go to homepage
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
