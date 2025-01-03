import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { AnyEvent } from "~/schemas/event";

export const useEventStore = defineStore("event", () => {
  // State
  const events = ref<AnyEvent[]>([]);
  const isLoading = ref(false);
  const error = ref<string | null>(null);
  const filters = ref({
    type: "all",
    status: "upcoming",
    location: "all",
    priceRange: "all",
    searchQuery: "",
    sortBy: "date",
  });

  // Getters
  const filteredEvents = computed(() => {
    let filtered = events.value;

    if (filters.value.type !== "all") {
      filtered = filtered.filter((event) => event.type === filters.value.type);
    }

    if (filters.value.status !== "all") {
      filtered = filtered.filter(
        (event) => event.status === filters.value.status
      );
    }

    if (filters.value.location !== "all") {
      filtered = filtered.filter(
        (event) => event.location.city === filters.value.location
      );
    }

    if (filters.value.searchQuery) {
      const query = filters.value.searchQuery.toLowerCase();
      filtered = filtered.filter(
        (event) =>
          event.name.toLowerCase().includes(query) ||
          event.description.toLowerCase().includes(query) ||
          event.location.city.toLowerCase().includes(query) ||
          event.organizer.name.toLowerCase().includes(query)
      );
    }

    // Sort events
    switch (filters.value.sortBy) {
      case "date":
        filtered = [...filtered].sort(
          (a, b) =>
            new Date(a.date.start).getTime() - new Date(b.date.start).getTime()
        );
        break;
      case "price-low":
        filtered = [...filtered].sort(
          (a, b) => (a.price?.amount || 0) - (b.price?.amount || 0)
        );
        break;
      case "price-high":
        filtered = [...filtered].sort(
          (a, b) => (b.price?.amount || 0) - (a.price?.amount || 0)
        );
        break;
    }

    return filtered;
  });

  const upcomingEvents = computed(() => {
    return events.value.filter((event) => {
      const eventDate = new Date(event.date.start);
      return eventDate > new Date();
    });
  });

  // Actions
  async function fetchEvents() {
    try {
      isLoading.value = true;
      error.value = null;
      // TODO: Implement actual API call
      // This is a placeholder
      events.value = [];
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Failed to fetch events";
      throw e;
    } finally {
      isLoading.value = false;
    }
  }

  async function createEvent(event: Omit<AnyEvent, "id">) {
    try {
      isLoading.value = true;
      error.value = null;
      // TODO: Implement actual API call
      // This is a placeholder
      const newEvent: AnyEvent = {
        id: Date.now().toString(),
        ...event,
      };
      events.value.push(newEvent);
      return newEvent;
    } catch (e) {
      error.value = e instanceof Error ? e.message : "Failed to create event";
      throw e;
    } finally {
      isLoading.value = false;
    }
  }

  function updateFilters(newFilters: Partial<typeof filters.value>) {
    filters.value = {
      ...filters.value,
      ...newFilters,
    };
  }

  function resetFilters() {
    filters.value = {
      type: "all",
      status: "upcoming",
      location: "all",
      priceRange: "all",
      searchQuery: "",
      sortBy: "date",
    };
  }

  return {
    // State
    events,
    isLoading,
    error,
    filters,
    // Getters
    filteredEvents,
    upcomingEvents,
    // Actions
    fetchEvents,
    createEvent,
    updateFilters,
    resetFilters,
  };
});
