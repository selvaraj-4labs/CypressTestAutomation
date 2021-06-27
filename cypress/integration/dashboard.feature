Feature: Dashboard

    @only
    Scenario: Total Asset Value and Total Interest Earned is displayed in Dashboard 
    Given User navigate to the vauld website
    When Enter "hemanth3936@gmail.com" as username and "@Nine995888437" as password 
    Then Verify Total Asset Value is displayed
    And Verify Total Interest Earned is displayed

