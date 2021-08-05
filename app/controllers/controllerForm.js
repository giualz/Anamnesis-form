const gravidezDB = require("../models/historicoDeSaude/gravidezModel");
const amamentacaoDB = require("../models/historicoDeSaude/amamentacaoModel");
const alergiasDB = require("../models/historicoDeSaude/alergiasModel");
const cirurgiasRecentesDB = require("../models/historicoDeSaude/cirurgiasRecentesModel");
const doencasInfantisDB = require("../models/historicoDeSaude/doencasInfantisModel");

const controllerGetForm = (req, res, next) => {
    const viewModel = {
        gravidez: gravidezDB.list(),
        amamentacao: amamentacaoDB.list(),
        alergias: alergiasDB.list(),
        cirurgiasRecentes: cirurgiasRecentesDB.list(),
        doencasInfantis: doencasInfantisDB.list()
    }
    res.render("pages/form", viewModel)
};

module.exports = {controllerGetForm}