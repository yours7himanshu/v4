<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="bg-white rounded-lg border-0 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-all duration-200 overflow-hidden flex flex-col h-full"
  >
    <!-- Author Header -->
    <div class="p-4 border-b border-gray-100">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            :src="post.author.image"
            :alt="post.author.name"
            class="h-10 w-10 rounded-full object-cover"
          />
          <div class="ml-3">
            <div class="font-medium">{{ post.author.name }}</div>
            <div class="text-sm text-gray-500">
              {{ post.timestamp }} ·
              <span class="text-purple-600">{{ post.author.location }}</span>
            </div>
          </div>
        </div>
        <div
          class="flex items-center gap-2 bg-purple-50 px-3 py-1 rounded-full"
        >
          <Icon
            :name="
              {
                post: 'ph:note',
                event: 'ph:ticket',
                video: 'ph:video-camera',
                question: 'ph:question',
                review: 'ph:star',
                project: 'ph:rocket',
                travel: 'ph:airplane',
                article: 'ph:article',
                find_partner: 'ph:users',
                ask_locals: 'ph:info',
                poll: 'ph:chart-bar',
                gig: 'ph:briefcase',
                ad: 'ph:megaphone',
                announcement: 'ph:megaphone',
              }[post.type]
            "
            class="w-4 h-4 text-purple-600"
          />
          <span class="text-sm font-medium text-purple-600 capitalize">{{
            post.type.replace("_", " ")
          }}</span>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Post Type -->
      <div v-if="post.type === 'post'" class="p-4 flex-1">
        <div class="space-y-3">
          <p class="text-gray-600">{{ post.content.text }}</p>
          <ul
            v-if="post.content.list"
            class="text-gray-600 list-disc pl-4 space-y-2"
          >
            <li v-for="item in post.content.list" :key="item">{{ item }}</li>
          </ul>
          <div v-if="post.content.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.content.tags"
              :key="tag"
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Event Type -->
      <div v-if="post.type === 'event'" class="flex-1 flex flex-col">
        <div class="relative aspect-video">
          <img
            :src="post.content.image"
            :alt="post.content.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          />
          <div class="absolute top-4 right-4">
            <div class="bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
              {{ post.content.price?.amount || "Free" }}
              {{ post.content.price?.currency }}
            </div>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h3 class="text-lg font-semibold text-white drop-shadow">
              {{ post.content.title }}
            </h3>
            <div class="flex items-center gap-3 mt-2 text-sm text-white/90">
              <div class="flex items-center gap-1">
                <Icon name="ph:calendar" class="h-4 w-4" />
                <span>{{ post.content.date }}</span>
              </div>
              <div class="flex items-center gap-1">
                <Icon name="ph:map-pin" class="h-4 w-4" />
                <span>{{ post.content.location }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 flex-1">
          <p class="text-gray-600 line-clamp-2">
            {{ post.content.description }}
          </p>
        </div>
      </div>

      <!-- Video Type -->
      <div v-if="post.type === 'video'" class="flex-1 flex flex-col">
        <div class="relative aspect-video">
          <img
            :src="post.content.thumbnail"
            :alt="post.content.title"
            class="w-full h-full object-cover"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <button
              class="bg-white/90 w-12 h-12 rounded-full hover:bg-white transition-colors flex items-center justify-center"
              @click="$emit('play')"
            >
              <Icon
                name="ph:play-fill"
                class="w-6 h-6 text-purple-600 ml-0.5"
              />
            </button>
          </div>
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <h3 class="text-lg font-semibold text-white drop-shadow">
              {{ post.content.title }}
            </h3>
          </div>
        </div>
        <div class="p-4 space-y-4 flex-1">
          <p class="text-gray-600">{{ post.content.description }}</p>
          <div v-if="post.content.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.content.tags"
              :key="tag"
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Question Type -->
      <div v-if="post.type === 'question'" class="p-4 flex-1">
        <div class="space-y-3">
          <h3 class="font-bold mb-2">{{ post.content.title }}</h3>
          <p class="text-gray-600">{{ post.content.text }}</p>
          <div v-if="post.content.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.content.tags"
              :key="tag"
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Review Type -->
      <div v-if="post.type === 'review'" class="flex-1 flex flex-col">
        <div class="p-4 space-y-3">
          <h3 class="font-bold mb-2">{{ post.content.title }}</h3>
          <div class="flex items-center mb-3">
            <div class="flex text-yellow-400">
              <Icon
                v-for="i in post.content.rating"
                :key="i"
                name="ph:star-fill"
                class="w-5 h-5"
              />
            </div>
          </div>
          <p class="text-gray-600">{{ post.content.description }}</p>
        </div>
      </div>

      <!-- Project Type -->
      <div v-if="post.type === 'project'" class="p-4 flex-1">
        <div class="space-y-3">
          <h3 class="font-bold mb-2">{{ post.content.title }}</h3>
          <p class="text-gray-600">{{ post.content.text }}</p>
          <div class="bg-purple-50 p-4 rounded-lg">
            <div class="font-medium mb-2">Project Details:</div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li v-for="detail in post.content.details" :key="detail">
                {{ detail }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Travel Type -->
      <div v-if="post.type === 'travel'" class="p-4 flex-1">
        <div class="space-y-3">
          <h3 class="font-bold mb-2">{{ post.content.title }}</h3>
          <p class="text-gray-600">{{ post.content.text }}</p>
          <div class="bg-purple-50 p-4 rounded-lg">
            <div class="font-medium mb-2">Trip Details:</div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li v-for="detail in post.content.details" :key="detail">
                {{ detail }}
              </li>
            </ul>
          </div>
          <div v-if="post.content.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.content.tags"
              :key="tag"
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Article Type -->
      <div v-if="post.type === 'article'" class="flex-1 flex flex-col">
        <div v-if="post.content.image" class="relative aspect-video">
          <img
            :src="post.content.image"
            :alt="post.content.title"
            class="w-full h-full object-cover"
          />
        </div>
        <div class="p-4 space-y-3">
          <h3 class="text-xl font-bold">{{ post.content.title }}</h3>
          <p class="text-gray-600">{{ post.content.description }}</p>
          <p class="text-gray-600">{{ post.content.text }}</p>
          <div v-if="post.content.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.content.tags"
              :key="tag"
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Find Partner Type -->
      <div v-if="post.type === 'find_partner'" class="p-4 flex-1">
        <div class="space-y-3">
          <h3 class="font-bold mb-2">{{ post.content.title }}</h3>
          <p class="text-gray-600">{{ post.content.text }}</p>
          <div v-if="post.content.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.content.tags"
              :key="tag"
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Ask Locals Type -->
      <div v-if="post.type === 'ask_locals'" class="p-4 flex-1">
        <div class="space-y-3">
          <h3 class="font-bold mb-2">{{ post.content.title }}</h3>
          <p class="text-gray-600">{{ post.content.text }}</p>
          <div v-if="post.content.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.content.tags"
              :key="tag"
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Announcement Type -->
      <div v-if="post.type === 'announcement'" class="p-4 flex-1">
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <Icon name="ph:megaphone" class="w-5 h-5 text-purple-600" />
            <h3 class="font-bold">{{ post.content.title }}</h3>
          </div>
          <p class="text-gray-600">{{ post.content.text }}</p>
          <div v-if="post.content.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.content.tags"
              :key="tag"
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>

      <!-- Poll Type -->
      <div v-if="post.type === 'poll'" class="p-4 flex-1">
        <div class="space-y-4">
          <h3 class="font-bold">{{ post.content.title }}</h3>
          <div class="space-y-2">
            <div
              v-for="option in post.content.options"
              :key="option.id"
              class="relative bg-purple-50 rounded-lg p-3 cursor-pointer hover:bg-purple-100"
            >
              <div class="flex justify-between items-center">
                <span>{{ option.text }}</span>
                <span class="text-sm text-gray-500">
                  {{
                    Math.round((option.votes / post.content.totalVotes) * 100)
                  }}%
                </span>
              </div>
              <div
                class="absolute left-0 top-0 h-full bg-purple-200 rounded-lg"
                :style="{
                  width: `${(option.votes / post.content.totalVotes) * 100}%`,
                  opacity: '0.5',
                }"
              ></div>
            </div>
          </div>
          <div class="text-sm text-gray-500">
            {{ post.content.totalVotes }} votes total
          </div>
        </div>
      </div>

      <!-- Gig Type -->
      <div v-if="post.type === 'gig'" class="p-4 flex-1">
        <div class="space-y-3">
          <h3 class="font-bold mb-2">{{ post.content.title }}</h3>
          <p class="text-gray-600">{{ post.content.description }}</p>
          <div class="bg-purple-50 p-4 rounded-lg">
            <div class="font-medium mb-2">Job Details:</div>
            <ul class="text-sm text-gray-600 space-y-1">
              <li
                v-for="detail in post.content.details"
                :key="detail.text"
                class="flex items-center gap-2"
              >
                <Icon :name="detail.icon" class="w-4 h-4 text-purple-500" />
                {{ detail.text }}
              </li>
            </ul>
          </div>
          <div v-if="post.content.tags" class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.content.tags"
              :key="tag"
              class="bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full"
            >
              {{ tag }}
            </span>
          </div>
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
        <div class="p-4 space-y-3">
          <h3 class="font-bold mb-2">{{ post.content.title }}</h3>
          <p class="text-gray-600">{{ post.content.description }}</p>
          <p class="text-purple-600 font-medium">{{ post.content.cta }}</p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div
      class="p-4 border-t border-gray-100 flex items-center justify-between mt-auto"
    >
      <!-- Left side with engagement actions -->
      <div class="flex items-center gap-4 text-sm text-gray-500">
        <button
          class="flex items-center gap-1 hover:text-purple-600"
          @click="$emit('like')"
        >
          <Icon name="ph:heart" class="w-5 h-5" />
          <span>{{
            post.stats.likes || post.stats.interested || post.stats.responses
          }}</span>
        </button>
        <button
          class="flex items-center gap-1 hover:text-purple-600"
          @click="$emit('bookmark')"
        >
          <Icon name="ph:bookmark-simple" class="w-5 h-5" />
          <span>{{ post.stats.bookmarks || post.stats.saves || 0 }}</span>
        </button>
        <button
          v-if="
            [
              'post',
              'video',
              'review',
              'article',
              'event',
              'discussion',
            ].includes(post.type)
          "
          class="flex items-center gap-1 hover:text-purple-600"
        >
          <Icon name="ph:chat-circle" class="w-5 h-5" />
          <span>{{ post.stats.comments }} Comments</span>
        </button>
        <button
          class="flex items-center gap-1 hover:text-purple-600"
          @click="$emit('share')"
        >
          <Icon name="ph:share-network" class="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>

      <!-- Right side with primary action -->
      <div>
        <Button v-if="post.type === 'event'" variant="default">
          Book Now
        </Button>
        <Button v-if="post.type === 'find_partner'" variant="default">
          Send Request
        </Button>
        <Button v-if="post.type === 'ask_locals'" variant="default">
          Share Info
        </Button>
        <Button v-if="post.type === 'review'" variant="default"> Rate </Button>
        <Button v-if="post.type === 'project'" variant="default">
          Join Project
        </Button>
        <Button v-if="post.type === 'travel'" variant="default">
          Send Request
        </Button>
        <Button v-if="post.type === 'gig'" variant="default"> Apply </Button>
        <Button v-if="post.type === 'ad'" variant="default"> Contact </Button>
        <Button v-if="post.type === 'article'" variant="default">
          Read More
        </Button>
      </div>
    </div>
  </div>
</template>
