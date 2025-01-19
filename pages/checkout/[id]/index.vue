<script setup lang="ts">
import { mockEvents } from "@/data/mockEvents";
import type { AnyEvent, Price } from "~/schemas/event";
import { formatDate } from "~/utils/format";

definePageMeta({
  layout: "focus",
});

const route = useRoute();
const event = computed(() =>
  mockEvents.find((e) => String(e.id) === String(route.params.id))
);

// Get selected price for workshops
const selectedPrice = computed(() => {
  if (!event.value) return null;
  const priceId = route.query.priceId as string;
  return event.value.prices?.find((p) => p.id === priceId);
});

// Get final price for checkout
const checkoutPrice = computed(() => {
  if (selectedPrice.value) {
    return selectedPrice.value;
  }

  throw new Error("Unknown price checkout logic not implemented yet");
});

// Checkout state management
const checkoutState = ref("email"); // email, login, or register

const { checkEmail, createAccount, login, isLoading, error } =
  useRegistration();

const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  userType: "dancer",
  terms: false,
});

const handleEmailCheck = async () => {
  if (!formData.email) return;

  const exists = await checkEmail(formData.email);
  checkoutState.value = exists ? "login" : "register";
};

const handleSubmit = async () => {
  if (!event.value) return;

  try {
    let success = false;

    if (checkoutState.value === "login") {
      success = await login(formData.email, formData.password);
    } else {
      success = await createAccount(formData);
    }

    if (success) {
      // Here you would integrate with your payment provider
      // For now, we'll simulate a successful booking
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to success page
      navigateTo(`/checkout/${event.value.id}/success`);
    }
  } catch (e) {
    console.error("Checkout failed:", e);
  }
};
</script>

<template>
  <div v-if="event" class="min-h-screen bg-gray-50 py-12">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="space-y-8">
        <!-- Header -->
        <div class="text-center">
          <h1 class="text-3xl font-bold">Checkout</h1>
          <p class="text-gray-600 mt-2">Complete your booking</p>
        </div>

        <!-- Event Summary -->
        <div class="bg-white rounded-xl border p-6">
          <div class="flex gap-6">
            <div class="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
              <img
                :src="event.image || '/images/event-placeholder.jpg'"
                :alt="event.name"
                class="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 class="text-xl font-bold">{{ event.name }}</h2>
              <div class="text-gray-600 space-y-1 mt-2">
                <div class="flex items-center gap-2">
                  <Icon name="ph:calendar" class="w-4 h-4" />
                  <span>{{ formatDate(event.date.start) }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="ph:map-pin" class="w-4 h-4" />
                  <span
                    >{{ event.location.name }}, {{ event.location.city }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <!-- Price Summary -->
          <div class="mt-6 pt-6 border-t">
            <div class="flex justify-between items-center text-lg">
              <div>
                <div class="font-medium">{{ checkoutPrice.name }}</div>
                <div class="text-sm text-gray-600">
                  {{ checkoutPrice.description }}
                </div>
              </div>
              <div class="font-bold">
                {{ checkoutPrice.amount }} {{ checkoutPrice.currency }}
              </div>
            </div>
          </div>
        </div>

        <!-- Checkout Form -->
        <form
          @submit.prevent="
            checkoutState === 'email' ? handleEmailCheck() : handleSubmit()
          "
          class="bg-white rounded-xl border p-6"
        >
          <div class="space-y-6">
            <!-- Email Step -->
            <div v-if="checkoutState === 'email'">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your email to continue"
                />
              </div>

              <div class="mt-6">
                <Button type="submit" :disabled="isLoading" class="w-full">
                  <template v-if="isLoading">Checking...</template>
                  <template v-else>Continue</template>
                </Button>
              </div>
            </div>

            <!-- Login Step -->
            <div v-else-if="checkoutState === 'login'" class="space-y-4">
              <p class="text-sm text-gray-600">
                Welcome back! Please log in to continue.
              </p>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  v-model="formData.password"
                  type="password"
                  required
                  class="w-full px-4 py-2 border rounded-lg"
                />
              </div>

              <Button type="submit" :disabled="isLoading" class="w-full">
                <template v-if="isLoading">Logging in...</template>
                <template v-else>Log in</template>
              </Button>
            </div>

            <!-- Registration Step -->
            <div v-else-if="checkoutState === 'register'" class="space-y-6">
              <p class="text-sm text-gray-600">
                Create your account to join our dance community
              </p>

              <!-- User Type -->
              <UserTypeSelect v-model="formData.userType" />

              <!-- Name Fields -->
              <NameFields
                v-model:firstName="formData.firstName"
                v-model:lastName="formData.lastName"
              />

              <!-- Phone -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  v-model="formData.phone"
                  type="tel"
                  required
                  class="w-full px-4 py-2 border rounded-lg"
                  placeholder="Enter your phone number"
                />
              </div>

              <!-- Password -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  v-model="formData.password"
                  type="password"
                  required
                  class="w-full px-4 py-2 border rounded-lg"
                  placeholder="Create a password"
                />
              </div>

              <!-- Terms -->
              <TermsCheckbox v-model="formData.terms" />

              <div v-if="error" class="text-red-600 text-sm">
                {{ error }}
              </div>

              <Button type="submit" :disabled="isLoading" class="w-full">
                <template v-if="isLoading">Processing...</template>
                <template v-else>Complete Booking</template>
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Empty State -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <Icon name="ph:calendar-x" class="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h2 class="text-2xl font-bold text-gray-900 mb-2">Event Not Found</h2>
      <p class="text-gray-600 mb-6">
        The event you're looking for doesn't exist or has been removed.
      </p>
      <Button as-child>
        <NuxtLink to="/events">Browse Events</NuxtLink>
      </Button>
    </div>
  </div>
</template>
