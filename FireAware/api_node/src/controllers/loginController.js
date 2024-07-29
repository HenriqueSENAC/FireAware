// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();


// Authentication
async function login(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT * FROM users WHERE `email` = ?";
    
    // Recuperar credenciais informadas
    const params = Array(
        request.body.email
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            if (results.length > 0) {                
                if (request.body.password === results[0].password) {                    
                    const id = results[0].id_user;                       
                        
                    response
                        .status(200)
                        .json({
                            success: true,
                            message: `Sucesso! Usuário conectado.`,
                            data: results
                        });                    
                }                
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível deletar usuário!",
                    query: err,
                    sqlMessage: err
                });
        }
    });
}

module.exports = {
    login
}