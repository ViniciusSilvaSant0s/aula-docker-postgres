import { criarConexao } from './conexao.js';

const client = criarConexao();

client.connect()
  .then(() => client.query(`
      SELECT table_name FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_type = 'BASE TABLE'
        AND table_name IN ('usuarios', 'clientes', 'produtos')
      ORDER BY table_name
    `))
  .then((resultado) => {
    const encontradas = resultado.rows.map((linha) => linha.table_name);
    for (const tabela of ['usuarios', 'clientes', 'produtos']) {
      console.log(`${tabela}: ${encontradas.includes(tabela) ? 'criada' : 'não encontrada'}`);
    }
    if (encontradas.length !== 3) process.exitCode = 1;
  })
  .finally(() => client.end())
  .catch((erro) => {
    console.error('Erro ao verificar tabelas:', erro.message);
    process.exitCode = 1;
  });


