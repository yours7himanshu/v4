export interface DanceStyle {
  name: string
  image: string
  to: string
  members: number
}

export const getDanceStyles = (): DanceStyle[] => [
  {
    name: 'Salsa',
    image: 'https://img.youtube.com/vi/R7E9cNydevg/hqdefault.jpg',
    to: '/dance/salsa',
    members: 654,
  },
  {
    name: 'Bachata',
    image: 'https://img.youtube.com/vi/4nJfpQ3kCbw/hqdefault.jpg',
    to: '/dance/bachata',
    members: 630,
  },
  {
    name: 'Kizomba',
    image: 'https://img.youtube.com/vi/jcW7Z9y5twQ/hqdefault.jpg',
    to: '/dance/kizomba',
    members: 342,
  },
] 