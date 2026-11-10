# PostgreSQL com Docker e Node.js

É necessário ter Docker com Compose e Node.js com npm instalados.

1. Configure usuário, senha, banco e porta no arquivo `.env`. Os valores fornecidos são apenas exemplos locais. Se o arquivo não existir, crie-o com:

   ```env
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=loja
   POSTGRES_PORT=5432
   ```

2. Na pasta do projeto, execute:

   ```bash
   docker compose up -d
   npm install
   npm run criar-tabelas
   npm run verificar-tabelas
   ```

   Aguarde alguns segundos após iniciar o container se o PostgreSQL ainda estiver inicializando. O último comando informa quais tabelas existem.

3. Para parar o banco, execute `docker compose down`. Os dados permanecem no volume Docker.
