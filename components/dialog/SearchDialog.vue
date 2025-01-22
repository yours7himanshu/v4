<script setup lang="ts">
const dialog = useDialog();
const router = useRouter();
const searchQuery = ref("");

const handleSearch = () => {
  if (!searchQuery.value) return;

  // Close dialog
  dialog.close();

  // Navigate to search results
  router.push({
    path: "/search",
    query: { q: searchQuery.value },
  });
};

// Focus input when dialog opens
const searchInput = ref<HTMLInputElement | null>(null);
onMounted(() => {
  nextTick(() => {
    searchInput.value?.focus();
  });
});
</script>

<template>
  <DialogHeader>
    <DialogTitle>Search</DialogTitle>
    <DialogDescription>
      Press <kbd class="px-2 py-1 text-xs rounded bg-muted">⌘K</kbd> to search
      anytime
    </DialogDescription>
  </DialogHeader>
  <div class="mt-4">
    <Input
      ref="searchInput"
      v-model="searchQuery"
      placeholder="Search everything..."
      class="w-full"
      @keyup.enter="handleSearch"
    >
      <template #prefix>
        <Icon
          name="ph:magnifying-glass"
          class="w-4 h-4 text-muted-foreground"
        />
      </template>
    </Input>
  </div>
  <DialogFooter class="mt-4">
    <Button @click="handleSearch" :disabled="!searchQuery">Search</Button>
  </DialogFooter>
</template>
