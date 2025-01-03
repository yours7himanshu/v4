<script setup lang="ts">
interface Comment {
  id: number;
  author: {
    id: string;
    name: string;
    image: string;
    points?: number;
  };
  text: string;
  timestamp: string;
  stats: {
    likes: number;
    isHelpful?: boolean; // internal state for points calculation
  };
  isLiked?: boolean;
}

const currentUserId = "4"; // Mock current user ID
const isPostAuthor = true; // Mock post author status

// Mock comments data
const comments = ref<Comment[]>([
  {
    id: 1,
    author: {
      id: "2",
      name: "Alex Chen",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      points: 320,
    },
    text: "Great tip! This really helped me improve my following technique.",
    timestamp: "1 hour ago",
    stats: {
      likes: 5,
    },
  },
  {
    id: 2,
    author: {
      id: "3",
      name: "Sophie Williams",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      points: 150,
    },
    text: "I've been struggling with this. Will definitely try it in my next class!",
    timestamp: "30 minutes ago",
    stats: {
      likes: 2,
    },
  },
]);

const newComment = ref("");

const addComment = () => {
  if (!newComment.value.trim()) return;

  comments.value.unshift({
    id: comments.value.length + 1,
    author: {
      id: currentUserId,
      name: "Current User",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      points: 50,
    },
    text: newComment.value,
    timestamp: "Just now",
    stats: {
      likes: 0,
    },
  });

  newComment.value = "";
};

const likeComment = (comment: Comment) => {
  comment.isLiked = !comment.isLiked;
  comment.stats.likes += comment.isLiked ? 1 : -1;

  // Internal helpful status when post author likes
  if (isPostAuthor && comment.author.id !== currentUserId) {
    comment.stats.isHelpful = comment.isLiked;
  }
};
</script>

<template>
  <div class="mt-6 space-y-6">
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <form @submit.prevent="addComment" class="flex gap-4">
        <img
          src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
          alt="Current User"
          class="w-10 h-10 rounded-full object-cover"
        />
        <div class="flex-1">
          <textarea
            v-model="newComment"
            rows="2"
            placeholder="Write a comment..."
            class="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <div class="mt-2 flex justify-end">
            <Button type="submit" :disabled="!newComment.trim()"
              >Comment</Button
            >
          </div>
        </div>
      </form>
    </div>

    <div class="space-y-4">
      <div
        v-for="comment in comments"
        :key="comment.id"
        class="bg-white rounded-lg shadow-sm border border-gray-200 p-4"
      >
        <div class="flex gap-4">
          <img
            :src="comment.author.image"
            :alt="comment.author.name"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div class="flex-1">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <h3 class="font-semibold">{{ comment.author.name }}</h3>
                <span class="text-sm text-gray-500"
                  >{{ comment.author.points }} points</span
                >
              </div>
              <span class="text-sm text-gray-500">{{ comment.timestamp }}</span>
            </div>
            <p class="mt-1 text-gray-700">{{ comment.text }}</p>
            <div class="mt-2 flex items-center gap-4">
              <button
                @click="likeComment(comment)"
                class="flex items-center gap-1 text-sm"
                :class="
                  comment.isLiked
                    ? 'text-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                "
              >
                <Icon
                  :name="
                    comment.isLiked
                      ? 'heroicons:heart-solid'
                      : 'heroicons:heart'
                  "
                  class="w-5 h-5"
                />
                {{ comment.stats.likes }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
