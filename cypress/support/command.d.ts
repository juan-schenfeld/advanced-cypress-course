/// <reference types="cypress" />

declare namespace Cypress { 
interface Chainable {
    /**
     * @example
     * cy.login() logins with default admin credentials
     * cy.login(user,password) logins with the recived credentials
    */
    login(user, pw)
    visitHomepage()
    waitLoadPage()
    }
}