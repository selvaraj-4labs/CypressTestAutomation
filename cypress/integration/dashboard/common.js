/// <reference types="cypress" />

Given('As a existing Vauld user in Dashboard page', () => {    
    cy.login()    
})

Given('Login using {string} and {string}', (email,pwd) => {
    cy.login(email,pwd)    
})

When('Click on {string} under Exchange', function(txtName) {
    cy.get('.exchange').invoke('show').trigger('mouseenter').trigger('mouseover')
    cy.get('[routerLink=' + txtName + ']').click({force:true})
    cy.url().should('include', txtName)
})

When('Click on {string} button', function(txtBtnName) {
    cy.btnClick(txtBtnName)  
})

When('Click on {string} link', function(txtLnkName) {
    cy.lnkClick(txtLnkName)
})

When('Select {string} Crypto', function(txtCrypto) {
    cy.get('.coin-drop-btn').eq(0).click()
    cy.xpath(`//div[contains(@class,'dropdown-item')]//span[contains(text(),"${txtCrypto}")]`).click()
    /*
    cy.get('.search-coin').eq(0).type(txtCrypto)
    cy.wait(5000)
    cy.get('.dropdown-item span.v-align-middle').eq(0).click()
    cy.wait(3000)
    */
    cy.get('.coin-drop-container span.v-align-middle').eq(0)
        .should('contain.text',txtCrypto)    
})

And('Click on {string} Button', function(txtBtnName) {
    cy.xpath(`//button[contains(text(),"${txtBtnName}")]`)
    .should('be.enabled')
    .click({force:true})  
})

And('Click on {string} Link', function(txtLnkName) {
    cy.xpath(`//span[text()="${txtLnkName}"]`).first().click({force:true})
})

And('Enter amount {string}', function(amount) {
    cy.enterAmount(amount)
})


Then('It should display message as {string}', function(txtValue) {
    cy.wait(3000)
    cy.get('.color-secondary-dark').should('be.visible')
        .should('contain.text',txtValue)
})

Then('It also display message as {string}', function(txtValue) {
    cy.get('.color-secondary-light').should('be.visible')
        .should('contain.text',txtValue)
})

Then('It should also display message as {string}', function(txtValue) {
    cy.get('.color-secondary-hint').should('be.visible')        
        .should('contain.text',txtValue)
})

And('Toggle {string}', function(txtToggle) {
    cy.get('.rail').eq(0).click()
})

And('Click on  checkbox', function() {
    cy.get('input[type="checkbox"]').click()
})


When('Select {string} in I want dropdown', function(txtCrypto) {
    cy.get('.coin-drop-btn').eq(0).click()
    cy.xpath(`//div[contains(@class,'dropdown-item')]//span[contains(text(),"${txtCrypto}")]`).click()
    cy.get('.coin-drop-container span.v-align-middle').eq(0)
        .should('contain.text',txtCrypto)    
})

And('Select {string} in I have dropdown', function(txtCrypto) {
    cy.get('.coin-drop-btn').eq(1).click()
    cy.xpath(`//div[contains(@class,'dropdown-item')]//span[contains(text(),"${txtCrypto}")]`).click()
    cy.get('.coin-drop-container span.v-align-middle').eq(1)
        .should('contain.text',txtCrypto)    
})

//*****************Generic Functions **********************


Then('It should display {string}', function(displayMsg) {
    cy.get('.processing-absolute-container .color-secondary-dark').eq(0)
        .should('be.visible')
        .should('contain.text',displayMsg)
    cy.xpath(`//*[contains(text(),"${displayMsg}")]`)
        .should('exist')
        .should('be.visible')
})

Then('It should also display {string}', function(txtMsg) {
    cy.get('.processing-absolute-container .color-secondary-light').eq(0)
        .should('be.visible')
        .should('contain.text',txtMsg)
    cy.xpath(`//*[contains(text(),"${txtMsg}")]`)
        .should('exist')
        .should('be.visible')
})

Then('It should display as well {string}', function(message) {
    cy.get('.processing-absolute-container .color-secondary-hint').eq(0)
        .should('be.visible')
        .should('contain.text',message)
    cy.xpath(`//*[contains(text(),"${message}")]`)
        .should('exist')
        .should('be.visible')
})