require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// 🔥 USANDO VARIÁVEL DE AMBIENTE
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// Testar conexão
pool.connect((err) => {
  if (err) {
    console.error('❌ Erro ao conectar:', err.message);
  } else {
    console.log('✅ Conectado ao PostgreSQL!');
  }
});

// ============ ROTAS ============
// (mantenha suas rotas aqui - GET, POST, PUT, DELETE)

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});