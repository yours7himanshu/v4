<script setup lang="ts">
import { useDialog } from "~/composables/useDialog";
import PricingOptionsDialog from "./PricingOptionsDialog.vue";
import UserTypeInfoDialog from "./UserTypeInfoDialog.vue";

const dialog = useDialog();

const components = {
  PricingOptionsDialog,
  UserTypeInfoDialog,
} as const;

const currentComponent = computed(() => {
  return components[
    dialog.currentDialog.value?.component as keyof typeof components
  ];
});

const currentProps = computed(() => {
  return dialog.currentDialog.value?.props;
});
</script>

<template>
  <Teleport to="body">
    <component
      v-if="dialog.isOpen"
      :is="currentComponent"
      v-bind="currentProps"
    />
  </Teleport>
</template>
