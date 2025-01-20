<script setup lang="ts">
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { today, getLocalTimeZone } from "@internationalized/date";

interface Props {
  area: {
    id: number;
    name: string;
    description: string;
    pricePerHour: number;
    capacity: number;
    size: {
      width: number;
      length: number;
      height: number;
      unit: string;
    };
    amenities: string[];
    floorType: string;
    images: string[];
    availability: Record<string, string>;
  };
}

const props = defineProps<Props>();
const dialog = useDialog();

const selectedImageIndex = ref(0);
const selectedDate = ref(today(getLocalTimeZone()));
const showCalendar = ref(false);

const timeSlots = [
  "09:00-10:00",
  "10:00-11:00",
  "11:00-12:00",
  "12:00-13:00",
  "13:00-14:00",
  "14:00-15:00",
  "15:00-16:00",
  "16:00-17:00",
  "17:00-18:00",
  "18:00-19:00",
  "19:00-20:00",
  "20:00-21:00",
];

const selectedTimeSlot = ref<string | null>(null);

const handleBook = () => {
  if (!selectedDate.value || !selectedTimeSlot.value) return;

  const date = selectedDate.value.toDate(getLocalTimeZone());
  const bookingDate = format(date, "yyyy-MM-dd");
  const bookingDateTime = `${bookingDate} ${selectedTimeSlot.value}`;

  dialog.open({
    component: "VenueBookingDialog",
    props: {
      venue: { areas: [props.area] },
      selectedAreaId: props.area.id,
      selectedDateTime: bookingDateTime,
      onBook: (date: string, areaId: number) => {
        console.log("Booking area for date:", date, "area:", areaId);
      },
    },
  });
};
</script>

<template>
  <DialogHeader>
    <DialogTitle>{{ area.name }}</DialogTitle>
    <DialogDescription>{{ area.description }}</DialogDescription>
  </DialogHeader>

  <div class="space-y-6 py-4">
    <!-- Images -->
    <div class="space-y-2">
      <div class="aspect-[4/3] rounded-lg overflow-hidden">
        <img
          :src="area.images[selectedImageIndex]"
          :alt="area.name"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex gap-2 overflow-x-auto pb-2">
        <button
          v-for="(image, index) in area.images"
          :key="index"
          class="relative aspect-[4/3] w-20 rounded-md overflow-hidden"
          :class="selectedImageIndex === index ? 'ring-2 ring-primary' : ''"
          @click="selectedImageIndex = index"
        >
          <img
            :src="image"
            :alt="area.name"
            class="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>

    <!-- Details Grid -->
    <div class="grid sm:grid-cols-2 gap-4">
      <div>
        <div class="font-medium mb-1">Capacity</div>
        <div class="text-muted-foreground">{{ area.capacity }} people</div>
      </div>
      <div>
        <div class="font-medium mb-1">Price</div>
        <div class="text-muted-foreground">
          {{ area.pricePerHour }}€ per hour
        </div>
      </div>
      <div>
        <div class="font-medium mb-1">Size</div>
        <div class="text-muted-foreground">
          {{ area.size.width }}x{{ area.size.length }}x{{ area.size.height }}
          {{ area.size.unit }}
        </div>
      </div>
      <div>
        <div class="font-medium mb-1">Floor Type</div>
        <div class="text-muted-foreground">{{ area.floorType }}</div>
      </div>
    </div>

    <!-- Amenities -->
    <div>
      <div class="font-medium mb-2">Amenities</div>
      <div class="flex flex-wrap gap-2">
        <Badge
          v-for="amenity in area.amenities"
          :key="amenity"
          variant="outline"
        >
          {{ amenity }}
        </Badge>
      </div>
    </div>

    <!-- Availability -->
    <div>
      <div class="font-medium mb-2">Opening Hours</div>
      <div class="grid grid-cols-2 gap-x-4 gap-y-2">
        <template v-for="(hours, day) in area.availability" :key="day">
          <div class="capitalize text-muted-foreground">{{ day }}</div>
          <div>{{ hours }}</div>
        </template>
      </div>
    </div>

    <!-- Calendar Section -->
    <div v-if="showCalendar" class="space-y-4">
      <div class="flex justify-between items-center">
        <h4 class="font-medium">Select Date & Time</h4>
        <Button variant="ghost" size="sm" @click="showCalendar = false">
          <Icon name="ph:x" class="w-4 h-4" />
        </Button>
      </div>

      <Calendar
        v-model="selectedDate"
        :disabled-dates="{ before: new Date() }"
        mode="single"
        class="rounded-md border mx-auto"
      />

      <div v-if="selectedDate" class="space-y-2">
        <h4 class="font-medium">Available Time Slots</h4>
        <div class="grid grid-cols-3 gap-2">
          <Button
            v-for="slot in timeSlots"
            :key="slot"
            variant="outline"
            :class="[
              selectedTimeSlot === slot
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : '',
            ]"
            @click="selectedTimeSlot = slot"
          >
            {{ slot }}
          </Button>
        </div>
      </div>

      <Button
        class="w-full"
        :disabled="!selectedDate || !selectedTimeSlot"
        @click="handleBook"
      >
        Book Now
      </Button>
    </div>
  </div>

  <DialogFooter>
    <Button variant="outline" @click="dialog.close()">Close</Button>
    <Button v-if="!showCalendar" @click="showCalendar = true">
      <Icon name="ph:calendar-check" class="w-5 h-5 mr-2" />
      Check Availability
    </Button>
  </DialogFooter>
</template>
