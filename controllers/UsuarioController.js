import Usuario from '../models/Usuario.js'
import Pessoa from '../models/Pessoa.js'

class UsuarioController{

    cadastrar = async (req, res) =>{
        const pessoas = await Pessoa.findAll()
        res.render('usuario/cadastro', {pessoas: pessoas})
    }

    salvar = (req, res) =>{
        let usuario = {
            username: req.body.username,
            senha: req.body.senha,
            categoria: req.body.categoria,
            pessoa_id: req.body.pessoa_id,
            status: 1
        }
        Usuario.create(usuario).then(()=>{
            console.log('Usuario cadastrado com sucesso!')
            res.redirect('/')
        })
    }

}

export default new UsuarioController()