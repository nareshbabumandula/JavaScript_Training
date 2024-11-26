Feature: EyeGlassWorld Store Search functionality

@smoke
Scenario: Verify the functionality of searching an eyeglass store based on 'City' name
Given I navigate to the EGW portal
When I enter valid city name in the store search textbox
And I click on FIND A STORE button
Then I should see the store search results based on the city