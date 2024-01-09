/// <reference types="cypress" />
describe('template spec', () => {
  it.only('create a new user', function() {
    cy.visitHomepage()
    cy.login()
    //this makes a random username.
    let username = 'username' + Math.round(Math.random()*1000000)
    let pw = 'password2'


    cy.get('li > a').contains('Admin').click()
    cy.get('.orangehrm-header-container').contains('Add').click();
    //userrole
    cy.get('.oxd-select-wrapper > .oxd-select-text').eq(0).click();
    cy.get('[role=option]').contains('ESS').click();
    //status
    cy.get('.oxd-select-wrapper > .oxd-select-text').eq(1).click()
    cy.get('[role=option]').contains('Enabled').click()
    //employee
    cy.get('.oxd-autocomplete-text-input > input').type('Odis  Adalwin');
    cy.get('[role=option]').should('have.text', 'Odis  Adalwin').click()
    //username
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type(username);
    //password
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type(pw);
    //confirmation
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(pw);
    //submit
    cy.get('.oxd-button--secondary').click();
    cy.get('.oxd-text--toast-message').should('be.visible');
    //logout
    cy.get('.oxd-userdropdown-name').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
    //login with the new account
    cy.login(username, pw)
    cy.get('.oxd-userdropdown-name').should('have.text', 'Odis Adalwin');
  })
}
)






/** 
 * user role
 * cy.get('.oxd-select-wrapper > .oxd-select-text').eq(0).click()
 * cy.get('[role=option]').contains('ESS').click()
 * 
 * 
 * status
 * cy.get('.oxd-select-wrapper > .oxd-select-text').eq(1).click()
 * cy.get('[role=option]').contains('Enabled').click()
 * 
 * 
 * 
 * 
 * 
 * 
 * 
*/