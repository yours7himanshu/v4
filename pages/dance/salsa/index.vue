# Create the main salsa page
<script setup lang="ts">
import { ref } from "vue";

const styles = [
  {
    id: "cuban",
    name: "Cuban Style (Casino)",
    description:
      "Circular style with Afro-Cuban roots, danced to Son and Timba music",
    aliases: ["Salsa Cubana", "Casino", "Cuban Salsa"],
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
  },
  {
    id: "linear",
    name: "Linear Style",
    description: "Danced in a slot, includes LA Style (On1) and NY Style (On2)",
    aliases: ["LA Style", "NY Style", "On1", "On2"],
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
  },
  {
    id: "colombian",
    name: "Colombian Style",
    description: "Close embrace style with Colombian rhythms and moves",
    aliases: ["Caleña", "Colombiana"],
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
  },
];

const communities = ref([
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
      "Munich's vibrant Cuban Salsa community, focused on Timba music",
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
    memberCount: 500,
    city: "Munich",
    style: "Cuban",
  },
  {
    id: "on2-munich",
    name: "Munich On2 Community",
    description: "NY Style (On2) dancers in Munich",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    memberCount: 200,
    city: "Munich",
    style: "Linear",
  },
  {
    id: "salsa-berlin",
    name: "Salsa Berlin",
    description: "Berlin's largest salsa community for all styles",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    memberCount: 1200,
    city: "Berlin",
    style: "All",
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
    id: "on2-social",
    name: "On2 Social",
    description: "Weekly NY Style social with guest DJs",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    date: "2023-10-19",
    time: "20:00 - 01:00",
    location: "Tanzstudio München",
    city: "Munich",
    style: "Linear",
    price: "10€",
    organizer: "Munich On2 Community",
  },
  {
    id: "berlin-salsa-congress",
    name: "Berlin Salsa Congress",
    description: "3 days of workshops, shows and parties",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    date: "2023-11-24",
    time: "All day",
    location: "Maritim Hotel Berlin",
    city: "Berlin",
    style: "All",
    price: "from 99€",
    organizer: "Salsa Berlin",
  },
]);

const beginnerPosts = [
  {
    id: "getting-started-with-salsa",
    title: "Getting Started with Salsa",
    description: "A complete beginner's guide to salsa dancing",
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
    author: "Maria Rodriguez",
    date: "2023-10-15",
  },
  {
    id: "choosing-salsa-style",
    title: "How to Choose Your Salsa Style",
    description: "Compare different salsa styles and find your perfect match",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    author: "Carlos Mendoza",
    date: "2023-10-10",
  },
];

const teacherPosts = [
  {
    id: "teaching-salsa",
    title: "Teaching Resources",
    description: "Essential tools and methods for salsa instructors",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    author: "Juan Martinez",
    date: "2023-10-12",
  },
  {
    id: "salsa-music-guide",
    title: "Salsa Music Guide",
    description: "Understanding salsa music structure and rhythms",
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
    author: "Ana Sofia",
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
      <h1 class="text-4xl font-bold mb-4">Salsa Dancing</h1>
      <p class="text-xl text-gray-600">
        Discover the vibrant world of salsa dancing - from Cuban rhythms to
        linear precision
      </p>
    </div>

    <!-- Styles Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Styles</h2>
      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="style in styles"
          :key="style.id"
          :to="`/dance/salsa/${style.id}`"
          class="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <div class="aspect-video rounded-t-lg overflow-hidden bg-gray-100">
            <NuxtImg
              :src="style.image"
              :alt="style.name"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div class="p-4">
            <h3 class="font-semibold text-lg mb-2">{{ style.name }}</h3>
            <p class="text-gray-600 text-sm mb-2">{{ style.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="alias in style.aliases"
                :key="alias"
                class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
              >
                {{ alias }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>

    <!-- Communities Section -->
    <section class="mb-12">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-semibold">Communities</h2>
        <NuxtLink
          to="/communities?style=salsa"
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
              loading="lazy"
            />
          </div>
          <div class="p-4">
            <div class="flex items-center justify-between mb-2">
              <h3 class="font-semibold text-lg">{{ community.name }}</h3>
              <span
                class="text-sm bg-purple-50 text-purple-600 px-2 py-1 rounded-full"
              >
                {{ community.style }}
              </span>
            </div>
            <p class="text-gray-600 text-sm mb-4">
              {{ community.description }}
            </p>
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
          to="/events?style=salsa"
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
              loading="lazy"
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

    <!-- Resources Section -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-6">Resources</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="font-semibold text-lg mb-4">For Beginners</h3>
          <div class="space-y-4">
            <NuxtLink
              v-for="post in beginnerPosts"
              :key="post.id"
              :to="`/posts/${post.id}`"
              class="group block"
            >
              <div class="flex gap-4">
                <div class="w-24 h-16 rounded overflow-hidden bg-gray-100">
                  <NuxtImg
                    :src="post.image"
                    :alt="post.title"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex-1">
                  <h4 class="font-medium group-hover:text-purple-600">
                    {{ post.title }}
                  </h4>
                  <p class="text-sm text-gray-600 line-clamp-1">
                    {{ post.description }}
                  </p>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ post.author }} •
                    {{ new Date(post.date).toLocaleDateString() }}
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
        <div class="bg-white p-6 rounded-lg shadow-sm">
          <h3 class="font-semibold text-lg mb-4">For Teachers</h3>
          <div class="space-y-4">
            <NuxtLink
              v-for="post in teacherPosts"
              :key="post.id"
              :to="`/posts/${post.id}`"
              class="group block"
            >
              <div class="flex gap-4">
                <div class="w-24 h-16 rounded overflow-hidden bg-gray-100">
                  <NuxtImg
                    :src="post.image"
                    :alt="post.title"
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="flex-1">
                  <h4 class="font-medium group-hover:text-purple-600">
                    {{ post.title }}
                  </h4>
                  <p class="text-sm text-gray-600 line-clamp-1">
                    {{ post.description }}
                  </p>
                  <div class="text-xs text-gray-500 mt-1">
                    {{ post.author }} •
                    {{ new Date(post.date).toLocaleDateString() }}
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
