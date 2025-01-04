<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">How WeDance Works</h2>
        <p class="text-xl text-gray-600">
          Your journey in the dance community starts here
        </p>
      </div>

      <div class="relative">
        <!-- Connection Line (Desktop) -->
        <div
          class="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-100 via-purple-500 to-purple-100"
        ></div>

        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative">
          <!-- Step 1 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110"
              >
                <Icon name="ph:user-plus" class="w-10 h-10 text-white" />
              </div>
              <div class="text-center">
                <div class="text-purple-600 font-medium mb-2">Step 1</div>
                <h3 class="text-xl font-bold mb-3">Create Profile</h3>
                <p class="text-gray-600">
                  Share your dance journey and preferences to connect with
                  like-minded dancers
                </p>
              </div>
            </div>
          </div>

          <!-- Step 2 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110"
              >
                <Icon name="ph:compass" class="w-10 h-10 text-white" />
              </div>
              <div class="text-center">
                <div class="text-purple-600 font-medium mb-2">Step 2</div>
                <h3 class="text-xl font-bold mb-3">Discover</h3>
                <p class="text-gray-600">
                  Find local events, dance partners, and artists that match your
                  interests
                </p>
              </div>
            </div>
          </div>

          <!-- Step 3 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110"
              >
                <Icon name="ph:handshake" class="w-10 h-10 text-white" />
              </div>
              <div class="text-center">
                <div class="text-purple-600 font-medium mb-2">Step 3</div>
                <h3 class="text-xl font-bold mb-3">Connect</h3>
                <p class="text-gray-600">
                  Join dance communities, attend events, and make new friends
                </p>
              </div>
            </div>
          </div>

          <!-- Step 4 -->
          <div class="relative">
            <div class="flex flex-col items-center">
              <div
                class="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform hover:scale-110"
              >
                <Icon name="ph:star" class="w-10 h-10 text-white" />
              </div>
              <div class="text-center">
                <div class="text-purple-600 font-medium mb-2">Step 4</div>
                <h3 class="text-xl font-bold mb-3">Grow</h3>
                <p class="text-gray-600">
                  Improve your skills, share experiences, and become part of the
                  community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
