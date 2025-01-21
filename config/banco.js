import Sequelize from 'sequelize';

const NOME_BANCO = 'loja';
const USUARIO = 'root';
const SENHA = '';
const HOST = 'localhost';

const sequelize = new Sequelize(
    NOME_BANCO,
    USUARIO,
    SENHA,
    {
        host: HOST,
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() =>{
    console.log('Conexão realizada com sucesso!');
}).catch((erro) =>{
    console.log('Erro: '+erro);
});

export default {Sequelize, sequelize};