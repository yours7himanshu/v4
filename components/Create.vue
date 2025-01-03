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
        <!-- Share -->
        <div>
          <div class="text-purple-600 mb-4">
            <Icon name="ph:pencil-line" class="w-8 h-8" />
          </div>
          <h3 class="font-bold text-lg mb-2">Share</h3>
          <p class="text-gray-600 mb-4">
            Share your knowledge and experiences with the community.
          </p>
          <div class="space-y-2">
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon
                name="ph:article-medium"
                class="w-5 h-5 text-purple-600 mr-2"
              />
              <span class="flex-1">Article</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon
                name="ph:youtube-logo"
                class="w-5 h-5 text-purple-600 mr-2"
              />
              <span>Video</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:users" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Find Partner</span>
            </button>
          </div>
        </div>

        <!-- Organize -->
        <div>
          <div class="text-purple-600 mb-4">
            <Icon name="ph:calendar-plus" class="w-8 h-8" />
          </div>
          <h3 class="font-bold text-lg mb-2">Organize</h3>
          <p class="text-gray-600 mb-4">
            Create events and bring the community together.
          </p>
          <div class="space-y-2">
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon
                name="ph:calendar-plus"
                class="w-5 h-5 text-purple-600 mr-2"
              />
              <span>Event</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon
                name="ph:users-three"
                class="w-5 h-5 text-purple-600 mr-2"
              />
              <span>Project</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:chats" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Discussion</span>
            </button>
          </div>
        </div>

        <!-- Support -->
        <div>
          <div class="text-purple-600 mb-4">
            <Icon name="ph:handshake" class="w-8 h-8" />
          </div>
          <h3 class="font-bold text-lg mb-2">Support</h3>
          <p class="text-gray-600 mb-4">
            Help others and improve the community.
          </p>
          <div class="space-y-2">
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:star" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Review</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:info" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Ask Locals</span>
            </button>
            <button
              class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
            >
              <Icon name="ph:briefcase" class="w-5 h-5 text-purple-600 mr-2" />
              <span>Post Job</span>
            </button>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>
