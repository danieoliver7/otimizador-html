import express from 'express';
import { HTMLOptimizationController } from '../controllers/htmlOptimizationController.js';

// Cria um roteador do Express
const router = express.Router();

// Define uma rota POST para "/perguntar" que usa o controlador de otimização HTML
router.post("/perguntar", HTMLOptimizationController.optimize);

// Define uma rota GET para "/perguntar" que também usa o controlador de otimização HTML
router.get("/perguntar", HTMLOptimizationController.optimize);

// Exporta o roteador para ser usado em outros lugares da aplicação
export default router;