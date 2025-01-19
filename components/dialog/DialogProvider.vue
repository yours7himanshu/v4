<script setup lang="ts">
import { useDialog } from "~/composables/useDialog";
import PricingOptionsDialog from "./PricingOptionsDialog.vue";

const dialog = useDialog();

const components = {
  PricingOptionsDialog,
} as const;
</script>

<template>
  <Teleport to="body">
    <component
      v-if="dialog.isOpen"
      :is="
        components[dialog.currentDialog?.component as keyof typeof components]
      "
      v-bind="dialog.currentDialog?.props"
    />
  </Teleport>
</template>
