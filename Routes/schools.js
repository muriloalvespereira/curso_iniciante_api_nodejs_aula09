const express = require("express");
const router = express.Router();
const Schools = require("../model/schools");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

//FUNÇÕES AUXILIARES

router.get("/", async (req, res) => {
  try {
    const schools = await Schools.find({});
    return res.send(schools);
  } catch (err) {
    return res.status(500).send({ error: "Erro na consulta de escolas!" });
  }
});
module.exports = router;

/*

200 - OK
201 - Created
202 - Accepted 

400 - Bad request
401 - Unauthorized -- AUTENTICAÇÃO, tem caráter temporário.
403 - Forbidden -- AUTORIZAÇÃO, tem caráter permanente.
404 - Not found.

500 - Internal server error
501 - Not implemented - a API não suporta essa funcionalidade
503 - Service Unavailable - a API executa essa operação, mas no momento está indisponível


*/