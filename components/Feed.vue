<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "all",
  },
});

const posts = ref([
  {
    id: 1,
    type: "note",
    author: {
      name: "Maria Rodriguez",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      location: "Madrid",
    },
    timestamp: "2 hours ago",
    content: {
      text: "💃 Quick tip for following: When you feel the lead for a right turn, wait for the tension in the connection before moving. This helps create cleaner turns and better synergy with your partner.\n\nThis small detail made a huge difference in my dancing. Try it and let me know if it helps!",
      tags: ["Dance Tips", "Following", "Technique"],
    },
    stats: {
      likes: 42,
      comments: 12,
    },
  },
  {
    id: 2,
    type: "note",
    author: {
      name: "David Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      location: "London",
    },
    timestamp: "3 hours ago",
    content: {
      text: "🎵 What's your go-to song for practicing body movement?",
      poll: {
        options: [
          { id: 1, text: "Lloraras - Oscar D'Leon", votes: 45 },
          { id: 2, text: "Aguanile - Hector Lavoe", votes: 62 },
          { id: 3, text: "Idilio - Willie Colon", votes: 28 },
          { id: 4, text: "Ahora Quien - Marc Anthony", votes: 15 },
        ],
        totalVotes: 150,
      },
      tags: ["Music", "Practice", "Salsa"],
    },
    stats: {
      likes: 25,
      comments: 18,
    },
  },
  {
    id: 3,
    type: "note",
    author: {
      name: "Sophie Laurent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      location: "Paris",
    },
    timestamp: "6 hours ago",
    content: {
      text: "Just discovered this amazing YouTube channel for salsa music history! Each video breaks down the evolution of different styles and the stories behind classic songs. Perfect for understanding the music we dance to! 🎧",
      links: [
        {
          url: "https://youtube.com/...",
          title: "Salsa Music History",
          description:
            "Deep dive into the roots of salsa music and its evolution",
        },
      ],
      tags: ["Music History", "Learning Resources", "Musicality"],
    },
    stats: {
      likes: 45,
      comments: 8,
    },
  },
  {
    id: 4,
    type: "event",
    author: {
      name: "Havana Club",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      location: "London",
    },
    timestamp: "1 day ago",
    content: {
      title: "Cuban Salsa Night with Live Band",
      image:
        "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=400&fit=crop",
      description:
        "Join us for a night of pure Cuban salsa! Live music by Son Cubano, pre-party workshop with Maria & Carlos, and social dancing until late.",
      date: "Every Friday, 8 PM - 2 AM",
      location: "Havana Club, 123 Soho St, London",
      price: {
        amount: 15,
        currency: "GBP",
      },
      tags: ["Live Music", "Cuban Salsa", "Social Dancing"],
    },
    stats: {
      interested: 89,
      comments: 14,
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
    timestamp: "1 day ago",
    content: {
      title: "Understanding the Clave: A Beginner's Guide to Salsa Rhythm",
      cover:
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&h=400&fit=crop",
      description:
        "A comprehensive guide to understanding the fundamental rhythm pattern in salsa music and how it affects our dancing.",
      html: "The clave is the heartbeat of salsa music...",
      tags: ["Musicality", "Beginner Guide", "Rhythm"],
    },
    stats: {
      likes: 89,
      comments: 24,
      bookmarks: 45,
    },
  },
  {
    id: 6,
    type: "meet",
    author: {
      name: "Anna Schmidt",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      location: "Berlin",
    },
    timestamp: "2 hours ago",
    content: {
      title: "Looking for ladies to join salsa social tonight! 💃",
      text: "Hey dancers! I'm going to Havana Social Club tonight and would love to have some dance friends join! I'm intermediate level, been dancing for 2 years. The more the merrier! 🎉",
      details: {
        type: "social",
        format: "group",
        gender: "female",
        when: "Tonight, 9 PM - 1 AM",
        where: "Havana Social Club, Berlin",
        level: "All levels welcome",
      },
      tags: ["Ladies Group", "Social Dancing", "Berlin"],
    },
    stats: {
      interested: 5,
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
      title: "Salsa Mania - Best Floor in Town!",
      rating: 5,
      description:
        "Finally checked out the new Salsa Mania venue and wow! Spacious dance floor with perfect grip, great sound system, and friendly crowd. The pre-party class was excellent too. Definitely my new favorite Thursday spot!",
      tags: ["Venue Review", "London", "Social Dancing"],
    },
    stats: {
      likes: 35,
      comments: 15,
    },
  },
  {
    id: 8,
    type: "gig",
    author: {
      name: "Salsa Mania",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924",
      location: "London",
    },
    timestamp: "1 day ago",
    content: {
      title: "Seeking Salsa Instructor for Group Classes",
      description:
        "Looking for an experienced salsa instructor to teach beginner and intermediate levels. Must have at least 3 years of teaching experience and be comfortable with both leading and following.",
      details: [
        { icon: "ph:calendar", text: "Tuesday & Thursday evenings" },
        { icon: "ph:clock", text: "7 PM - 9 PM" },
        { icon: "ph:map-pin", text: "East London" },
        { icon: "ph:graduation-cap", text: "Min. 3 years teaching exp." },
      ],
      tags: ["Teaching", "Job Opening", "London"],
    },
    stats: {
      interested: 12,
    },
  },
  {
    id: 9,
    type: "ask_locals",
    author: {
      name: "Lisa Wong",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      location: "Tokyo",
    },
    timestamp: "12 hours ago",
    content: {
      title: "New in Berlin - Where to dance salsa?",
      text: "Just moved to Berlin and looking to connect with the salsa scene! Particularly interested in Cuban style socials and weekday practice sessions. Any recommendations for venues, WhatsApp groups, or regular events?",
      tags: ["Berlin", "Local Scene", "Cuban Salsa"],
    },
    stats: {
      likes: 8,
      comments: 15,
    },
  },
  {
    id: 10,
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
        "Just launched our new collection of professional dance shoes! Italian leather, perfect heel height, and superior comfort. Use code SUMMER20 for 20% off.",
      tags: ["Dance Shoes", "New Collection", "Special Offer"],
    },
    stats: {
      likes: 34,
      bookmarks: 12,
    },
  },
  {
    id: 11,
    type: "meet",
    author: {
      name: "Thomas Weber",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      location: "Stuttgart",
    },
    timestamp: "4 hours ago",
    content: {
      title: "Looking for ride share to Freiburg Salsa Festival! 🚗",
      text: "Hey dancers! Anyone driving to Freiburg Salsa Festival next weekend? Happy to share fuel costs and good vibes! I'm flexible with departure times.",
      details: {
        type: "travel",
        format: "carpool",
        when: "Sept 15-17",
        where: "Stuttgart → Freiburg",
        seats: "1 seat needed",
        contribution: "Will share fuel costs",
      },
      tags: ["Festival", "Ride Share", "Freiburg"],
    },
    stats: {
      interested: 3,
    },
  },
  {
    id: 12,
    type: "meet",
    author: {
      name: "Carlos Mendoza",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      location: "Berlin",
    },
    timestamp: "1 hour ago",
    content: {
      title: "Casino style practice partner needed 🕺",
      text: "Hola! I'm looking for a follow to practice casino style salsa. I'm a beginner (3 months experience) and would love to work on basic figures and rueda combinations. I have access to a practice room near Alexanderplatz.",
      details: {
        type: "practice",
        format: "individual",
        gender: "female",
        when: "Weekday evenings",
        where: "Berlin, Alexanderplatz area",
        level: "Beginner",
        style: "Casino/Cuban",
      },
      tags: ["Practice Partner", "Casino", "Berlin", "Beginner"],
    },
    stats: {
      interested: 2,
    },
  },
]);

// Filter posts based on type
const filteredPosts = computed(() => {
  if (props.type === "all") {
    return posts.value;
  }
  return posts.value.filter((post) => post.type === props.type);
});

const loadMore = () => {
  // TODO: Implement load more functionality
  console.log("Load more clicked");
};
</script>

<template>
  <div class="max-w-xl mx-auto">
    <div class="space-y-4">
      <Post v-for="post in filteredPosts" :key="post.id" :post="post" />
    </div>

    <div class="text-center mt-8">
      <Button variant="link" @click="loadMore">Load More Posts</Button>
    </div>
  </div>
</template>
