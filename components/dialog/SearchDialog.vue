<script setup lang="ts">
const dialog = useDialog();
const router = useRouter();
const searchQuery = ref("");
const searchInput = ref();

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
onMounted(() => {
  nextTick(() => {
    const input = searchInput.value?.$el?.querySelector("input");
    input?.focus();
  });
});
</script>

<template>
  <DialogHeader>
    <DialogTitle>Search</DialogTitle>
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
