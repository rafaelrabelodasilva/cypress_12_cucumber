Feature: entrar no sistema

    Background: acessar tela de login
        Given que acesso a página de login do site Publicazo

    Scenario: autenticar no sistema com sucesso
        When submeto o formulário com dados válidos
        Then devo ver a mensagem "Logado com sucesso."