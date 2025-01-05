<template>
  <div class="min-h-screen flex flex-col">
    <AppNavigation />
    <WelcomeModal />
    <main>
      <slot />
    </main>
    <LandingFooter />
  </div>
</template>
