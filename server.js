const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/salvarDados', (req, res) => {
    const dados = req.body;

    const dadosJSON = JSON.stringify(dados, null, 2);
    fs.writeFile('./dados.json', dadosJSON, (err) => {
        if (err) {
            console.error('Erro ao salvar os dados:', err);
            res.status(500).send('Erro interno ao salvar os dados');
        } else {
            console.log('Dados salvos com sucesso!');
            res.status(200).send('Dados salvos com sucesso!');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
