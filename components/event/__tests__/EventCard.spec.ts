import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import EventCard from "../EventCard.vue";
import type { AnyEvent } from "~/schemas/event";

describe("EventCard", () => {
  // Test data
  const mockEvent: AnyEvent = {
    id: "1",
    name: "Salsa Social Party",
    type: "party",
    date: {
      start: "2025-01-15T20:00:00",
      end: "2025-01-16T02:00:00",
    },
    location: {
      name: "Dance Studio Munich",
      city: "Munich",
      country: "Germany",
    },
    description: "Weekly social party with the best salsa music",
    image: "/images/event-1.jpg",
    price: {
      amount: 10,
      currency: "EUR",
    },
    tags: ["salsa", "social"],
    status: "upcoming",
    artists: [],
    organizer: {
      id: "org1",
      name: "Salsa Club Munich",
      image: "/images/organizer-1.jpg",
      points: 100,
    },
    schedule: [],
  };

  const mockWorkshopEvent: AnyEvent = {
    ...mockEvent,
    id: "2",
    type: "workshop",
    name: "Salsa Workshop",
    level: "beginner",
    prices: [
      {
        name: "Early Bird",
        amount: 25,
        currency: "EUR",
        description: "Early bird price",
      },
      {
        name: "Regular",
        amount: 35,
        currency: "EUR",
        description: "Regular price",
      },
    ],
  };

  it("renders event basic details correctly", () => {
    const wrapper = mount(EventCard, {
      props: {
        event: mockEvent,
      },
    });

    // Check if event name is rendered
    expect(wrapper.text()).toContain("Salsa Social Party");

    // Check if location is rendered
    expect(wrapper.text()).toContain("Dance Studio Munich, Munich");

    // Check if date is rendered
    expect(wrapper.text()).toContain("Jan 15");

    // Check if price is rendered
    expect(wrapper.text()).toContain("10 EUR");
  });

  it("renders event image with fallback", async () => {
    // Test with provided image
    const wrapper = mount(EventCard, {
      props: {
        event: mockEvent,
      },
    });
    expect(wrapper.find("img").attributes("src")).toBe("/images/event-1.jpg");

    // Test with missing image (fallback)
    const wrapperNoImage = mount(EventCard, {
      props: {
        event: { ...mockEvent, image: undefined },
      },
    });
    expect(wrapperNoImage.find("img").attributes("src")).toBe(
      "/images/event-placeholder.jpg"
    );
  });

  it("formats workshop prices correctly", () => {
    const wrapper = mount(EventCard, {
      props: {
        event: mockWorkshopEvent,
      },
    });

    // Should show the lowest price from the prices array
    expect(wrapper.text()).toContain("From 25 EUR");
  });

  it("shows free text when no price is set", () => {
    const wrapper = mount(EventCard, {
      props: {
        event: { ...mockEvent, price: undefined },
      },
    });

    expect(wrapper.text()).toContain("Free");
  });

  it("links to the event detail page", () => {
    const wrapper = mount(EventCard, {
      props: {
        event: mockEvent,
      },
    });

    const link = wrapper.find("a");
    expect(link.attributes("href")).toBe("/events/1");
  });

  it("applies hover styles for interactive feedback", () => {
    const wrapper = mount(EventCard, {
      props: {
        event: mockEvent,
      },
    });

    const article = wrapper.find("article");
    expect(article.classes()).toContain("hover:shadow-md");
    expect(article.classes()).toContain("transition-shadow");
  });
});
