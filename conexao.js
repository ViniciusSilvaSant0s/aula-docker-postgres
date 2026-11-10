import 'dotenv/config';
import pg from 'pg';
const { Client } = pg;

export const criarConexao = () => new Client({
  host: 'localhost',
  port: Number(process.env.POSTGRES_PORT),
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

