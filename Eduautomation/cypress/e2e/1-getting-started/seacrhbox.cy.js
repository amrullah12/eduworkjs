/// <reference types="cypress" />

describe ("searchbox test", function(){
  beforeEach(()=> {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('bank {enter}')
    });

    it('Should show search result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')
    });
});