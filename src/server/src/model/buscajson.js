const db = require('../model/db');

const buscarjson = (req, res) => {
    const con = db();

    con.query('SELECT * FROM pessoas', function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Erro no servidor' });
        }
        res.json(result); // Envia os dados como resposta para o navegador em formato JSON
    });
};

module.exports = buscarjson;
