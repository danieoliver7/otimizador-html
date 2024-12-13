export function requestValidator(req, res, next) {
    const texto = req.method === 'POST' ? req.body.texto : req.query.texto; // Verifica o texto na requisição
    if (!texto) {
        return res.status(400).json({ erro: "Texto não fornecido" }); // Retorna erro se o texto não for fornecido
    }
    next(); // Continua para o próximo middleware se o texto for válido
}