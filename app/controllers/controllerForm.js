const estadosDB = require("../models/dadosPessoais/estadosModel");
const gravidezDB = require("../models/historicoDeSaude/gravidezModel");
const amamentacaoDB = require("../models/historicoDeSaude/amamentacaoModel");
const alergiasDB = require("../models/historicoDeSaude/alergiasModel");
const doencasInfantisDB = require("../models/historicoDeSaude/doencasInfantisModel");
const cirurgiasRecentesDB = require("../models/historicoDeSaude/cirurgiasRecentesModel");
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
const ejs = require("ejs");

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
    endereco: Joi.string().required(),
    cep: Joi.number().required(),
    bairro: Joi.string().min(2).required(),
    cidade: Joi.string().min(2).required(),
    estado: Joi.number().required(),
    email: Joi.string().email(),
    telefone: Joi.number().min(8).max(15).required(),
    profissao: Joi.string(),
    gravidez: Joi.number().required(),
    amamentacao: Joi.number().required(),
    alergias: Joi.number().required(),
    quaisAlergias: Joi.string(),
    doencasInfantis: Joi.number().required(),
    quaisDoencasInfantis: Joi.string(),
    cirurgiasRecentes: Joi.number().required(),
    quaisCirurgiasRecentes: Joi.string(),
    patologias1: Joi.array(),
    patologias2: Joi.array(),
    patologias3: Joi.array(),
    informacoesAdicionais1: Joi.string(),
    fumo: Joi.number().required(),
    frequenciaFumo: Joi.string(),
    alcool: Joi.number().required(),
    frequenciaAlcool: Joi.string(),
    medicamentos: Joi.number().required(),
    quaisMedicamentos: Joi.string(),
    cosmeticos: Joi.number().required(),
    quaisCosmeticos: Joi.string(),
    exposicaoSolar: Joi.number().required(),
    frequenciaExposicaoSolar: Joi.string(),
    atividadeFisica: Joi.number().required(),
    frequenciaAtividadeFisica: Joi.string(),
    informacoesAdicionais2: Joi.string()
})

const postForm = (req, res, next) => {
    const{ nome, pronomes, dataDeNascimento, endereco, cep, bairro, cidade, estado, email, telefone, 
    profissao, gravidez, amamentacao, alergias, quaisAlergias, doencasInfantis, quaisDoencasInfantis, 
    cirurgiasRecentes, quaisCirurgiasRecentes, patologias1, patologias2, patologias3, informacoesAdicionais1, 
    fumo, frequenciaFumo, alcool, frequenciaAlcool, medicamentos, quaisMedicamentos, cosmeticos, 
    quaisCosmeticos, exposicaoSolar, frequenciaExposicaoSolar, atividadeFisica, frequenciaAtividadeFisica, 
    informacoesAdicionais2 } = req.body;
    const estadoSelecionado = estadosDB.searchForID(estado);
    const gravidezSelecionado = gravidezDB.searchForID(gravidez);
    const amamentacaoSelecionado = amamentacaoDB.searchForID(amamentacao);
    const alergiasSelecionado = alergiasDB.searchForID(alergias);
    const doencasInfantisSelecionado = doencasInfantisDB.searchForID(doencasInfantis);
    const cirurgiasRecentesSelecionado = cirurgiasRecentesDB.searchForID(cirurgiasRecentes);
    const patologias1Selecionado = patologias1DB.searchForID(patologias1);
    const patologias2Selecionado = patologias2DB.searchForID(patologias2);
    const patologias3Selecionado = patologias3DB.searchForID(patologias3);
    const fumoSelecionado = fumoDB.searchForID(fumo);
    const alcoolSelecionado = alcoolDB.searchForID(alcool);
    const medicamentosSelecionado = medicamentosDB.searchForID(medicamentos);
    const cosmeticosSelecionado = cosmeticosDB.searchForID(cosmeticos);
    const exposicaoSolarSelecionado = exposicaoSolarDB.searchForID(exposicaoSolar);
    const atividadeFisicaSelecionado = atividadeFisicaDB.searchForID(atividadeFisica);

    const pdfViewModel = {
    nome, 
    pronomes, 
    dataDeNascimento, 
    endereco, 
    cep, 
    bairro, 
    cidade, 
    estado: estadoSelecionado.value, 
    email, 
    telefone, 
    profissao, 
    gravidez: gravidezSelecionado.descricao, 
    amamentacao: amamentacaoSelecionado.descricao, 
    alergias: alergiasSelecionado.descricao, 
    quaisAlergias, 
    doencasInfantis: doencasInfantisSelecionado.descricao, 
    quaisDoencasInfantis, 
    cirurgiasRecentes: cirurgiasRecentesSelecionado.descricao, 
    quaisCirurgiasRecentes, 
    patologias1: patologias1Selecionado.descricao, 
    patologias2: patologias2Selecionado.descricao, 
    patologias3: patologias3Selecionado.descricao, 
    informacoesAdicionais1, 
    fumo: fumoSelecionado.descricao, 
    frequenciaFumo, 
    alcool: alcoolSelecionado.descricao, 
    frequenciaAlcool, 
    medicamentos: medicamentosSelecionado.descricao, 
    quaisMedicamentos, 
    cosmeticos: cosmeticosSelecionado.descricao, 
    quaisCosmeticos, 
    exposicaoSolar: exposicaoSolarSelecionado.descricao, 
    frequenciaExposicaoSolar, 
    atividadeFisica: atividadeFisicaSelecionado.descricao, 
    frequenciaAtividadeFisica, 
    informacoesAdicionais2
    }
}

module.exports = {
    controllerGetForm,
    postFormSchema,
    postForm
}