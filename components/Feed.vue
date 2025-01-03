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
      title: "Barcelona Summer Salsa Festival 2024",
      image:
        "https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&h=400&fit=crop",
      description:
        "Get ready for the hottest salsa event of the summer! Three days of workshops, performances, and social dancing by the beach.",
      location: "Barceloneta Beach Club",
      date: "July 15-17, 2024",
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
      text: "Just had a breakthrough with my salsa styling! After struggling with body movement isolation, I discovered this effective drill:\n\nThe Mirror Exercise: Stand in front of a mirror and play a slow salsa song. Start by moving only your shoulders for 8 counts, then switch to moving just your hips for the next 8 counts. Keep alternating between shoulders and hips, and gradually increase the tempo as you get more comfortable.\n\nAfter just a week of practicing this for 15 minutes daily, my movement fluidity has improved dramatically! My instructor was impressed with the progress.\n\nTry it and let me know how it works for you!",
      tags: ["Dance Tips", "Salsa Styling", "Practice Drills", "Body Movement"],
    },
    stats: {
      likes: 45,
      comments: 18,
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
      title: "Salsa Night at Havana Club",
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=400&fit=crop",
      description:
        "Join us for a night of amazing music, dancing, and great vibes! Live band and DJ sets all night long.",
      location: "Havana Club, Soho",
      date: "Every Friday",
      cta: "First-timers get a free welcome drink!",
    },
    stats: {
      interested: 89,
    },
  },
  {
    id: 5,
    type: "article",
    author: {
      name: "Sophie Laurent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      location: "Paris",
    },
    timestamp: "6 hours ago",
    content: {
      title:
        "The Evolution of Cuban Salsa: From Street Dancing to Global Phenomenon",
      image:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&h=400&fit=crop",
      description:
        "A deep dive into the rich history of Cuban salsa, its cultural significance, and how it spread worldwide.",
      text: "Cuban salsa, also known as Casino, emerged in the dance halls of Havana...",
      tags: ["History", "Cuban Salsa", "Dance Culture"],
    },
    stats: {
      likes: 89,
      comments: 24,
      bookmarks: 45,
    },
  },
  {
    id: 6,
    type: "find_partner",
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
      title: "Havana Club",
      rating: 5,
      description:
        "Fantastic atmosphere at this new spot in Soho! Live band on Fridays, great dance floor, and friendly crowd. The instructors for the pre-party lesson were excellent.",
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
      title: "Salsa for Beginners Workshop Series",
      text: "Looking for experienced dancers to help organize free workshops for beginners. Let's make salsa more accessible!",
      details: [
        "Weekly workshops (2 hours)",
        "Need: 4-5 volunteer instructors",
        "Location: Community Center",
        "Starting next month",
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
      title: "Sharing ride to Paris Salsa Festival",
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
  {
    id: 10,
    type: "poll",
    author: {
      name: "Dance Community Berlin",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      location: "Berlin",
    },
    timestamp: "3 hours ago",
    content: {
      title: "What's your favorite dance style?",
      options: [
        { id: 1, text: "Salsa", votes: 45 },
        { id: 2, text: "Bachata", votes: 62 },
        { id: 3, text: "Kizomba", votes: 28 },
        { id: 4, text: "Zouk", votes: 15 },
      ],
      totalVotes: 150,
    },
    stats: {
      likes: 25,
      bookmarks: 3,
    },
  },
  {
    id: 11,
    type: "gig",
    author: {
      name: "Salsa Club Madrid",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924",
      location: "Madrid",
    },
    timestamp: "1 day ago",
    content: {
      title: "Looking for Salsa DJ - Weekend Events",
      description:
        "Seeking experienced salsa DJ for regular weekend events. Must have extensive music library and experience reading the crowd.",
      details: [
        { icon: "ph:calendar", text: "Every Friday & Saturday" },
        { icon: "ph:clock", text: "9 PM - 2 AM" },
        { icon: "ph:currency-eur", text: "Competitive pay" },
        { icon: "ph:music-notes", text: "Must know multiple styles" },
      ],
      tags: ["Job Opening", "DJ", "Madrid"],
    },
    stats: {
      likes: 18,
      bookmarks: 7,
    },
  },
  {
    id: 12,
    type: "ad",
    author: {
      name: "Dance Shoes Pro",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8",
      location: "Online Store",
    },
    timestamp: "5 hours ago",
    content: {
      title: "New Collection: Professional Dance Shoes",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=400&fit=crop",
      description:
        "Introducing our latest collection of professional dance shoes. Handcrafted in Italy, perfect for salsa and bachata.",
      cta: "Shop Now - 20% Off Launch Special",
    },
    stats: {
      likes: 34,
      bookmarks: 12,
    },
  },
  {
    id: 13,
    type: "video",
    author: {
      name: "Elena Martinez",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f",
      location: "Havana",
    },
    timestamp: "2 days ago",
    content: {
      title: "Rhythm in Salsa Cubana",
      video: "https://example.com/video123.mp4",
      thumbnail: "https://img.youtube.com/vi/vN8TE_hYeqo/hqdefault.jpg",
      description:
        "Learn the essential rhythm patterns and timing in Cuban Salsa. Perfect for beginners wanting to understand the musical structure and basic steps.",
      duration: "5:24",
      tags: ["Tutorial", "Beginner", "Turn Pattern"],
    },
    stats: {
      likes: 156,
      comments: 23,
      bookmarks: 45,
    },
  },
  {
    id: 15,
    type: "ask_locals",
    author: {
      name: "Lisa Wong",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      location: "Tokyo",
    },
    timestamp: "12 hours ago",
    content: {
      title: "Tokyo Salsa Scene Info Needed!",
      text: "Just moved to Tokyo! Looking for the best salsa spots and local WhatsApp groups.",
      tags: ["Tokyo", "Local Scene", "Newcomer"],
    },
    stats: {
      likes: 8,
      bookmarks: 5,
    },
  },
  {
    id: 16,
    type: "announcement",
    author: {
      name: "International Salsa Federation",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5",
      location: "Global",
    },
    timestamp: "1 day ago",
    content: {
      title: "Important Competition Rule Changes 2024",
      text: "New rules for international competitions starting January 2024.",
      importance: "high",
      tags: ["Rules", "Competition", "Official"],
    },
    stats: {
      likes: 234,
      bookmarks: 189,
    },
  },
]);

const loadMore = () => {
  // TODO: Implement load more functionality
  console.log("Load more clicked");
};
</script>

<template>
  <div class="max-w-xl mx-auto">
    <div class="space-y-4">
      <FeedCard v-for="post in posts" :key="post.id" :post="post" />
    </div>

    <div class="text-center mt-8">
      <Button variant="link" @click="loadMore">Load More Posts</Button>
    </div>
  </div>
</template>
