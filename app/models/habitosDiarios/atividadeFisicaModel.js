const atividadeFisicaDB = [
    { 
        id: 1,
        descricao: "Sim"
    },
    { 
        id: 2,
        descricao: "Não"        
    }
];

const list = () => {
    return atividadeFisicaDB
};

const searchForID = (id) => {
    const result = atividadeFisicaDB.filter((item) => {
        return parseInt(item.id) === parseInt(id)
    })
    if(result.length > 0){
        return result[0]
    }else{
        return undefined
    }
};

const searchForDescricao = ((descricao) => {
    const result = descricao.filter((item) => {
        item.descricao === descricao
        if(result.length > 0){
            return result[0]
        }else{
            return undefined
        }
    }
)});

module.exports = {
    list,
    searchForID,
    searchForDescricao
}