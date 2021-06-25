/// <reference types="cypress" />

Given('User navigate to {string} tab', (value) => {
    cy.xpath(`//span[text()="${value}"]`).click()
})

Then('Verify the latest record under {string} section', (value) => {
    cy.xpath(`//span[text()="${value}"]`).eq(1).click()
})

Given('User click on {string} button', (value) => {
    cy.get('.btn-secondary').click()
})

Then('Verify it is navigated to new tab in the browser window', () => {
    cy.switchToTab('Conversation with Darshan')
    //cy.title().should('contain','Conversation')
    //cy.url().should('include','hubspot')
    cy.closeAllTabs()
})