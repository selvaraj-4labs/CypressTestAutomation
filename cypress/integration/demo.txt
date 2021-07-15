
Feature: Demo Purpose for FixedDeposit and Loan functionality

    Background: Login as a existing user
        Given User navigate to the vauld website
        When Enter the credentials and click on Sign in button
                | username | password |
                | ajfazt@gmail.com | Password12345 |
        And Choose Yes I trust the device option
        And Enter the OTP and Click on Continue button
        Then Verify user successfully navigated to the dashboard page
    
    @focus
    Scenario: Perform FD using USDT crypto in dashboard page
        Given User in dashboard page
        When Select the currency 'USDT' and enter amount '2.1225' in fixed deposit section
        Then Verify payout amount and interest rate fields changed
        And  Click on create fixed deposit button
        Then Verify the success message is displayed
        And Verify the latest record under "Fixed Deposits" section
        And Navigate to 'History' tab and Verify the latest record under 'Fixed Deposits' section

    @focus   
    Scenario: Perform Loan using USDT crypto
        Given User navigate to wallet dashboard page
        When Select the currency 'USDT' and move to loan section
        And Enter amount '12.1225' and select collateral currency 'XLM'
        And  Click on take loan button
        Then Verify the success message is displayed in loan section
        And Verify the latest record in 'History' tab

    Background: 
        Given As a existing Vauld user in Dashboard page

    @skip
    Scenario Outline: #1) Dashboard - Your Funds        
        Then It should display Total Asset and Interest Earned
        When Select Crypto '<token>' in Your Funds section
        Then It should display the '<token>' balance
        When Click on 'deposit funds' button
        Then It should display '<token>' and deposit address
        Then It should display Share link
        Examples:
            | token |
            | ETH  |
            | BTC  |