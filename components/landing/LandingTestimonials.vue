<template>
  <section
    class="py-16 bg-gradient-to-br from-purple-600 to-purple-900 relative overflow-hidden"
  >
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
    ></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white">Loved by the Community</h2>
        <p class="text-white/80 mt-2">
          Here's what our members say about WeDance
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          class="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/10 transform hover:-translate-y-1 transition-transform"
        >
          <div class="flex items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
              alt="Sarah Martinez"
              class="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20"
            />
            <div>
              <div class="font-medium text-white">Sarah Martinez</div>
              <div class="text-sm text-white/60">Salsa Dancer</div>
            </div>
          </div>
          <p class="text-white/80 text-sm">
            "WeDance made it so easy to find dance partners and events in my
            city. I've met amazing people and improved my dancing
            significantly!"
          </p>
        </div>

        <div
          class="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/10 transform hover:-translate-y-1 transition-transform"
        >
          <div class="flex items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
              alt="Michael Chen"
              class="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20"
            />
            <div>
              <div class="font-medium text-white">Michael Chen</div>
              <div class="text-sm text-white/60">Dance Teacher</div>
            </div>
          </div>
          <p class="text-white/80 text-sm">
            "As a dance teacher, WeDance has helped me grow my student base and
            manage my classes more efficiently. The platform is a game-changer!"
          </p>
        </div>

        <div
          class="bg-white/10 backdrop-blur p-6 rounded-xl border border-white/10 transform hover:-translate-y-1 transition-transform"
        >
          <div class="flex items-center gap-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="Emma Thompson"
              class="w-12 h-12 rounded-full object-cover flex-shrink-0 ring-2 ring-white/20"
            />
            <div>
              <div class="font-medium text-white">Emma Thompson</div>
              <div class="text-sm text-white/60">Event Organizer</div>
            </div>
          </div>
          <p class="text-white/80 text-sm">
            "Organizing dance events has never been easier. WeDance helps us
            reach the right audience and manage everything in one place."
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
