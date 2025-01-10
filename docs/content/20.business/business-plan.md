# WeDance Business Plan

## Executive Summary

WeDance is a community-driven platform that organizes the world's dance information and builds participatory networks to help dance communities self-organize effectively. Starting as Kizomba News in 2017, evolving through DanceCard (2018-2019), and launching as WeDance in 2020, the platform has grown to serve 231 cities across 60 countries with over 3,119 registered members and 4,000 monthly active users. The current version v3.14.0 is live at https://wedance.vip/ (as of January 2025).

## Market Opportunity

### Current State

- 231 cities across 60 countries
- 3,119 registered members
- 5,743 events organized
- 4,000 monthly active users (March 2024)
- 1.5K monthly clicks from Google Search (February 2024)
- Strong Munich community presence (@wedancemunich):
  - 2,133 posts
  - 5,099 followers
  - 6,944 following
    (as of January 2025)

### Problem

- Dance information is scattered across private chats and closed
  groups
- Inefficient event organization
- Exclusion of potential participants
- Slower community growth
- Lack of trust in partner finding
- Difficulty in discovering events and classes
- Dance style information is scattered across platforms
- Style-specific needs not met by generic solutions
- Difficulty finding partners within specific styles
- Fragmented style communities
- Lack of style-specific event discovery
- No unified platform for dance style progression

### Solution

- Single unified platform for all dance-related activities
- Style-specific features and communities
- Trust-based partner finding system
- Transparent community governance
- Open source with premium services
- Cross-city connections within dance styles

## Business Model

### Revenue Streams (2026 Target: €1M)

1. Event Services (€200K)

   - Ticketing fees
   - Premium event promotion

2. Artist Services (€200K)

   - Booking fees
   - Premium profile features

3. Venue Services (€200K)

   - Rental platform fees
   - Management tools

4. Dancer Services (€200K)

   - Premium features
   - Targeted advertising

5. Platform Licensing (€200K)
   - White-label solutions
   - Support contracts

### Cost Structure

- Fixed Costs

  - Development team
  - Infrastructure
  - Core operations
  - Base marketing

- Variable Costs
  - Payment processing
  - Support operations
  - Marketing campaigns
  - Partner commissions

## Go-to-Market Strategy

### Historical Progress

1. Kizomba News (2017-2018)

   - Started as kizomba.news
   - Event tracking via Google Spreadsheet
   - Newsletter subscription system

2. DanceCard Era (2018-2019)

   - Facebook event scraper development
   - Dance event database
   - Dance Radar feature (unreleased)

3. WeDance v1 (May 2020)

   - Partner finding feature
   - Profile system inspired by Couchsurfing
   - Outdoor dance space booking

4. WeDance v2-v3 (Sept 2020-Present)
   - Twitter-inspired layout
   - Social media integration
   - Community discussion via Telegram
   - Ambassador program launch (2021)
   - Local Committee formation
   - Design Sprint iterations (2023)
   - Current stable version v3.14.0
   - Live at https://wedance.vip/

### Next Phase Focus

1. Dance Style Focus

   - Launch and validate first target dance style
   - Build style-specific features and community
   - Establish style leadership and ambassadors

2. Community Development

   - Style-specific onboarding and features
   - Build trust within style community
   - Create style-specific success metrics

3. Platform Growth
   - Expand to additional dance styles
   - Cross-style features where beneficial
   - Style-specific premium services

## Implementation Plan

### Q1 2025

- Select and validate target dance style
- Onboard key style community leaders
- Develop style-specific features
- Launch initial style community

### Q2 2025

- Scale first dance style community
- Implement style-specific premium features
- Build style ambassador program
- Validate revenue model with first style

### Q3 2025

- Begin second dance style preparation
- Enhance cross-style platform features
- Optimize style-specific analytics
- Scale successful community patterns

### Q4 2025

- Launch second dance style
- Implement learnings from first style
- Strengthen style-based networks
- Document style expansion playbook

## Financial Projections

### Key Metrics

1. Community Health

   - Active users per style
   - Event attendance
   - Partner matching success
   - Community satisfaction

2. Business Performance

   - Revenue per stream
   - Customer acquisition cost
   - Lifetime value
   - Platform transaction volume

3. Growth Indicators
   - New user registration
   - Style expansion
   - Feature adoption
   - Partner satisfaction

## Risk Analysis

### Key Challenges

1. Technical Infrastructure

   - Global accessibility barriers (e.g., Cuba)
   - Performance bottlenecks
   - Unpredictable costs
   - Architecture scalability
   - Migration complexity

2. Network Effect

   - Achieving critical mass per style
   - Balancing supply and demand
   - Cross-style expansion timing

3. Trust Building

   - User verification
   - Safety protocols
   - Quality control

### Mitigation Strategies

1. Technical Solutions

   - Evaluate and implement vendor-neutral architecture
   - Optimize for performance and cost
   - Implement robust monitoring
   - Develop clear migration path
   - Regular architecture reviews

2. Community Growth

   - Focus on single dance style until critical mass
   - Partner with established community leaders
   - Build local community first approach

3. Platform Trust
   - Implement strong verification system
   - Build open-source community
   - Regular security audits
   - Transparent operations

## Team and Organization

### Structure

- UG (mini-GmbH) with path to GmbH
- Equal partnership model
- Performance-based incentives
- 50% profit reinvestment

### Governance

- Sociocracy 3.0 principles
- Circle-based organization
- Transparent decision-making
- Regular community feedback

## Investment Requirements

### Initial Capital

- Development costs
- Legal setup
- Marketing budget
- Operating reserve

### Use of Funds

1. Platform Development (40%)
2. Marketing & Growth (30%)
3. Operations (20%)
4. Legal & Admin (10%)

## Success Metrics

### 6-Month Goals (Q2 2025)

- Scale premium features
- 5000 registered users
- Revenue growth from premium services
- 10 active city communities

### 12-Month Goals (Q4 2025)

- €250K annual run rate
- 40% gross margin
- 10000 active users
- International expansion

### 24-Month Goals (Q4 2026)

- €1M annual revenue
- Global presence
- Multiple dance styles
- Platform ecosystem growth

## Next Steps

1. Scale premium features and services
2. Strengthen city communities
3. Enhance partner finding system
4. Expand international presence
5. Optimize platform performance

## Current Technical Challenges (January 2025)

### Accessibility Barriers

- Current Firebase-based solution doesn't work in Cuba and potentially other regions
- Need for architecture that works globally without restrictions
- [Firebase services blacklist certain IP addresses](https://github.com/cuban-opensourcers/cuban-restricted)

### Performance Issues

- Low PageSpeed scores affecting user experience
- Poor Google Search indexing due to slow content loading
- Need for improved SEO and content accessibility

### Cost Optimization Needed

Current infrastructure costs are unpredictable and high (200-700 EUR) due to:

- Netlify Prerendering causing cascade of operations
- Firebase read operations
- Algolia read operations
- Netlify Bandwidth costs
- Function execution loops from code/logic issues

### Architecture Evaluation (v4 Planning)

1. Database Options

   - PostgreSQL vs MongoDB evaluation
   - Query and data-structure optimization
   - Cost-performance analysis

2. API Architecture

   - GraphQL evaluation
   - Supabase client possibilities
   - tRPC consideration
   - Real-time updates alternative to Firebase

3. Feature Implementation

   - Chat system architecture
   - Feed system with personalization
   - Follow system optimization

4. Hosting Optimization
   - Evaluating Hetzner vs AWS vs Vercel vs Netlify
   - PostgreSQL hosting options
   - Single-server vs distributed architecture
   - Performance benchmarking
   - Scaling strategy
   - Migration path planning

These challenges are driving the development of version 4, focusing on:

- Global accessibility
- Improved performance
- Cost optimization
- Sustainable architecture

---

This business plan is a living document and will be updated regularly based on market feedback and organizational learning.
Last updated: January 10, 2025
