/// <reference types="cypress" />

Cypress.Commands.add('login', (user = "Admin", pw="admin123") => {
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('|');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(user);
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(pw);
    cy.get('.oxd-button').click();

})

Cypress.Commands.add('visitHomepage',() => {

    cy.intercept({
        method: 'GET',
        url: '/web/index.php/core/i18n/messages'})
        .as('loadHomePage')
        cy.visit('/');
        cy.wait('@loadHomePage');
})