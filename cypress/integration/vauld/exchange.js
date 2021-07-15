/// <reference types="cypress" />

When('Click on Pro-Trading under Exchange', function() {
    cy.get('.exchange').invoke('show').trigger('mouseenter').trigger('mouseover')
    cy.xpath('//span[text()="Pro Trading"]').click({force:true})
    cy.url().should('include', 'trading')
    cy.wait(3000)
})

When('Select {string} From Market Pair dropdown', function(pair) {
    cy.get('.pair-select-btn').invoke('show').trigger('mouseenter').trigger('mouseover')
    cy.get('input[placeholder="Search"]').eq(0).type(pair)
    cy.get('.pair-row').eq(0).click({force:true})
})

Then('It should display {string} in Trading Page', function(pair) {
    cy.get('.pair-select-btn span').should('contain.text',pair)
})

When('Click on BUY Button', function() {
    cy.get('button[title="Place an order"]').click({force:true})
})

When('Click on SELL Button', function() {
    cy.get('button[title="Place an order"]').click({force:true})
})

And('Enter Indian Rupee {string}', function(txtAmount) {
    cy.wait(3000)
    cy.get('input[placeholder="Enter Amount"]').eq(1)
        .type(txtAmount, {force:true})
        .should('have.value',txtAmount)
})

And('Check and Click on Proceed Button', function() {
    if(Cypress.$('button.pull-right.btn.btn-primary').length > 0){
        cy.get('button.pull-right.btn.btn-primary').click({force:true})
    }    
})