export function errorHandler(err, req, res, next) {
    console.error(err.stack); // Loga o stack trace do erro
    res.status(500).json({
        error: 'Erro interno do servidor',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    }); // Retorna uma resposta de erro com base no ambiente
}