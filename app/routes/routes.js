const express = require("express");

const middlewareHome = require("./middlewares/middlewareHome");

//app = express()
//express.Router = função do express para routes
module.exports = (app) => {
    const router = express.Router();
    middlewareHome(router);
    app.use("", router)
    //usa a barra vazia do express.Router()
}