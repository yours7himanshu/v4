---
title: Browse Events Without Login
description: Allow users to discover dance events without requiring authentication
status: in-progress
priority: high
assignee: Frontend Team
labels:
  - user-story
  - frontend
  - events
created_at: 2024-03-20
due_date: 2024-04-15
epic: event-discovery
implementation_status:
  - ✅ Basic route structure setup (/events)
  - ⏳ Client-side filtering in progress
  - 🔲 API endpoints pending
  - 🔲 Cache implementation pending
---

## User Story

As a Dancer,
I want to discover dance events by city, style, and date without signing in,
So that I can easily explore what's happening in the dance community without commitment.

## Acceptance Criteria

- [x] Events are visible to non-authenticated users
- [ ] Events can be filtered by city
- [ ] Events can be filtered by dance style
- [ ] Events can be filtered by date range
- [ ] Event cards show key information (title, date, location, style)
- [x] Clicking an event shows full details
- [ ] Search functionality works without login
- [x] Mobile-responsive design

## Technical Notes

- Implement public API endpoints for event discovery
- Use client-side filtering for better performance
- Cache common queries
- Implement rate limiting for non-authenticated users

## Implementation Notes

- Using Nuxt.js with TypeScript
- TailwindCSS for responsive design
- shadcn-vue components for UI
- tRPC setup ready for API endpoints
- Need to implement:
  - Database schema for events
  - Search indexing
  - Caching strategy
