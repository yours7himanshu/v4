import { z } from "zod";

// Base profile schema
export const profileSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  points: z.number().default(0),
  type: z.enum(["dancer", "artist", "organizer", "venue", "community"]),
  roles: z.array(z.string()).default([]),
  location: z.string().optional(),
  bio: z.string().optional(),
  languages: z.array(z.string()).default([]),
  styles: z.array(z.string()).default([]),
  level: z.enum(["beginner", "intermediate", "advanced", "master"]).optional(),
  verified: z.boolean().default(false),
  socialLinks: z
    .array(
      z.object({
        platform: z.string(),
        url: z.string().url(),
      })
    )
    .default([]),
  availability: z
    .object({
      privateClasses: z.boolean().default(false),
      workshops: z.boolean().default(false),
      touring: z.boolean().default(false),
      currentLocation: z.string().optional(),
    })
    .optional(),
  experience: z
    .object({
      teachingLevels: z.array(z.string()).optional(),
      specialties: z.array(z.string()).optional(),
      certifications: z.array(z.string()).optional(),
    })
    .optional(),
  stats: z
    .object({
      followers: z.number().default(0),
      following: z.number().default(0),
      events: z.number().default(0),
      reviews: z.number().default(0),
    })
    .default({
      followers: 0,
      following: 0,
      events: 0,
      reviews: 0,
    }),
  privacy: z
    .object({
      profileVisibility: z
        .enum(["public", "private", "connections"])
        .default("public"),
      contactPreferences: z
        .object({
          allowMessages: z.boolean().default(true),
          showEmail: z.boolean().default(false),
          showPhone: z.boolean().default(false),
        })
        .default({
          allowMessages: true,
          showEmail: false,
          showPhone: false,
        }),
    })
    .default({
      profileVisibility: "public",
      contactPreferences: {
        allowMessages: true,
        showEmail: false,
        showPhone: false,
      },
    }),
});

export type Profile = z.infer<typeof profileSchema>;

// Specialized profile types
export const dancerProfileSchema = profileSchema.extend({
  type: z.literal("dancer"),
  partnerPreferences: z
    .object({
      roles: z.array(z.string()),
      levels: z.array(z.string()),
      styles: z.array(z.string()),
      goals: z.array(z.string()),
    })
    .optional(),
});

export const artistProfileSchema = profileSchema.extend({
  type: z.literal("artist"),
  equipment: z.array(z.string()).optional(),
  instruments: z.array(z.string()).optional(),
  portfolio: z
    .array(
      z.object({
        type: z.enum(["video", "image"]),
        url: z.string().url(),
        description: z.string().optional(),
      })
    )
    .optional(),
});

export const organizerProfileSchema = profileSchema.extend({
  type: z.literal("organizer"),
  organization: z
    .object({
      name: z.string(),
      description: z.string(),
      website: z.string().url().optional(),
      team: z
        .array(
          z.object({
            role: z.string(),
            profileId: z.string(),
          })
        )
        .optional(),
    })
    .optional(),
});

export const venueProfileSchema = profileSchema.extend({
  type: z.literal("venue"),
  venue: z
    .object({
      address: z.string(),
      capacity: z.number(),
      amenities: z.array(z.string()),
      photos: z.array(z.string().url()),
      schedule: z
        .array(
          z.object({
            day: z.string(),
            hours: z.string(),
          })
        )
        .optional(),
    })
    .optional(),
});

export const communityProfileSchema = profileSchema.extend({
  type: z.literal("community"),
  community: z
    .object({
      mission: z.string(),
      guidelines: z.string(),
      admins: z.array(z.string()),
      membershipRules: z.string().optional(),
    })
    .optional(),
});

export type DancerProfile = z.infer<typeof dancerProfileSchema>;
export type ArtistProfile = z.infer<typeof artistProfileSchema>;
export type OrganizerProfile = z.infer<typeof organizerProfileSchema>;
export type VenueProfile = z.infer<typeof venueProfileSchema>;
export type CommunityProfile = z.infer<typeof communityProfileSchema>;
