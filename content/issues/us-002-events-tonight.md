---
title: See Tonight's Events
description: Allow users to quickly view dance events happening tonight in their city
status: todo
priority: high
assignee: Frontend Team
labels:
  - user-story
  - frontend
  - events
created_at: 2024-03-20
due_date: 2024-04-15
epic: event-discovery
---

## User Story

As a Dancer,
I want to see what's happening tonight in my city,
So that I can spontaneously join dance events happening today.

## Acceptance Criteria

- [ ] Display a "Tonight" section on the homepage
- [ ] Show events happening today after current time
- [ ] Filter events by user's selected city
- [ ] Show key event information:
  - Event title
  - Start time
  - Location
  - Dance style
  - Price
  - Remaining tickets/spots
- [ ] Sort events by start time
- [ ] Show "No events tonight" message when applicable
- [ ] Allow quick RSVP/ticket purchase
- [ ] Mobile-optimized view
- [ ] Show distance from user's location (if permitted)

## Technical Notes

- Implement timezone handling for accurate "tonight" calculation
- Use geolocation API for location-based features
- Cache city-specific queries for better performance
- Implement real-time updates for remaining spots
- Consider implementing push notifications for last-minute events
