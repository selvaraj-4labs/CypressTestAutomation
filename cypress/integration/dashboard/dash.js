/// <reference types="cypress" />

var campaign_code = ""

Then('It should display Total Asset and Interest Earned', () => {
    cy.contains('Total Asset Value')
        .should('be.visible')
    cy.get(':nth-child(1) > .font-h1')
        .should('contain.text',' ₹')
        .should('not.be.empty') 
        cy.contains('Total Interest Earned')
        .should('be.visible')
    cy.get('.row > :nth-child(2) > .font-h1')
        .should('contain.text','₹')
        .should('not.be.empty')
    cy.get('[tooltipclass="tooltip-class int"]')
        .click()
        .click()
    cy.get('ngb-tooltip-window')
        .should('exist')
        .should('contain.text','Next Payout Date')
        .should('contain.text','Interest Paid Out Till Date') 
})

When('Select Crypto {string} in Your Funds section',function(value){
    cy.xpath(`//button/span[text()="${value}"]`).click()
})

Then('It should display the {string} balance', function(value) {
    cy.get('.coin-balance').should('contain.text',value)
})

Then('It should display {string} and deposit address', function(crypto) {
    cy.get('.second-step-overlay span.v-align-middle').should('be.visible') 
        .should('be.visible')
        .should('not.be.empty')
        .should('have.text',crypto)
    cy.get('.address-input').should('be.visible')
        .should('not.be.empty')
})

Then('It should display Share link', function() {    
    cy.xpath("//span[text()='Share']")
        .should('be.visible')
})

When('Select Crypto {string} and enter amount {string} in Fixed Deposit Section', (crypto,amount) => {
    cy.get('.coin-drop-btn > .flex-container > :nth-child(1)').click()
    cy.get('.search-coin')
        .should('be.focused')
        .type(crypto)
    cy.get('.flex-container > :nth-child(1) > span.v-align-middle')
        .click()
    cy.get('.pull-right > .color-secondary-light')
        .should('contain',crypto)
    cy.get('.int-rate-section > .text-center > .v-align-middle')
        .should('contain',crypto)
    cy.get('[placeholder="Amount"]')
        .should('have.value','')
        .type(amount)
        .should('have.value',amount)
    cy.get('.dollar-holder > .font-h5')
        .should('exist')
        .should('be.visible')
})

Then('It should display success message in FD Section', function() {
    cy.get('.ng-star-inserted > .font-h1')
        .should('be.visible')
        .should('contain','Success')
    cy.get('app-fixed-deposit .ng-star-inserted > .font-h4')
        .should('contain','Your Fixed Deposit has been created')
})

Then('It should navigate to Instant Swap page', function() {
    cy.url().should('include','/user/swapCrypto')
})

Then('It should navigate to Buy page',  function() {
    cy.url().should('include','/user/buyCrypto')
})

Then('It should navigate to trading page', function() {
    cy.url().should('include','/trading/')
})

And('Update phone number {string}', function(txtNumber){
    cy.get('.phone-input')
        .clear()
        .type(txtNumber)
})

Then('It should display as {string}', function(txtValue){
    cy.get('.processing-absolute-container').should('be.visible')
        .should('contain.text',txtValue)
})

Then('Schedule Call should navigate to meeting book page', function() {    
   const pop_url = 'http://bit.ly/talktodarshan'
   cy.window().then(win => {
     const stub = cy.stub(win,'open').as('windowopen')
   })
   cy.wait(6000)
   cy.xpath('//button[text()=" Schedule Call "]').click()
   cy.get('@windowopen').should('be.calledWith',pop_url)
})


