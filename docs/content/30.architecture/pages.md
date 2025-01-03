# Pages

## URL Structure

### Core Routes
- `/dance/[style]` - Style community (e.g., `/dance/salsa`)
- `/dance/[style]/events` - Style events
- `/dance/[style]/about` - Style info
- `/dance/[style]/artists` - Style artists
- `/cities/[city]` - City community
- `/@[username]` - Profiles
- `/events` - Global events
- `/` - Home/Feed
- `/explore` - Discover

### User Routes (Auth Required)
- `/dashboard` - Universal dashboard
  - `/dashboard/teaching` - Teaching features
  - `/dashboard/organizing` - Organizing features
  - `/dashboard/venue` - Venue features
- `/settings` - User settings
  - `/settings/notifications`
  - `/settings/privacy`
- `/messages` - Messages
- `/calendar` - Personal calendar

### Static Routes
- `/about` - About WeDance
- `/mission` - Mission & Vision
- `/help` - Help Center
- `/legal/*` - Legal pages

### SEO-Friendly Routes
- `/:styleSlug` → `/dance/:styleSlug`
- `/:citySlug` → `/cities/:citySlug`
- `/dance-events` → `/events`
- `/dance-parties` → `/events?type=party`
- `/dance-festivals` → `/events?category=festival`
- `/find-dance-partner` → `/partners`
- `/dance-practice` → `/partners/groups`

## Page Types

### Dance Style Pages

1. **Community Feed** (`/dance/[style]`)
   **Components**:
   - Style header with description
   - Post type filters
   - Location filter
   - Mixed content feed
   - Create content button
   - Community stats

2. **Events** (`/dance/[style]/events`)
   **Components**:
   - Event type filters
   - Advanced search
   - Grid/List/Map views
   - Sorting options
   - Series grouping

3. **About** (`/dance/[style]/about`)
   **Components**:
   - Style description
   - History & background
   - Learning resources
   - Community guidelines
   - Featured content

4. **Artists** (`/dance/[style]/artists`)
   **Components**:
   - Artist directory
   - Teaching schedules
   - Workshop listings
   - Performance videos
   - Booking options

### City Pages (`/cities/[city]`)
**Components**:
- City overview
- Local feed
- Venue listings
- Local events
- Community organizers

### Profile Pages (`/@[username]`)

**Purpose**: Display user profiles and their content

**Components**:
- Profile header
- Role-specific sections (based on profile type)
- Content tabs
- Activity feed
- Action buttons

**Features**:
- Adapts based on profile type (see [Profiles](/guide/profiles))
- Role-specific actions
- Content filtering
- Social interactions

### Global Pages

1. **Home** (`/`)
   **Components**:
   - Personalized feed
   - Quick access to communities
   - Trending content
   - Getting started guide

2. **Explore** (`/explore`)
   **Components**:
   - Dance style directory
   - Popular communities
   - Featured content
   - Global events

## Common Features

### URL Parameters
- `city`: Filter by city
- `style`: Filter by dance style
- `type`: Content type filter
- `tab`: Active tab
- `view`: Display mode (grid/list/map)
- `level`: Skill level
- `page`: Pagination
- `q`: Search query

### Navigation
- Context-aware breadcrumbs
- Related content links
- Quick filters
- Search integration

### Content Creation
- Context-aware create button
- Relevant post types
- Pre-filled fields based on context

### Mobile Optimization
- Responsive layouts
- Touch-friendly filters
- Quick actions
- Infinite scroll

## Implementation Guidelines

1. Use hyphens for URL separators
2. Keep URLs short and descriptive
3. Include location when relevant
4. Set up 301 redirects for SEO routes
5. Implement canonical URLs
6. Add structured data
7. Use dynamic meta tags

