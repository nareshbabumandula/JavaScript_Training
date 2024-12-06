Feature: SauceDemo Login

@smoke
Scenario: Successful login with valid credentials
Given I navigate to the SauceDemo login page
When I login with "standard_user" and "secret_sauce"
Then I should see the products page
