import OpenAI from "openai"; // Importa a biblioteca OpenAI
import { config } from './environment.js'; // Importa as configurações do ambiente

export const openai = new OpenAI({
    apiKey: config.openaiApiKey // Configura a chave da API OpenAI
});