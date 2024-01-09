/// <reference types="cypress" />
describe('template spec', () => {
  it.only('create a new user', function() {
    cy.visitHomepage()
    cy.login()
    //thin neds changes because if rerun the tests the username will be used.
    let username = 'username4'
    let pw = 'password2'


    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();
    //userrole
    cy.get('.oxd-select-wrapper > .oxd-select-text').eq(0).click();
    cy.get('[role=option]').contains('ESS').click();
    //status
    cy.get('.oxd-select-wrapper > .oxd-select-text').eq(1).click()
    cy.get('[role=option]').contains('Enabled').click()
    //empleyee
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

    cy.get('.oxd-userdropdown-name').click();
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
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