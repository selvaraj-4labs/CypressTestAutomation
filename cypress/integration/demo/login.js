/// <reference types="cypress" />

Given('User navigate to the vauld website', () => {
    cy.visit('https://uat.bankofhodlers.com/auth/signin')
    cy.title().should('contain','Sign In')
})

When('Enter the credentials and click on Sign in button', (data) => {
    data.hashes().forEach((row) => {
        cy.get('[type="email"]').type(row.username)
        cy.get('#password').type(row.password)
    })
    cy.get('.btn').click()
})

And('Choose Yes I trust the device option', () => {
    cy.get('[type="radio"]').first().parent().click({force:true})
    cy.get('.continue-btn-margin').click()
})

And('Enter the OTP and Click on Continue button', () => {
    cy.get('[name="1"]').type('0')
    cy.get('[name="2"]').type('0')
    cy.get('[name="3"]').type('0')
    cy.get('[name="4"]').type('0')
    cy.get('.continue-btn-margin').click()
})

Then('Verify user successfully navigated to the dashboard page', () => {
    cy.url().should('include','dashboard')
    cy.title().should('contain','Vauld')
})