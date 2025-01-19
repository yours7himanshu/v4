<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  simplified?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const types = computed(() =>
  props.simplified
    ? [
        {
          id: "dancer",
          label: "Dancer",
          icon: "ph:users-three",
          default: true,
        },
        {
          id: "teacher",
          label: "Teacher/Performer",
          icon: "ph:microphone-stage",
        },
        { id: "organizer", label: "Event Organizer", icon: "ph:buildings" },
      ]
    : [
        {
          id: "dancer",
          label: "Dancer",
          icon: "ph:users-three",
          default: true,
        },
        { id: "artist", label: "Artist", icon: "ph:microphone-stage" },
        { id: "organizer", label: "Organizer", icon: "ph:buildings" },
        { id: "venue", label: "Venue Owner", icon: "ph:house" },
      ]
);
</script>

<template>
  <div class="space-y-3">
    <label class="block text-sm font-medium text-gray-700"> I am a... </label>
    <div class="grid grid-cols-2 gap-4">
      <button
        v-for="type in types"
        :key="type.id"
        class="flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 hover:border-purple-500 hover:bg-purple-50"
        :class="[
          modelValue === type.id
            ? 'border-purple-500 bg-purple-50'
            : 'border-gray-200',
        ]"
        @click="emit('update:modelValue', type.id)"
        type="button"
      >
        <Icon :name="type.icon" class="w-6 h-6 text-purple-600" />
        <span class="font-medium">{{ type.label }}</span>
      </button>
    </div>
  </div>
</template>
