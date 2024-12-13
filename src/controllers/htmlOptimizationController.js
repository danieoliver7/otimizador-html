import { OpenAIService } from '../services/openaiService.js'; // Importa o serviço OpenAI

export class HTMLOptimizationController {
    static async optimize(req, res) {
        try {
            const texto = req.method === 'POST' ? req.body.texto : req.query.texto; // Obtém o texto da requisição
            
            if (!texto) {
                return res.status(400).json({ erro: "Texto não fornecido" }); // Retorna erro se o texto não for fornecido
            }

            res.writeHead(200, {
                'Content-Type': 'text/event-stream',
                'Cache-Control': 'no-cache',
                'Connection': 'keep-alive'
            }); // Configura o cabeçalho para streaming de eventos

            const stream = await OpenAIService.optimizeHTML(texto); // Chama o serviço para otimizar o HTML

            for await (const chunk of stream) {
                const content = chunk.choices[0]?.delta?.content || '';
                if (content) {
                    res.write(`data: ${JSON.stringify({ content })}\n\n`); // Envia o conteúdo otimizado
                }
            }

            res.end(); // Finaliza a resposta
        } catch (error) {
            console.error("Erro na otimização:", error);
            res.status(500).json({ 
                erro: "Erro ao processar requisição",
                detalhes: error.message 
            }); // Retorna erro em caso de falha
        }
    }
}