<script setup lang="ts">
import type { Price } from "~/schemas/event";
import { useDialog } from "~/composables/useDialog";

const props = defineProps<{
  prices: Price[];
  onSelect: (price: Price) => void;
}>();

const dialog = useDialog();

const handleSelect = (price: Price) => {
  props.onSelect(price);
  dialog.close();
};
</script>

<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl p-6 max-w-lg w-full mx-4">
      <h2 class="text-2xl font-bold mb-6">Select Pricing Option</h2>

      <div class="space-y-4">
        <button
          v-for="price in prices"
          :key="price.id"
          class="w-full p-4 border rounded-lg hover:border-purple-500 transition-colors flex items-start justify-between gap-4 text-left"
          @click="handleSelect(price)"
        >
          <div>
            <div class="font-medium">{{ price.name }}</div>
            <div class="text-sm text-gray-600">{{ price.description }}</div>
          </div>
          <div class="font-bold whitespace-nowrap">
            {{ price.amount }} {{ price.currency }}
          </div>
        </button>
      </div>

      <button
        class="mt-6 w-full p-2 text-gray-600 hover:text-gray-900"
        @click="dialog.close"
      >
        Cancel
      </button>
    </div>
  </div>
</template>
