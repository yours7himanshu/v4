# Card Actions

## Post Types and Their Actions

| Post Type | Like | Bookmark | Comments | Share | Primary Action |
| --------- | ---- | -------- | -------- | ----- | -------------- |
| Posts     | ✓    | ✓        | ✓        | ✓     | -              |
| Events    | ✓    | ✓        | -        | ✓     | Book Now       |
| Videos    | ✓    | ✓        | ✓        | ✓     | -              |
| Questions | ✓    | ✓        | -        | ✓     | Respond        |
| Reviews   | ✓    | ✓        | ✓        | ✓     | -              |
| Projects  | ✓    | ✓        | -        | ✓     | Join Project   |
| Travel    | ✓    | ✓        | -        | ✓     | Contact        |

The platform supports the following post types, each with specific footer actions:

1. **Posts**

   - Standard content sharing
   - Supports: Like, Bookmark, Comments, Share

2. **Events**

   - Dance events and classes
   - Supports: Like (interest), Bookmark, Share, Book Now

3. **Videos**

   - Tutorial and performance content
   - Supports: Like, Bookmark, Comments, Share

4. **Questions**

   - Community Q&A
   - Supports: Like (agreement), Bookmark, Share, Respond

5. **Reviews**

   - Venue and event reviews
   - Supports: Like (agreement), Bookmark, Comments, Share

6. **Projects**

   - Community initiatives
   - Supports: Like (interest), Bookmark, Share, Join Project

7. **Travel**
   - Dance travel opportunities
   - Supports: Like (interest), Bookmark, Share, Contact

## Engagement Actions

### Like

- **Icon:** `ph:heart`
- **Shows:** Number of likes/interested/responses
- **Available for:** All post types
- **Relevance:**
  - Posts: Shows appreciation for shared content
  - Events: Shows interest in attending
  - Videos: Appreciates tutorial content
  - Questions: Shows agreement or support
  - Reviews: Agrees with the review
  - Projects: Shows interest in initiative
  - Travel: Shows interest in travel plan

### Bookmark

- **Icon:** `ph:bookmark-simple`
- **Shows:** Number of saves
- **Available for:** All post types
- **Relevance:**
  - Posts: Save tips and advice for later
  - Events: Save events to attend later
  - Videos: Save tutorials to watch later
  - Questions: Save to answer later
  - Reviews: Save venue recommendations
  - Projects: Save interesting projects
  - Travel: Save travel opportunities

### Comments

- **Icon:** `ph:chat-circle`
- **Shows:** Number of comments
- **Available for:** Posts, Videos, Reviews
- **Relevance:**
  - Posts: Discuss and add to the conversation
  - Videos: Ask questions about the tutorial
  - Reviews: Share experiences or ask questions about the venue

### Share

- **Icon:** `ph:share-network`
- **Shows:** "Share" text
- **Available for:** All post types
- **Relevance:**
  - Posts: Share valuable tips
  - Events: Invite friends to events
  - Videos: Share tutorials with dance partners
  - Questions: Get more responses
  - Reviews: Spread venue recommendations
  - Projects: Reach potential participants
  - Travel: Find travel companions

## Primary Actions

### Book Now

- **Available for:** Events only
- **Purpose:** Direct action to purchase tickets or register
- **Relevance:** Convert interest into attendance

### Respond

- **Available for:** Questions only
- **Purpose:** Direct action to answer questions
- **Relevance:** Encourage community help

### Join Project

- **Available for:** Projects only
- **Purpose:** Direct action to participate
- **Relevance:** Convert interest into participation

### Contact

- **Available for:** Travel posts only
- **Purpose:** Direct action to connect
- **Relevance:** Connect potential travel companions

## Action Behavior

### Like/Heart Action

- **State Management:** Toggleable state
- **Authentication:** Required
- **Animation:** Heart pulse on click
- **Analytics:** Tracked as engagement metric

### Bookmark Action

- **State Management:** Toggleable state
- **Authentication:** Required
- **Storage:** Saved to user's profile
- **Sync:** Cross-device synchronization

### Comments Action

- **State Management:** Opens comment drawer
- **Authentication:** Required for posting
- **Sorting:** Latest first, with pinned comments
- **Features:** Supports mentions (@) and emoji

### Share Action

- **Platforms:** Native share on mobile, custom menu on desktop
- **Options:** Copy link, social platforms
- **Analytics:** Track share destinations
