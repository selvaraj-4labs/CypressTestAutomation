/// <reference types="cypress" />

var cyp = ""

Given('User in dashboard page', () => {
    cy.url().should('include','dashboard')
})

When('Select the currency and enter amount in fixed deposit section', (data) => {
    data.hashes().forEach((row) => {
        cy.get('span.ng-tns-c16-8').click()
        cy.get('.search-coin')
            .should('be.focused')
            .type(row.currancy)
        cy.get('span.ng-tns-c16-8 > span.v-align-middle')
            .click()
        cy.get('.pull-right > .color-secondary-light')
            .should('contain',row.currancy)
        cy.get('.int-rate-section > .text-center > .v-align-middle')
            .should('contain',row.currancy)
        cy.get('[placeholder="Amount"]')
            .should('have.value','')
            .type(row.amount)
            .should('have.value',row.amount)
        cy.get('.dollar-holder > .font-h5')
            .should('exist')
            .should('be.visible')
        cyp = row.currancy
    })

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

