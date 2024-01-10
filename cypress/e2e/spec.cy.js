/// <reference types="cypress" />
describe('template spec', () => {
  it('create a new user', function() {
    cy.visitHomepage()
    cy.login()
    //this makes a random username.
    let username = 'username' + Math.round(Math.random()*1000000)
    let pw = 'password2'
    let employeeName = 'cypress test ing'

    cy.get('li > a').contains('Admin').click()
    cy.get('[type="button"]').contains('Add').click()
    //userrole
    cy.get('.oxd-select-text-input').eq(0).click()
    cy.get('[role=option]').contains('ESS').click()
    //status
    cy.get('.oxd-select-text-input').eq(1).click()
    cy.get('[role=option]').contains('Enabled').click()
    //employee
    cy.get('[placeholder="Type for hints..."]').type(employeeName)
    cy.get('[role=option]').contains(employeeName,{timeout: 6000}).click()
    //username
    cy.get('div:nth-child(4) div:nth-child(2) > input').type(username)
    //password
    cy.get('[type="password"]').eq(0).type(pw)
    //confirmation
    cy.get('[type="password"]').eq(1).type(pw)
    //submit
    cy.get('[type="submit"]').click()
    cy.get('.oxd-text--toast-message').should('be.visible')
    //logout
    cy.get('li [alt="profile picture"]').click()
    cy.get('[role="menuitem"]').contains('Logout').click()
    //login with the new account
    cy.login(username, pw)
    cy.get('.oxd-userdropdown-name').should('have.text', 'cypress ing')
  })

  it('add employee with enabled account', function() {
    let username = 'username' + Math.round(Math.random()*1000000)
    let pw = 'password1'
    cy.visitHomepage()
    cy.login()

    cy.intercept({
      method: 'GET',
      url: '/web/index.php/core/i18n/messages'}
      ).as('loadPage')

    cy.get('li > a').contains('PIM').click()
    cy.wait('@loadPage')
    cy.get('[type="button"]').contains('Add').click()
    cy.wait('@loadPage')


    //firstname
    cy.get('[placeholder="First Name"]').type('cypress')
    //middlename
    cy.get('[placeholder="Middle Name"]').type('test')
    //lastname
    cy.get('[placeholder="Last Name"]').type('ing')
    //with enabled account
    cy.get('[type="checkbox"]').check({force: true})
    cy.contains('Enable').click({force: true})
    //username
    cy.get('div:nth-child(4) div:nth-child(2) > input').type(username)
    //password
    cy.get('[type="password"]').eq(0).type(pw)
    //password confirmation
    cy.get('[type="password"]').eq(1).type(pw)
    //submit
    cy.get('[type="submit"]').click()
    cy.get('.oxd-toast').should('be.visible')
    cy.get('li [alt="profile picture"]').click()
    cy.get('[role="menuitem"]').contains('Logout').click()
    //login with new account
    cy.login(username, pw)
    cy.get('.oxd-userdropdown-name').should('have.text', 'cypress ing')
  })
}
)