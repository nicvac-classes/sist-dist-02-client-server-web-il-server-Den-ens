const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// configurazione EJS
app.set('viev engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('form');
});

app.post('/greet', (req, res) => {
    const nome = req.body.nome;
    res.render('greet', { name: name});
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Il server Server è in esecuzione su http://localhost:${PORT}`);
});