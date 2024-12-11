/// <reference types="cypress" />

describe('My First Test', () => {
    it('Visit the kitchen sink', () => {
        cy.visit('https://example.cypress.io')
       // cy.get('h1').contains('kitchen sink')
       // cy.contains('get').click()
       // cy.url().should('include', 'commands/querrying')
       cy.contains('type').click()

       //new url which include 'commands/actions
       cy.url().should('include', 'commands/actions')

       //get an input
       cy.get('.action-email')
        .type('fake@email.com')
        .should('have.value', 'fake@email.com')
    });
});