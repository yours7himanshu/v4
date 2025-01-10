Feature: Calendar View for Events
  As a Dancer
  I want to view events in a calendar format
  So that I can better plan my dance activities and see schedule conflicts

  Background:
    Given I am on the events calendar page
    And there are upcoming dance events

  Scenario: View events in month format
    When I view the calendar in month format
    Then I should see all events for the current month
    And each event should display:
      | Field      | Content            |
      | Title      | Event name         |
      | Time       | Start time         |
      | Location   | Venue name         |
      | Style      | Dance style        |

  Scenario: Navigate between months
    When I click the next month button
    Then I should see events for the next month
    When I click the previous month button
    Then I should see events for the previous month

  Scenario: Filter events by dance style
    When I select "Salsa Cubana" from the style filter
    Then I should only see Salsa Cubana events in the calendar
    And other dance style events should be hidden

  Scenario: View event details
    When I click on an event in the calendar
    Then I should see a detailed view with:
      | Field         | Content               |
      | Title         | Full event name       |
      | Description   | Event description     |
      | Date & Time   | Full datetime info    |
      | Location      | Complete venue details |
      | Price         | Ticket pricing        |
      | Organizer     | Organizer details     |

  Scenario: Switch calendar views
    When I click on the "Week" view button
    Then I should see events organized by week
    When I click on the "Day" view button
    Then I should see events for the selected day
    When I click on the "Month" view button
    Then I should see events organized by month

  Scenario: Mobile responsive view
    Given I am using a mobile device
    When I view the calendar
    Then I should see a mobile-optimized layout
    And I should be able to swipe between months
    And event details should be accessible with a tap 