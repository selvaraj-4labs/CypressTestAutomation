/// <reference types="cypress" />

Then('Advance Option button should be disabled', function() {
    cy.get('.adv-link').should('be.disabled')
})

Then('Check Principal & Interest option is selected', function() {
    cy.get('.adv-link').eq(0).click()
    cy.get('.color-secondary-dark')
        .should('contain.text','Principal & Interest')
})

Then('Check Principal Only option is selected', function() {
    cy.get('.color-secondary-dark')
        .should('contain.text','Principal Only')
})

Then('Perform deletion on created record', function() {
    cy.lnkClick('Fixed Deposits')
    cy.wait(3000)
    cy.get('.open-arrow').eq(0).click({force:true})
    cy.get('.opt-btn').eq(0).click({force:true})
    cy.get('button.pull-right.btn.btn-primary').click({force:true})
    cy.wait(3000)
})