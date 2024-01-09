/// <reference types="cypress" />

declare global{ 
namespace Cypress { 
interface Chainable {
    /**
     * logins with the recived credentials
     * @example
     * cy.login(user,password)
    */
    addBoard()

    visitHomepage()
    }
}}