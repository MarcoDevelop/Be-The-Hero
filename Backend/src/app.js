const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;

// Rota / Recurso

// Metodos HTTP 
// GET: Buscar uma Informacao so back-end
// POST: Criar uma informacao no back-end
// PUT: Alterar uma informacao no back-end
// DELETE: Deletar uma informacao no back-end

// Tipos de parametros:
// Query Parms: Parametros nomeados enviados na rota apos o "?" (Filtros, Paginacao) 
// Route Params: Parametros utilizados para identificar recursos
// Request Body: Corpo da requisicao, utilizada para criar ou alterar recursos

// SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
//NoSQL: MongoDB, CouchDB

//Driver: SELECT * FROM users
//Query Builder: table('users').select('*').where()