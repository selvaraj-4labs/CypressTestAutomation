
Feature: Demo Purpose for FixedDeposit and Loan functionality

    Background: Login as a existing user
        Given User navigate to the vauld website
        When Enter the credentials and click on Sign in button
                | username | password |
                | ajfazt@gmail.com | Password12345 |
        And Choose Yes I trust the device option
        And Enter the OTP and Click on Continue button
        Then Verify user successfully navigated to the dashboard page
    
    @ignore
    Scenario: Perform FD using USDT crypto in dashboard page
        Given User in dashboard page
        When Select the currency and enter amount in fixed deposit section
                | currancy | amount |
                | USDT     | 2.345 |
        Then Verify payout amount and interest rate fields changed
        And  Click on create fixed deposit button
        Then Verify the success message is displayed

    @skip    
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
    
    @skip
    Scenario: History tab validation
        Given User navigate to "History" tab
        Then Verify the latest record under "Fixed Deposits" section
        
    @wip
    Scenario: Schedule a call
        Given User click on "SCHEDULE CALL" button
        Then Verify it is navigated to new tab in the browser window