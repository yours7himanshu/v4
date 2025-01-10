# Development Guide

This guide provides an overview of development practices, tools, and processes for the WeDance platform.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Architecture](../30.architecture/0.index.md)
3. [Testing Strategy](./testing.md)
4. [Code Style](#code-style)
5. [Development Workflow](#development-workflow)
6. [Project Structure](#project-structure)
7. [AI-First Development](#ai-first-development)

## Getting Started

### Tech Stack

- **Frontend Framework**: Nuxt 3
- **UI Components**: Vue Shadcn
- **Styling**: TailwindCSS
- **Form Handling**: VeeValidate + Zod
- **State Management**: Pinia
- **Content Management**: Nuxt Content
- **Icons**: Nuxt Icon
- **Fonts**: Google Fonts (Noto Sans)

### Prerequisites

- Git
- NVM (to install specific Node.js version)
- PNPM package manager

### Setup Instructions

1. Clone the repository:

```bash
git clone git@github.com:razbakov/wedance.git
cd wedance
```

2. Install dependencies:

```bash
nvm use
pnpm install
```

3. Run development server:

```bash
pnpm dev
```

4. Build for production:

```bash
pnpm build
```

## Code Style

### Vue File Organization

1. Follow the Vue file organization rules:

   - `<script>` section at the top
   - `<template>` section in the middle
   - `<style>` section at the bottom

2. Use the provided tools and conventions:
   - TailwindCSS for styling
   - Vue Shadcn for components
   - VeeValidate and Zod for form validation

## Development Workflow

TBD: Git workflow, branching strategy, and deployment process.

## Project Structure

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

## AI-First Development

We use Cursor IDE for an AI-first development experience. After cloning the repository:

1. Open project in [Cursor IDE](https://www.cursor.com/)
2. Toggle AI Pane (Cmd + I)
3. Go to Cursor Settings -> Models -> Check "claude-3-5-sonnet-20241022"
4. Open Composer Tab
5. Switch model to "claude-3-5-sonnet-20241022"
6. Switch to agent
7. Say "hi" to start your onboarding

After onboarding, you can:

1. Review today's priorities
2. Check pending decisions
3. Get updates on recent changes
4. Switch to a specific expert

Note: We use AI as a project management tool instead of a traditional ticketing system. The AI acts as your personal secretary and can answer questions about business, design, architecture, etc.
