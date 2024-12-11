/// <reference types="cypress" />
describe('Browser actions', ()=> {
    it('Should load correct url', () => {
        cy.visit('https://example.com/',{timeout:40000})
    });
    it('Should load correct url', () => {
        cy.url().should('include', 'example.com')
    });
})