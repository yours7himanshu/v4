<template>
  <div class="pt-32 pb-12 bg-gradient-to-b from-purple-50 to-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-8 items-center">
        <!-- Left: Content -->
        <div class="text-center md:text-left">
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Salsa Cubana</h1>
          <p class="text-xl text-gray-600 mb-8 max-w-2xl md:max-w-none mx-auto">
            Connect, organize, and grow with your local salsa community. Find
            dance partners, join events, and share your passion across 40K+
            dancers worldwide.
          </p>
          <div class="flex justify-center md:justify-start gap-4">
            <Button variant="default" size="lg">Join Community</Button>
          </div>

          <div
            class="flex justify-center md:justify-start gap-8 mt-8 text-gray-500"
          >
            <div>
              <div class="text-xl font-bold text-gray-900">1,200</div>
              <div class="text-sm">Members</div>
            </div>
            <div>
              <div class="text-xl font-bold text-gray-900">500</div>
              <div class="text-sm">Posts</div>
            </div>
            <div>
              <div class="text-xl font-bold text-gray-900">50</div>
              <div class="text-sm">Projects</div>
            </div>
            <div>
              <div class="text-xl font-bold text-gray-900">92%</div>
              <div class="text-sm">Response Rate</div>
            </div>
          </div>
        </div>

        <!-- Right: Video -->
        <div class="space-y-4">
          <div class="aspect-video rounded-xl overflow-hidden shadow-xl">
            <iframe
              class="w-full h-full"
              src="https://www.youtube.com/embed/R7E9cNydevg"
              title="Salsa Dance Video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>

          <!-- Video Game Invitation -->
          <div class="bg-purple-50 rounded-lg p-4">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium text-purple-900">
                  Help choose the best inspiration
                </p>
                <p class="text-xs text-purple-700">
                  Vote between pairs of videos
                </p>
              </div>
              <Button variant="default" size="sm"> Play Video Game </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
