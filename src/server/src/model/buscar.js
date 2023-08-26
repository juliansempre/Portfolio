const buscar = () =>{

const db = require('../model/db'); // Importando o módulo db.js (note o caminho correto do arquivo)

const con = db(); // Chamando a função db para obter a conexão

// Agora você pode usar a variável con para executar operações no banco de dados, por exemplo:
con.query('SELECT * FROM pessoas', function (err, result) {
  if (err) throw err;
  console.log(result);
});

//Pegar nome por id
}
module.exports = buscar;
