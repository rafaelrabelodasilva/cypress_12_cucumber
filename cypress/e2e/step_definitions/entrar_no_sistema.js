import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

const email = 'rafael_teste@email.com'
const senha = 'teste@123'

Given('que acesso a página de login do site Publicazo', () => {
    cy.intercept('GET', 'http://publicazo.insprak.com/').as('paginaInicial')
    cy.visit('/')
    cy.wait('@paginaInicial')
    cy.get(':nth-child(4) > a').should('have.text', 'Entrar')

    cy.intercept('GET','http://publicazo.insprak.com/sign_in').as('telaLogin')
    cy.get(':nth-child(4) > a').click()
    cy.wait('@telaLogin')
    cy.get('h2').should('have.text', 'Entrar')
})

When('submeto o formulário com dados válidos', () => {
    cy.get('[id="user_email"]').type(email)
    cy.get('[id="user_password"]').type(senha)
    cy.get('.btn').click()
})

Then('devo ver a mensagem {string}', (mensagem) => {
    cy.get('.toast').should('be.visible').and('contain', mensagem)
})