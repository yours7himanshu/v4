# WeDance Routing Structure

## Core Routes

### Home & Discovery

- `/` - Homepage
- `/explore` - Global discovery feed
- `/cities/:citySlug` - City page (tabs: events, community, venues)
- `/styles/:styleSlug` - Dance style page (tabs: events, community, teachers)

### Events

- `/events` - Events discovery
- `/events/map` - Map view
- `/events/calendar` - Calendar view
- `/events/:eventId` - Event details
- `/events/create` - Create event (auth)
- `/events/my` - My events (auth)

### Community

- `/partners` - Partner search with filters
- `/partners/groups` - Practice groups
- `/partners/requests` - Partner requests
- `/trips` - Travel & shared trips

### Users & Profiles

- `/users/:username` - User profile (adaptive view based on user type)
- `/users` - Users directory (with role filters)

### Learn

- `/classes` - Classes & workshops
- `/classes/:classId` - Class details
- `/venues` - Venues directory
- `/venues/:venueId` - Venue details
- `/learn` - Knowledge base
- `/learn/:articleSlug` - Knowledge article
- `/reviews` - Reviews & experiences

### Profile & Account (auth)

- `/profile` - My profile
- `/profile/edit` - Edit profile
- `/calendar` - Personal calendar
- `/messages` - Messages inbox
- `/messages/:threadId` - Message thread
- `/settings` - Account settings
  - `/settings/notifications`
  - `/settings/privacy`

## Role-Based Routes

### Dashboard (auth)

- `/dashboard` - Universal dashboard (adapts to user roles)

### Artist/Teacher Features (auth)

- `/dashboard/teaching` - Teaching management
  - `/dashboard/teaching/classes`
  - `/dashboard/teaching/bookings`
  - `/dashboard/teaching/students`
  - `/dashboard/teaching/content`
  - `/dashboard/teaching/analytics`

### Organizer Features (auth)

- `/dashboard/organizing` - Event management
  - `/dashboard/organizing/events`
  - `/dashboard/organizing/tickets`
  - `/dashboard/organizing/attendees`
  - `/dashboard/organizing/checkin`
  - `/dashboard/organizing/analytics`

### Venue Features (auth)

- `/dashboard/venue` - Venue management
  - `/dashboard/venue/spaces`
  - `/dashboard/venue/calendar`
  - `/dashboard/venue/bookings`

## Static Pages

- `/about` - About WeDance
- `/mission` - Mission & Vision
- `/team` - Team
- `/careers` - Careers
- `/help` - Help Center
- `/contact` - Contact Us
- `/report` - Report Issue
- `/safety` - Safety Guidelines
- `/legal` - Legal pages
  - `/legal/terms`
  - `/legal/privacy`
  - `/legal/guidelines`
  - `/legal/cookies`

## API Routes

- `/api/v1/*` - API endpoints
- `/api/auth/*` - Authentication endpoints

## Dynamic Parameters

- `:citySlug` - City identifier (e.g., "berlin", "paris")
- `:styleSlug` - Dance style identifier (e.g., "salsa", "bachata")
- `:eventId` - Event unique identifier
- `:username` - User unique username
- `:venueId` - Venue unique identifier
- `:classId` - Class unique identifier
- `:articleSlug` - Knowledge base article slug
- `:threadId` - Message thread identifier

## Query Parameters

- `?city=:citySlug` - Filter by city
- `?style=:styleSlug` - Filter by dance style
- `?date=:date` - Filter by date
- `?level=:level` - Filter by level
- `?role=:role` - Filter by user role
- `?q=:query` - Search query
- `?page=:number` - Pagination
- `?sort=:field` - Sorting
- `?view=:type` - View type (grid/list/map)
- `?tab=:tabName` - Active tab
