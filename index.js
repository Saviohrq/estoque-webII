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
    res.status(200).render('admin/index');
});

import produto from './routes/produto.js';
app.use('/produto', produto);

import pessoa from './routes/pessoa.js'
app.use('/pessoa', pessoa)

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});