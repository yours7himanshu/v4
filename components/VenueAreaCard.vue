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

const showDetails = () => {
  dialog.open({
    component: "VenueAreaDetailsDialog",
    props: {
      area: props.area,
    },
  });
};
</script>

<template>
  <div
    class="group bg-card rounded-xl border overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
    @click="showDetails"
  >
    <!-- Image -->
    <div class="aspect-[4/3] overflow-hidden">
      <img
        :src="area.images[0]"
        :alt="area.name"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>

    <!-- Content -->
    <div class="p-4 space-y-3">
      <div class="flex justify-between items-start gap-2">
        <div>
          <h3 class="font-medium">{{ area.name }}</h3>
          <p class="text-sm text-muted-foreground line-clamp-2">
            {{ area.description }}
          </p>
        </div>
        <Badge variant="secondary">{{ area.pricePerHour }}€/h</Badge>
      </div>

      <!-- Quick Info -->
      <div class="grid grid-cols-2 gap-2 text-sm">
        <div class="flex items-center gap-1.5">
          <Icon name="ph:users" class="w-4 h-4 text-muted-foreground" />
          <span>{{ area.capacity }} people</span>
        </div>
        <div class="flex items-center gap-1.5">
          <Icon name="ph:ruler" class="w-4 h-4 text-muted-foreground" />
          <span>{{ area.size.width }}x{{ area.size.length }}m</span>
        </div>
      </div>

      <!-- Amenities Preview -->
      <div class="flex flex-wrap gap-1">
        <Badge
          v-for="amenity in area.amenities.slice(0, 3)"
          :key="amenity"
          variant="outline"
          class="text-xs"
        >
          {{ amenity }}
        </Badge>
        <Badge
          v-if="area.amenities.length > 3"
          variant="outline"
          class="text-xs"
        >
          +{{ area.amenities.length - 3 }} more
        </Badge>
      </div>
    </div>
  </div>
</template>
