/// <reference types="cypress" />

Cypress.Commands.add('login', (user = "Admin", pw="admin123") => {
    cy.get('[name="username"]').type(user)
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

Cypress.Commands.add('mainMenuSelect', itemName => {
    cy.intercept({
        method: 'GET',
        url: '/web/index.php/core/i18n/messages'})
        .as('loadHomePage')
        cy.get('li > a').contains(itemName).click()
        cy.wait('@loadHomePage')
})