import { z } from "zod";
import type { Post } from "./post";

// Base event fields that both feed posts and full events share
export const BaseEventSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: z.enum(["party", "workshop", "concert", "festival"]),
  date: z.object({
    start: z.string(),
    end: z.string(),
  }),
  location: z.object({
    name: z.string(),
    city: z.string(),
    country: z.string(),
  }),
  description: z.string(),
  image: z.string().optional(),
  price: z
    .object({
      amount: z.number(),
      currency: z.string(),
    })
    .optional(),
  tags: z.array(z.string()),
});

// Additional fields for full event listings
export const FullEventSchema = BaseEventSchema.extend({
  status: z.enum(["upcoming", "ongoing", "past"]),
  artists: z.array(z.string()),
  organizer: z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
  }),
  schedule: z.array(
    z.object({
      time: z.string(),
      activity: z.string(),
      description: z.string().optional(),
    })
  ),
  prices: z
    .array(
      z.object({
        name: z.string(),
        amount: z.number(),
        currency: z.string(),
        description: z.string(),
      })
    )
    .optional(),
});

// Export types
export type BaseEvent = z.infer<typeof BaseEventSchema>;
export type FullEvent = z.infer<typeof FullEventSchema>;

// For feed posts, convert the full event to a simpler format
export const eventToFeedPost = (event: FullEvent): Post => ({
  type: "event",
  author: {
    id: event.organizer.id,
    name: event.organizer.name,
    image: event.organizer.image,
    location: event.location.city,
  },
  content: {
    title: event.name,
    description: event.description,
    image: event.image,
    date: event.date.start,
    location: `${event.location.name}, ${event.location.city}`,
    price: event.price && {
      amount: event.price.amount,
      currency: event.price.currency,
    },
    tags: event.tags,
  },
  timestamp: new Date().toISOString(),
  stats: {
    interested: 0,
    comments: 0,
    bookmarks: 0,
  },
});
