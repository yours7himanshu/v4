<script setup lang="ts">
const stats = [
  { label: "Dancers", value: "2,455+" },
  { label: "Cities", value: "102" },
  { label: "Countries", value: "60" },
];

const currentFeatures = [
  {
    name: "Event Discovery",
    description: "Browse dance events by city and style",
  },
  {
    name: "Community Profiles",
    description: "Create and view dancer profiles",
  },
  {
    name: "Basic Posts",
    description: "Share updates and content with the community",
  },
];

const inProgress = [
  {
    name: "Event Management",
    description: "Tools for organizers to create and manage events",
  },
  {
    name: "Partner Finding",
    description: "Find dance partners for practice and events",
  },
  {
    name: "Local Scene Guides",
    description: "Discover the best dance spots in each city",
  },
];

const roadmap = [
  {
    quarter: "Q1 2024",
    features: [
      "Event Discovery Improvements",
      "Community Profiles Enhancement",
      "Basic Posts and Sharing",
    ],
  },
  {
    quarter: "Q2 2024",
    features: [
      "Event Management Tools",
      "Partner Finding System",
      "Local Scene Guides",
    ],
  },
  {
    quarter: "Q3 2024",
    features: [
      "Artist Profiles and Booking",
      "Venue Management",
      "Community Discussion Tools",
    ],
  },
  {
    quarter: "Q4 2024",
    features: [
      "Event Ticketing System",
      "Trust and Safety Features",
      "Advanced Analytics",
    ],
  },
];
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Project Status</h1>
        <p class="text-lg text-gray-600">
          WeDance is a participatory network transforming how dance communities
          connect, organize, and thrive together.
        </p>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-6 mb-12">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white p-6 rounded-lg shadow-sm text-center"
        >
          <div class="text-2xl font-bold text-purple-600">{{ stat.value }}</div>
          <div class="text-sm text-gray-600">{{ stat.label }}</div>
        </div>
      </div>

      <!-- Current Status -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Current Status</h2>
        <div class="bg-white rounded-lg shadow-sm divide-y">
          <div
            v-for="feature in currentFeatures"
            :key="feature.name"
            class="p-4 flex items-start gap-3"
          >
            <Icon name="ph:check-circle" class="w-5 h-5 text-green-500 mt-1" />
            <div>
              <div class="font-medium">{{ feature.name }}</div>
              <div class="text-sm text-gray-600">
                {{ feature.description }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- In Progress -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">In Development</h2>
        <div class="bg-white rounded-lg shadow-sm divide-y">
          <div
            v-for="feature in inProgress"
            :key="feature.name"
            class="p-4 flex items-start gap-3"
          >
            <Icon
              name="ph:circle-dashed"
              class="w-5 h-5 text-purple-500 mt-1"
            />
            <div>
              <div class="font-medium">{{ feature.name }}</div>
              <div class="text-sm text-gray-600">
                {{ feature.description }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Roadmap -->
      <div class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Development Roadmap</h2>
        <div class="space-y-6">
          <div
            v-for="phase in roadmap"
            :key="phase.quarter"
            class="bg-white rounded-lg shadow-sm p-6"
          >
            <div class="font-semibold text-purple-600 mb-3">
              {{ phase.quarter }}
            </div>
            <ul class="space-y-2">
              <li
                v-for="feature in phase.features"
                :key="feature"
                class="text-sm text-gray-600 flex items-center gap-2"
              >
                <Icon name="ph:arrow-right" class="w-4 h-4" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Get Involved -->
      <div class="text-center">
        <h2 class="text-2xl font-bold mb-4">Get Involved</h2>
        <p class="text-gray-600 mb-6">
          Join our community and help shape the future of dance communities
        </p>
        <a
          href="https://t.me/WeDancePlatform"
          target="_blank"
          class="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          <Icon name="ph:telegram-logo" class="w-5 h-5" />
          Join Our Telegram Channel
        </a>
      </div>
    </div>
  </div>
</template>
