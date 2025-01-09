import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars';
import Handlebars from 'handlebars';
import bodyParser from 'body-parser';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

/* CONFIG PASTA ESTATICA */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

/*CONFIG VISÃO */
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/**ROTAS DO SISTEMA */
app.get('/', (req, res) => {

    var aluno = {
        nome: 'Fulano',
        nota: 7.5
    }

    res.status(200).render('admin/index', {aluno});
})

app.get('/contato', (req, res) => {
    res.status(200).render('admin/contato');
})

app.get('/cadastro', (req, res) => {
    res.status(200).render('produto/cadastro');
})

app.get('/produto', (req, res) => {
    res.status(200).render('produto/index');
})

app.post('/cadastro', (req, res) => {
    var produto = {
        descricao: req.body.descricao,
        estoque: req.body.estoque,
        preco: req.body.preco,
        status: 1,
        foto: '/img/semfoto.png'
    }
    res.render('produto/detalhe', {produto});
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});