const express = require("express");


const middlewareHome = require("./middlewares/middlewareHome");
const middlewareAbout = require("./middlewares/middlewareAbout");
const middlewareForm = require("./middlewares/middlewareForm");

//app = express()
//express.Router = função do express para routes
module.exports = (app) => {
    const router = express.Router();
    middlewareHome(router);
    middlewareAbout(router);
    middlewareForm(router);
    app.use("", router)
    //usa a barra vazia do express.Router()
};