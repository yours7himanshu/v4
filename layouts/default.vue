<template>
  <div class="min-h-screen flex flex-col">
    <AppNavigation />
    <main class="flex-1 mt-[80px]">
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
