# Vehicles-API

## Sobre a aplicação

Foi desenvolvida uma API Rest sobre veículos, que permite realizar o cadastro, atualizar as informações, deletar um veículo cadastrado e realizar a busca dos veículos no banco utilizando o id ou o nome;

Para o cadastro do veículo, foram incluídos o nome, a marca, o ano e o tipo do veículo;

## Como executar a aplicação?
<br>
<ol>
<li>As ferramentas utilizadas foram: VS Code, Nodejs, Docker, Postgres e DBeaver;</li>
<li>Para executar a aplicação é necessário configurar as variáveis de ambiente em um arquivo ".env" de acordo com o arquivo ".env.example";</li>
<li>As dependências devem ser instaladas utilizando o "npm install";</li>
<li>Deve-se criar um container no docker com a imagem do postgres e com as mesmas informações de usuário, senha e porta definidos nas variáveis de ambiente;</li>
<li>No DBeaver uma conexão do Postegres deve ser criada utilizando, também, os mesmos parâmetros das variáveis de ambiente;</li>
<li>Caso não possua uma database, pode-se criar pelo DBeaver ou utilizar o comando "npx sequelize-cli db:create";</li>
<li>Para configurar o banco, basta executar as migrations pelo sequelize, utilizando o comando "npx sequelize-cli db:migrate"</li>
<li>Para executar as rotas pode-se utilizar o Thunder Client, o Postman ou outra ferramenta para testar APIs</li>
</ol>