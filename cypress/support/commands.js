// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', function (email=Cypress.env('userName'),pwd=Cypress.env('password')) { 
    cy.visit('/')
    cy.get('[type="email"]').type(email)
    cy.get('#password').type(pwd, {log:false})
    cy.get('.btn').invoke('text').as('txtBeforeClick')
    cy.get('.btn').click()
    cy.get('.btn').invoke('text').as('txtAfterClick')
    cy.get('@txtBeforeClick').should('not.eq',cy.get('@txtAfterClick'))
    //cy.wait(3000)
    cy.get('[type="radio"]').first().parent().click({force:true})
    cy.get('.continue-btn-margin').click()
    cy.get('[name="1"]').type('0')
    cy.get('[name="2"]').type('0')
    cy.get('[name="3"]').type('0')
    cy.get('[name="4"]').type('0')
    cy.get('.continue-btn-margin').click()
    //cy.wait(3000)
    cy.url().should('include','dashboard')
  })

  Cypress.Commands.add('toggle', function () { 
    cy.get('.rail').click()
  })

  Cypress.Commands.add('btnClick', function (txtBtnName) { 
    cy.xpath(`//button[contains(text(),"${txtBtnName}")]`)
        .should('be.visible')
        .should('be.enabled')
        .click({force:true})  
  })

  Cypress.Commands.add('lnkClick', function (txtLnkName) { 
    cy.xpath(`//span[text()="${txtLnkName}"]`)
        .should('be.visible')
        .click({force:true})
  })

  Cypress.Commands.add('iconClick', function (txtIconName) { 
    cy.xpath(`//div[text()="${txtIconName}"]`)
        .should('be.visible')
        .click({force:true})
  })

  Cypress.Commands.add('chkboxClick', function () { 
    cy.get('input[type="checkbox"]')
        .should('not.be.checked')
        .check({force:true})
        .should('be.checked')
  })

  Cypress.Commands.add('enterAmount', function (txtValue) { 
    cy.get('input[placeholder*="Amount"]').eq(0)
        .should('have.value','')
        .type(txtValue,{force:true})
        .should('have.value',txtValue)
  })

  Cypress.Commands.add('randomString', function(length=5) {
      // Declare all characters
      let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
      // Pick characers randomly
      let str = '';
      for (let i = 0; i < length; i++) {
          str += chars.charAt(Math.floor(Math.random() * chars.length));
      }
  
      return str;
  })

  Cypress.Commands.add('sign_in2', () => {  
    let somedata   
    cy.fixture('example').then((data) => {
        somedata = data
    })    
    cy.wrap(somedata).as('newdata')
   cy.get('[type="email"]').type(this.newdata.email)
   cy.get('#password').type(this.newdata.password)
   cy.on('url:changed')
   const pop_url = ""
   cy.window().then(win => {
     const stub = cy.stub(win,'open').as('windowopen')
   })
   cy.xpath('//button[text()=" Schedule Call "]').click()
   cy.get('@windowopen').should('be.calledWith',pop_url)
   cy.window().then(win => {
     win.location.href = pop_url
   })

 })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
