const estadosDB = require("../models/dadosPessoais/estadosModel");
const gravidezDB = require("../models/historicoDeSaude/gravidezModel");
const amamentacaoDB = require("../models/historicoDeSaude/amamentacaoModel");
const alergiasDB = require("../models/historicoDeSaude/alergiasModel");
const cirurgiasRecentesDB = require("../models/historicoDeSaude/cirurgiasRecentesModel");
const doencasInfantisDB = require("../models/historicoDeSaude/doencasInfantisModel");
const alcoolDB = require("../models/habitosDiarios/alcoolModel");
const atividadeFisicaDB = require("../models/habitosDiarios/atividadeFisicaModel");
const cosmeticosDB = require("../models/habitosDiarios/cosmeticosModel");
const exposicaoSolarDB = require("../models/habitosDiarios/exposicaoSolarModel");
const fumoDB = require("../models/habitosDiarios/fumoModel");
const medicamentosDB = require("../models/habitosDiarios/medicamentosModel")

const controllerGetForm = (req, res, next) => {
    const viewModel = {
        estados: estadosDB.list(),
        gravidez: gravidezDB.list(),
        amamentacao: amamentacaoDB.list(),
        alergias: alergiasDB.list(),
        cirurgiasRecentes: cirurgiasRecentesDB.list(),
        doencasInfantis: doencasInfantisDB.list(),
        alcool: alcoolDB.list(),
        atividadeFisica: atividadeFisicaDB.list(),
        cosmeticos: cosmeticosDB.list(),
        exposicaoSolar: exposicaoSolarDB.list(),
        fumo: fumoDB.list(),
        medicamentos: medicamentosDB.list()
    }
    res.render("pages/form", viewModel)
};

module.exports = {controllerGetForm}