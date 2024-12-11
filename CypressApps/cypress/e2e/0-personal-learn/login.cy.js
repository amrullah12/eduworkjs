/// <reference types="cypress" />

describe('Login actions', ()=> {
    it('Should load logn website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html',{timeout:10000})
        cy.url().should('include', 'login.html')
    });
    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('amrullah')

    });
    it('Should be fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type()
        
    });
})