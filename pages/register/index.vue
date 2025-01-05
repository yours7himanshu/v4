<script setup lang="ts">
const selectedType = ref("dancer");
const form = reactive({
  name: "",
  email: "",
  password: "",
  city: "",
  terms: false,
});

const router = useRouter();

const handleSubmit = () => {
  // TODO: Handle form submission
  console.log("Form submitted:", { ...form, type: selectedType.value });
  router.push({
    path: "/register/styles",
    query: { type: selectedType.value },
  });
};
</script>

<template>
  <div class="bg-gray-50">
    <div class="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-3">Join WeDance</h1>
        <p class="text-gray-600">
          Create your free account and start connecting with the dance community
        </p>
      </div>

      <div class="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <!-- User Type Selection -->
        <div class="mb-8">
          <label class="block text-sm font-medium text-gray-700 mb-3">
            I am a...
          </label>
          <div class="grid grid-cols-2 gap-4">
            <button
              v-for="type in [
                { id: 'dancer', label: 'Dancer', icon: 'ph:users-three' },
                {
                  id: 'artist',
                  label: 'Artist',
                  icon: 'ph:microphone-stage',
                },
                { id: 'organizer', label: 'Organizer', icon: 'ph:buildings' },
                { id: 'venue', label: 'Venue Owner', icon: 'ph:house' },
              ]"
              :key="type.id"
              class="flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 hover:border-purple-500 hover:bg-purple-50"
              :class="[
                selectedType === type.id
                  ? 'border-purple-500 bg-purple-50'
                  : 'border-gray-200',
              ]"
              @click="selectedType = type.id"
            >
              <Icon :name="type.icon" class="w-6 h-6 text-purple-600" />
              <span class="font-medium">{{ type.label }}</span>
            </button>
          </div>
        </div>

        <!-- Registration Form -->
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <Input
              v-model="form.name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              v-model="form.email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              v-model="form.password"
              type="password"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">
              City
            </label>
            <Input
              v-model="form.city"
              type="text"
              placeholder="Enter your city"
              required
            />
          </div>

          <div class="flex items-center gap-2">
            <Checkbox v-model="form.terms" id="terms" required />
            <label for="terms" class="text-sm text-gray-600">
              I agree to the
              <NuxtLink
                to="/terms"
                class="text-purple-600 hover:text-purple-700"
              >
                Terms of Service
              </NuxtLink>
              and
              <NuxtLink
                to="/privacy"
                class="text-purple-600 hover:text-purple-700"
              >
                Privacy Policy
              </NuxtLink>
            </label>
          </div>

          <Button type="submit" class="w-full">Create Account</Button>
        </form>
      </div>

      <div class="text-center text-sm text-gray-600">
        Already have an account?
        <NuxtLink to="/login" class="text-purple-600 hover:text-purple-700">
          Sign in
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
