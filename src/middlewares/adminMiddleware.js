function verificarAdmin(req, res, next) {
  const { admin } = req.headers;

  if (admin !== "true") {
    return res.status(403).json({
      erro: "Acesso negado. Apenas administradores podem acessar esta rota."
    });
  }

  next();
}

module.exports = verificarAdmin;