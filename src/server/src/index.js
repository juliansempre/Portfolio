const conexao = require("./model/db");
const buscar = require("./model/buscajson")
conexao();


const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());

// Servir arquivos estáticos do Angular
app.use(express.static('public'));

// Rota para o arquivo "index.html"
app.get('/', function(req, res){
  const filePath = path.join(__dirname, '../', 'public', 'index.html');
  res.sendFile(filePath);
});
//Incluir css static importante o nome e o caminho
app.get('/style.css', function(req, res){
  res.type('text/css');
  res.sendFile(path.join(__dirname, '../public/style.css'));
});
//Incluir javascript static importante o nome e o caminho
app.get('/main.js', function(req, res){
  res.type('text/javascript');
  res.sendFile(path.join(__dirname, "../public/main.js"));
});

//Models
app.get('/buscar', buscar);
// Porta
app.listen(8083, function(){
  console.log('Servidor rodando em 8083 na url http://localhost:8083/');
});
