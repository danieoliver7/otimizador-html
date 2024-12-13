import dotenv from 'dotenv'; // Importa dotenv para carregar variáveis de ambiente
import path from 'path'; // Importa path para manipulação de caminhos de arquivo
import { fileURLToPath } from 'url'; // Importa para obter o caminho do arquivo atual

dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env

const __filename = fileURLToPath(import.meta.url); // Obtém o nome do arquivo atual
const __dirname = path.dirname(__filename); // Obtém o diretório do arquivo atual

export const config = {
    port: process.env.PORT || 3000, // Define a porta do servidor
    openaiApiKey: process.env.OPENAI_API_KEY, // Chave da API OpenAI
    nodeEnv: process.env.NODE_ENV || 'development', // Ambiente de execução
    rootDir: path.resolve(__dirname, '../../'), // Diretório raiz do projeto
    publicDir: path.resolve(__dirname, '../../public') // Diretório de arquivos públicos
};