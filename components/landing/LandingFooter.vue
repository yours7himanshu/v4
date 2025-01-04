<template>
  <footer class="bg-gray-900 text-gray-300">
    <!-- Main Footer -->
    <div class="py-12 border-b border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <!-- Company -->
          <div>
            <h3 class="text-white font-semibold mb-4">Company</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/about" class="hover:text-white transition-colors"
                  >About</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/careers"
                  class="hover:text-white transition-colors"
                  >Careers</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/blog" class="hover:text-white transition-colors"
                  >Blog</NuxtLink
                >
              </li>
              <li>
                <NuxtLink to="/press" class="hover:text-white transition-colors"
                  >Press</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Community -->
          <div>
            <h3 class="text-white font-semibold mb-4">Community</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  to="/events"
                  class="hover:text-white transition-colors"
                  >Events</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/artists"
                  class="hover:text-white transition-colors"
                  >Artists</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/cities"
                  class="hover:text-white transition-colors"
                  >Cities</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/styles"
                  class="hover:text-white transition-colors"
                  >Dance Styles</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Support -->
          <div>
            <h3 class="text-white font-semibold mb-4">Support</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/help" class="hover:text-white transition-colors"
                  >Help Center</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/safety"
                  class="hover:text-white transition-colors"
                  >Safety Center</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/community-guidelines"
                  class="hover:text-white transition-colors"
                  >Community Guidelines</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="hover:text-white transition-colors"
                  >Contact Us</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Connect -->
          <div>
            <h3 class="text-white font-semibold mb-4">Connect</h3>
            <div class="flex gap-4">
              <a
                href="https://twitter.com/wedanceorg"
                target="_blank"
                rel="noopener"
                class="hover:text-white transition-colors"
              >
                <Icon name="ph:twitter-logo" class="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/wedanceorg"
                target="_blank"
                rel="noopener"
                class="hover:text-white transition-colors"
              >
                <Icon name="ph:instagram-logo" class="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/wedanceorg"
                target="_blank"
                rel="noopener"
                class="hover:text-white transition-colors"
              >
                <Icon name="ph:facebook-logo" class="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com/wedanceorg"
                target="_blank"
                rel="noopener"
                class="hover:text-white transition-colors"
              >
                <Icon name="ph:youtube-logo" class="w-6 h-6" />
              </a>
            </div>
            <div class="mt-4">
              <Button
                variant="outline"
                class="border-white/20 hover:border-white/40 bg-white/5 hover:bg-black/10 hover:text-white"
                size="sm"
                as-child
              >
                <a
                  href="mailto:hello@wedance.vip"
                  class="flex items-center gap-2"
                >
                  <Icon name="ph:envelope" class="w-4 h-4" />
                  hello@wedance.vip
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex items-center gap-4">
            <NuxtLink to="/" class="text-white font-bold text-xl"
              >WeDance</NuxtLink
            >
            <span class="text-sm">© 2024 WeDance. All rights reserved.</span>
          </div>
          <div class="mt-4 md:mt-0">
            <div class="flex gap-6 text-sm">
              <NuxtLink to="/terms" class="hover:text-white transition-colors"
                >Terms</NuxtLink
              >
              <NuxtLink to="/privacy" class="hover:text-white transition-colors"
                >Privacy</NuxtLink
              >
              <NuxtLink to="/cookies" class="hover:text-white transition-colors"
                >Cookies</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
