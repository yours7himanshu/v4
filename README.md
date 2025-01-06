# WeDance

WeDance is a participatory network that empowers dance communities by providing an inclusive platform where every member can be both creator and participant. Moving beyond traditional social networks, it creates a truly collaborative ecosystem that solves critical challenges like information fragmentation, event discovery, and partner finding.

## 🎯 Mission

- Transform traditional consumer-creator relationships into collaborative partnerships
- Enable democratic access where anyone can organize events or share knowledge
- Create value alignment through transparent, community-driven governance
- Foster bidirectional creation where every member can be both teacher and student

## 🌟 Tech Stack

- **Frontend Framework**: Nuxt 3
- **UI Components**: Vue Shadcn
- **Styling**: TailwindCSS
- **Form Handling**: VeeValidate + Zod
- **State Management**: Pinia
- **Content Management**: Nuxt Content
- **Icons**: Nuxt Icon
- **Fonts**: Google Fonts (Noto Sans)

## 📦 Prerequisites

- Node.js (version specified in `.nvmrc`)
- PNPM package manager

## 🛠️ Setup

1. Clone the repository

```bash
git clone [repository-url]
cd concept2
```

2. Install dependencies

```bash
pnpm install
```

3. Run development server

```bash
pnpm dev
```

4. Build for production

```bash
pnpm build
```

## 📁 Project Structure

- `/components` - Reusable Vue components
- `/content` - Markdown content and documentation
- `/docs` - Project documentation
- `/pages` - Application routes
- `/stores` - Pinia state stores
- `/composables` - Vue composables
- `/server` - Server-side code
- `/types` - TypeScript type definitions
- `/utils` - Utility functions
- `/schemas` - Zod validation schemas

## Documentation

### Business

- [Vision](docs/content/20.business/1.vision.md)
- [Organization](docs/content/20.business/2.organization.md)
- [Business Model](docs/content/20.business/0.model.md)
- [Objectives and Key Results](docs/content/20.business/4.okrs.md)

### Design Challenges

- [Dance Styles](docs/content/50.design/styles.md)
- [Homepage](docs/content/50.design/homepage.md)

### Architecture

- [Overview](docs/content/30.architecture/0.index.md)
- [Actions](docs/content/30.architecture/actions.md)
- [Dance Styles](docs/content/30.architecture/dance-styles.md)
- [Events](docs/content/30.architecture/events.md)
- [Event Types](docs/content/30.architecture/event-types.md)
- [Levels](docs/content/30.architecture/levels.md)
- [Pages](docs/content/30.architecture/pages.md)
- [Points](docs/content/30.architecture/points.md)
- [Posts](docs/content/30.architecture/posts.md)
- [Profiles](docs/content/30.architecture/profiles.md)
- [Schemas](docs/content/30.architecture/schemas.md)
- [Voting](docs/content/30.architecture/voting.md)

### User Flows

- [Overview](docs/content/40.flows/0.index.md)

### Resources

- [Blog](docs/content/blog/)
- [Resources](docs/content/resources/)

### Implementation

- [Epics](content/epics/)
- [User Stories](content/issues/)

## 🤝 Contributing

1. Follow the Vue file organization rules:

   - `<script>` section at the top
   - `<template>` section in the middle
   - `<style>` section at the bottom

2. Use the provided tools and conventions:

   - TailwindCSS for styling
   - Vue Shadcn for components
   - VeeValidate and Zod for form validation

## 📄 License

[License Information]
