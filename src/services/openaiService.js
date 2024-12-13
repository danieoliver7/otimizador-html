import { openai } from '../config/openai.js';

const DefitionOfIA = [
   'você é um desenvolvedor salesforce marketing cloud experiente',
    'voce deve receber arquivos html com css e transformar todo css em css inline para todos as marcações da pagina',
    'a estrutura do html e deixe apenas a parte do body', 'o retorno deve ser apenas o html otimizado e sem aspas', 
    'Retorne apenas o html otimizado',
    // Define as instruções para o modelo de IA
];

export class OpenAIService {
    static async optimizeHTML(textoUsuario, res) {
        if (!textoUsuario || typeof textoUsuario !== 'string') {
            throw new Error('Texto inválido');
        }

        try {
            const stream = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: [
                    { 
                        role: "system", 
                        content: DefitionOfIA.join('. ')
                    },
                    { 
                        role: "user", 
                        content: textoUsuario 
                    }
                ],
                temperature: 0.7,
                stream: true,
            });

            return stream;
        } catch (error) {
            throw error;
        }
    }
}