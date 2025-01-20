<script setup lang="ts">
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { today, getLocalTimeZone } from "@internationalized/date";

interface Props {
  venue: {
    id: number;
    name: string;
    pricePerHour: number;
  };
  onBook: (date: string) => void;
}

const props = defineProps<Props>();
const dialog = useDialog();

const selectedDate = ref(today(getLocalTimeZone()));
const selectedTimeSlot = ref<string | null>(null);

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

const formatDate = (date: Date) => {
  return format(date, "PPP");
};

const handleBook = () => {
  if (!selectedDate.value || !selectedTimeSlot.value) return;

  const date = selectedDate.value.toDate(getLocalTimeZone());
  const bookingDate = format(date, "yyyy-MM-dd");
  const bookingDateTime = `${bookingDate} ${selectedTimeSlot.value}`;

  props.onBook(bookingDateTime);
  dialog.close();
};
</script>

<template>
  <DialogHeader>
    <DialogTitle>Book {{ venue.name }}</DialogTitle>
    <DialogDescription>
      Select a date and time slot to book the venue.
    </DialogDescription>
  </DialogHeader>
  <div class="grid gap-4 py-4">
    <div class="space-y-2">
      <Label>Date</Label>
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline" class="w-full justify-start text-left">
            <Icon name="ph:calendar" class="mr-2 h-4 w-4" />
            {{
              selectedDate
                ? formatDate(selectedDate.toDate(getLocalTimeZone()))
                : "Pick a date"
            }}
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <Calendar
            v-model="selectedDate"
            :disabled-dates="{ before: new Date() }"
            mode="single"
            class="rounded-md border"
          />
        </PopoverContent>
      </Popover>
    </div>
    <div class="space-y-2">
      <Label>Time Slot</Label>
      <div class="grid grid-cols-3 gap-2">
        <Button
          v-for="slot in timeSlots"
          :key="slot"
          variant="outline"
          :class="[
            selectedTimeSlot === slot
              ? 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground'
              : 'hover:bg-accent hover:text-accent-foreground',
          ]"
          @click="selectedTimeSlot = slot"
        >
          {{ slot }}
        </Button>
      </div>
    </div>
    <div class="flex justify-between items-center text-sm">
      <span class="text-muted-foreground">Price per hour</span>
      <span class="font-medium">{{ venue.pricePerHour }}€</span>
    </div>
  </div>
  <DialogFooter>
    <Button variant="outline" @click="dialog.close()">Cancel</Button>
    <Button :disabled="!selectedDate || !selectedTimeSlot" @click="handleBook">
      Book Now
    </Button>
  </DialogFooter>
</template>
