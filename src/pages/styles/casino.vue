<script setup>
// No special state needed for this informational page
</script>

<template>
  <StyleHero />

  <!-- Tabs Navigation -->
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <nav class="border-b border-gray-200">
        <div class="flex space-x-8 overflow-x-auto">
          <NuxtLink
            to="/salsa"
            class="border-b-[3px] border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap -mb-[1px]"
          >
            All Posts
          </NuxtLink>
          <NuxtLink
            to="/styles/casino"
            class="border-b-[3px] border-purple-600 px-1 py-4 text-sm font-medium text-purple-600 whitespace-nowrap -mb-[1px]"
          >
            About
          </NuxtLink>
          <a
            href="#"
            class="border-b-[3px] border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap -mb-[1px]"
          >
            Events
          </a>
          <a
            href="#"
            class="border-b-[3px] border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap -mb-[1px]"
          >
            Learning
          </a>
          <a
            href="#"
            class="border-b-[3px] border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 whitespace-nowrap -mb-[1px]"
          >
            Community
          </a>
        </div>
      </nav>
    </div>
  </div>

  <!-- Main Content -->
  <div class="py-12">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-8">
        <!-- Introduction -->
        <section>
          <h1 class="text-4xl font-bold mb-4">About Salsa Cubana</h1>
          <p class="text-lg text-gray-700">
            Salsa Cubana, also known as Casino, is a popular dance style that
            originated in Cuba. It is characterized by its circular movements,
            complex rhythms, and rich cultural heritage.
          </p>
        </section>

        <!-- History -->
        <section>
          <h2 class="text-2xl font-semibold mb-3">History</h2>
          <p class="text-gray-700 mb-4">
            The roots of Salsa Cubana can be traced back to the late 1950s in
            the dance halls (casinos deportivos) of Cuba. It evolved from
            various Cuban dance forms, including Son, Mambo, and Rumba,
            incorporating elements of these traditional styles into a dynamic
            and social dance form.
          </p>
          <p class="text-gray-700">
            The dance gained popularity first in Cuba and then spread
            internationally, becoming one of the most beloved Latin dance styles
            worldwide.
          </p>
        </section>

        <!-- Characteristics -->
        <section>
          <h2 class="text-2xl font-semibold mb-3">Key Characteristics</h2>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>Circular movement patterns</li>
            <li>Complex arm movements and hand gestures</li>
            <li>Strong connection to Cuban music and culture</li>
            <li>Emphasis on partner work and improvisation</li>
            <li>Unique timing and rhythm interpretation</li>
          </ul>
        </section>

        <!-- Rueda de Casino -->
        <section>
          <h2 class="text-2xl font-semibold mb-3">Rueda de Casino</h2>
          <p class="text-gray-700 mb-4">
            One of the most distinctive features of Salsa Cubana is Rueda de
            Casino, where multiple couples dance in a circle, exchanging
            partners and performing synchronized moves called out by a leader.
          </p>
        </section>

        <!-- Music -->
        <section>
          <h2 class="text-2xl font-semibold mb-3">Music</h2>
          <p class="text-gray-700">
            Salsa Cubana is danced to Cuban-style salsa music, which features
            rich percussion, complex rhythms, and traditional Cuban instruments.
            The music often includes son montuno, timba, and other Cuban genres.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>
