<script setup>
import { ref } from "vue";

const posts = ref([
  {
    id: 1,
    type: "post",
    author: {
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      location: "Madrid",
    },
    timestamp: "2 hours ago",
    content: {
      text: "Just finished an amazing workshop with @SalsaMaster! Here are my top 3 takeaways for improving your basic steps:",
      list: [
        "Keep your core engaged - it helps with balance and turns",
        "Focus on the connection with your partner, not just the steps",
        "Practice musicality by listening to salsa music even when not dancing",
      ],
      tags: ["Workshop Tips", "Beginner Friendly", "Technique"],
    },
    stats: {
      likes: 42,
      comments: 12,
    },
  },
  {
    id: 2,
    type: "event",
    author: {
      name: "Carlos Mendoza",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      location: "Barcelona",
    },
    timestamp: "4 hours ago",
    content: {
      title: "🎉 Barcelona Summer Salsa Festival 2024",
      image:
        "https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&h=400&fit=crop",
      description:
        "Get ready for the hottest salsa event of the summer! Three days of workshops, performances, and social dancing by the beach.",
      details: [
        { icon: "ph:calendar", text: "July 15-17, 2024" },
        { icon: "ph:map-pin", text: "Barceloneta Beach Club" },
        { icon: "ph:users", text: "20+ International Instructors" },
        { icon: "ph:music-notes", text: "Live Music & DJs" },
        { icon: "ph:star", text: "All Levels Welcome" },
      ],
      cta: "Early bird tickets available until May 1st!",
    },
    stats: {
      interested: 156,
    },
  },
  {
    id: 3,
    type: "post",
    author: {
      name: "Sophie Laurent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      location: "Paris",
    },
    timestamp: "6 hours ago",
    content: {
      text: "Looking for a dance partner for regular practice sessions in Paris. Intermediate level, available weekday evenings.",
      tags: ["Partner Search", "Paris", "Intermediate"],
    },
    stats: {
      likes: 15,
      comments: 8,
    },
  },
  {
    id: 4,
    type: "event",
    author: {
      name: "David Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      location: "London",
    },
    timestamp: "1 day ago",
    content: {
      title: "🌟 Salsa Night at Havana Club",
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=400&fit=crop",
      description:
        "Join us for a night of amazing music, dancing, and great vibes! Live band and DJ sets all night long.",
      details: [
        { icon: "ph:calendar", text: "Every Friday" },
        { icon: "ph:map-pin", text: "Havana Club, Soho" },
        { icon: "ph:clock", text: "9 PM - 2 AM" },
        { icon: "ph:currency-gbp", text: "£12 entry" },
        { icon: "ph:music-notes", text: "Live Band + DJ" },
      ],
      cta: "First-timers get a free welcome drink!",
    },
    stats: {
      interested: 89,
    },
  },
  {
    id: 5,
    type: "video",
    author: {
      name: "Sophie Laurent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      location: "Paris",
    },
    timestamp: "6 hours ago",
    content: {
      title: "🎥 Tutorial: Advanced Turn Patterns",
      image:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&h=400&fit=crop",
      description:
        "In this tutorial, I break down three complex turn patterns that will add flair to your social dancing. Perfect for intermediate/advanced dancers looking to expand their repertoire.",
      details: [
        { icon: "ph:check-circle", text: "The 'Butterfly Spin' combination" },
        { icon: "ph:check-circle", text: "Advanced cross-body variations" },
        { icon: "ph:check-circle", text: "Styling tips for leads and follows" },
        { icon: "ph:check-circle", text: "Musicality and timing" },
      ],
      tags: ["Advanced", "Turn Patterns", "Tutorial"],
    },
    stats: {
      likes: 89,
      comments: 24,
    },
  },
  {
    id: 6,
    type: "question",
    author: {
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      location: "Munich",
    },
    timestamp: "5 hours ago",
    content: {
      title: "Looking for practice partner in Munich",
      text: "Intermediate level, available weekday evenings. Anyone interested in regular practice sessions?",
      tags: ["Partner Search", "Munich", "Intermediate"],
    },
    stats: {
      responses: 8,
    },
  },
  {
    id: 7,
    type: "review",
    author: {
      name: "David Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      location: "London",
    },
    timestamp: "1 day ago",
    content: {
      title: "📍 Venue Review: Salsa Nights at Havana Club",
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=400&fit=crop",
      rating: 5,
      description:
        "Fantastic atmosphere at this new spot in Soho! Live band on Fridays, great dance floor, and friendly crowd. The instructors for the pre-party lesson were excellent.",
      details: [
        "🎵 Live Music Fridays",
        "📍 123 Soho Street",
        "🕒 Lessons: 8pm, Party: 9pm-2am",
        "💷 Entry: £12 (includes lesson)",
      ],
    },
    stats: {
      likes: 35,
      comments: 15,
    },
  },
  {
    id: 8,
    type: "project",
    author: {
      name: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      location: "Berlin",
    },
    timestamp: "1 day ago",
    content: {
      title: "🎉 New Community Project: Salsa for Beginners Workshop Series",
      text: "Looking for experienced dancers to help organize free workshops for beginners. Let's make salsa more accessible!",
      details: [
        "• Weekly workshops (2 hours)",
        "• Need: 4-5 volunteer instructors",
        "• Location: Community Center",
        "• Starting next month",
      ],
    },
    stats: {
      interested: 12,
    },
  },
  {
    id: 9,
    type: "travel",
    author: {
      name: "Anna Schmidt",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      location: "Berlin",
    },
    timestamp: "1 day ago",
    content: {
      title: "🚗 Sharing ride to Paris Salsa Festival",
      text: "Driving from Berlin to Paris for the festival next month. Have 3 seats available, looking to share costs and good vibes!",
      details: [
        "📅 Departure: Sept 15, 6:00 AM",
        "🚗 Berlin → Paris (10-11h drive)",
        "💰 ~40€ per person",
        "🎵 Salsa playlist included!",
      ],
      tags: ["Travel Share", "Festival", "Berlin-Paris"],
    },
    stats: {
      responses: 5,
    },
  },
]);

const loadMore = () => {
  // TODO: Implement load more functionality
  console.log("Load more clicked");
};
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <FeedCard v-for="post in posts" :key="post.id" :post="post" />
  </div>

  <div class="text-center mt-8">
    <Button variant="link" @click="loadMore">Load More Posts</Button>
  </div>
</template>
