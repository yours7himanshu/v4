<template>
  <!-- New Mega Menu -->
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="default" class="flex items-center gap-2">
        <Icon name="ph:plus" class="w-5 h-5" />
        Create
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-3xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle>Build the Community Together</DialogTitle>
        <DialogDescription
          >Join other dancers in making the salsa community even
          better</DialogDescription
        >
      </DialogHeader>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <!-- Share Knowledge -->
        <div>
          <div class="text-purple-600 mb-4">
            <Icon name="ph:pencil-line" class="w-8 h-8" />
          </div>
          <h3 class="font-bold text-lg mb-2">Share Your Knowledge</h3>
          <p class="text-gray-600 mb-4">
            Write articles, share tips, or create video tutorials to help others
            learn.
          </p>
          <div class="space-y-2">
            <button
              class="w-full text-left px-3 py-3 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon
                name="ph:article-medium"
                class="w-5 h-5 text-purple-600 mr-2"
              />
              <span class="flex-1">Write Article</span>
              <Icon name="ph:arrow-right" class="w-5 h-5 text-gray-400" />
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon
                name="ph:video-camera"
                class="w-5 h-5 text-purple-600 mr-2"
              />
              <span>Share Tutorial</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:sparkle" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Share Inspiration</span>
            </button>
          </div>
        </div>

        <!-- Lead Community -->
        <div>
          <div class="text-purple-600 mb-4">
            <Icon name="ph:users-three" class="w-8 h-8" />
          </div>
          <h3 class="font-bold text-lg mb-2">Lead Community</h3>
          <p class="text-gray-600 mb-4">
            Start or join community initiatives, organize events, or lead
            practice groups.
          </p>
          <div class="space-y-2">
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon
                name="ph:calendar-plus"
                class="w-5 h-5 text-purple-600 mr-2"
              />
              <span>Create Event</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:chats" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Start Discussion</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:users" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Find Partner</span>
            </button>
          </div>
        </div>

        <!-- Support Others -->
        <div>
          <div class="text-purple-600 mb-4">
            <Icon name="ph:handshake" class="w-8 h-8" />
          </div>
          <h3 class="font-bold text-lg mb-2">Support Others</h3>
          <p class="text-gray-600 mb-4">
            Answer questions, welcome newcomers, and help maintain a positive
            community.
          </p>
          <div class="space-y-2">
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:map-pin" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Review Venue</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon
                name="ph:user-circle"
                class="w-5 h-5 text-purple-600 mr-2"
              />
              <span>Review Host</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:star" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Review Artist</span>
            </button>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
