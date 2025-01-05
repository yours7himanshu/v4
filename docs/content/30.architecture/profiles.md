# Profiles

The platform supports different types of profiles, each with specific purposes and features.

## Profile Types

### Dancers

**Purpose**: Personal dance journey and social connections

**Roles**:

- Lead: Leading in partner dances
- Follow: Following in partner dances
- Both: Can dance both roles

**Components**:

- Basic profile info
- Dance styles & levels
- Learning goals
- Partner preferences
- Practice availability
- Social connections
- Activity feed
- Dance videos/photos
- Attending events
- Saved events

**Primary Actions**:

- Connect (follow/add as friend)
- Message (direct message)
- Share Profile (share with others)
- Save (bookmark profile)

### Artists

**Purpose**: Professional presence and booking

**Roles**:

- Instructor: Teaching classes and workshops
- Performer: Stage and show performances
- Choreographer: Creating and teaching routines
- Musician: Live music and performances
- DJ: Music mixing and event entertainment
- Videographer: Dance documentation and promotion

**Components**:

- Professional bio
- Teaching expertise
- Class schedule
- Workshop calendar
- Performance videos
- Student testimonials
- Booking information
- Achievements/certifications
- Media gallery
- Upcoming events
- Past events

**Primary Actions**:

- Book Class
- Contact
- Follow
- Share

### Organizers

**Purpose**: Event management and community trust

**Roles**:

- Festival Organizer: Multi-day dance events
- Social Organizer: Regular dance socials
- School Owner: Dance academy/studio management
- Workshop Organizer: Special workshops and bootcamps

**Components**:

- Organization info
- Event series
- Upcoming events
- Past events
- Community reviews
- Team members
- Contact information
- Track record
- Event photos/videos

**Primary Actions**:

- Follow
- Contact
- View Events
- Book Event

### Venues

**Purpose**: Space discovery and booking

**Roles**:

- Dance Studio: Dedicated dance spaces
- Social Venue: Bars and clubs with dance events
- Event Space: Rentable spaces for dance events
- Cultural Center: Community spaces with dance programs

**Components**:

- Location & access
- Space details
- Regular schedule
- Upcoming events
- Rental information
- Amenities
- Photos/virtual tour
- Reviews
- Contact options

**Primary Actions**:

- View Events
- Get Directions
- Book Space
- Contact

### Communities

**Purpose**: Connect and organize groups of dancers with shared interests or goals

**Types**:

1. **Style-Based Communities**

   ```yaml
   Example - Salsa Cubana Munich:
     Focus: Cuban Salsa / Timba
     Scope: Local (Munich)
     Regular Events:
       Summer:
         - Wednesdays: Open Air at Pinakothek der Moderne
         - Fridays: Open Air at Pinakothek der Moderne
       Winter:
         - Wednesdays: Kult Dance Studio
     Music: Timba
     Social Media:
       - Instagram
       - Facebook Page
     Communication:
       - WhatsApp Groups
     Activities:
       - Regular socials
       - Open air parties
       - Music sharing
       - Community updates
     Venues:
       - Pinakothek der Moderne (Summer)
       - Kult Dance Studio (Winter)
     Discovery:
       - City: /munich
       - Style: /dance/salsa/cuban
       - Community: /communities/salsa-cubana-munich
   ```

2. **Cross-Location Communities**

   ```yaml
   Example - Afro-Cuban Festivals:
     Focus: Festival Travel
     Scope: International
     Activities:
       - Festival planning
       - Travel coordination
       - Experience sharing
     Communication:
       - WhatsApp groups
       - Event updates
   ```

3. **Local Scene Communities**

   ```yaml
   Example - Berlin Salseros:
     Focus: City Scene
     Scope: Local Area
     Activities:
       - Scene updates
       - Local events
       - Venue information
     Communication:
       - WhatsApp/Telegram
       - Local forums
   ```

4. **Special Interest Groups**
   ```yaml
   Example - Timba Music Lovers:
     Focus: Specific Aspect
     Scope: Mixed
     Activities:
       - Music sharing
       - DJ sessions
       - Discussion
     Communication:
       - Spotify playlists
       - Group chat
   ```

**Components**:

- Group description and purpose
- Membership information
- Communication channels
- Regular activities
- Related organizers/venues
- Event calendar
- Photo/video gallery
- Discussion space
- Resource sharing

**Features**:

1. **Membership Management**

   ```yaml
   - Join requests
   - Member roles
   - Activity tracking
   - Communication preferences
   ```

2. **Content Sharing**

   ```yaml
   - Event announcements
   - Photos/videos
   - Discussions
   - Resources
   ```

3. **Communication**

   ```yaml
   - Group chat links
   - Announcements
   - Event coordination
   - Member messaging
   ```

4. **Discovery**
   ```yaml
   - Style pages
   - Event pages
   - City pages
   - Search results
   ```

**Primary Actions**:

- Join Community
- Contact Admins
- Share Community
- View Activities

**Integration**:

```yaml
Related Entities:
  Organizers:
    - Event producers
    - Venues
    - Schools
    - Teachers

  Events:
    - Regular socials
    - Festivals
    - Workshops
    - Practice sessions

  Venues:
    - Regular locations
    - Meeting points
    - Practice spaces
```

**Privacy Options**:

```yaml
Visibility:
  - Public (anyone can see)
  - Semi-private (approval needed)
  - Private (invitation only)

Communication:
  - Open chat
  - Moderated chat
  - Admin-only announcements
```

**Best Practices**:

1. **Community Health**

   - Clear guidelines
   - Active moderation
   - Regular updates
   - Engaged leadership

2. **Growth**

   - Welcoming environment
   - Easy discovery
   - Clear value proposition
   - Regular activities

3. **Content**
   - Relevant updates
   - Quality control
   - Member contributions
   - Resource sharing

## Common Features

### Profile Header

- Profile photo
- Cover image
- Name/Title
- Location
- Quick stats
- Primary action buttons

### Content Tabs

- Posts
- Events
- Media
- Reviews
- About
- Role-specific tabs

### Activity Feed

- Posts
- Events
- Media
- Interactions
- Updates

### Social Features

- Follow/Connect
- Message
- Share
- Report

### Verification

- Identity verification
- Role verification
- Skill level verification
- Reviews & ratings

### Privacy Controls

- Profile visibility
- Contact preferences
- Information sharing
- Activity privacy
