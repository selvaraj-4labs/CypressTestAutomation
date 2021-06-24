
Feature: Demo Purpose for FixedDeposit and Loan functionality

    Background: Login as a existing user
        Given User navigate to the vauld website
        When Enter the credentials and click on Sign in button
                | username | password |
                | ajfazt@gmail.com | Password12345 |
        And Choose Yes I trust the device option
        And Enter the OTP and Click on Continue button
        Then Verify user successfully navigated to the dashboard page
    
    Scenario: Perform Loan using USDT crypto
        Given User navigate to wallet dashboard page
        When Select the currency and move to loan section
                | currancy | 
                | USDT     | 
        Then Enter amount and select collateral currency 
                | amount | currancy |
                | 12.23 | XLM |
        And  Click on take loan button
        Then Verify the success message is displayed in loan section