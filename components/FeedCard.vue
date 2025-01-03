<template>
  <div class="bg-white rounded-lg shadow-sm border border-gray-100">
    <!-- Header -->
    <div class="p-4 flex items-center gap-3">
      <img
        :src="post.author.image"
        :alt="post.author.name"
        class="w-10 h-10 rounded-full object-cover"
      />
      <div class="flex-1">
        <div class="font-medium">{{ post.author.name }}</div>
        <div class="text-sm text-gray-500 flex items-center gap-1">
          <span>{{ post.timestamp }}</span>
          <span>·</span>
          <span class="text-purple-600">{{ post.author.location }}</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <div
          class="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-full"
        >
          <Icon
            :name="
              {
                note: 'ph:note',
                article: 'ph:article-medium',
                event: 'ph:calendar-plus',
                meet: 'ph:users',
                review: 'ph:star',
                gig: 'ph:briefcase',
                ask_locals: 'ph:info',
                ad: 'ph:storefront',
              }[post.type]
            "
            class="w-4 h-4 text-purple-600"
          />
          <span class="text-sm text-purple-600 capitalize">{{
            post.type.replace("_", " ")
          }}</span>
        </div>
        <Button variant="ghost" size="icon">
          <Icon name="ph:dots-three" class="w-5 h-5" />
        </Button>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-col">
      <!-- Note Type -->
      <div v-if="post.type === 'note'" class="p-4 flex-1">
        <div class="space-y-4">
          <!-- Text Content -->
          <p class="text-gray-600 whitespace-pre-wrap">
            {{ post.content.text }}
          </p>

          <!-- Poll if any -->
          <div v-if="post.content.poll" class="space-y-2">
            <div
              v-for="option in post.content.poll.options"
              :key="option.id"
              class="relative bg-purple-50 rounded-lg p-3 cursor-pointer hover:bg-purple-100"
            >
              <div class="flex justify-between items-center relative z-10">
                <span>{{ option.text }}</span>
                <span class="text-sm text-gray-500">
                  {{
                    Math.round(
                      (option.votes / post.content.poll.totalVotes) * 100
                    )
                  }}%
                </span>
              </div>
              <div
                class="absolute left-0 top-0 h-full bg-purple-200 rounded-lg opacity-50"
                :style="{
                  width: `${
                    (option.votes / post.content.poll.totalVotes) * 100
                  }%`,
                }"
              />
            </div>
            <div class="text-sm text-gray-500">
              {{ post.content.poll.totalVotes }} votes
            </div>
          </div>

          <!-- Links if any -->
          <div v-if="post.content.links" class="space-y-2">
            <a
              v-for="link in post.content.links"
              :key="link.url"
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="block bg-gray-50 p-3 rounded-lg hover:bg-gray-100"
            >
              <div class="flex items-center gap-2">
                <Icon name="ph:link" class="w-4 h-4 text-purple-600" />
                <span class="text-purple-600">{{ link.title }}</span>
              </div>
              <p v-if="link.description" class="text-sm text-gray-600 mt-1">
                {{ link.description }}
              </p>
            </a>
          </div>
        </div>
      </div>

      <!-- article Type -->
      <div v-if="post.type === 'article'" class="flex-1 flex flex-col">
        <div v-if="post.content.cover" class="relative aspect-video">
          <img
            :src="post.content.cover"
            :alt="post.content.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4 space-y-4">
          <h2 class="text-xl font-bold">{{ post.content.title }}</h2>
          <p class="text-gray-600">{{ post.content.description }}</p>
          <div
            v-if="post.content.html"
            class="prose prose-purple max-w-none line-clamp-3"
          >
            <div v-html="post.content.html" />
          </div>
        </div>
      </div>

      <!-- Event Type -->
      <div v-if="post.type === 'event'" class="flex-1 flex flex-col">
        <div v-if="post.content.image" class="relative aspect-video">
          <img
            :src="post.content.image"
            :alt="post.content.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          />
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h2 class="text-xl font-bold text-white">
              {{ post.content.title }}
            </h2>
          </div>
        </div>
        <div class="p-4 space-y-4">
          <p class="text-gray-600">{{ post.content.description }}</p>
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <Icon name="ph:calendar" class="w-5 h-5 text-purple-600" />
              <span>{{ post.content.date }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Icon name="ph:map-pin" class="w-5 h-5 text-purple-600" />
              <span>{{ post.content.location }}</span>
            </div>
            <div v-if="post.content.price" class="flex items-center gap-2">
              <Icon name="ph:ticket" class="w-5 h-5 text-green-600" />
              <span class="text-green-600">
                {{ post.content.price.amount }}
                {{ post.content.price.currency }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Meet Type -->
      <div v-if="post.type === 'meet'" class="p-4 flex-1">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">{{ post.content.title }}</h2>
          <p class="text-gray-600 whitespace-pre-wrap">
            {{ post.content.text }}
          </p>
          <div class="bg-purple-50 rounded-lg p-4 space-y-2">
            <div
              v-for="(value, key) in post.content.details"
              :key="key"
              class="flex items-center gap-2"
            >
              <Icon
                :name="
                  {
                    type: 'ph:users',
                    format: 'ph:layout',
                    gender: 'ph:gender-intersex',
                    when: 'ph:calendar',
                    where: 'ph:map-pin',
                    level: 'ph:chart-line',
                    style: 'ph:music-notes',
                    seats: 'ph:car',
                    contribution: 'ph:money',
                  }[key]
                "
                class="w-4 h-4 text-purple-600"
              />
              <span class="capitalize text-gray-600">{{ key }}:</span>
              <span class="text-purple-600">{{ value }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Review Type -->
      <div v-if="post.type === 'review'" class="p-4 flex-1">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">{{ post.content.title }}</h2>
          <div class="flex items-center gap-1">
            <Icon
              v-for="i in 5"
              :key="i"
              :name="i <= post.content.rating ? 'ph:star-fill' : 'ph:star'"
              class="w-5 h-5"
              :class="
                i <= post.content.rating ? 'text-yellow-400' : 'text-gray-300'
              "
            />
          </div>
          <p class="text-gray-600">{{ post.content.description }}</p>
        </div>
      </div>

      <!-- Gig Type -->
      <div v-if="post.type === 'gig'" class="p-4 flex-1">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">{{ post.content.title }}</h2>
          <p class="text-gray-600">{{ post.content.description }}</p>
          <div class="bg-purple-50 rounded-lg p-4 space-y-2">
            <div
              v-for="detail in post.content.details"
              :key="detail.text"
              class="flex items-center gap-2"
            >
              <Icon :name="detail.icon" class="w-4 h-4 text-purple-600" />
              <span>{{ detail.text }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Ask Locals Type -->
      <div v-if="post.type === 'ask_locals'" class="p-4 flex-1">
        <div class="space-y-4">
          <h2 class="text-xl font-bold">{{ post.content.title }}</h2>
          <p class="text-gray-600 whitespace-pre-wrap">
            {{ post.content.text }}
          </p>
        </div>
      </div>

      <!-- Ad Type -->
      <div v-if="post.type === 'ad'" class="flex-1 flex flex-col">
        <div v-if="post.content.image" class="relative aspect-video">
          <img
            :src="post.content.image"
            :alt="post.content.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4 space-y-4">
          <h2 class="text-xl font-bold">{{ post.content.title }}</h2>
          <p class="text-gray-600">{{ post.content.description }}</p>
        </div>
      </div>

      <!-- Tags -->
      <div v-if="post.content.tags" class="px-4 pb-4 flex flex-wrap gap-2">
        <span
          v-for="tag in post.content.tags"
          :key="tag"
          class="bg-purple-50 text-purple-600 text-sm px-3 py-1 rounded-full"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-4 border-t border-gray-100">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <!-- Like -->
          <button
            class="flex items-center gap-1 text-gray-500 hover:text-purple-600"
          >
            <Icon name="ph:heart" class="w-5 h-5" />
            <span v-if="post.stats.likes || post.stats.interested">{{
              post.stats.likes || post.stats.interested
            }}</span>
          </button>

          <!-- Bookmark -->
          <button
            class="flex items-center gap-1 text-gray-500 hover:text-purple-600"
          >
            <Icon name="ph:bookmark-simple" class="w-5 h-5" />
            <span v-if="post.stats.bookmarks">{{ post.stats.bookmarks }}</span>
          </button>

          <!-- Comment -->
          <button
            v-if="post.stats.comments !== undefined"
            class="flex items-center gap-1 text-gray-500 hover:text-purple-600"
          >
            <Icon name="ph:chat-circle" class="w-5 h-5" />
            <span>{{ post.stats.comments }}</span>
          </button>

          <button
            class="flex items-center gap-1 text-gray-500 hover:text-purple-600"
          >
            <Icon name="ph:share-network" class="w-5 h-5" />
          </button>
        </div>

        <!-- Primary Action -->
        <div class="flex items-center gap-2">
          <Button
            v-if="
              {
                article: 'Read More',
                event: 'Book Now',
                meet: 'Send Request',
                review: 'Rate',
                gig: 'Apply',
                ask_locals: 'Share Info',
                ad: 'Contact',
              }[post.type]
            "
            variant="default"
          >
            {{
              {
                article: "Read More",
                event: "Book Now",
                meet: "Send Request",
                review: "Rate",
                gig: "Apply",
                ask_locals: "Share Info",
                ad: "Contact",
              }[post.type]
            }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
