const express = require("express");

const routeHome = require("./routeHome");
const routeAbout = require("./routeAbout");
const routeForm = require("./routeForm");

//express.Router = função do express para routes
module.exports = (app) => {
    const router = express.Router();
    routeHome(router);
    routeAbout(router);
    routeForm(router);
    app.use("", router)
    //usa a barra vazia do express.Router()
};