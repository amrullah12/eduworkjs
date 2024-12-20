/// <reference types="cypress" />

describe('Tugas SauceDemo', ()=>{
    before (() => {
        cy.visit('https://www.saucedemo.com/',{timeout:10000})
        //todo
    });
    it('Input username standard', () => {
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('#react-burger-menu-btn').click()
     //   cy.get('[data-test="open-menu"]').click()
        cy.get('[data-test="inventory-sidebar-link"]').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
     });
     

});