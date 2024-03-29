/// <reference types="cypress" />

Cypress.Commands.add("login", (user:string = "Admin", pw:string="admin123") => {
    cy.get('[name="username"]').type(user)
    cy.get('[type="password"]').type(pw)
    cy.get('[type="submit"]').click();
})

Cypress.Commands.add('visitHomepage',() => {
    cy.intercept({
        method: 'GET',
        url: '/web/index.php/core/i18n/messages'})
        .as('loadPage')
        cy.visit('/')
        cy.waitLoadPage()
})

Cypress.Commands.add('waitLoadPage',() => {
    cy.wait('@loadPage', {timeout: 10000})
})
