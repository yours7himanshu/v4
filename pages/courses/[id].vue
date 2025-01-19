<script setup lang="ts">
import { ref, computed } from "vue";

// Mock course data - replace with real API call later
const course = ref({
  id: "1",
  title: "Beginner Salsa Course",
  description:
    "Master the fundamentals of Salsa dancing with our comprehensive beginner course.",
  instructor: {
    name: "Maria Rodriguez",
    avatar: "/images/avatars/default.png",
  },
  modules: [
    {
      id: 1,
      title: "Introduction to Salsa",
      lessons: [
        {
          id: 1,
          title: "Basic Steps",
          duration: "15:00",
          videoId: "abc123",
          completed: true,
        },
        {
          id: 2,
          title: "Basic Turn Patterns",
          duration: "20:00",
          videoId: "def456",
          completed: false,
        },
      ],
    },
    // {
    //   id: 2,
    //   title: "Intermediate Patterns",
    //   lessons: [
    //     {
    //       id: 3,
    //       title: "Cross Body Lead",
    //       duration: "25:00",
    //       videoId: "ghi789",
    //       completed: false,
    //     },
    //   ],
    // },
  ],
});

const currentLesson = ref(course.value.modules[0].lessons[0]);

const progress = computed(() => {
  const totalLessons = course.value.modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0
  );
  const completedLessons = course.value.modules.reduce(
    (acc, module) =>
      acc + module.lessons.filter((lesson) => lesson.completed).length,
    0
  );
  return Math.round((completedLessons / totalLessons) * 100);
});

const selectLesson = (lesson: any) => {
  currentLesson.value = lesson;
};
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Course Header -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-2xl font-bold">{{ course.title }}</h1>
            <p class="text-sm text-gray-600">
              Instructor: {{ course.instructor.name }}
            </p>
          </div>
          <div class="text-right">
            <div class="text-sm text-gray-600">Progress</div>
            <div class="text-lg font-semibold">{{ progress }}%</div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Video Player -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="aspect-video">
              <iframe
                :src="`https://www.youtube.com/embed/${currentLesson.videoId}`"
                class="w-full h-full"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2">
                {{ currentLesson.title }}
              </h2>
              <p class="text-sm text-gray-600">
                Duration: {{ currentLesson.duration }}
              </p>
            </div>
          </div>
        </div>

        <!-- Course Content -->
        <div class="bg-white rounded-xl shadow-sm overflow-hidden">
          <div class="p-4 border-b">
            <h3 class="font-semibold">Course Content</h3>
          </div>
          <div class="divide-y">
            <div v-for="module in course.modules" :key="module.id" class="p-4">
              <h4 class="font-medium mb-2">{{ module.title }}</h4>
              <ul class="space-y-2">
                <li
                  v-for="lesson in module.lessons"
                  :key="lesson.id"
                  @click="selectLesson(lesson)"
                  class="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer"
                  :class="{
                    'bg-purple-50': currentLesson.id === lesson.id,
                  }"
                >
                  <Icon
                    :name="
                      lesson.completed
                        ? 'ph:check-circle-fill'
                        : 'ph:play-circle'
                    "
                    class="w-5 h-5"
                    :class="
                      lesson.completed ? 'text-green-600' : 'text-gray-400'
                    "
                  />
                  <div class="flex-1">
                    <div
                      class="text-sm"
                      :class="{
                        'font-medium': currentLesson.id === lesson.id,
                      }"
                    >
                      {{ lesson.title }}
                    </div>
                    <div class="text-xs text-gray-500">
                      {{ lesson.duration }}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
