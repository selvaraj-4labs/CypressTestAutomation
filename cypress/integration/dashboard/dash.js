/// <reference types="cypress" />

Given('User navigate to the vauld website', () => {
    cy.visit('https://uat.bankofhodlers.com/auth/signin')
    cy.title().should('contain','Sign In')
})

When('Enter {string} as username and {string} as password', (username,password) => {
    cy.get('[type="email"]').type(username)
    cy.get('#password').type(password)
    cy.get('.btn').click()
    cy.get('[type="radio"]').first().parent().click({force:true})
    cy.get('.continue-btn-margin').click()
    cy.get('[name="1"]').type('0')
    cy.get('[name="2"]').type('0')
    cy.get('[name="3"]').type('0')
    cy.get('[name="4"]').type('0')
    cy.get('.continue-btn-margin').click()
    cy.url().should('include','dashboard')
})

Then('Verify Total Asset Value is displayed', () => {
    cy.contains('Total Asset Value')
        .should('be.visible')
    cy.get(':nth-child(1) > .font-h1')
        .should('contain.text',' ₹')
        .should('not.be.empty')
})

And('Verify Total Interest Earned is displayed', () => {
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

