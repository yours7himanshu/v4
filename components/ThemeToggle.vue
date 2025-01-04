<script setup lang="ts">
const colorMode = useColorMode();

const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};

const isDark = computed(() => colorMode.value === "dark");
</script>

<template>
  <Switch :checked="isDark" @update:checked="toggleTheme" class="relative">
    <Icon
      :name="isDark ? 'lucide:moon' : 'lucide:sun'"
      class="h-4 w-4 absolute left-0.5 top-1/2 -translate-y-1/2 z-10 text-slate-900 dark:text-slate-50"
    />
  </Switch>
</template>
