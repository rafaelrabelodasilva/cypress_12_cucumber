Feature: entrar no sistema

Este caso de uso permite que usuários cadastrados possam se autenticar no sistema.

    Background: acessar tela de login
        Given que acesso a página de login do site Publicazo

    Scenario: autenticar no sistema com sucesso
        When submeto o formulário com dados válidos
        Then devo ver a mensagem "Logado com sucesso."

    Scenario: usuário solicita recuperação de senha com e-mail não cadastrado
        When submeto recuperação de senha com e-mail não cadastrado
        Then devo ver a mensagem "Email não encontrado"

    Scenario: usuário solicita alteração de senha com e-mail cadastrado
        When submeto recuperação de senha com e-mail cadastrado
        Then devo ver a mensagem de erro "SMTP From address may not be blank: nil"

    Scenario: submeter formulário sem dados
        When submete formulário sem dados
        Then devo ver a mensagem "Email ou senha inválidos."