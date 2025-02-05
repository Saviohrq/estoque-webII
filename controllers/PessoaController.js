import Pessoa from '../models/Pessoa.js';
import Usuario from '../models/Usuario.js';

class PessoaController{

    index = async(req, res) =>{
        let pessoas = await Pessoa.findAll();
        res.render('pessoa/index', {pessoas: pessoas});
    }

    cadastrar = (req, res) =>{
        res.render('pessoa/cadastro');
    }

    salvar = (req, res) => {
        let pessoa = {
            cpf: req.body.cpf,
            nome: req.body.nome,
            email: req.body.email,
            telefone: req.body.telefone
        }

        Pessoa.create(pessoa).then(() => {
            console.log('Pessoa cadastrada com sucesso!');
            res.redirect('/pessoa');
        });
    }

    perfil = async(req, res) => {
        let id = req.params.id; //params recebe as informações do banco de dados
        let pessoa = await Pessoa.findByPk(id); // .findByPk() -> encontra o elemento pela PRIMARY KEY
        let usuarios = await Usuario.findAll({
            where: {
                pessoa_id: id
            }
        }) // .findAll(restrição) -> retorna todos os elementos que correspondem a restrição (pessoa_id = id)
        res.render('pessoa/perfil', {pessoa: pessoa});
    }

}

export default new PessoaController();