import Produto from "../models/Produto.js"

class ProdutoController{

    index = async(req, res) => {
        const produtos = await Produto.findAll();
        res.render('produto/index', {produtos: produtos});
    }

    cadastrar = (req, res) => {
        res.render('produto/cadastrar');
    }

    salvar = (req, res) => {
        let produto = {
            descricao: req.body.descricao,
            preco: req.body.preco,
            estoque: req.body.estoque,
            status: 1
        }
        
        Produto.create(produto).then(() => {
            res.redirect('/produto')
        })
    }

}

export default new ProdutoController();