# Calendar Features

This directory contains BDD feature files for the Munich Salsa Calendar implementation.

## Features Overview

### 1. Calendar View (`view.feature`)

Handles the visualization of events in calendar format:

- Month/Week/Day views
- Event details display
- Navigation between periods
- Style-based filtering
- Mobile responsiveness

### 2. Event Creation (`create.feature`)

Manages the event creation process:

- Basic event details
- Recurring events
- Image management
- Draft & preview
- Form validation
- Custom registration

### 3. Public Browsing (`browse.feature`)

Controls public event discovery:

- Event listing
- Multi-filter search
- Location-based filtering
- Date range selection
- Mobile browsing
- Preference saving

## Running Tests

```bash
# Run all calendar features
npm run test:e2e -- --tags @calendar

# Run specific features
npm run test:e2e -- --spec features/calendar/view.feature
npm run test:e2e -- --spec features/calendar/create.feature
npm run test:e2e -- --spec features/calendar/browse.feature
```

## Test Data

The features use the following test data:

### Events

```typescript
{
  title: "Salsa Social Party",
  date: "Next Friday",
  time: "20:00",
  location: "Dance Studio Munich",
  style: "Salsa Cubana",
  price: "10 EUR"
}
```

### Filters

```typescript
{
  city: "Munich",
  style: "Salsa Cubana",
  price: "Under 20 EUR"
}
```

## Related Components

These features test the following Vue components:

- `components/calendar/CalendarView.vue`
- `components/event/EventForm.vue`
- `components/event/EventList.vue`

## Adding New Tests

1. Identify the relevant feature file
2. Add new scenario following the Gherkin syntax
3. Implement step definitions if needed
4. Add appropriate tags
5. Update this README if adding new test data or components
