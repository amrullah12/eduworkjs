/// <reference types="cypress" />

describe('Browser actions', ()=> {
    it('Should load books website', () => {
        cy.visit('https://books.toscrape.com/index.html',{timeout:10000})
        cy.url().should('include', 'index.html')
    });
    it('Should klik traver category', () => {
      cy.visit('https://books.toscrape.com/catalogue/category/books/travel_2/index.html')
        cy.get('h1').contains('Travel')

    });
})