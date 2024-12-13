/// <reference types="cypress" />

describe('Login actions', ()=> {
    it('Should load login website', () => {
        cy.url('https://www.saucedemo.com/',{timeout:10000})
        cy.get('class').contains('login_logo')
    
    });
})