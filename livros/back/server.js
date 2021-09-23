const http = require('http');
const servidor = require('./config/aplicativo.js');

server.get('/', (req, res) =>{
    res.send('Rota Raiz Encontrada!');
})

server.get('/autores', (req, res) =>{
    res.send('Rota Autores Encontrada!');
})

server.get('/editoras', (req, res) =>{
    res.send('Rota Editoras Encontrada!');
})

server.get('/livros', (req, res) =>{
    res.send('Rota Livros Encontrada!');
})

http.createServer(servidor).listen(servidor.get('porta'), function(){
    console.log('\nServidor Executando na Porta' + server.get('porta'));
})