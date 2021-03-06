/// <reference types="cypress" />

var cyp = ""
var amnt = ""

Given('User in dashboard page', () => {
    cy.url().should('include','dashboard')
})

When('Select the currency {string} and enter amount {string} in fixed deposit section', (currancy,amount) => {
        cy.get('.coin-drop-btn > .flex-container > :nth-child(1)').click()
        cy.get('.search-coin')
            .should('be.focused')
            .type(currancy)
        cy.get('.flex-container > :nth-child(1) > span.v-align-middle')
            .click()
        cy.get('.pull-right > .color-secondary-light')
            .should('contain',currancy)
        cy.get('.int-rate-section > .text-center > .v-align-middle')
            .should('contain',currancy)
        cy.get('[placeholder="Amount"]')
            .should('have.value','')
            .type(amount)
            .should('have.value',amount)
        cy.get('.dollar-holder > .font-h5')
            .should('exist')
            .should('be.visible')
        cyp = currancy
        amnt = amount
})

Then('Verify payout amount and interest rate fields changed', () => {
    cy.get('span[class*=font-h2]')
        .should('be.visible')
        .should('contain','INTEREST 9.38% APY')
    cy.get('app-fixed-deposit .int-rate-section > .text-center > .v-align-middle')
        .should('be.visible')
        .should('contain','Payout Amount USDT')
})

And('Click on create fixed deposit button', () => {
    cy.contains('CREATE FIXED DEPOSIT')
        .should('be.enabled')
        .click()
})

Then('Verify the success message is displayed', () => {
    cy.get('.ng-star-inserted > .font-h1')
        .should('be.visible')
        .should('contain','Success')
    cy.get('app-fixed-deposit .ng-star-inserted > .font-h4')
        .should('contain','Your Fixed Deposit has been created')
    cy.get('.font-h3 > span.v-align-middle')
        .should('contain',cyp)
})

And('Verify the latest record under {string} section', (tabName) => {
    cy.xpath(`//span[text()="${tabName}"]`).click()
    cy.get('.table-body > :nth-child(1)')
        .should('contain.text', cyp + " " + amnt)
})

And('Navigate to {string} tab and Verify the latest record under {string} section', (tabName,sectionName) => {
    cy.xpath(`//span[text()="${tabName}"]`).click()
    cy.xpath(`//span[text()="${sectionName}"]`).eq(1).click()
    cy.get('.table-body > :nth-child(1)')
        .should('contain.text', cyp + " " + amnt)
})