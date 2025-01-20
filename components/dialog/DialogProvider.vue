<script setup lang="ts">
import { useDialog } from "~/composables/useDialog";
import PricingOptionsDialog from "./PricingOptionsDialog.vue";
import UserTypeInfoDialog from "./UserTypeInfoDialog.vue";
import ArtistBookingDialog from "./ArtistBookingDialog.vue";
import { Dialog, DialogContent } from "~/components/ui/dialog";
import type { Component } from "vue";

const dialog = useDialog();

const components = {
  PricingOptionsDialog,
  UserTypeInfoDialog,
  ArtistBookingDialog,
} as const;

const currentComponent = computed<Component>(() => {
  return components[
    dialog.currentDialog.value?.component as keyof typeof components
  ];
});

const currentProps = computed(() => {
  return dialog.currentDialog.value?.props ?? {};
});

const isOpen = computed({
  get: () => dialog.isOpen.value,
  set: (value: boolean) => {
    dialog.isOpen.value = value;
  },
});
</script>

<template>
  <Dialog :open="isOpen" @update:open="isOpen = $event">
    <DialogContent>
      <component v-if="isOpen" :is="currentComponent" v-bind="currentProps" />
    </DialogContent>
  </Dialog>
</template>
