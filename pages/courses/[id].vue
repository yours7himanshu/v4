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
    socialMedia: instructor.socialMedia,
    privateClass: instructor.availability.pricing?.privateClass,
  },
  pricing: {
    regular: {
      monthly: {
        amount: 15,
        currency: "EUR",
        interval: "month",
      },
      annual: {
        amount: 150,
        currency: "EUR",
        interval: "year",
        savings: "Save 25%",
      },
      features: [
        "Full course access",
        "Downloadable materials",
        "Community forum access",
        "Monthly group Q&A",
      ],
    },
    premium: {
      monthly: {
        amount: 30,
        currency: "EUR",
        interval: "month",
      },
      annual: {
        amount: 300,
        currency: "EUR",
        interval: "year",
        savings: "Save 25%",
      },
      features: [
        "Everything in Regular",
        "Weekly live Q&A sessions",
        "Priority support",
        "1-on-1 feedback",
        "Private community access",
      ],
    },
    trial: {
      duration: 7,
      features: [
        "First module access",
        "Community forum preview",
        "No credit card required",
      ],
    },
  },
  stats: {
    enrolled: 234,
    completed: 156,
    avgRating: 4.8,
    reviewCount: 45,
  },
  reviews: [
    {
      id: 1,
      user: "John D.",
      rating: 5,
      comment:
        "Excellent course! Maykel's teaching style is clear and engaging.",
      date: "2024-03-15",
    },
    {
      id: 2,
      user: "Maria S.",
      rating: 5,
      comment:
        "The best online Cuban salsa course I've taken. Great progression and explanations.",
      date: "2024-03-10",
    },
    {
      id: 3,
      user: "David R.",
      rating: 4,
      comment: "Very comprehensive. The practice materials are super helpful.",
      date: "2024-03-05",
    },
  ],
  preview: {
    videoId: "xyz789",
    duration: "5:00",
  },
  community: {
    discussions: 15,
    activeStudents: 89,
    nextLiveQ_A: "2024-03-25T18:00:00Z",
  },
  materials: [
    {
      id: 1,
      title: "Basic Steps Practice Guide",
      type: "pdf",
      size: "2.4 MB",
      icon: "ph:file-pdf",
    },
    {
      id: 2,
      title: "Timba Music Playlist",
      type: "playlist",
      size: "20 songs",
      icon: "ph:music-notes",
    },
    {
      id: 3,
      title: "Practice Drills",
      type: "video",
      size: "15 min",
      icon: "ph:video",
    },
  ],
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
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Video Player -->
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

          <!-- Course Materials -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Course Materials</h3>
            </div>
            <div class="p-4">
              <ul class="space-y-3">
                <li
                  v-for="material in course.materials"
                  :key="material.id"
                  class="flex items-center gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer"
                >
                  <Icon :name="material.icon" class="w-5 h-5 text-gray-400" />
                  <div class="flex-1">
                    <div class="text-sm font-medium">{{ material.title }}</div>
                    <div class="text-xs text-gray-500">{{ material.size }}</div>
                  </div>
                  <Icon
                    name="ph:download-simple"
                    class="w-5 h-5 text-gray-400"
                  />
                </li>
              </ul>
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
                    <!-- Social Media Links -->
                    <div
                      class="flex items-center gap-4 mt-4"
                      v-if="course.instructor.socialMedia"
                    >
                      <a
                        v-if="course.instructor.socialMedia.instagram"
                        :href="`https://instagram.com/${course.instructor.socialMedia.instagram}`"
                        target="_blank"
                        class="text-gray-600 hover:text-purple-600"
                      >
                        <Icon name="ph:instagram-logo" class="w-6 h-6" />
                      </a>
                      <a
                        v-if="course.instructor.socialMedia.youtube"
                        :href="`https://youtube.com/${course.instructor.socialMedia.youtube}`"
                        target="_blank"
                        class="text-gray-600 hover:text-red-600"
                      >
                        <Icon name="ph:youtube-logo" class="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Reviews -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Student Reviews</h3>
            </div>
            <div class="divide-y">
              <div
                v-for="review in course.reviews"
                :key="review.id"
                class="p-4"
              >
                <div class="flex items-center gap-2 mb-2">
                  <div class="flex">
                    <Icon
                      v-for="i in review.rating"
                      :key="i"
                      name="ph:star-fill"
                      class="w-4 h-4 text-yellow-400"
                    />
                  </div>
                  <span class="text-sm text-gray-600">{{ review.user }}</span>
                  <span class="text-xs text-gray-400">
                    {{ new Date(review.date).toLocaleDateString() }}
                  </span>
                </div>
                <p class="text-sm text-gray-600">{{ review.comment }}</p>
              </div>
            </div>
          </div>

          <!-- Community -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Community</h3>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-2 gap-4 mb-4">
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-2xl font-bold text-purple-600">
                    {{ course.community.discussions }}
                  </div>
                  <div class="text-sm text-gray-600">Discussions</div>
                </div>
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-2xl font-bold text-purple-600">
                    {{ course.community.activeStudents }}
                  </div>
                  <div class="text-sm text-gray-600">Active Students</div>
                </div>
              </div>
              <div class="bg-purple-50 rounded-lg p-4">
                <h4 class="font-medium mb-2">Next Live Q&A Session</h4>
                <p class="text-sm text-gray-600">
                  {{ new Date(course.community.nextLiveQ_A).toLocaleString() }}
                </p>
                <Button class="w-full mt-3" variant="outline"
                  >Join Community</Button
                >
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar -->
        <div class="lg:sticky lg:top-8 space-y-8">
          <!-- Course Stats -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Course Overview</h3>
            </div>
            <div class="p-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-2xl font-bold text-purple-600">
                    {{ course.stats.enrolled }}
                  </div>
                  <div class="text-sm text-gray-600">Students</div>
                </div>
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-2xl font-bold text-purple-600">
                    {{ course.stats.completed }}
                  </div>
                  <div class="text-sm text-gray-600">Completed</div>
                </div>
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-2xl font-bold text-yellow-500">
                    {{ course.stats.avgRating }}
                  </div>
                  <div class="text-sm text-gray-600">Avg Rating</div>
                </div>
                <div class="text-center p-3 bg-gray-50 rounded-lg">
                  <div class="text-2xl font-bold text-purple-600">
                    {{ course.stats.reviewCount }}
                  </div>
                  <div class="text-sm text-gray-600">Reviews</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pricing Tiers -->
          <div class="bg-white rounded-xl shadow-sm overflow-hidden">
            <div class="p-4 border-b">
              <h3 class="font-semibold">Choose Your Plan</h3>
            </div>
            <div class="p-4 space-y-4">
              <!-- Trial -->
              <div class="bg-purple-50 rounded-lg p-4">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h4 class="font-semibold">Free Trial</h4>
                    <p class="text-sm text-gray-600">
                      Try for {{ course.pricing.trial.duration }} days
                    </p>
                  </div>
                  <div class="text-right">
                    <div class="text-lg font-semibold text-purple-600">
                      Free
                    </div>
                  </div>
                </div>
                <ul class="space-y-2 mb-4">
                  <li
                    v-for="feature in course.pricing.trial.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm"
                  >
                    <Icon
                      name="ph:check-circle"
                      class="w-4 h-4 text-green-500"
                    />
                    {{ feature }}
                  </li>
                </ul>
                <Button class="w-full" variant="default"
                  >Start Free Trial</Button
                >
              </div>

              <!-- Regular Plan -->
              <div class="border rounded-lg p-4">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h4 class="font-semibold">Regular</h4>
                    <p class="text-sm text-gray-600">Perfect for beginners</p>
                  </div>
                  <div class="text-right">
                    <div class="text-2xl font-bold">
                      {{ course.pricing.regular.monthly.amount }}
                      {{ course.pricing.regular.monthly.currency }}
                    </div>
                    <div class="text-sm text-gray-600">per month</div>
                  </div>
                </div>
                <div class="bg-gray-50 rounded p-3 mb-4">
                  <div class="flex items-center justify-between">
                    <div class="text-sm">
                      Annual plan
                      <span class="text-green-600 font-medium">{{
                        course.pricing.regular.annual.savings
                      }}</span>
                    </div>
                    <div class="text-sm font-medium">
                      {{ course.pricing.regular.annual.amount }}
                      {{ course.pricing.regular.annual.currency }}/year
                    </div>
                  </div>
                </div>
                <ul class="space-y-2 mb-4">
                  <li
                    v-for="feature in course.pricing.regular.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm"
                  >
                    <Icon
                      name="ph:check-circle"
                      class="w-4 h-4 text-green-500"
                    />
                    {{ feature }}
                  </li>
                </ul>
                <div class="space-y-2">
                  <Button class="w-full" variant="default"
                    >Subscribe Monthly</Button
                  >
                  <Button class="w-full" variant="outline"
                    >Subscribe Annually</Button
                  >
                </div>
              </div>

              <!-- Premium Plan -->
              <div class="border-2 border-purple-600 rounded-lg p-4">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h4 class="font-semibold">Premium</h4>
                    <p class="text-sm text-gray-600">For dedicated learners</p>
                  </div>
                  <div class="text-right">
                    <div class="text-2xl font-bold">
                      {{ course.pricing.premium.monthly.amount }}
                      {{ course.pricing.premium.monthly.currency }}
                    </div>
                    <div class="text-sm text-gray-600">per month</div>
                  </div>
                </div>
                <div class="bg-purple-50 rounded p-3 mb-4">
                  <div class="flex items-center justify-between">
                    <div class="text-sm">
                      Annual plan
                      <span class="text-green-600 font-medium">{{
                        course.pricing.premium.annual.savings
                      }}</span>
                    </div>
                    <div class="text-sm font-medium">
                      {{ course.pricing.premium.annual.amount }}
                      {{ course.pricing.premium.annual.currency }}/year
                    </div>
                  </div>
                </div>
                <ul class="space-y-2 mb-4">
                  <li
                    v-for="feature in course.pricing.premium.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm"
                  >
                    <Icon
                      name="ph:check-circle"
                      class="w-4 h-4 text-green-500"
                    />
                    {{ feature }}
                  </li>
                </ul>
                <div class="space-y-2">
                  <Button class="w-full" variant="default"
                    >Subscribe Monthly</Button
                  >
                  <Button class="w-full" variant="outline"
                    >Subscribe Annually</Button
                  >
                </div>
              </div>

              <p class="text-xs text-center text-gray-500">
                All plans include 14-day money-back guarantee. Cancel anytime.
              </p>
            </div>
          </div>

          <!-- Private Class Booking -->
          <div
            class="bg-white rounded-xl shadow-sm overflow-hidden"
            v-if="course.instructor.privateClass"
          >
            <div class="p-4 border-b">
              <h3 class="font-semibold">Book Private Class</h3>
            </div>
            <div class="p-4">
              <div class="text-2xl font-bold mb-1">
                {{ course.instructor.privateClass.amount }}
                {{ course.instructor.privateClass.currency }}
              </div>
              <p class="text-sm text-gray-600 mb-4">
                {{ course.instructor.privateClass.duration }} minutes private
                lesson
              </p>
              <Button class="w-full" variant="default"
                >Book Private Class</Button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
