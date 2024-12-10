import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url'
import handlebars from 'express-handlebars';
import Handlebars from 'handlebars';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';

/* CONFIG PASTA ESTATICA */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

/*CONFIG VISÃO */
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.status(200).send("Bem vindo ao Estoque");
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});