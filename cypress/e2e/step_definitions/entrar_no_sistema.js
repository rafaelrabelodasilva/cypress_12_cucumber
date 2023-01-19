import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
var faker = require('faker-br');

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
    cy.get('[id="user_email"]').type(Cypress.env('email'))
    cy.get('[id="user_password"]').type(Cypress.env('senha'))
    cy.get('.btn').click()
})

When('submeto recuperação de senha com e-mail não cadastrado', () => {
    cy.intercept('GET', 'http://publicazo.insprak.com/password/new').as('recuperarSenha')
    cy.get('.pull-right > a').click()
    cy.wait('@recuperarSenha')

    cy.get('#user_email').type(faker.internet.email())
    cy.get('.btn').click()
})

When('submeto recuperação de senha com e-mail cadastrado', () => {
    cy.intercept('GET', 'http://publicazo.insprak.com/password/new').as('recuperarSenha')
    cy.get('.pull-right > a').click()
    cy.wait('@recuperarSenha')

    cy.get('#user_email').type(Cypress.env('email'))
    cy.get('.btn').click()
})

Then('devo ver a mensagem de erro {string}', (mensagemErro) => {
    cy.contains('#container > :nth-child(1)', mensagemErro)
})

When('submete formulário sem dados', () => {
    cy.get('.btn').click()
})