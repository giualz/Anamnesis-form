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
const fs = require("fs");
const ejs = require("ejs");
const htmlToPdf = require("html-pdf-node");
const path = require("path");

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
        patologias3: patologias3DB.list(),
        patologiasTotal: patologias1DB.list().concat(patologias2DB, patologias3DB)
    }
    res.render("pages/form", viewModel)
};

let patologias1 = req.body.patologias1
patologias1 = [...patologias1]
req.body = {...req.body, patologias1}

const postFormSchema = Joi.object({
    nome: Joi.string().min(2).required(),
    pronomes: Joi.string().allow(""),
    dataDeNascimento: Joi.date().iso().required(),
    endereco: Joi.string().required(),
    cep: Joi.number().required(),
    bairro: Joi.string().min(2).required(),
    cidade: Joi.string().min(2).required(),
    estado: Joi.number().required(),
    email: Joi.string().email().allow(""),
    telefone: Joi.number().required(),
    profissao: Joi.string().allow(""),
    gravidez: Joi.number().required(),
    amamentacao: Joi.number().required(),
    alergias: Joi.number().required(),
    quaisAlergias: Joi.string().allow(""),
    doencasInfantis: Joi.number().required(),
    quaisDoencasInfantis: Joi.string().allow(""),
    cirurgiasRecentes: Joi.number().required(),
    quaisCirurgiasRecentes: Joi.string().allow(""),
    patologias1: Joi.array().items(Joi.number()),
    patologias2: Joi.array().items(Joi.number()),
    patologias3: Joi.array().items(Joi.number()),
    informacoesAdicionais1: Joi.string().allow(""),
    fumo: Joi.number().required(),
    frequenciaFumo: Joi.string().allow(""),
    alcool: Joi.number().required(),
    frequenciaAlcool: Joi.string().allow(""),
    medicamentos: Joi.number().required(),
    quaisMedicamentos: Joi.string().allow(""),
    cosmeticos: Joi.number().required(),
    quaisCosmeticos: Joi.string().allow(""),
    exposicaoSolar: Joi.number().required(),
    frequenciaExposicaoSolar: Joi.string().allow(""),
    atividadeFisica: Joi.number().required(),
    frequenciaAtividadeFisica: Joi.string().allow(""),
    informacoesAdicionais2: Joi.string().allow(""),
}).options({allowUnknown: true});

const postForm = (req, res, next) => {

    //montar o viewmodel
    const{ nome, pronomes, dataDeNascimento, endereco, cep, bairro, cidade, estado, email, telefone, 
    profissao, gravidez, amamentacao, alergias, quaisAlergias, doencasInfantis, quaisDoencasInfantis, 
    cirurgiasRecentes, quaisCirurgiasRecentes, patologias1, patologias2, patologias3, informacoesAdicionais1, 
    fumo, frequenciaFumo, alcool, frequenciaAlcool, medicamentos, quaisMedicamentos, cosmeticos, 
    quaisCosmeticos, exposicaoSolar, frequenciaExposicaoSolar, atividadeFisica, frequenciaAtividadeFisica, 
    informacoesAdicionais2 } = req.body;
    console.log(req.body)
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

    if (!patologias1Selecionado.descricao){
        patologias1Selecionado.descricao = "";
    } 

    const pdfViewModel = {
    nome, 
    pronomes, 
    dataDeNascimento, 
    endereco, 
    cep, 
    bairro, 
    cidade, 
    estado: estadoSelecionado.descricao, 
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
    };

    //montar o html
    const filePath = path.join(__dirname, "../views/pages/formPdf.ejs");
    const templateHtml = fs.readFileSync(filePath, "utf8");

    //montar o pdf
    const htmlPronto = ejs.render(templateHtml, pdfViewModel);

    //retornar o pdf
    const file = {
        content: htmlPronto  
      };
    
      const configuracoes = {
        format: 'A4',
        printBackground: true
      };
    
    htmlToPdf.generatePdf(file, configuracoes)
    .then((resultPromise) => {
        res.contentType("application/pdf");
        res.send(resultPromise);
    });
}

module.exports = {
    controllerGetForm,
    postFormSchema,
    postForm
}