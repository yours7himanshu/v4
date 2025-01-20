<script setup lang="ts">
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
  </div>

  <DialogFooter>
    <Button variant="outline" @click="dialog.close()">Close</Button>
    <Button
      @click="
        dialog.open({
          component: 'VenueBookingDialog',
          props: { venue: { areas: [area] } },
        })
      "
    >
      Book Now
    </Button>
  </DialogFooter>
</template>
