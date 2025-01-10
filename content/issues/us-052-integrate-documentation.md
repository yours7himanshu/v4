---
id: us-052
title: Integrate Documentation into Main App
status: todo
labels:
  - documentation
  - technical
priority: medium
assignee:
epic: dx
---

# User Story

As a developer, I want the documentation to be integrated into the main app so that I can document components with live examples and maintain better synchronization between code and documentation.

# Acceptance Criteria

- [ ] Move all documentation from `/docs` to main app's `/content` directory
- [ ] Set up Nuxt Content module to replace Docus
- [ ] Create documentation layout matching current docs design
- [ ] Implement route-based code splitting for documentation
- [ ] Set up MDC (Markdown Components) for interactive documentation
- [ ] Ensure all existing documentation content works in new setup
- [ ] Add live component examples in documentation
- [ ] Update navigation to seamlessly integrate docs section
- [ ] Set up proper cross-linking between app and docs sections
- [ ] Implement search functionality across both app and docs content

# Technical Notes

- Use Nuxt Content's latest version
- Implement proper lazy loading for documentation routes
- Ensure component playground functionality
- Consider setting up automatic API documentation generation

# Implementation Steps

1. Set up Nuxt Content module in main app
2. Create documentation layout and components
3. Migrate existing documentation content
4. Implement component examples system
5. Set up navigation and search
6. Test and optimize performance
7. Remove separate docs application

# Dependencies

- None

# Risks

- Potential increase in main app bundle size
- Migration complexity
- Temporary documentation unavailability during migration
