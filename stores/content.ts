import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { mockPosts } from "~/data/mockPosts";
import type { Post } from "~/schemas/post";

export const useContentStore = defineStore("content", () => {
  // State
  const posts = ref<Post[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const filters = ref({
    type: "all",
    location: "all",
    style: "all",
    searchQuery: "",
  });

  // Getters
  const filteredPosts = computed(() => {
    let filtered = posts.value;

    if (filters.value.type !== "all") {
      filtered = filtered.filter((post) => post.type === filters.value.type);
    }

    if (filters.value.searchQuery) {
      const query = filters.value.searchQuery.toLowerCase();
      filtered = filtered.filter((post) => {
        const authorMatch = post.author.name.toLowerCase().includes(query);
        if (authorMatch) return true;

        switch (post.type) {
          case "note":
            return post.content.text.toLowerCase().includes(query);
          case "article":
            return (
              post.content.title.toLowerCase().includes(query) ||
              post.content.description.toLowerCase().includes(query)
            );
          case "video":
            return (
              post.content.title.toLowerCase().includes(query) ||
              post.content.description.toLowerCase().includes(query)
            );
          case "meet":
            return (
              post.content.title.toLowerCase().includes(query) ||
              post.content.text.toLowerCase().includes(query)
            );
          case "review":
            return (
              post.content.title.toLowerCase().includes(query) ||
              post.content.description.toLowerCase().includes(query)
            );
          case "gig":
            return (
              post.content.title.toLowerCase().includes(query) ||
              post.content.description.toLowerCase().includes(query)
            );
          case "ask_locals":
            return (
              post.content.title.toLowerCase().includes(query) ||
              post.content.text.toLowerCase().includes(query)
            );
          case "ad":
            return (
              post.content.title.toLowerCase().includes(query) ||
              (post.content.description?.toLowerCase().includes(query) ?? false)
            );
          default:
            return false;
        }
      });
    }

    return filtered;
  });

  // Actions
  async function fetchPosts() {
    try {
      isLoading.value = true;
      error.value = null;

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Load mock data
      posts.value = mockPosts;
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Failed to fetch posts";
      throw e;
    } finally {
      isLoading.value = false;
    }
  }

  async function createPost(post: Omit<Post, "id" | "timestamp" | "stats">) {
    try {
      isLoading.value = true;
      error.value = null;

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      const newPost = {
        ...post,
        id: Math.max(...posts.value.map((p) => Number(p.id))) + 1,
        timestamp: new Date().toISOString(),
        stats: {
          likes: 0,
          comments: 0,
          shares: 0,
        },
      } as Post;

      posts.value.unshift(newPost);
      return newPost;
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Failed to create post";
      throw e;
    } finally {
      isLoading.value = false;
    }
  }

  function updateFilters(newFilters: Partial<typeof filters.value>) {
    filters.value = {
      ...filters.value,
      ...newFilters,
    };
  }

  function resetFilters() {
    filters.value = {
      type: "all",
      location: "all",
      style: "all",
      searchQuery: "",
    };
  }

  return {
    // State
    posts,
    isLoading,
    error,
    filters,
    // Getters
    filteredPosts,
    // Actions
    fetchPosts,
    createPost,
    updateFilters,
    resetFilters,
  };
});
