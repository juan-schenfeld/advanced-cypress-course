/// <reference types="cypress" />

Cypress.Commands.add('login', (user = "Admin", pw="admin123") => {
    cy.get('[type="submit"]').type(user)
    cy.get('[type="password"]').type(pw)
    cy.get('[type="submit"]').click();
})

Cypress.Commands.add('visitHomepage',() => {
    cy.intercept({
        method: 'GET',
        url: '/web/index.php/core/i18n/messages'})
        .as('loadHomePage')
        cy.visit('/')
        cy.wait('@loadHomePage')
})