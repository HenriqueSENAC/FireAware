// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const {Router} = require('express');
// Responsável por lidar com requisições externas
const router = Router();

const { storeUser } = require('../controllers/userController');

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.post('/store/user', storeUser);

module.exports = router;