<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();
</script>

<template>
  <div class="flex items-start gap-3">
    <input
      :checked="modelValue"
      @change="
        emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
      type="checkbox"
      required
      class="mt-1"
    />
    <label class="text-sm text-gray-600">
      I agree to the
      <NuxtLink to="/terms" class="text-purple-600 hover:text-purple-700">
        Terms of Service
      </NuxtLink>
      and
      <NuxtLink to="/privacy" class="text-purple-600 hover:text-purple-700">
        Privacy Policy
      </NuxtLink>
    </label>
  </div>
</template>
