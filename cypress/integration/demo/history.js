/// <reference types="cypress" />

Given('User navigate to {string} tab', (value) => {
    cy.xpath(`//span[text()="${value}"]`).click()
})

Then('Verify the latest record under {string} section', (value) => {
    cy.xpath(`//span[text()="${value}"]`).eq(1).click()
})

Given('User click on {string} button', (value) => {
    const pop_url = 'http://bit.ly/talktodarshan'
    cy.window().then(win => {
        const stub = cy.stub(win,'open').as('new_window')
    })
    cy.get('.btn-secondary').invoke('removeAttr','target').click()
    cy.get('@new_window').should('be.calledWith',pop_url)
    //cy.url().should('include','meeting')
})

Then('Verify it is navigated to new tab in the browser window', () => {
    //cy.get('')
})