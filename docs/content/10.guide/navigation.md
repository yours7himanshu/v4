# Navigation

## Core Features

### 1. Events & Discovery

- **Main Routes**
  - `/events` - Events discovery
  - `/events/calendar` - Calendar view
  - `/events/map` - Map view
  - `/events/:eventId` - Event details
  - `/events/create` - Create event (auth)
  - `/events/my` - My events (auth)
- **SEO Routes**
  - `/dance-events` → `/events`
  - `/dance-parties` → `/events?type=party`
  - `/dance-festivals` → `/events?category=festival`
  - `/:citySlug/dance-events` → `/events?city=:citySlug`
  - `/:styleSlug-events` → `/events?style=:styleSlug`

### 2. Cities & Locations

- **Main Routes**
  - `/cities/:citySlug` - City page
  - `/cities/:citySlug/events` - City events
  - `/cities/:citySlug/community` - City community
  - `/cities/:citySlug/venues` - City venues
- **SEO Routes**
  - `/:citySlug` → `/cities/:citySlug`
  - `/:citySlug/dance` → `/cities/:citySlug`
  - `/:citySlug/:styleSlug` → `/cities/:citySlug?style=:styleSlug`

### 3. Dance Styles

- **Main Routes**
  - `/styles/:styleSlug` - Style page
  - `/styles/:styleSlug/events` - Style events
  - `/styles/:styleSlug/community` - Style community
  - `/styles/:styleSlug/teachers` - Style teachers
- **SEO Routes**
  - `/:styleSlug` → `/styles/:styleSlug`
  - `/learn-:styleSlug` → `/styles/:styleSlug?tab=learn`
  - `/:styleSlug-classes` → `/styles/:styleSlug?tab=classes`

### 4. Learning

- **Main Routes**
  - `/classes` - Classes listing
  - `/classes/:classId` - Class details
  - `/teachers` - Teachers directory
  - `/venues` - Venues directory
  - `/learn` - Knowledge base
- **SEO Routes**
  - `/dance-classes` → `/classes`
  - `/dance-teachers` → `/teachers`
  - `/dance-studios` → `/venues?type=studio`
  - `/private-dance-lessons` → `/classes?type=private`

### 5. Community

- **Main Routes**
  - `/partners` - Partner search
  - `/partners/groups` - Practice groups
  - `/trips` - Travel & trips
  - `/reviews` - Reviews & experiences
- **SEO Routes**
  - `/find-dance-partner` → `/partners`
  - `/dance-practice` → `/partners/groups`
  - `/:styleSlug-partner` → `/partners?style=:styleSlug`

## User Features (Auth Required)

### 6. Profile & Account

- `/profile` - User profile
- `/messages` - Messages
- `/calendar` - Personal calendar
- `/settings` - Settings
  - `/settings/notifications`
  - `/settings/privacy`

### 7. Role-Based Features

- `/dashboard` - Universal dashboard
- `/dashboard/teaching/*` - Teaching features
- `/dashboard/organizing/*` - Organizing features
- `/dashboard/venue/*` - Venue features

## Static Pages

- `/about` - About WeDance
- `/mission` - Mission & Vision
- `/help` - Help Center
- `/legal/*` - Legal pages

## Common Query Parameters

- `city`: Filter by city
- `style`: Filter by dance style
- `type`: Content type filter
- `tab`: Active tab
- `view`: Display mode
- `level`: Skill level
- `page`: Pagination
- `q`: Search query

## URL Resolution Priority

1. Exact SEO routes (e.g., `/berlin`, `/salsa`)
2. Dynamic parameters (e.g., `/events/:eventId`)
3. Core routes (e.g., `/events`, `/classes`)

## Implementation Guidelines

1. Use hyphens for URL separators
2. Keep URLs short and descriptive
3. Include location when relevant
4. Set up 301 redirects for SEO routes
5. Implement canonical URLs
6. Add structured data for events, classes, etc.
7. Use dynamic meta tags based on route data
