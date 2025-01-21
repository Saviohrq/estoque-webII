import Produto from "../models/Produto.js"

class ProdutoController{

    index = (req, res) => {
        const produtos = Produto.findAll();
        res.render('produto/index');
    }

    cadastro = (req, res) => {
        res.render('produto/cadastro');
    }

}

export default new ProdutoController();