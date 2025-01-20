<script setup lang="ts">
const props = defineProps<{
  course: {
    id: string;
    title: string;
    pricing: {
      trial?: {
        duration: number;
        features: string[];
      };
      regular: {
        monthly: { amount: number; currency: string; savings?: string };
        annual: { amount: number; currency: string; savings: string };
        features: string[];
      };
      premium: {
        monthly: { amount: number; currency: string; savings?: string };
        annual: { amount: number; currency: string; savings: string };
        features: string[];
      };
    };
  };
  onSelect: (plan: { type: string; interval?: string }) => void;
}>();

const dialog = useDialog();

const handleSelect = (plan: { type: string; interval?: string }) => {
  props.onSelect(plan);
  dialog.close();
};
</script>

<template>
  <DialogHeader>
    <DialogTitle>Choose Your Plan</DialogTitle>
    <DialogDescription>
      Select a subscription plan that best suits your learning goals
    </DialogDescription>
  </DialogHeader>

  <div class="space-y-4 py-4">
    <!-- Trial Plan -->
    <div
      v-if="course.pricing.trial"
      class="bg-purple-50 rounded-lg border p-4 hover:border-purple-600 cursor-pointer transition-colors"
      @click="handleSelect({ type: 'trial' })"
    >
      <div class="flex items-start gap-4">
        <div
          class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
        >
          <Icon name="ph:sparkle" class="w-5 h-5 text-purple-600" />
        </div>
        <div class="flex-1">
          <div class="flex items-start justify-between gap-4">
            <div>
              <div class="font-medium">Free Trial</div>
              <div class="text-sm text-gray-600">
                Try for {{ course.pricing.trial.duration }} days
              </div>
              <ul class="mt-2 space-y-1">
                <li
                  v-for="feature in course.pricing.trial.features"
                  :key="feature"
                  class="flex items-center gap-2 text-sm text-gray-600"
                >
                  <Icon name="ph:check" class="w-4 h-4 text-green-600" />
                  {{ feature }}
                </li>
              </ul>
            </div>
            <div class="text-right">
              <div class="font-bold text-purple-600">Free</div>
              <div class="text-sm text-gray-600">No credit card required</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Regular Plan -->
    <div class="space-y-4">
      <div
        class="bg-white rounded-lg border p-4 hover:border-purple-600 cursor-pointer transition-colors"
        @click="handleSelect({ type: 'regular', interval: 'monthly' })"
      >
        <div class="flex items-start gap-4">
          <div
            class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
          >
            <Icon name="ph:star" class="w-5 h-5 text-purple-600" />
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="font-medium">Regular Plan - Monthly</div>
                <div class="text-sm text-gray-600">Perfect for beginners</div>
                <ul class="mt-2 space-y-1">
                  <li
                    v-for="feature in course.pricing.regular.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Icon name="ph:check" class="w-4 h-4 text-green-600" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="text-right">
                <div class="font-bold">
                  {{ course.pricing.regular.monthly.amount }}
                  {{ course.pricing.regular.monthly.currency }}
                </div>
                <div class="text-sm text-gray-600">per month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg border p-4 hover:border-purple-600 cursor-pointer transition-colors"
        @click="handleSelect({ type: 'regular', interval: 'annual' })"
      >
        <div class="flex items-start gap-4">
          <div
            class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
          >
            <Icon name="ph:star" class="w-5 h-5 text-purple-600" />
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="font-medium">Regular Plan - Annual</div>
                <div class="text-sm text-gray-600">
                  Save {{ course.pricing.regular.annual.savings }}
                </div>
                <ul class="mt-2 space-y-1">
                  <li
                    v-for="feature in course.pricing.regular.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Icon name="ph:check" class="w-4 h-4 text-green-600" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="text-right">
                <div class="font-bold">
                  {{ course.pricing.regular.annual.amount }}
                  {{ course.pricing.regular.annual.currency }}
                </div>
                <div class="text-sm text-gray-600">per year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Premium Plan -->
    <div class="space-y-4">
      <div
        class="bg-white rounded-lg border-2 border-purple-600 p-4 hover:bg-purple-50 cursor-pointer transition-colors"
        @click="handleSelect({ type: 'premium', interval: 'monthly' })"
      >
        <div class="flex items-start gap-4">
          <div
            class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
          >
            <Icon name="ph:crown" class="w-5 h-5 text-purple-600" />
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="font-medium">Premium Plan - Monthly</div>
                <div class="text-sm text-gray-600">For dedicated learners</div>
                <ul class="mt-2 space-y-1">
                  <li
                    v-for="feature in course.pricing.premium.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Icon name="ph:check" class="w-4 h-4 text-green-600" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="text-right">
                <div class="font-bold">
                  {{ course.pricing.premium.monthly.amount }}
                  {{ course.pricing.premium.monthly.currency }}
                </div>
                <div class="text-sm text-gray-600">per month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-lg border-2 border-purple-600 p-4 hover:bg-purple-50 cursor-pointer transition-colors"
        @click="handleSelect({ type: 'premium', interval: 'annual' })"
      >
        <div class="flex items-start gap-4">
          <div
            class="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
          >
            <Icon name="ph:crown" class="w-5 h-5 text-purple-600" />
          </div>
          <div class="flex-1">
            <div class="flex items-start justify-between gap-4">
              <div>
                <div class="font-medium">Premium Plan - Annual</div>
                <div class="text-sm text-gray-600">
                  Save {{ course.pricing.premium.annual.savings }}
                </div>
                <ul class="mt-2 space-y-1">
                  <li
                    v-for="feature in course.pricing.premium.features"
                    :key="feature"
                    class="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Icon name="ph:check" class="w-4 h-4 text-green-600" />
                    {{ feature }}
                  </li>
                </ul>
              </div>
              <div class="text-right">
                <div class="font-bold">
                  {{ course.pricing.premium.annual.amount }}
                  {{ course.pricing.premium.annual.currency }}
                </div>
                <div class="text-sm text-gray-600">per year</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="text-xs text-center text-gray-500">
      All plans include 14-day money-back guarantee. Cancel anytime.
    </p>
  </div>
</template>
