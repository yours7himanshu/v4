<template>
  <div
    class="flex items-center justify-between bg-purple-50 p-2 px-4 rounded-lg"
  >
    <div class="text-sm text-purple-900">Share your dance journey</div>
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
              Start conversations, share knowledge, and inspire others with your
              dance journey
            </p>
            <div class="space-y-2">
              <button
                class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
              >
                <Icon name="ph:note" class="w-5 h-5 text-purple-600 mr-2" />
                <span>Message</span>
              </button>
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
            </div>
          </div>

          <!-- Organize -->
          <div>
            <div class="text-purple-600 mb-4">
              <Icon name="ph:calendar-plus" class="w-8 h-8" />
            </div>
            <h3 class="font-bold text-lg mb-2">Organize</h3>
            <p class="text-gray-600 mb-4">
              Create events, connect with dancers, and share opportunities
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
                <Icon name="ph:users" class="w-5 h-5 text-purple-600 mr-2" />
                <span>Meet</span>
              </button>
              <button
                class="w-full text-left px-3 py-2 hover:bg-gray-50 rounded-lg flex items-center"
              >
                <Icon
                  name="ph:briefcase"
                  class="w-5 h-5 text-purple-600 mr-2"
                />
                <span>Gig</span>
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
              Help others discover the local scene and dance community
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
                <Icon
                  name="ph:storefront"
                  class="w-5 h-5 text-purple-600 mr-2"
                />
                <span>Ad</span>
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
