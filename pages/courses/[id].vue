<script setup lang="ts">
import { ref, computed } from "vue";
import { mockArtists } from "~/data/mockArtists";

const instructor = mockArtists.find((artist) => artist.id === 1)!;

// Mock course data - replace with real API call later
const course = ref({
  id: "1",
  title: "Cuban Casino Fundamentals",
  description:
    "Master the authentic Cuban Casino style with world champion Maykel Fonts. From basic steps to advanced turn patterns, this comprehensive course will give you a solid foundation in Cuban dance.",
  instructor: {
    ...instructor,
    credentials: instructor.experience.achievements[0],
  },
  price: instructor.availability.pricing?.workshop,
  modules: [
    {
      id: 1,
      title: "Introduction to Casino",
      lessons: [
        {
          id: 1,
          title: "Understanding Cuban Dance Culture",
          duration: "15:00",
          videoId: "abc123",
          completed: true,
        },
        {
          id: 2,
          title: "Basic Steps & Rhythm",
          duration: "20:00",
          videoId: "def456",
          completed: false,
        },
        {
          id: 3,
          title: "Basic Partner Connection",
          duration: "18:00",
          videoId: "ghi789",
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: "Essential Turn Patterns",
      lessons: [
        {
          id: 4,
          title: "Dile Que No",
          duration: "25:00",
          videoId: "jkl012",
          completed: false,
        },
        {
          id: 5,
          title: "Vacilala",
          duration: "22:00",
          videoId: "mno345",
          completed: false,
        },
        {
          id: 6,
          title: "Setenta",
          duration: "28:00",
          videoId: "pqr678",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: "Musicality & Style",
      lessons: [
        {
          id: 7,
          title: "Understanding Timba Music",
          duration: "20:00",
          videoId: "stu901",
          completed: false,
        },
        {
          id: 8,
          title: "Cuban Body Movement",
          duration: "25:00",
          videoId: "vwx234",
          completed: false,
        },
      ],
    },
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
        <div class="lg:col-span-2 space-y-8">
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

          <!-- Instructor Info -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">About the Instructor</h3>
            </div>
            <div class="p-4">
              <div class="flex items-start gap-4">
                <img
                  :src="course.instructor.image"
                  :alt="course.instructor.name"
                  class="w-24 h-24 rounded-lg object-cover"
                />
                <div>
                  <h4 class="font-semibold text-lg">
                    {{ course.instructor.name }}
                  </h4>
                  <p class="text-sm text-gray-600 mb-2">
                    {{ course.instructor.level }} instructor in
                    {{ course.instructor.location }}
                  </p>
                  <div
                    class="flex items-center gap-2 text-sm text-gray-600 mb-2"
                  >
                    <Icon name="ph:star-fill" class="w-4 h-4 text-yellow-400" />
                    {{ course.instructor.rating }} ({{
                      course.instructor.reviewCount
                    }}
                    reviews)
                  </div>
                  <div class="space-y-2">
                    <p class="text-sm text-gray-600">
                      <Icon name="ph:translate" class="w-4 h-4 inline mr-1" />
                      Languages: {{ course.instructor.languages.join(", ") }}
                    </p>
                    <p class="text-sm text-gray-600">
                      <Icon name="ph:medal" class="w-4 h-4 inline mr-1" />
                      {{ course.instructor.experience.years }}+ years of
                      experience
                    </p>
                    <div class="text-sm text-gray-600">
                      <Icon name="ph:trophy" class="w-4 h-4 inline mr-1" />
                      Achievements:
                      <ul class="list-disc list-inside ml-5">
                        <li
                          v-for="achievement in course.instructor.experience
                            .achievements"
                          :key="achievement"
                        >
                          {{ achievement }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Course Content -->
        <div class="space-y-8">
          <!-- Price Info -->
          <div
            class="bg-white rounded-xl shadow-sm overflow-hidden"
            v-if="course.price"
          >
            <div class="p-4 border-b">
              <h3 class="font-semibold">Course Price</h3>
            </div>
            <div class="p-4">
              <div class="text-2xl font-bold mb-1">
                {{ course.price.amount }} {{ course.price.currency }}
              </div>
              <p class="text-sm text-gray-600">
                {{ course.price.duration }} minutes {{ course.price.note }}
              </p>
            </div>
          </div>

          <!-- Course Content -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Course Content</h3>
            </div>
            <div class="divide-y">
              <div
                v-for="module in course.modules"
                :key="module.id"
                class="p-4"
              >
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
  </div>
</template>
