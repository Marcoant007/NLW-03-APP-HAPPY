import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors'


import './database/connection';

import routes from './routes';
import  errorHandler from './errors/handlers'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler)

//ROTA = CONJUTO
//RECURSO = USUÁRIO
//MÉTODOS HTTP = GET, POST, PUT, DELETE
//PARAMETROS = 

//GET = BUSCAR UMA INFORMAÇÃO
//POST = CRIANDO UMA INFORMAÇÃO
//PUT = EDITAR UMA INFORMAÇÃO
//DELETE = DELETAR INFORMAÇÃO


// Query: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)





app.listen(3333);

//localhost: 3333

//DRIVER NATIVO ? ESCREVE AS QUERY NORMAL 
//QUERY BUILDER ? ESCREVER AS QUERY COM JS
// ORM ?