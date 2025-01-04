export const mockEvents = [
  {
    id: 100,
    name: "Havana D'Primera Live in Munich",
    type: "concert",
    date: {
      start: "2024-05-15T20:00:00",
      end: "2024-05-16T02:00:00",
    },
    location: {
      name: "Backstage",
      city: "Munich",
      country: "Germany",
      coordinates: {
        lat: 48.1351,
        lng: 11.582,
      },
    },
    artists: [12, 1], // Havana D'Primera ID
    organizer: {
      id: "munich_salsa_social",
      name: "Munich Salsa Social",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=munich",
      points: 3200,
    },
    description:
      "Experience the legendary Havana D'Primera live in Munich! A night of pure Cuban music and dance.",
    image:
      "https://res.cloudinary.com/djumxevsm/image/upload/v1732373003/a1zosu7n7luzj25tsr1l.jpg",
    price: {
      amount: 35,
      currency: "EUR",
      type: "per-person",
    },
    schedule: [
      {
        time: "20:00",
        activity: "Doors Open",
      },
      {
        time: "21:00",
        activity: "DJ Warm-up",
      },
      {
        time: "22:00",
        activity: "Havana D'Primera Live",
      },
      {
        time: "00:00",
        activity: "Social Dancing",
      },
    ],
    tags: ["timba", "live music", "social dancing"],
    status: "upcoming",
    stats: {
      interested: 45,
      saves: 12,
      views: 120,
      shares: 8,
    },
  },
  {
    id: 200,
    name: "Cuban Weekend with Maykel Fonts",
    type: "festival",
    date: {
      start: "2024-06-01T10:00:00",
      end: "2024-06-02T18:00:00",
    },
    location: {
      name: "TanzZentrum",
      city: "Munich",
      country: "Germany",
    },
    artists: ["1"], // Maykel Fonts ID
    organizer: {
      name: "Munich Casino",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=casino",
      points: 2800,
    },
    description:
      "Two days of intensive Cuban salsa workshops with Maykel Fonts. All levels welcome!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=workshop1",
    prices: [
      {
        name: "Full Pass",
        amount: 120,
        currency: "EUR",
        description: "All workshops and parties",
      },
      {
        name: "Saturday Pass",
        amount: 70,
        currency: "EUR",
        description: "All Saturday activities",
      },
      {
        name: "Sunday Pass",
        amount: 70,
        currency: "EUR",
        description: "All Sunday activities",
      },
      {
        name: "Single Workshop",
        amount: 25,
        currency: "EUR",
        description: "Per workshop",
      },
    ],
    schedule: [
      {
        time: "10:00-11:30",
        activity: "Basic Footwork & Body Movement",
        description: "Level: Beginner",
      },
      {
        time: "11:45-13:15",
        activity: "Partner Work Fundamentals",
        description: "Level: Beginner/Intermediate",
      },
      {
        time: "14:30-16:00",
        activity: "Advanced Combinations",
        description: "Level: Intermediate/Advanced",
      },
      {
        time: "16:15-17:45",
        activity: "Rueda de Casino",
        description: "All Levels",
      },
    ],
    tags: ["workshop", "casino", "rueda"],
    status: "upcoming",
  },
  {
    id: 300,
    name: "Los Van Van European Tour",
    type: "concert",
    date: {
      start: "2024-07-20T21:00:00",
      end: "2024-07-21T03:00:00",
    },
    location: {
      name: "Muffathalle",
      city: "Munich",
      country: "Germany",
    },
    artists: ["13"], // Los Van Van ID
    organizer: {
      name: "Timba Productions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=timba",
      points: 4100,
    },
    description:
      "The legendary Los Van Van returns to Munich as part of their European tour!",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=concert2",
    price: {
      amount: 45,
      currency: "EUR",
      type: "per-person",
    },
    tags: ["timba", "live music", "songo"],
    status: "upcoming",
  },
  {
    id: 400,
    name: "Cuban Salsa Night with Live Band",
    type: "party",
    date: {
      start: "2024-02-16T20:00:00",
      end: "2024-02-17T02:00:00",
    },
    location: {
      name: "Havana Club",
      city: "London",
      country: "UK",
      address: "123 Soho St",
    },
    description:
      "Join us for a night of pure Cuban salsa! Live music by Son Cubano, pre-party workshop with Maria & Carlos, and social dancing until late.",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=400&fit=crop",
    price: {
      amount: 15,
      currency: "GBP",
      type: "per-person",
    },
    tags: ["Live Music", "Cuban Salsa", "Social Dancing"],
    status: "upcoming",
    artists: ["son_cubano_1"],
    organizer: {
      id: "havana_club_1",
      name: "Havana Club",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      points: 3500,
    },
    schedule: [
      { time: "20:00", activity: "Doors Open" },
      { time: "20:30", activity: "Pre-party Workshop" },
      { time: "21:30", activity: "Live Band" },
      { time: "02:00", activity: "Event End" },
    ],
  },
];
