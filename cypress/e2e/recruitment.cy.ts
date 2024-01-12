/// <reference types="cypress" />

describe('recruitment related tests', () => {
    it('add new position', function() {
        let vacancyName = 'vacancy name' + Math.random()
        let hirinmanager = 'Orange Test'
        let role = 'QA Lead'
        let description = 'lorem ipsum dolor sit amet, consect id elit sed, sed diam nonum et d'
        let positions = '1'
        cy.visitHomepage()
        cy.login()
        
        cy.wait('@loadPage')
        cy.get('li > a').contains('Recruitment').click()
        cy.wait('@loadPage')
        cy.get('li > a').contains('Vacancies').click()

        cy.intercept({
            method: 'GET',
            url: '/web/index.php/api/v2/recruitment/vacancies?limit=0'}
            ).as('loadForm')

        cy.get('[type="button"]').contains('Add').click()
        cy.wait('@loadForm', {timeout: 10000})

        
        //vacancy name

        cy.get('form > div:nth-child(1)  input').type(vacancyName)
        //qa test selection
        cy.get('.oxd-select-text-input').click()
        cy.get('[role="option"] > span').contains(role).click()
        //description
        cy.get('textarea').type(description)
        //hiring manager
        cy.get('[placeholder="Type for hints..."]').type(hirinmanager)
        cy.get('[role=option]').contains(hirinmanager,{timeout: 6000}).click()
        //number of positions
        cy.get('.oxd-grid-2 input').type(positions)
        //submit
        cy.get('[type="submit"]').click()
        cy.contains('Edit Vacancy').should('be.visible')
    })










});