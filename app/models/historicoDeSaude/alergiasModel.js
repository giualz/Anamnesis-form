const alergiasDB = [
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
    return alergiasDB
};

const searchForID = (id) => {
    const result = alergiasDB.filter((item) => {
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