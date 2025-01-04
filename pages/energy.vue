<script setup>
import UserPoints from "~/components/common/UserPoints.vue";

const energyLevels = [
  {
    name: "Newcomer",
    energy: 0,
    benefits: [
      "Basic posting and interaction",
      "Join events",
      "Connect with dancers",
    ],
  },
  {
    name: "Regular",
    energy: 50,
    benefits: ["Create events", "Write reviews", "Share dance videos"],
  },
  {
    name: "Established",
    energy: 200,
    benefits: [
      "Create projects",
      "Moderate comments",
      "Early access to features",
    ],
  },
  {
    name: "Trusted",
    energy: 500,
    benefits: ["Edit tags", "Verify reviews", "Special community badge"],
  },
  {
    name: "Expert",
    energy: 1000,
    benefits: ["Content curation", "Mentor new users", "Featured profile"],
  },
  {
    name: "Guardian",
    energy: 2000,
    benefits: ["Community moderation", "Feature content", "Exclusive events"],
  },
];

const earnEnergy = [
  {
    category: "Content Creation",
    items: [
      { action: "Create Article", energy: "+10" },
      { action: "Share Video", energy: "+5" },
      { action: "Start Discussion", energy: "+3" },
      { action: "Post Event", energy: "+5" },
      { action: "Write Review", energy: "+3" },
    ],
  },
  {
    category: "Community Help",
    items: [
      { action: "Share Local Info", energy: "+5" },
      { action: "Event check-in", energy: "+1" },
      { action: "Partner Connection", energy: "+2" },
      { action: "Project Contribution", energy: "+2" },
      { action: "Help Newcomers", energy: "+3" },
    ],
  },
  {
    category: "Profile & Trust",
    items: [
      { action: "Complete Profile", energy: "+5" },
      { action: "Phone Verification", energy: "+3" },
      { action: "Email Verification", energy: "+2" },
      { action: "Add Dance Videos", energy: "+2" },
      { action: "Monthly Activity", energy: "+1" },
    ],
  },
];
</script>

<template>
  <div class="min-h-screen bg-gray-50 py-32 sm:py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <div
          class="flex items-center justify-center gap-2 text-orange-500 mb-4"
        >
          <Icon name="heroicons:fire" class="w-8 h-8" />
          <h1 class="text-3xl font-bold">Dance Energy</h1>
        </div>
        <p class="text-xl text-gray-600">
          Your active contribution to the dance community is measured in Dance
          Energy. The more you participate and help others, the more energy you
          earn.
        </p>
      </div>

      <!-- Energy Levels -->
      <div class="mb-24">
        <h2 class="text-2xl font-semibold text-center mb-12">Energy Levels</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="level in energyLevels"
            :key="level.name"
            class="bg-white rounded-xl shadow-sm border p-6 hover:border-orange-200 transition-colors"
          >
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-medium">{{ level.name }}</h3>
              <UserPoints :points="level.energy" />
            </div>
            <ul class="space-y-2">
              <li
                v-for="benefit in level.benefits"
                :key="benefit"
                class="flex items-start gap-2 text-gray-600"
              >
                <Icon
                  name="ph:check"
                  class="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                />
                <span>{{ benefit }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- How to Earn -->
      <div>
        <h2 class="text-2xl font-semibold text-center mb-12">
          How to Earn Energy
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="category in earnEnergy"
            :key="category.category"
            class="bg-white rounded-xl shadow-sm border p-6"
          >
            <h3 class="text-lg font-medium mb-6">{{ category.category }}</h3>
            <ul class="space-y-4">
              <li
                v-for="item in category.items"
                :key="item.action"
                class="flex items-center justify-between"
              >
                <span class="text-gray-600">{{ item.action }}</span>
                <UserPoints :points="item.energy" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tips -->
      <div class="mt-24 max-w-3xl mx-auto text-center">
        <h2 class="text-2xl font-semibold mb-4">Tips for Success</h2>
        <p class="text-gray-600 mb-8">
          Stay active in the community, help others, and create quality content
          to maintain and increase your energy level. Energy starts decaying
          after 3 months of inactivity, so keep dancing and contributing!
        </p>
        <Button variant="outline" as-child>
          <NuxtLink to="/feed" class="flex items-center justify-center gap-2">
            Start Contributing
            <Icon name="ph:arrow-right" class="w-4 h-4" />
          </NuxtLink>
        </Button>
      </div>
    </div>
  </div>
</template>
