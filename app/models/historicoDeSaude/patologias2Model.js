const patologias2DB = [
    { 
        id: 6,
        descricao: "Problema dermatológico"
    },
    { 
        id: 7,
        descricao: "Problema respiratório"        
    },
    {
        id: 8,
        descricao: "Problema circulatório"
    },
    { 
        id: 9,
        descricao: "Hemofilia"
    },
    { 
        id: 10,
        descricao: "Doenças autoimunes"        
    }
];

const list = () => {
    return patologias2DB
};

const searchForID = (id) => {
    const result = id.filter((item) => {
        item.id === id
        if(result.length > 0){
            return result[0]
        }else{
            return undefined
        }
})};

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