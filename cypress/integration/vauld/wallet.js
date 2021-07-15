/// <reference types="cypress" />

Then('It displays {string} and deposit address', function(crypto) {
    cy.get('.tab-body span.v-align-middle')
        .should('not.be.empty')
        .should('have.text',crypto)
    cy.get('div.tab-body div.address-input')
        .should('not.be.empty')
})

And('It display Share link', function() {    
    cy.xpath("//span[text()='Share']")
        .should('exist')
})

And('Select Receiver Address', function() {
    cy.xpath("//input[@placeholder='Enter Address']/following::button").eq(0).click({force:true})
    cy.get('.address').eq(0).click({force:true})
    cy.wait(3000)
})

And('Enter OTP', function() { 
    cy.get('[name="1"]').type('0',{force:true})
    cy.get('[name="2"]').type('0',{force:true})
    cy.get('[name="3"]').type('0',{force:true})
    cy.get('[name="4"]').type('0',{force:true})
})

And('Select the Collateral Currency {string}', function(txtCrypto) {
    cy.get('.coin-drop-btn').eq(1).click({force:true})
    cy.xpath(`//div[contains(@class,'dropdown-item')]//span[contains(text(),"${txtCrypto}")]`).click({force:true})
    cy.get('.coin-drop-container span.v-align-middle').eq(1)
        .should('contain.text',txtCrypto) 
})

And('Click on active loan', function() {
    cy.get('.filter-btn').click({force:true})
    cy.get('input[type="checkbox"]').click({force:true})
    cy.get('.select-btn').eq(0).click({force:true})
    cy.xpath("//span[text()='active']").click({force:true})
    cy.get('.loan-card').eq(0).click({force:true})     
})

Then('Pay back option selected as default', function() {
    cy.get('input[value="token"]').should('be.checked')
})

Then('It should display the amount',function() {
    cy.get('input[placeholder="Enter Amount"]').invoke('val').then(parseFloat).should('be.gt',0)
})

And('Click on Close loan using Collateral option', function() {
    cy.get('input[value="collateral"]').click({force:true}).should('be.checked')
})

Then('It should display the amount to be deducted and refunded', function() {
    cy.get('.summary-container .color-secondary-light').eq(0)
        .should('contain.text',"Amount To Be Deducted")
    cy.get('.summary-container .color-secondary-light').eq(1)
        .should('contain.text',"Amount To Be Refunded")
})

Then('Deposit Via RTGS option is selected as default', function() {
    cy.get('input[value="centralAccount"]').should('be.checked')
})

And('Enter the amount value {string}', function(amount){
    cy.get('input[placeholder="Enter amount"]').type(amount)
})

And('Enter the transaction id', function() {    
    cy.get('input[placeholder="Enter transaction id"]').type(Math.floor(Math.random() * 100000))
})

And('Select Deposit Via UPI option', function() {
    cy.get('input[value="centralAccountUpi"]').click({force:true}).should('be.checked')
})

And('Select Deposit Via Visa option', function() {
    cy.get('input[value="instantM"]').click({force:true}).should('be.checked')
})

Then('Check on Pay button', function(){
    cy.get('.btn-primary').eq(0).should('be.visible').and('be.enabled')
})

And('Select the Bank Account', function() {
    cy.get('.dropdown-btn').click({force:true})
    cy.get('.bank-dropdown-item').click({force:true})
})
