Feature: cadastrar anúncio

    Este caso de uso permite que usuários cadastrados possam cadastrar anúncios no sistema.

    Background: estar autenticado no sistema
        Given que estou autenticado no sistema
        And clico em "Crie seu Anúncio"

    Scenario: cadastro de anúncio com sucesso
        When submeto o formulário de cadastro com dados válidos
        Then devo ver a mensagem "Serviço salvo sucesso."

    Scenario: submeto formulário sem dados
        When submeto o formuláio sem dados
        Then devo ver a mensagem "O cadastro do serviço não foi realizado."

    Scenario: salva informações do serviço com sucesso
        When submeto o formulário com informações válidas
        Then devo ver a mensagem "Serviço alterado com sucesso."

    Scenario: salva preço do serviço com sucesso
        When submeto o formulário com informações válidas
        Then devo ver a mensagem "Serviço alterado com sucesso."

    Scenario: salva descrição do serviço com sucesso
        When submeto o formulário com informações válidas
        Then devo ver a mensagem "Serviço alterado com sucesso."

    Scenario: salva foto do serviço com sucesso
        When faço upload de uma foto válida
        Then devo ver a mensagem "Imagem enviada com sucesso."

    Scenario: salvo o endereço do serviço com sucesso
        When submeto um endereço
        Then devo ver a mensagem "Serviço alterado com sucesso."

    Scenario: salvo os detalhes do serviço com sucesso
        When seleciono as opções do serviço
        Then devo ver a mensagem "Serviço alterado com sucesso."

    Scenario: despublico serviço com sucesso
        When clico no botão "Despublicar Serviço"
        Then devo ver a mensagem "Serviço alterado com sucesso."

    Scenario: publico o serviço com sucesso
        And tenho um anúncio despublicado
        When clico no botão "Publicar Serviço"
        Then devo ver a mensagem "Serviço alterado com sucesso."

# Scenario: Tem que ver se o anúncio foi cadastrado
# O anúncio ficará disponível na página inicial do sistema.
# O anúncio poderá ser alterado na seção 'Serviços Anunciados'.

# O anúncio não ficará disponível na página inicial do sistema.