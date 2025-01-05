<script setup lang="ts">
import { ref } from "vue";

interface Community {
  id: string;
  name: string;
  description: string;
  image: string;
  memberCount: number;
  city: string;
  style?: string;
  schedule?: {
    summer: string[];
    winter: string[];
  };
  links?: {
    whatsapp?: string;
  };
}

const communities = ref<Community[]>([
  {
    id: "afro-cuban-festivals",
    name: "Afro Cuban Festivals",
    description:
      "International community coordinating festival trips across Germany and Europe",
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
    memberCount: 2500,
    city: "International",
    style: "Cuban",
    links: {
      whatsapp: "https://chat.whatsapp.com/xyz",
    },
  },
  {
    id: "salsa-cubana-munich",
    name: "Salsa Cubana Munich",
    description:
      "Munich's vibrant Cuban Salsa community, focused on Timba music and social dancing",
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
    schedule: {
      summer: ["Wednesdays & Fridays: Open Air at Pinakothek der Moderne"],
      winter: ["Wednesdays: Kult Dance Studio"],
    },
    memberCount: 500,
    city: "Munich",
  },
]);

const events = ref([
  {
    id: "cuban-open-air",
    name: "Cuban Open Air",
    description: "Weekly outdoor social dancing with Timba music",
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
    date: "2023-10-18",
    time: "19:00 - 23:00",
    location: "Pinakothek der Moderne",
    city: "Munich",
    style: "Cuban",
    price: "Free",
    organizer: "Salsa Cubana Munich",
  },
  {
    id: "timba-night",
    name: "Timba Night",
    description: "Special night dedicated to Timba music with live band",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "2023-10-21",
    time: "21:00 - 03:00",
    location: "Kult Dance Studio",
    city: "Munich",
    style: "Cuban",
    price: "15€",
    organizer: "Salsa Cubana Munich",
  },
  {
    id: "rueda-workshop",
    name: "Rueda de Casino Workshop",
    description:
      "Learn the basics of Rueda de Casino with experienced instructors",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    date: "2023-10-22",
    time: "14:00 - 17:00",
    location: "Tanzstudio München",
    city: "Munich",
    style: "Cuban",
    price: "30€",
    organizer: "Salsa Cubana Munich",
  },
]);

const musicStyles = [
  {
    name: "Timba",
    description: "Modern Cuban dance music with complex rhythms",
    examples: ["Los Van Van", "Havana D'Primera", "Pupy y Los Que Son Son"],
  },
  {
    name: "Casino Music",
    description: "Traditional Cuban dance music",
    examples: ["Son Cubano", "Rumba", "Guaguancó"],
  },
];

const characteristics = [
  "Circular dance style",
  "Strong Afro-Cuban influence",
  "Complex turn patterns (ruedas)",
  "Emphasis on musicality and improvisation",
  "Social dance focus",
];

const learningPosts = [
  {
    id: "cuban-salsa-basics",
    title: "Basic Steps and Movements",
    description:
      "Learn the foundational steps and body movement of Cuban style salsa",
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
    author: "Pedro Gonzalez",
    date: "2023-10-14",
  },
  {
    id: "casino-rueda-guide",
    title: "Introduction to Rueda de Casino",
    description:
      "Get started with the exciting world of Cuban salsa circle dancing",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    author: "Rosa Martinez",
    date: "2023-10-12",
  },
];

const culturePosts = [
  {
    id: "timba-music-guide",
    title: "Understanding Timba Music",
    description: "Deep dive into the complex rhythms and structure of Timba",
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
    author: "DJ Timba",
    date: "2023-10-10",
  },
  {
    id: "cuban-dance-culture",
    title: "Cuban Dance Culture",
    description: "Explore the rich history and cultural context of Cuban salsa",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    author: "Maria Sanchez",
    date: "2023-10-08",
  },
];

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement;
  if (img) {
    img.style.display = "none";
  }
};
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Hero Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-4">Cuban Style Salsa (Casino)</h1>
      <p class="text-xl text-gray-600">
        Experience the vibrant, circular style of Cuban salsa with its rich
        Afro-Cuban roots
      </p>
    </div>

    <!-- Style Overview -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">About Cuban Style</h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="font-semibold text-lg mb-4">Key Characteristics</h3>
          <ul class="space-y-2">
            <li
              v-for="(char, index) in characteristics"
              :key="index"
              class="flex items-center"
            >
              <span class="mr-2">•</span>
              {{ char }}
            </li>
          </ul>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="font-semibold text-lg mb-4">Music Styles</h3>
          <div class="space-y-4">
            <div v-for="style in musicStyles" :key="style.name">
              <h4 class="font-medium">{{ style.name }}</h4>
              <p class="text-sm text-gray-600 mb-2">{{ style.description }}</p>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="example in style.examples"
                  :key="example"
                  class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {{ example }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Communities Section -->
    <section class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold">Communities</h2>
        <NuxtLink
          to="/communities?style=cuban-salsa"
          class="text-purple-600 hover:text-purple-700"
        >
          View All
        </NuxtLink>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="community in communities"
          :key="community.id"
          :to="`/communities/${community.id}`"
          class="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="aspect-video rounded-t-lg overflow-hidden bg-gray-100">
            <NuxtImg
              :src="community.image"
              :alt="community.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-lg">{{ community.name }}</h3>
              <span
                v-if="community.style"
                class="text-sm bg-purple-50 text-purple-600 px-2 py-1 rounded-full"
              >
                {{ community.style }}
              </span>
            </div>
            <p class="text-gray-600 text-sm mb-4">
              {{ community.description }}
            </p>
            <div v-if="community.schedule" class="space-y-2 text-sm mb-4">
              <div v-if="community.schedule.summer.length" class="text-sm">
                <strong class="text-purple-600">Summer:</strong>
                <ul class="ml-4">
                  <li v-for="time in community.schedule.summer" :key="time">
                    {{ time }}
                  </li>
                </ul>
              </div>
              <div v-if="community.schedule.winter.length" class="text-sm">
                <strong class="text-purple-600">Winter:</strong>
                <ul class="ml-4">
                  <li v-for="time in community.schedule.winter" :key="time">
                    {{ time }}
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="flex items-center justify-between text-sm text-gray-500"
            >
              <div class="flex items-center">
                <span class="mr-4">{{ community.memberCount }}+ members</span>
                <span>{{ community.city }}</span>
              </div>
              <a
                v-if="community.links?.whatsapp"
                :href="community.links.whatsapp"
                target="_blank"
                rel="noopener"
                class="text-green-600 hover:text-green-700"
                @click.stop
              >
                Join WhatsApp
              </a>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Events Section -->
    <section class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold">Upcoming Events</h2>
        <NuxtLink
          to="/events?style=cuban-salsa"
          class="text-purple-600 hover:text-purple-700"
        >
          View All
        </NuxtLink>
      </div>
      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="event in events"
          :key="event.id"
          :to="`/events/${event.id}`"
          class="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="aspect-video rounded-t-lg overflow-hidden bg-gray-100">
            <NuxtImg
              :src="event.image"
              :alt="event.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-lg">{{ event.name }}</h3>
              <span
                class="text-sm bg-purple-50 text-purple-600 px-2 py-1 rounded-full"
              >
                {{ event.style }}
              </span>
            </div>
            <p class="text-gray-600 text-sm mb-4">{{ event.description }}</p>
            <div class="space-y-2 text-sm">
              <div class="flex items-center text-gray-500">
                <span class="w-20">When:</span>
                <span
                  >{{ new Date(event.date).toLocaleDateString() }},
                  {{ event.time }}</span
                >
              </div>
              <div class="flex items-center text-gray-500">
                <span class="w-20">Where:</span>
                <span>{{ event.location }}, {{ event.city }}</span>
              </div>
              <div class="flex items-center text-gray-500">
                <span class="w-20">Price:</span>
                <span>{{ event.price }}</span>
              </div>
              <div class="flex items-center text-gray-500">
                <span class="w-20">By:</span>
                <span>{{ event.organizer }}</span>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Learn Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Learn Cuban Style</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="font-semibold text-lg mb-4">Getting Started</h3>
          <div class="space-y-4">
            <NuxtLink
              v-for="post in learningPosts"
              :key="post.id"
              :to="`/posts/${post.id}`"
              class="block hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div
                class="aspect-video rounded-lg overflow-hidden mb-3 bg-gray-100"
              >
                <NuxtImg
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="font-medium text-lg mb-1">{{ post.title }}</h4>
              <p class="text-sm text-gray-600 mb-2">{{ post.description }}</p>
              <div class="flex items-center text-sm text-gray-500">
                <span>{{ post.author }}</span>
                <span class="mx-2">•</span>
                <span>{{ new Date(post.date).toLocaleDateString() }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="font-semibold text-lg mb-4">Music & Culture</h3>
          <div class="space-y-4">
            <NuxtLink
              v-for="post in culturePosts"
              :key="post.id"
              :to="`/posts/${post.id}`"
              class="block hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div
                class="aspect-video rounded-lg overflow-hidden mb-3 bg-gray-100"
              >
                <NuxtImg
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover"
                />
              </div>
              <h4 class="font-medium text-lg mb-1">{{ post.title }}</h4>
              <p class="text-sm text-gray-600 mb-2">{{ post.description }}</p>
              <div class="flex items-center text-sm text-gray-500">
                <span>{{ post.author }}</span>
                <span class="mx-2">•</span>
                <span>{{ new Date(post.date).toLocaleDateString() }}</span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
