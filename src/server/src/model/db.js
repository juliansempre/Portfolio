const db = () => {

console.log("Conexao com o banco de dados...");
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "85.10.205.173",
  user: "rootportfolio1",
  port: 3306,
  password: "toor123@",
  database: "bancojulian1"
});

con.connect(function(err) {
try {
    if (err) throw err;
  console.log("Conectado ao banco!");

} catch (error) {
 console.log("Erro ao se conectar" + error);
}
});

return con; // Retornando a conexão para que possa ser acessada em outro arquivo.
}

module.exports = db;
