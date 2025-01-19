<script setup lang="ts">
import { useDialog } from "~/composables/useDialog";

const props = defineProps<{
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const dialog = useDialog();

const types = computed(() => [
  {
    id: "dancer",
    label: "Dancer",
    icon: "ph:users-three",
    default: true,
    description:
      "Join dance events, find dance partners, and connect with the community. Perfect for social dancers and students looking to learn and participate.",
  },
  {
    id: "artist",
    label: "Artist",
    icon: "ph:microphone-stage",
    description:
      "Showcase your talent as a performer, instructor, DJ, musician, or choreographer. Manage bookings and grow your audience.",
  },
  {
    id: "organizer",
    label: "Organizer",
    icon: "ph:buildings",
    description:
      "Create and manage dance events, from regular parties to festivals. Handle ticketing, promotion, and attendee management.",
  },
  {
    id: "venue",
    label: "Venue Owner",
    icon: "ph:house",
    description:
      "List your venue, manage bookings, and connect with event organizers. Perfect for dance studios and event spaces.",
  },
]);

const showInfo = () => {
  dialog.open({
    component: "UserTypeInfoDialog",
    props: {
      types: types.value,
    },
  });
};
</script>

<template>
  <div class="space-y-3">
    <div class="flex items-center gap-2">
      <label class="block text-sm font-medium text-gray-700"> I am a... </label>
      <button
        type="button"
        class="text-gray-400 hover:text-gray-500"
        @click="showInfo"
      >
        <Icon name="heroicons-outline:question-mark-circle" class="w-4 h-4" />
      </button>
    </div>
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
