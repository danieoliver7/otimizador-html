import express from 'express'; // Importa o framework Express para criar o servidor
import cors from 'cors'; // Importa o middleware CORS para permitir requisições de diferentes origens
import { config } from './src/config/environment.js'; // Importa as configurações do ambiente
import apiRoutes from './src/routes/api.js'; // Importa as rotas da API
import { errorHandler } from './src/middleware/errorHandler.js'; // Importa o middleware para tratamento de erros

const app = express(); // Cria uma instância do aplicativo Express

app.use(cors()); // Aplica o middleware CORS a todas as rotas
app.use(express.json()); // Permite que o servidor processe JSON no corpo das requisições
app.use(express.static(config.publicDir)); // Serve arquivos estáticos a partir do diretório configurado

app.use('/api', apiRoutes); // Usa as rotas da API para qualquer caminho que comece com '/api'

app.get("/", (req, res) => { // Define uma rota GET para a raiz do site
    res.sendFile(`${config.publicDir}/index.html`); // Envia o arquivo index.html como resposta
});

app.use(errorHandler); // Aplica o middleware de tratamento de erros

app.listen(config.port, () => { // Inicia o servidor na porta configurada
    console.log(`Servidor rodando na porta ${config.port}`); // Loga uma mensagem indicando que o servidor está rodando
});