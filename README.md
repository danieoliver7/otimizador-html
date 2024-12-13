# Projeto de Otimização de HTML com OpenAI

Este projeto utiliza a API do OpenAI para otimizar arquivos HTML, transformando CSS em inline e retornando apenas o corpo otimizado do HTML.

## Estrutura do Projeto

- **server.js**: Configuração do servidor Express.
- **src/services/openaiService.js**: Serviço que interage com a API do OpenAI.
- **src/controllers/htmlOptimizationController.js**: Controlador que gerencia a otimização do HTML.
- **src/middleware/errorHandler.js**: Middleware para tratamento de erros.
- **src/middleware/requestValidator.js**: Middleware para validação de requisições.
- **src/config/environment.js**: Configurações de ambiente.
- **src/config/openai.js**: Configuração da API do OpenAI.

## Como Executar

1. **Instale as dependências:**
   ```bash
   npm install
   ```

2. **Configure as variáveis de ambiente:**
   - Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
     ```
     PORT=3000
     OPENAI_API_KEY=sua_chave_api_openai
     NODE_ENV=development
     ```

3. **Inicie o servidor:**
   ```bash
   npm start
   ```

4. **Acesse o servidor:**
   - O servidor estará rodando em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório, crie uma branch para suas alterações e envie um pull request.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
