---
title: Share Events
description: Enable users to share dance events with friends and on social media
status: todo
priority: medium
assignee: Frontend Team
labels:
  - user-story
  - frontend
  - events
  - social
created_at: 2024-03-20
due_date: 2024-05-15
epic: event-discovery
---

## User Story

As a Dancer,
I want to share events with friends,
So that I can coordinate attendance and help promote interesting events.

## Acceptance Criteria

- [ ] Implement share buttons for:
  - Direct platform messages
  - Copy link
  - WhatsApp
  - Telegram
  - Facebook
  - Instagram Stories
- [ ] Create shareable event cards with:
  - Event image
  - Key details
  - QR code
- [ ] Enable sharing with:
  - Platform connections
  - Groups
  - External contacts
- [ ] Track sharing metrics
- [ ] Allow adding personal message
- [ ] Support sharing multiple events
- [ ] Generate event preview for social media
- [ ] Implement referral tracking

## Technical Notes

- Use Web Share API when available
- Generate dynamic social preview cards
- Implement deep linking
- Track sharing analytics
- Handle UTM parameters
- Consider offline sharing capabilities
