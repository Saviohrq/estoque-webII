import express from 'express';
const router = express.Router();

import PessoaController from '../controllers/PessoaController.js';

router.get('/', PessoaController.index);
router.post('/salvar', PessoaController.salvar);
router.get('/cadastrar', PessoaController.cadastrar);
router.get('/perfil', PessoaController.perfil);

export default router;