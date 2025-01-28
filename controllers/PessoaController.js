import Pessoa from '../models/Pessoa.js'

class PessoaController{

    index = async(req, res) =>{
        let pessoas = await Pessoa.findAll();
        res.render('pessoa/index', {pessoas: pessoas});
    }

    cadastrar = (req, res) =>{
        res.render('pessoa/cadastro')
    }

}

export default new PessoaController()