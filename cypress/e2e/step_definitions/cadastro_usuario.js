import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";

var faker = require('faker-br');

Given('que acesso a página de cadastro do site Publicazo', () => {
    cy.intercept('GET', 'http://publicazo.insprak.com/')
    .as('paginaInicial')

    cy.visit('/')
    cy.wait('@paginaInicial')

    cy.get(':nth-child(4) > a')
    .should('have.text', 'Entrar')

    cy.intercept('GET','http://publicazo.insprak.com/sign_up')
    .as('telaCadastro')

    cy.get(':nth-child(3) > a')
    .click()

    cy.wait('@telaCadastro')

    cy.get('h2').should('have.text', 'Cadastre-se')
})

Then('devo ver a mensagem {string}', (mensagem) => {
    cy.verificaMensagem(mensagem)
})

When('submeto o formulário de cadastro com dados válidos', () => {
    cy.get('#user_fullname')
    .type(faker.name.findName())

    cy.get('#user_email')
    .type(faker.internet.email())

    cy.get('#user_password')
    .type(Cypress.env('senha'))

    cy.get('#user_password_confirmation')
    .type(Cypress.env('senha'))
    cy.get('.btn').click()
})

When('não preencho nenhum campo', () => {
    cy.get('.btn')
    .click()
})

Then('devo ver as mensagens {string}, {string} e {string}', (mensagem1, mensagem2, mensagem3) => {
    cy.get('.toast')
    .should('be.visible')
    .and('contain', mensagem1, mensagem2, mensagem3)
})

When('submeto o formulário com senhas divergentes', () => {
    cy.get('#user_fullname').type(faker.name.findName())
    cy.get('#user_email').type(faker.internet.email())
    cy.get('#user_password').type(faker.internet.password())
    cy.get('#user_password_confirmation').type(faker.internet.password())
    cy.get('.btn').click()
})