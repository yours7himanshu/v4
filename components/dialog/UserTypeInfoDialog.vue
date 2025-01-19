<script setup lang="ts">
import { useDialog } from "~/composables/useDialog";

const props = defineProps<{
  types: Array<{
    id: string;
    label: string;
    icon: string;
    description: string;
  }>;
}>();

const dialog = useDialog();
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl p-6 max-w-lg w-full mx-4">
      <h2 class="text-2xl font-bold mb-6">Choose Your Role</h2>

      <p class="text-gray-600 mb-6">
        Your role helps us personalize your experience and connect you with
        relevant opportunities in the dance community.
      </p>

      <div class="space-y-4">
        <div v-for="type in types" :key="type.id" class="space-y-2">
          <div class="flex items-center gap-2">
            <Icon :name="type.icon" class="w-5 h-5 text-purple-600" />
            <h3 class="font-medium">{{ type.label }}</h3>
          </div>
          <p class="text-gray-600 text-sm pl-7">{{ type.description }}</p>
        </div>
      </div>

      <button
        class="mt-6 w-full p-2 text-gray-600 hover:text-gray-900"
        @click="dialog.close"
      >
        Close
      </button>
    </div>
  </div>
</template>
