---
title: Create and Publish Events
description: Enable organizers to easily create and publish dance events
status: in-progress
priority: high
assignee: Frontend Team
labels:
  - user-story
  - frontend
  - events
  - organizer
created_at: 2024-03-20
due_date: 2024-04-30
epic: event-organization
implementation_status:
  - ✅ Basic route structure setup (/events/create)
  - ✅ Form validation setup with vee-validate + zod
  - ⏳ Basic form components in progress
  - 🔲 Image upload pending
  - 🔲 Rich text editor pending
---

## User Story

As an Organizer,
I want to create and publish events easily,
So that I can efficiently manage my dance events and reach my target audience.

## Acceptance Criteria

- [ ] Provide intuitive event creation form with:
  - [x] Basic details (title, description, date/time)
  - [ ] Location selection with map
  - [x] Dance styles selection
  - [ ] Level requirements
  - [ ] Capacity settings
  - [ ] Pricing tiers
  - [ ] Custom fields
- [ ] Support for:
  - [ ] Event series/recurring events
  - [ ] Multiple sessions
  - [ ] Early bird pricing
  - [ ] Promotional codes
  - [ ] Custom registration forms
- [ ] Enable rich text formatting for description
- [ ] Allow image uploads for:
  - [ ] Event cover
  - [ ] Gallery
  - [ ] Venue photos
- [ ] Preview event before publishing
- [x] Save as draft functionality
- [ ] Duplicate event feature
- [x] Mobile-friendly creation process

## Technical Notes

- Implement form validation
- Handle image optimization
- Support markdown/rich text editor
- Implement autosave
- Handle timezone conversions
- Consider bulk event creation
- Implement SEO metadata editor

## Implementation Notes

- Using vee-validate with zod for form validation
- shadcn-vue components for form elements
- TailwindCSS for responsive design
- Need to implement:
  - Image upload service
  - Rich text editor integration
  - Location picker component
  - Recurring event logic
