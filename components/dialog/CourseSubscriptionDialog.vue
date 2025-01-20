<script setup lang="ts">
import { Switch } from "@/components/ui/switch";
import { ref, computed } from "vue";

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
const isAnnual = ref(false);
const showFeatures = ref(false);

const allFeatures = computed(() => {
  const features = new Set([
    ...props.course.pricing.regular.features,
    ...props.course.pricing.premium.features,
  ]);
  return Array.from(features);
});

const hasFeature = (feature: string, plan: "regular" | "premium") => {
  return props.course.pricing[plan].features.includes(feature);
};

const handleSelect = (plan: { type: string; interval?: string }) => {
  props.onSelect(plan);
  dialog.close();
};

const maxSavings = computed(() => {
  const regularSavings = props.course.pricing.regular.annual.savings;
  const premiumSavings = props.course.pricing.premium.annual.savings;

  const extractNumber = (str: string) => {
    const match = str.match(/\d+/);
    return match ? Number(match[0]) : 0;
  };

  return Math.max(extractNumber(regularSavings), extractNumber(premiumSavings));
});
</script>

<template>
  <DialogHeader>
    <DialogTitle>Choose Your Plan</DialogTitle>
    <DialogDescription>
      Select a subscription plan that best suits your learning goals
    </DialogDescription>
  </DialogHeader>

  <div class="space-y-4 py-4">
    <!-- Interval Toggle -->
    <div class="flex justify-center gap-4 items-center mb-6">
      <span :class="{ 'text-purple-600 font-medium': !isAnnual }">Monthly</span>
      <Switch
        :checked="isAnnual"
        @update:checked="isAnnual = $event"
        class="data-[state=checked]:bg-purple-600"
      />
      <span :class="{ 'text-purple-600 font-medium': isAnnual }">
        Annual
        <span class="text-sm text-green-600 ml-1"
          >Save up to {{ maxSavings }}%</span
        >
      </span>
    </div>

    <!-- Trial Plan -->
    <Button
      v-if="course.pricing.trial"
      variant="outline"
      class="w-full justify-between h-auto py-4 hover:border-purple-600"
      @click="handleSelect({ type: 'trial' })"
    >
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
        >
          <Icon name="ph:sparkle" class="w-4 h-4 text-purple-600" />
        </div>
        <div class="text-left">
          <div class="font-medium">Free Trial</div>
          <div class="text-sm text-muted-foreground">
            Try for {{ course.pricing.trial.duration }} days
          </div>
        </div>
      </div>
      <div class="text-right">
        <div class="font-bold text-purple-600">Free</div>
        <div class="text-sm text-muted-foreground">No credit card</div>
      </div>
    </Button>

    <!-- Regular Plan -->
    <Button
      variant="outline"
      class="w-full justify-between h-auto py-4 hover:border-purple-600"
      @click="
        handleSelect({
          type: 'regular',
          interval: isAnnual ? 'annual' : 'monthly',
        })
      "
    >
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
        >
          <Icon name="ph:star" class="w-4 h-4 text-purple-600" />
        </div>
        <div class="text-left">
          <div class="font-medium">Regular Plan</div>
          <div class="text-sm text-muted-foreground">Perfect for beginners</div>
        </div>
      </div>
      <div class="text-right">
        <div class="font-bold">
          {{
            isAnnual
              ? course.pricing.regular.annual.amount
              : course.pricing.regular.monthly.amount
          }}
          {{
            isAnnual
              ? course.pricing.regular.annual.currency
              : course.pricing.regular.monthly.currency
          }}
        </div>
        <div class="text-sm text-muted-foreground">
          per {{ isAnnual ? "year" : "month" }}
        </div>
      </div>
    </Button>

    <!-- Premium Plan -->
    <Button
      variant="outline"
      class="w-full justify-between h-auto py-4 border-2 border-purple-600 hover:bg-purple-50"
      @click="
        handleSelect({
          type: 'premium',
          interval: isAnnual ? 'annual' : 'monthly',
        })
      "
    >
      <div class="flex items-center gap-3">
        <div
          class="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0"
        >
          <Icon name="ph:crown" class="w-4 h-4 text-purple-600" />
        </div>
        <div class="text-left">
          <div class="font-medium">Premium Plan</div>
          <div class="text-sm text-muted-foreground">
            For dedicated learners
          </div>
        </div>
      </div>
      <div class="text-right">
        <div class="font-bold">
          {{
            isAnnual
              ? course.pricing.premium.annual.amount
              : course.pricing.premium.monthly.amount
          }}
          {{
            isAnnual
              ? course.pricing.premium.annual.currency
              : course.pricing.premium.monthly.currency
          }}
        </div>
        <div class="text-sm text-muted-foreground">
          per {{ isAnnual ? "year" : "month" }}
        </div>
      </div>
    </Button>

    <!-- Compare Features Button -->
    <Button
      variant="ghost"
      class="w-full mt-2"
      @click="showFeatures = !showFeatures"
    >
      {{ showFeatures ? "Hide" : "Compare" }} Features
      <Icon
        :name="showFeatures ? 'ph:caret-up' : 'ph:caret-down'"
        class="w-4 h-4 ml-1"
      />
    </Button>

    <!-- Features Comparison -->
    <div v-if="showFeatures" class="mt-4 border rounded-lg p-4">
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b">
            <th class="text-left py-2">Features</th>
            <th class="text-center py-2">Regular</th>
            <th class="text-center py-2">Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="feature in allFeatures"
            :key="feature"
            class="border-b last:border-0"
          >
            <td class="py-2">{{ feature }}</td>
            <td class="text-center py-2">
              <Icon
                :name="hasFeature(feature, 'regular') ? 'ph:check' : 'ph:x'"
                class="w-4 h-4 mx-auto"
                :class="
                  hasFeature(feature, 'regular')
                    ? 'text-green-600'
                    : 'text-gray-400'
                "
              />
            </td>
            <td class="text-center py-2">
              <Icon
                :name="hasFeature(feature, 'premium') ? 'ph:check' : 'ph:x'"
                class="w-4 h-4 mx-auto"
                :class="
                  hasFeature(feature, 'premium')
                    ? 'text-green-600'
                    : 'text-gray-400'
                "
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <p class="text-xs text-center text-muted-foreground mt-4">
      All plans include 14-day money-back guarantee. Cancel anytime.
    </p>
  </div>
</template>
