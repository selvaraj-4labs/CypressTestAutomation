/// <reference types="cypress" />

var cyp = ""
var amnt = ""

Given('User navigate to wallet dashboard page', () => {
    cy.get('[href="/user/wallet"]').click()
})

When('Select the currency {string} and move to loan section', (currancy) => {
        cy.contains(currancy).click()
        cy.get('.tab-container > :nth-child(3)').click({force:true})
        cyp = currancy
})

And('Enter amount {string} and select collateral currency {string}', (amount,currancy) => {
        cy.get('input[placeholder="Enter Amount"]').eq(0).type(amount, {force:true})
        cy.get('div[ngbdropdown]').eq(1).find('span').eq(0).click({force:true})
        cy.get('input').eq(3)
            .should('be.focused')
            .type(currancy, {force:true})
        cy.get('div[ngbdropdown]  .v-align-middle').eq(1).click({force:true})
        amnt = amount
})

And('Click on take loan button', () => {
    cy.get('.section-action > .btn').click({force:true})
})

Then('Verify the success message is displayed in loan section', () => {
    cy.get('.font-h1').should('contain.text','Success')
    cy.get('.processing-absolute-container')
    .should('contain.text','Your loan request is complete, and the tokens have been deposited in your wallet.')
})

And('Verify the latest record in {string} tab', (tabName) => {
    cy.xpath(`//span[text()="${tabName}"]`).click()
    cy.get('.cdk-virtual-scroll-content-wrapper > :nth-child(1)')
        .should('contain.text', cyp + " " + amnt)
        .should('contain.text', 'Loan Disbursed')
        .should('contain.text','confirmed')
})