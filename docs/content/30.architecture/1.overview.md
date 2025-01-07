# Technical Overview

## Stack

- **Framework**: Nuxt.js 3
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Pinia
- **API Communication**: tRPC
- **Form Validation**: vee-validate + zod
- **Content Management**: @nuxt/content
- **UI Components**: shadcn-vue
- **Additional Features**:
  - Dark mode support
  - Toast notifications (vue-sonner)
  - Google Fonts integration

## Project Structure

```
.
├── pages/           # Route pages
├── components/      # Vue components
├── stores/          # Pinia state management
├── schemas/         # TypeScript + Zod schemas
├── server/          # tRPC API endpoints
├── composables/     # Vue composables
├── utils/           # Utility functions
├── types/           # TypeScript types
├── constants/       # Shared constants
└── assets/         # Static assets
```

## Implementation Status

### Completed

- Project setup and configuration
- Core routing structure
- Basic UI framework
- State management setup
- Form validation setup

### In Progress

- User authentication system
- User points/levels system
- Event management structure
- Basic feed functionality

### Not Started

- Payment processing
- Venue management
- Artist profiles
- Safety features
- Trust system

## Next Steps

### Technical Priority

1. Implement authentication system
2. Set up tRPC endpoints
3. Define database schema
4. Add API error handling

### Feature Priority

1. Complete user profile system
2. Implement event CRUD
3. Add venue management
4. Set up artist profiles

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow Vue 3 Composition API patterns
- Use Pinia for global state management
- Implement form validation with zod schemas

### Component Structure

- Use shadcn-vue for UI components
- Implement responsive design
- Support dark mode
- Follow atomic design principles

### API Design

- Use tRPC for type-safe API communication
- Implement proper error handling
- Follow RESTful principles
- Add request validation

### Testing Strategy

- TODO: Define testing approach
- TODO: Set up testing framework
- TODO: Define coverage requirements

### Performance Goals

- Sub-2-second page load time
- Mobile-first responsive design
- 80% test coverage target
- Optimized bundle size
