---
title: Indicate Event Attendance
description: Allow users to mark their attendance and see who's going to events
status: todo
priority: medium
assignee: Frontend Team
labels:
  - user-story
  - frontend
  - events
created_at: 2024-03-20
due_date: 2024-05-01
epic: event-discovery
---

## User Story

As a Dancer,
I want to indicate my attendance (going/maybe) and see who else is going,
So that I can coordinate with friends and know what to expect at the event.

## Acceptance Criteria

- [ ] Add attendance buttons (Going/Maybe/Not Going)
- [ ] Show attendance counts by status
- [ ] Display attendee list with:
  - Profile pictures
  - Names
  - Attendance status
  - Dance roles (if applicable)
- [ ] Allow filtering attendees by:
  - Status
  - Dance role
  - Connection status
- [ ] Enable notifications for:
  - Friend's attendance changes
  - Event updates
  - Reminders before event
- [ ] Show mutual friends attending
- [ ] Allow private attendance mode
- [ ] Support capacity limits

## Technical Notes

- Implement real-time updates for attendance changes
- Cache attendee lists for performance
- Consider privacy settings for attendance visibility
- Handle waitlist functionality
- Implement notification system
