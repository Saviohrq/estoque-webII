import banco from "../config/banco.js"
import Pessoa from './Pessoa.js'

const Usuario =  banco.sequelize.define('usuarios',{
    id:{
        type: banco.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: banco.Sequelize.STRING(100),
        allowNull: true
    },
    senha:{
        type: banco.Sequelize.STRING(250),
        allowNull: true
    },
    categoria:{
        type: banco.Sequelize.INTEGER
    },
    status:{
        type: banco.Sequelize.INTEGER
    }
})

Usuario.belongsTo(Pessoa, {
    foreignKey: 'pessoa_id', 
    constraint: true,
    onDelete: 'CASCADE', //ao deletear pessoa, irá deletar todos seus usuarios
    as: 'pessoa'
})

Usuario.sync()

export default Usuario