Feature: Browse Events Without Login
  As a Dancer
  I want to discover dance events by city, style, and date without signing in
  So that I can easily explore what's happening in the dance community

  Background:
    Given I am on the public events page
    And there are various dance events available

  Scenario: View all upcoming events
    When I visit the events page
    Then I should see a list of upcoming events
    And each event should display:
      | Field         | Content               |
      | Title         | Event name            |
      | Date         | Event date and time   |
      | Location     | City and venue        |
      | Style        | Dance style           |
      | Price        | Ticket price          |
      | Organizer    | Organizer name        |

  Scenario: Filter events by city
    When I select "Munich" from the city filter
    Then I should only see events in Munich
    And the events should be sorted by date
    And I should see the total number of events found

  Scenario: Filter events by dance style
    When I select "Salsa Cubana" from the style filter
    Then I should only see Salsa Cubana events
    And events of other styles should be hidden
    And I should see the total number of filtered events

  Scenario: Filter events by date range
    When I select a date range:
      | Field     | Value        |
      | From      | Today        |
      | To        | Next month   |
    Then I should only see events within that date range
    And events should be sorted chronologically

  Scenario: Search for specific events
    When I enter "Rueda" in the search box
    Then I should see events with "Rueda" in their title or description
    And the results should be relevant to my search term

  Scenario: View event details without login
    When I click on an event
    Then I should see the full event details
    And I should see the venue location on a map
    But I should see a login prompt for registration

  Scenario: Mobile responsive browsing
    Given I am using a mobile device
    When I browse events
    Then I should see a mobile-optimized layout
    And I should be able to use all filters
    And I should be able to easily scroll through events

  Scenario: Save search preferences
    When I apply multiple filters:
      | Filter    | Value         |
      | City      | Munich        |
      | Style     | Salsa Cubana  |
      | Price     | Under 20 EUR  |
    Then my filter preferences should be saved locally
    And they should persist when I return to the page 