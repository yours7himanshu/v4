Feature: Create and Publish Events
  As an Event Organizer
  I want to create and publish dance events
  So that I can promote my events to the dance community

  Background:
    Given I am logged in as an event organizer
    And I am on the event creation page

  Scenario: Create a single event with basic details
    When I fill in the basic event details:
      | Field       | Value                    |
      | Title       | Salsa Social Party       |
      | Date        | Next Friday              |
      | Time        | 20:00                    |
      | Location    | Dance Studio Munich      |
      | Style       | Salsa Cubana             |
      | Price       | 10 EUR                   |
    And I click "Create Event"
    Then the event should be created successfully
    And I should see it in the calendar
    And I should see it in my events list

  Scenario: Create a recurring event
    When I fill in the basic event details
    And I select "Recurring Event"
    And I set the recurrence pattern:
      | Field      | Value     |
      | Frequency  | Weekly    |
      | Day       | Friday    |
      | Time      | 20:00     |
      | Until     | 3 months  |
    Then multiple event instances should be created
    And they should appear in the calendar

  Scenario: Upload event images
    When I fill in the basic event details
    And I upload an event cover image
    And I upload additional event photos
    Then the images should be properly displayed
    And they should be optimized for web viewing

  Scenario: Save event as draft
    When I fill in partial event details
    And I click "Save as Draft"
    Then the event should be saved with draft status
    And I should be able to edit it later

  Scenario: Preview event before publishing
    Given I have filled all event details
    When I click "Preview"
    Then I should see how the event will appear to users
    And I should be able to edit if needed
    And I should be able to publish from preview

  Scenario: Validate required fields
    When I try to create an event without required fields
    Then I should see validation errors
    And the event should not be created
    And I should see which fields need to be filled

  Scenario: Set custom registration form
    When I add custom registration fields:
      | Field Type | Label           | Required |
      | Text       | Dance Level     | Yes      |
      | Select     | Dance Role      | Yes      |
      | Checkbox   | Accept Rules    | Yes      |
    Then these fields should appear in the registration form
    And required fields should be marked as mandatory 