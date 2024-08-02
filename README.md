---

# Sistema de Chamados

## Descrição

O **Sistema de Chamados** é uma aplicação web desenvolvida para gerenciar e acompanhar solicitações de suporte técnico. Com uma interface amigável e intuitiva, o sistema permite que usuários registrem novos chamados, acompanhem o status de suas solicitações e interajam com a equipe de suporte de forma eficiente.

## Funcionalidades

- **Cadastro de Usuários**: Permite que novos usuários se registrem e façam login no sistema.
- **Abertura de Chamados**: Os usuários podem abrir novos chamados especificando o problema encontrado.
- **Acompanhamento de Chamados**: Visualização e acompanhamento do status de chamados abertos.
- **Comentários em Chamados**: Interação entre usuários e equipe de suporte por meio de comentários.
- **Painel Administrativo**: Área exclusiva para administradores gerenciarem chamados e usuários.
- **Notificações**: Envio de notificações por e-mail para atualização de status dos chamados.

## Tecnologias Utilizadas

- **Frontend**: React.js, Tailwind CSS
- **Backend**: NodeJs
- **Banco de Dados**: Postgresql
- **Autenticação**: JWT (JSON Web Tokens)

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/Sistema-de-Chamados.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd Sistema-de-Chamados
    ```
3. Instale as dependências do backend:
    ```sh
    composer install
    ```
4. Configure o arquivo `.env` com suas credenciais de banco de dados.
5. Execute as migrações do banco de dados:
    ```sh
    php artisan migrate
    ```
6. Inicie o servidor Laravel:
    ```sh
    php artisan serve
    ```
7. Em outra aba do terminal, instale as dependências do frontend:
    ```sh
    cd frontend
    npm install
    ```
8. Inicie o servidor React:
    ```sh
    npm start
    ```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests. Para contribuições maiores, por favor, abra uma issue primeiro para discutir o que você gostaria de mudar.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---
