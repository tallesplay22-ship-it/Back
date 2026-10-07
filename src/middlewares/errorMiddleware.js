const verificarAdmin = require("./adminMiddleware");

function errorHandler(err, req, res, next) {
    console.log(err);

    res.status(500).json({
        erro: "Erro interno no servidor."
    });
}

module.exports = verificarAdmin