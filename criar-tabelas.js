import { criarConexao } from './conexao.js';;

const client = criarConexao();

client.connect()
  .then(() => client.query(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        nome VARCHAR(255),
        email VARCHAR(255),
        senha VARCHAR(255),
        username VARCHAR(255)
      );
      CREATE TABLE IF NOT EXISTS clientes (
        id VARCHAR(20) PRIMARY KEY,
        nome_fantasia VARCHAR(255),
        razao_social VARCHAR(255),
        cpf_cnpj VARCHAR(18),
        tipo VARCHAR(8) CHECK (tipo IN ('juridico', 'fisico')),
        email VARCHAR(255)
      );
      CREATE TABLE IF NOT EXISTS produtos (
        id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        descricao VARCHAR(255),
        departamento VARCHAR(255),
        codigo_barras VARCHAR(13) CHECK (char_length(codigo_barras) = 13),
        preco NUMERIC(10, 2)
      );
    `))
  .then(() => console.log('Tabelas criadas ou já existentes.'))
  .finally(() => client.end())
  .catch((erro) => {
    console.error('Erro ao criar tabelas:', erro.message);
    process.exitCode = 1;
  });


