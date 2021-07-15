/// <reference types="cypress" />

var campaign_code = ""

And('Enter the new campaign code', function() {
    campaign_code = Math.random().toString().substr(2, 5)
    cy.get("input[placeholder='New Campaign Code']").type(campaign_code)
})



And('Click on {string} in Create New Basket', function(btnCrypto) {
    cy.get('.coin-options .text-center').each(($el,index,$list) => {
        if($el.text().trim() === btnCrypto){
            cy.wrap($el).click()
        }
    })
})

Then('It should display the updated new campaign address in the text field', function () {
    cy.get('.address-input').should('contain.text',campaign_code)
})

Then('It should display with Telegram, Whatsapp, Twitter, Reddit and Facebook option', function() {    
    cy.xpath("//a[contains(@href,'whatsapp')]")
        .should('be.visible')
    cy.xpath("//a[contains(@href,'telegram.me/share')]")
        .should('be.visible')
    cy.xpath("//a[contains(@href,'twitter')]")
        .should('be.visible')
    cy.xpath("//a[contains(@href,'reddit')]")
        .should('be.visible')
    cy.xpath("//a[contains(@href,'facebook')]")
        .should('be.visible')
})
