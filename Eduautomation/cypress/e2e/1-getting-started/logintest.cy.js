/// <reference types="cypress" />

describe('login / logout test ', () =>{
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
        //todo
    });

    it('Should try login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()

        //todo
    });
    it('Should display error massage', () => {
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong.')
        //
    });
    it('should login to application with valid data ', () => {
        cy.fixture("user").then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').clear()
            cy.get('#user_login').type(username)
            cy.get('#user_password').clear()
            cy.get('#user_password').type(password)
            cy.get('input[name="submit"]').click()

            cy.get('h2').should('contain.text', 'Cash accounts')
        })
        //todo
    });
    it('should log out from application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
        cy.get('strong').should('contain.text', 'Home')
        //todo
    });
})