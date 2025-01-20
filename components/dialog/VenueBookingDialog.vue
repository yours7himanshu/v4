<script setup lang="ts">
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

const selectedDate = ref<Date | null>(null);
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

const handleBook = () => {
  if (!selectedDate.value || !selectedTimeSlot.value) return;

  const bookingDate = selectedDate.value.toISOString().split("T")[0];
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
      <Datepicker
        v-model="selectedDate"
        :min-date="new Date()"
        class="w-full"
        placeholder="Select date"
      />
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
              ? 'bg-primary text-primary-foreground'
              : '',
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
