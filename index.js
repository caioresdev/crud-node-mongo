const express = require ('express')
const app = express()

app.listen(4000, ()=> {
    console.log('Servidor rodando na Porta 4000');
});

app.get('/',(req, res) => {
    res.send("Hello from Node Express API")
})