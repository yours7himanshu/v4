<script setup>
import { ref } from "vue";
import UserPoints from "~/components/common/UserPoints.vue";

const selectedType = ref("all");

const energyRewards = [
  { action: "Create Article", energy: "+10", icon: "ph:article" },
  { action: "Share Video", energy: "+5", icon: "ph:video-camera" },
  { action: "Start Discussion", energy: "+3", icon: "ph:chats" },
  { action: "Post Event", energy: "+5", icon: "ph:calendar" },
  { action: "Write Review", energy: "+3", icon: "ph:star" },
];
</script>

<template>
  <div class="flex gap-8 mt-6">
    <!-- Left Sidebar -->
    <div class="hidden md:block w-60 flex-shrink-0">
      <PostFilters v-model:type="selectedType" />
    </div>

    <!-- Main Content -->
    <div class="flex-1 max-w-xl">
      <Create class="mb-6" />
      <!-- Mobile Filters -->
      <div class="md:hidden mb-6">
        <PostFilters v-model:type="selectedType" />
      </div>
      <PostList :type="selectedType" />
    </div>

    <!-- Right Sidebar -->
    <div class="hidden xl:block w-72 flex-shrink-0">
      <div class="bg-white rounded-xl shadow-sm border p-4">
        <h3 class="font-medium mb-4">Energy Rewards</h3>
        <ul class="space-y-3">
          <li
            v-for="reward in energyRewards"
            :key="reward.action"
            class="flex items-center justify-between"
          >
            <div class="flex items-center gap-2 text-sm text-gray-600">
              <Icon :name="reward.icon" class="w-4 h-4 text-orange-500" />
              <span>{{ reward.action }}</span>
            </div>
            <UserPoints :points="reward.energy" />
          </li>
        </ul>
        <div class="mt-6 pt-6 border-t">
          <h3 class="font-medium mb-4">Energy Tips</h3>
          <ul class="space-y-3 text-sm text-gray-600">
            <li class="flex items-start gap-2">
              <Icon
                name="ph:lightbulb"
                class="w-5 h-5 text-orange-500 flex-shrink-0"
              />
              <span>Create quality content to earn more energy</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon
                name="ph:chat-circle"
                class="w-5 h-5 text-orange-500 flex-shrink-0"
              />
              <span>Engage with others through comments and likes</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon
                name="ph:users"
                class="w-5 h-5 text-orange-500 flex-shrink-0"
              />
              <span>Help newcomers and share your knowledge</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon
                name="ph:calendar-check"
                class="w-5 h-5 text-orange-500 flex-shrink-0"
              />
              <span>Check in at events you attend</span>
            </li>
          </ul>
          <div class="mt-4">
            <NuxtLink
              to="/energy"
              class="text-orange-500 hover:text-orange-600 text-sm flex items-center gap-1"
            >
              Learn more about Dance Energy
              <Icon name="ph:arrow-right" class="w-4 h-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
