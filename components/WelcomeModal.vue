<script setup lang="ts">
import { ref, onMounted } from "vue";

const isOpen = ref(true);
const hasSeenModal = ref(false);

onMounted(() => {
  hasSeenModal.value = localStorage.getItem("hasSeenWelcomeModal") === "true";
  isOpen.value = !hasSeenModal.value;
});

const closeModal = () => {
  isOpen.value = false;
  localStorage.setItem("hasSeenWelcomeModal", "true");
};
</script>

<template>
  <Dialog :open="isOpen" @update:open="closeModal">
    <DialogContent class="sm:max-w-lg">
      <DialogHeader>
        <DialogTitle>🚧 WeDance Prototype</DialogTitle>
        <DialogDescription>
          This is a development version with limited functionality
        </DialogDescription>
      </DialogHeader>

      <div class="py-4">
        <div class="space-y-4 text-sm">
          <ul class="list-disc pl-4 space-y-2">
            <li>Features are not fully functional yet</li>
            <li>Data is not persistent</li>
            <li>Launch expected: Q2 2025</li>
          </ul>

          <div class="flex items-center gap-3 pt-2">
            <a
              href="https://t.me/WeDancePlatform"
              target="_blank"
              class="inline-flex items-center gap-1 text-purple-600 hover:text-purple-700"
            >
              <Icon name="ph:telegram-logo" class="w-5 h-5" />
              Telegram Channel
            </a>
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button @click="closeModal">Got it</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
