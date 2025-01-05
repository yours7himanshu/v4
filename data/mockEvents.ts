import type { AnyEvent } from "~/schemas/event";

export const mockEvents = [
  {
    id: "cuban-open-air",
    name: "Cuban Open Air",
    type: "party",
    date: {
      start: "2023-10-18T19:00:00",
      end: "2023-10-18T23:00:00",
    },
    location: {
      name: "Pinakothek der Moderne",
      city: "Munich",
      country: "Germany",
    },
    description: "Weekly outdoor social dancing with Timba music",
    image:
      "https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2673&q=80",
    price: {
      amount: 0,
      currency: "EUR",
      type: "free",
    },
    tags: ["cuban-salsa", "timba", "open-air"],
    status: "upcoming",
    organizer: {
      id: "salsa_cubana_munich",
      name: "Salsa Cubana Munich",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=munich_cuban",
      points: 2800,
    },
  },
  {
    id: "on2-social",
    name: "On2 Social",
    type: "party",
    date: {
      start: "2023-10-19T20:00:00",
      end: "2023-10-20T01:00:00",
    },
    location: {
      name: "Tanzstudio München",
      city: "Munich",
      country: "Germany",
    },
    description: "Weekly NY Style social with guest DJs",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    price: {
      amount: 10,
      currency: "EUR",
      type: "per-person",
    },
    tags: ["linear-salsa", "on2", "social"],
    status: "upcoming",
    organizer: {
      id: "on2_munich",
      name: "Munich On2 Community",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=munich_on2",
      points: 2200,
    },
  },
  {
    id: "berlin-salsa-congress",
    name: "Berlin Salsa Congress",
    type: "festival",
    date: {
      start: "2023-11-24T10:00:00",
      end: "2023-11-26T23:00:00",
    },
    location: {
      name: "Maritim Hotel Berlin",
      city: "Berlin",
      country: "Germany",
    },
    description: "3 days of workshops, shows and parties",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    price: {
      amount: 99,
      currency: "EUR",
      type: "per-person",
    },
    tags: ["festival", "workshops", "shows"],
    status: "upcoming",
    organizer: {
      id: "salsa_berlin",
      name: "Salsa Berlin",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=berlin_salsa",
      points: 3500,
    },
  },
];
