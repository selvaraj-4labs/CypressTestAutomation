Feature: VAULD - SMOKE

    @skip
    Scenario: #1) Dashboard - Your Funds
        Given As a existing Vauld user in Dashboard page
        Then It should display Total Asset and Interest Earned
        When Select Crypto 'ETH' in Your Funds section
        Then It should display the 'ETH' balance
        When Click on 'deposit funds' button
        Then It should display 'ETH' and deposit address
        Then It should display Share link

    @skip
    Scenario: #2) Dashboard - Fixed Deposit
        Given As a existing Vauld user in Dashboard page
        When Select 'BTC' Crypto
        And Enter amount '0.0001'
        And Click on 'CREATE FIXED DEPOSIT' button
        Then It should display success message in FD Section

    @skip
    Scenario: #3) Dashboard - Start Trading
        Given As a existing Vauld user in Dashboard page
        When Click on 'SWAP NOW' link
        Then It should navigate to Instant Swap page
        And Click on 'Dashboard' link
        When Click on 'BUY NOW' link
        Then It should navigate to Buy page
        And Click on 'Dashboard' link
        When Click on 'TRADE NOW' link
        Then It should navigate to trading page
        Then Click on 'EXIT TRADING' link

    @skip
    Scenario: #4) Dashboard - Your Account Manager
        Given As a existing Vauld user in Dashboard page
        When Click on 'CALL ME NOW' button
        And Update phone number '9092680083'
        And Click on 'Call Now' button
        Then It should display as 'Thank you! We will be calling you shortly'
        Then Schedule Call should navigate to meeting book page

    ############### DashBoard Ends Here ####################
    ############### Wallet Beings Here #####################

    @skip
    Scenario: #5) Wallet - Deposit
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'BTC' link 
        Then It displays 'BTC' and deposit address
        And It display Share link

    @skip
    Scenario: #6) Wallet - Send
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'ETH' link
        And Click on 'send' Link
        And Enter amount '0.0001'
        And Select Receiver Address
        And Click on 'GENERATE OTP' Button
        And Enter OTP
        When Click on 'SEND' Button
        Then It should display message as 'Success'
        Then It should also display message as 'Your request has been initiated, You will receive an update on registered e-mail, after confirmation from the blockchain'

    @skip
    Scenario: #7) Wallet - Loans - Take Loan
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'BTC' link 
        And Click on 'loans' Link
        And Enter amount '0.001'
        And Select the Collateral Currency 'ETH'
        And Click on 'Take Loan' Button
        Then It should display message as 'Success'
        Then It should also display message as 'Your loan request is complete, and the tokens have been deposited in your wallet.'

    @skip
    Scenario: #8) Wallet - Pay Back Loan using Crypto
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'BTC' link 
        And Click on 'loans' Link
        And Click on 'View Loans' Link
        And Click on active loan
        And Click on 'Pay Back Loan' Button
        Then Pay back option selected as default
        And Click on 'Continue' Button
        And Click on 'FULL' Button
        Then It should display the amount
        And Click on 'Make Payment' Button
        Then It should display message as 'Success'
        Then It should also display message as 'Your Payment is Successful and your loan is closed!'

    @skip
    Scenario: #9) Wallet - Pay Back Loan using Collateral
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'BTC' link 
        And Click on 'loans' Link
        And Click on 'View Loans' Link
        And Click on active loan
        And Click on 'Pay Back Loan' Button
        And Click on Close loan using Collateral option
        And Click on 'Continue' Button
        Then It should display the amount to be deducted and refunded
        And Click on 'Confirm' Button
        Then It should display message as 'Success'
        Then It should also display message as 'Your request to close the loan with collateral is in progress and will be processed shortly!'

    @skip
    Scenario: #10) Wallet - Take More Loan
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'BTC' link 
        And Click on 'loans' Link
        And Click on 'View Loans' Link
        And Click on active loan
        And Click on 'Take More Loan' Button
        And Click on 'MAX' Button
        And Click on 'Take More Loan' Button
        Then It should display message as 'Success'
        Then It should also display message as 'Add-on loan has been disbursed to your account successfully!'

    @skip
    Scenario: #11) Wallet - Add More Collateral
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'BTC' link
        And Click on 'loans' Link
        And Click on 'View Loans' Link
        And Click on active loan
        And Click on 'Add Collateral' Button
        And Enter amount '0.005'
        And Click on 'Add More Collateral' Button
        Then It should display message as 'Success'
        Then It should also display message as 'Collateral has been added for this loan successfully!'

    @skip
    Scenario: #12) Wallet - Release Collateral
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'BTC' link 
        And Click on 'loans' Link
        And Click on 'View Loans' Link
        And Click on active loan
        And Click on 'Remove Collateral' Button
        And Click on 'MAX' Button
        Then It should display the amount
        And Click on 'Release Collateral' Button
        Then It should display message as 'Success'
        Then It should also display message as 'Collateral has been unlocked successfully!'

    @skip
    Scenario: #13) Wallet - Deposit Via RTGS
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'INR' link
        Then Deposit Via RTGS option is selected as default
        And Click on 'Confirm Payment Method' Button
        And Enter amount '15'
        And Enter the transaction id '1234'
        And Click on 'SUBMIT' Button
        Then It should display message as 'Success'
        Then It also display message as 'Your INR Balance Will Be Updated In The Next 4 Hours, Once The Transaction Is Verified'

    @only
    Scenario: #14) Wallet - Deposit Via UPI
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'INR' link
        And Select Deposit Via UPI option
        And Click on 'Confirm Payment Method' Button
        And Enter amount '15'
        And Enter the transaction id '457812'
        And Click on 'SUBMIT' Button
        Then It should display the success message

    @skip
    Scenario: #15) Wallet - Deposit Via Visa
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'INR' link
        And Select Deposit Via Visa option
        And Click on 'Confirm Payment Method' Button
        And Enter amount '15'
        And Click on 'PAY' button
        Then It should navigate to new payment gateway

    @skip
    Scenario: #16) Wallet - Withdraw
        Given As a existing Vauld user in Dashboard page
        When Click on 'Wallet' link
        When Click on 'INR' link
        And Click on 'Withdraw INR' Link
        And Enter amount '12'
        And Select the Bank Account
        And Click on 'Continue' Button
        Then It displays 'Success'

    ############### Wallet Ends Here #####################
    ############### FD Beings Here #####################

    @skip
    Scenario: #17) Fixed Deposit - Auto Renew OFF
        Given As a existing Vauld user in Dashboard page
        When Click on 'Fixed Deposits' link
        When Select 'ETH' Crypto
        And Enter amount '0.0001'
        And Toggle 'Auto Renew - Off'
        And Click on 'CREATE FIXED DEPOSIT' button
        Then It should display message as 'Success'
        Then It also display message as 'Your Fixed Deposit has been created'
	
    @skip
    Scenario: #18) Fixed Deposit - Auto Renew ON
        Given As a existing Vauld user in Dashboard page
        When Click on 'Fixed Deposits' link
        When Select 'BTC' Crypto
        And Enter amount '0.0001'
        And Click on 'CREATE FIXED DEPOSIT' button
        Then It should display message as 'Success'
        Then It also display message as 'Your Fixed Deposit has been created'

    @skip
    Scenario: #19) Fixed Deposit - Auto Renew ON - Principal Only
        Given As a existing Vauld user in Dashboard page
        When Click on 'Fixed Deposits' link
        When Select 'BTC' Crypto
        And Enter amount '0.0001'
        And Click on 'Advanced Options' button
        And Toggle 'Principal only'
        And Click on 'CREATE FIXED DEPOSIT' button
        Then It should display message as 'Success'
        Then It also display message as 'Your Fixed Deposit has been created'

    ############### FD Ends Here #####################
    ############### Exchange Beings Here #####################

    @skip
    Scenario: #20) Instant Buy & Sell - BUY
        Given As a existing Vauld user in Dashboard page
        When Click on 'buyCrypto' under Exchange 
        When Select 'INR' in I have dropdown
        And Enter amount '750'
        And Select 'XRP' in I want dropdown
        And Click on 'Buy Now' Button
        And Click on 'Proceed' Button
        Then it should display Success Message

    @skip
    Scenario: #21) Instant Buy & Sell - SELL
        Given As a existing Vauld user in Dashboard page
        When Click on 'buyCrypto' under Exchange 
        When Click on 'SELL' Section
        And Select 'XRP' in I have dropdown 
        And Enter amount '20'
        And Click on 'SELL NOW' Button
        Then it should display Success Message

    @skip
    Scenario: #22) Instant Swap
        Given As a existing Vauld user in Dashboard page
        When Click on 'swapCrypto' under Exchange
        When Select 'XRP' in I have Crypto dropdown
        And Enter amount '100'
        When Select 'USDT' in I want Crypto dropdown
        And Click on 'SWAP NOW' Button
        Then It should display Success Message
	
    @skip
    Scenario: #23) Pro Trading - Buy-Limit
        Given As a existing Vauld user in Dashboard page
        When Click on 'trading' under Exchange
        When Select 'XRP/INR' From Market Pair dropdown
        Then It should Display 'XRP/INR' Trading Page
        When Click on 'BUY' Section
        And Select 'Limit'
        And Enter amount '19'
        When click on Deposit Button
        Then It should display Success Message

    @skip
    Scenario: #24) Pro Trading - Sell-Limit
        Given As a existing Vauld user in Dashboard page
        When Click on 'trading' under Exchange
        When Select 'XRP/INR' From Market Pair dropdown
        Then It should Display 'XRP/INR' Trading Page
        When Click on 'SELL' Section
        And Select 'Limit'
        And Enter amount '19'
        When Click on Deposit Button
        Then It should display Success Message
	
    @skip
    Scenario: #25) Pro Trading - Buy-Market
        Given As a existing Vauld user in Dashboard page
        When Click on 'trading' under Exchange
        When Select 'XRP/INR' From Market Pair dropdown
        Then It should Display 'XRP/INR' Trading Page
        When Click on 'BUY' Section
        And Select 'Market'
        And Enter amount '800'
        When Click on Deposit Button
        Then It should display Success Message
	
    @skip
    Scenario: #26) Pro Trading - Sell-Market
        Given As a existing Vauld user in Dashboard page
        When Click on 'trading' under Exchange
        When Select 'XRP/INR' From Market Pair dropdown
        Then It should Display 'XRP/INR' Trading Page
        When Click on 'SELL' Section
        And Select 'Market'
        And Enter amount '19'
        When Click on Deposit Button
        Then It should display Success Message

    @skip
    Scenario: #27) OTC Trade
        Given As a existing Vauld user in Dashboard page
        When Click on 'otc' under Exchange
        When Select 'BTC' in I want dropdown
        And Select 'ETH' in I have dropdown
        And Enter amount '1'
        And Click on 'GET A QUOTE' button
        Then It should display message as 'Request Successfully Received'
        Then It also display message as 'Our team will get back to you via email in under 2 hours with a competitive quote for your request.'

    @skip
    Scenario: #28) AIP
        Given As a existing Vauld user in Dashboard page
        When Click on 'aip' under Exchange
        When Click on 'Create New Basket' button
        And Click on 'BAT' in Create New Basket        
        And Click on 'Create Allocation' button
        And Enter amount '2255'
        And Click on 'Create AIP' button
        Then It should display message as 'AIP Order Created Successfully'
        Then It also display message as 'Your AIP is enabled.'
    
    ############### Exchange Ends Here #####################
    ############### Referral Beings Here #####################

    @skip
    Scenario: #29) Referral - Create Campaign
        Given Login using 'selvaraj.alagarsamy.work@gmail.com' and 'Password123'
        When Click on 'Referral' link
        When Click on 'Create Campaign' link
        And Enter the new campaign code
        And Toggle 'Kickbacks'
        And Click on ' Full' link
        And Click on  checkbox
        And Click on 'Create Campaign' button
        Then It should display the updated new campaign address in the text field

    @skip
    Scenario: #30) Referral - Share
        Given As a existing Vauld user in Dashboard page
        When Click on 'Referral' link
        When Click on 'Share' link
        Then It should display with Telegram, Whatsapp, Twitter, Reddit and Facebook option

    ############### Referral Ends Here #####################