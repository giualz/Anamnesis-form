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
const medicamentosDB = require("../models/habitosDiarios/medicamentosModel");
const patologias1DB = require("../models/historicoDeSaude/patologias1Model");
const patologias2DB = require("../models/historicoDeSaude/patologias2Model");
const patologias3DB = require("../models/historicoDeSaude/patologias3Model");

const Joi = require("joi");

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
        medicamentos: medicamentosDB.list(),
        patologias1: patologias1DB.list(),
        patologias2: patologias2DB.list(),
        patologias3: patologias3DB.list()
    }
    res.render("pages/form", viewModel)
};

const postFormSchema = Joi.object({
    nome: Joi.string().min(2).required(),
    pronomes: Joi.string(),
    dataDeNascimento: Joi.date().iso().required(),
    endereco: Joi.string(),
    cep: Joi.number(),
    bairro: Joi.string().min(2),
    cidade: Joi.string().min(2),
    estado: Joi.number(),
    email: Joi.string().email(),
    telefone: Joi.number().min(8).max(15),
    profissao: Joi.string(),
    gravidez: Joi.number(),
    amamentacao: Joi.number(),
    alergias: Joi.number(),
    quaisAlergias: Joi.string(),
    doencasInfantis: Joi.number(),
    quaisDoencasInfantis: Joi.string(),
    cirurgiasRecentes: Joi.number(),
    quaisCirurgiasRecentes: Joi.string(),
    patologias1: Joi.array(),
    patologias2: Joi.array(),
    patologias3: Joi.array(),
    fumo: Joi.number(),
    frequenciaFumo: Joi.string(),
    alcool: Joi.number(),
    frequenciaAlcool: Joi.string(),
    medicamentos: Joi.number(),
    quaisMedicamentos: Joi.string(),
    cosmeticos: Joi.number(),
    quaisCosmeticos: Joi.string(),
    exposicaoSolar: Joi.number(),
    frequenciaExposicaoSolar: Joi.string(),
    atividadeFisica: Joi.number(),
    frequenciaAtividadeFisica: Joi.string()
})

module.exports = {
    controllerGetForm,
    postFormSchema,
}