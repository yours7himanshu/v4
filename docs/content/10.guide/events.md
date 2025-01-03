# Events

WeDance presents events to help users discover, share, and manage dance events effectively. Let's explore how different presentations serve specific user needs.

## Core User Jobs (JTBD)

1. **Discovery**
   - Find relevant dance events nearby
   - Explore events while traveling
   - Discover new dance styles and teachers
   - Get personalized event recommendations

2. **Decision Making**
   - Compare event options
   - Check event details and requirements
   - Verify event legitimacy and quality
   - Assess if the event matches skill level

3. **Planning & Booking**
   - Register for events
   - Purchase tickets
   - Find dance partners
   - Coordinate with friends
   - Plan travel and accommodation

4. **Organizing**
   - Create and publish events
   - Manage registrations
   - Communicate with attendees
   - Track attendance and revenue

## Event Card

**Purpose**: Enable quick event discovery and decision-making.

**Key Features**:
- Visual hierarchy emphasizing date, price, and type
- Clear status indicators (Sold Out, Few Tickets Left, etc.)
- Social proof (attending friends, total attendees)
- Quick actions (Save, Share, Register)
- Location distance from user
- Price comparison with similar events

## Event Post

**Purpose**: Facilitate community discussion and social proof.

**Key Features**:
- Community endorsements and reviews
- Personal recommendations
- Experience sharing
- Partner finding
- Carpooling coordination
- Group discounts

## Event Page

**Purpose**: Provide comprehensive information and enable conversion.

**Key Features**:
- Sticky call-to-action for registration
- Dynamic pricing (Early Bird, Group Rates)
- Clear cancellation policies
- Prerequisites and skill levels
- Related events
- Similar past events with reviews
- Organizer reputation score
- Venue accessibility information
- Nearby accommodation options

## Creation Flows

### Quick Share (for Community)
- Share existing events in one click
- Add personal note or recommendation
- Tag relevant friends or groups

### Full Event (for Organizers)
- Structured form with smart defaults
- Template selection based on event type
- Pricing strategy recommendations
- Automatic translation support
- SEO optimization tools
- Promotion planning

## UX Principles

1. **Contextual Intelligence**
   - Show relevant info based on user location
   - Adapt to user preferences and history
   - Surface timely notifications (price drops, deadline reminders)

2. **Trust Building**
   - Highlight verified organizers
   - Show event history
   - Display authentic reviews
   - Transparent pricing

3. **Mobile-First Actions**
   - One-tap registration
   - Easy sharing to dance groups
   - Quick calendar sync
   - Mobile payment integration

4. **Community Engagement**
   - Partner matching
   - Group coordination
   - Social sharing incentives
   - Community Q&A

## Technical Considerations

1. **Performance**
   - Lazy loading for event lists
   - Image optimization
   - Offline support for saved events
   - Real-time updates for changes

2. **Accessibility**
   - Screen reader optimization
   - Keyboard navigation
   - High contrast mode
   - Clear error states

3. **Data Structure**
   - Flexible schema for various event types
   - Rich metadata for search
   - Structured data for SEO
   - Analytics tracking

4. **Integration**
   - Calendar APIs
   - Payment providers
   - Maps services
   - Social platforms

## Feed Visibility & Distribution

### When Events Appear

1. **Immediate Appearance**
   - When shared directly to feed by organizer or community member
   - When boosted/promoted by organizers
   - When reshared by community members

2. **Algorithmic Distribution**
   - Based on user's location preferences
   - According to followed styles/interests
   - Matching user's skill level
   - Within relevant time window (usually next 3 months)

3. **Contextual Triggers**
   - When friends RSVP to event
   - When similar events are selling out
   - During early bird periods
   - When price changes occur
   - For last-minute ticket availability

### Feed Ranking Factors

1. **Relevance Signals**
   - Distance from user's preferred locations
   - Match with user's dance styles
   - Price range alignment
   - Skill level compatibility
   - Language preferences

2. **Social Signals**
   - Friends attending
   - Total RSVPs
   - Community engagement (comments, shares)
   - Organizer reputation
   - Past attendance at similar events

3. **Quality Signals**
   - Event completeness score
   - Image quality
   - Description clarity
   - Pricing transparency
   - Venue verification

4. **Temporal Factors**
   - Time until event
   - Registration deadlines
   - Early bird periods
   - Recent updates
   - Real-time availability

### Feed Types

1. **Main Feed**
   - Personalized mix of events
   - Social interactions
   - Community discussions
   - Priority for followed organizers

2. **Events-Only Feed**
   - Pure event listings
   - Advanced filtering options
   - Map view available
   - Calendar integration

3. **City/Local Feed**
   - Geographically focused
   - Local community emphasis
   - Nearby venues
   - Local organizers

4. **Style-Specific Feeds**
   - Dance style filtered
   - Level-appropriate content
   - Style-specific community
   - Relevant workshops/courses

### Visibility Controls

1. **For Organizers**
   - Boost event visibility
   - Target specific audiences
   - Schedule announcement timing
   - Control sharing permissions

2. **For Users**
   - Hide/mute specific events
   - Customize feed preferences
   - Save searches/filters
   - Set notification preferences

### Event Creation & Publishing

### Creation Path
- Single unified form for all event creation
- Progressive form that adapts to event complexity:
  - Start with essentials (title, date, location)
  - Expand to optional details (pricing, schedule, etc.)
- Available to all verified users

### Publishing Flow
1. **Create Event**
   - Fill required fields
   - Add optional details
   - Upload images
   - Set pricing (if applicable)

2. **Review & Publish**
   - Preview event presentation
   - Choose publishing timing:
     - Publish now
     - Schedule for later
     - Save as draft
   
3. **Distribution**
   - Events automatically appear in all relevant feeds:
     - Main feed
     - Events-only listings
     - City/local feeds
     - Style-specific feeds
   - Visibility based on relevance to users

4. **Post-Publishing**
   - Share to specific communities
   - Add personal notes when sharing
   - Edit event details
   - Manage registrations
   - Track analytics

### Maximizing Event Reach
1. **Timing**
   - Publish major events 2-3 months ahead
   - Use early bird pricing
   - Schedule reminder posts

2. **Quality**
   - Complete all recommended fields
   - Add high-quality images
   - Verify venue information
   - Tag relevant styles and levels

3. **Engagement**
   - Respond to comments and questions
   - Update with latest information
   - Engage with interested attendees

## Event Outcomes

Events appear in different contexts, each serving specific user needs:

### 1. Feed Presentation (PostEvent.vue)
- **Purpose**: Social discovery and engagement
- **Context**: Main feed, style feeds, city feeds
- **Features**:
  - Single social post per event
  - Community discussion in comments
  - Ability to boost (share with note)
  - All engagement stays on original post

### 2. Discovery View (EventCard.vue)
- **Purpose**: Event browsing and booking
- **Context**: Event listings, search results
- **Features**:
  - Quick event details
  - Clear call-to-action
  - Booking/registration focus
  - Compact information display

### 3. Profile Context
- **Venue Profiles**:
  - Regular schedule display
  - Upcoming events
  - Event history
  - Venue-specific filtering

- **Artist Profiles**:
  - Teaching schedule
  - Performance dates
  - Workshop calendar
  - Role-specific presentation

- **Organizer Profiles**:
  - Event series grouping
  - Upcoming events
  - Past events archive
  - Organization patterns

- **Dancer Profiles**:
  - Attending events
  - Past participation
  - Saved events
  - Interest indicators

### 4. Geographic Context
- **City Pages**:
  - Local event focus
  - Venue relationships
  - Community context
  - Location-based filtering

### 5. Style Context
- **Style Communities** (e.g., /salsa):
  - Style-specific feed
  - Mixed content types
  - Community engagement
  - Quick filtering

- **Style Events** (e.g., /salsa/events):
  - Style-focused discovery
  - Level-based filtering
  - Type categorization
  - Style-specific features

### Cross-Context Behavior
1. **Recurring Events**:
   - Next occurrence in feed
   - Full schedule in venue view
   - Series grouping in discovery
   - Pattern display in organizer profile

2. **Navigation**:
   - Context-aware linking
   - Related event discovery
   - Profile exploration
   - Series navigation

3. **Filtering**:
   - Context-specific options
   - Relevant sort orders
   - Appropriate grouping
   - Local preferences

## Publishing Behavior

When an organizer publishes an event:

1. **Automatic Distribution**
   - Event appears in relevant event listings
   - ONE social post is automatically created
   - Post appears in relevant feeds based on:
     - Style tags
     - Location
     - Organizer followers

2. **Publishing Options**
   - "Publish" - Full visibility immediately
   - "Publish Quietly" - Only in event listings, no social post
   - "Schedule Publishing" - Set future date for visibility

3. **Update Propagation**
   - Event detail updates reflect everywhere
   - Price/date changes trigger notifications
   - Updates can optionally create feed notifications
   - Edit history maintained for transparency

## Event Series & Recurring Events

1. **Creation**
   - Create series template
   - Set recurrence pattern:
     - Weekly/Monthly schedule
     - Custom patterns
     - Exception dates
   - Manage series as unit or individual events

2. **Presentation**
   - **In Feed**: 
     - Show next occurrence
     - Indicate recurrence pattern
     - Link to full series
   
   - **In Discovery**:
     - Group series together
     - Show pattern overview
     - Allow expanding full schedule
   
   - **In Venue Profile**:
     - Display full schedule
     - Show pattern clearly
     - Highlight next occurrence
   
   - **In Organizer Profile**:
     - Group by series
     - Show series stats
     - Series management tools

3. **Management**
   - Update entire series or single occurrence
   - Handle exception dates
   - Cancel/modify individual dates
   - Series-level analytics
