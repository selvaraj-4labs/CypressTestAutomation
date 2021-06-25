/// <reference types="cypress" />


Given('User navigate to wallet dashboard page', () => {
    cy.get('[href="/user/wallet"]').click()
})

When('Select the currency and move to loan section', (data) => {
    data.hashes().forEach((row) => {
        cy.contains(row.currancy).click()
        cy.get('.tab-container > :nth-child(3)').click({force:true})
    })
})

Then('Enter amount and select collateral currency', (data) => {
    data.hashes().forEach((row) => {
        cy.get('input[placeholder="Enter Amount"]').eq(0).type(row.amount, {force:true})
        cy.get('div[ngbdropdown]').eq(1).find('span').eq(0).click({force:true})
        cy.get('input').eq(3)
            .should('be.focused')
            .type(row.currancy, {force:true})
        cy.get('div[ngbdropdown]  .v-align-middle').eq(1).click({force:true})
    })
    
})

And('Click on take loan button', () => {
    cy.get('.section-action > .btn').click({force:true})
})

Then('Verify the success message is displayed in loan section', () => {
    cy.get('.font-h1').should('contain.text','Success')
    cy.get('.processing-absolute-container')
    .should('contain.text','Your loan request is complete, and the tokens have been deposited in your wallet.')
})