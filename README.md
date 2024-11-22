# Estrutura Base NestJs - API com Autenticação
Este projeto é uma estrutura base para uma API desenvolvida em NestJS com autenticação JWT. Ele inclui um CRUD de produtos e autenticação de usuários com login e senha.

### 🛠️ Tecnologias Utilizadas
- NestJS
- TypeORM
- PostgreSQL
- Docker
- Supabase (como banco de dados PostgreSQL)
### ⚙️ Funcionalidades
#### Autenticação
- Login de usuário com geração de token JWT.
- Proteção de rotas com autenticação.
- CRUD de Produtos
- Cadastro, edição, exclusão e listagem de produtos.
- Gerenciamento de Usuários
- Cadastro de usuários com criptografia de senha.
### 🚀 Como Configurar e Executar
#### Pré-requisitos
- Node.js (versão LTS recomendada)
- Docker
- Conta no Supabase ou instância PostgreSQL local
### 1. Configuração do Ambiente
Clone o repositório:

``git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>``

Instale as dependências:

``npm install``

Crie um arquivo .env com as seguintes variáveis de ambiente:
``
DATABASE_URL=postgresql://<USUARIO>:<SENHA>@<HOST>:<PORTA>/<NOME_DO_BANCO>
JWT_SECRET=your_secret_key``
### 2. Configuração do Banco de Dados
No Supabase, crie um novo projeto e copie a URL do banco para o .env.
Caso utilize Docker, você pode configurar o PostgreSQL com o seguinte comando:
``
docker run --name api_postgres -e POSTGRES_USER=usuario -e POSTGRES_PASSWORD=senha -e POSTGRES_DB=api_db -p 5432:5432 -d postgres
``
### 3. Rodando a Aplicação
Inicie a aplicação em modo de desenvolvimento:
``
npm run start:dev
``
Acesse a aplicação em http://localhost:3000.

### 📄 Endpoints
#### Autenticação
##### ``POST /auth/login``
- Descrição: Autentica um usuário e retorna um token JWT.
- Body:
``
{
  "username": "string",
  "password": "string"
}
``
- Resposta de Sucesso:
``
{
  "access_token": "string"
}
``
#### Produtos
##### ``GET /products``
- Descrição: Lista todos os produtos (necessita autenticação).
##### ``POST /products``
- Descrição: Cria um novo produto (necessita autenticação).
- Body: ``{
  "name": "string",
  "description": "string",
  "price": "number"
}``
##### ``PUT /products/:id``
- Descrição: Atualiza um produto (necessita autenticação).
- DELETE /products/:id
- Descrição: Exclui um produto (necessita autenticação).
#### 📚 Estrutura de Pastas

src/ </br>
├── auth/          # Módulo de autenticação</br>
├── users/         # Módulo de usuários</br>
├── products/      # Módulo de produtos</br>
├── app.module.ts  # Módulo principal</br>
└── main.ts        # Arquivo de bootstrap</br>
