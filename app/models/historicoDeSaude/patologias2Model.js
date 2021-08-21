const patologias2DB = [
    { 
        id: 0,
        descricao: "Problema dermatológico"
    },
    { 
        id: 1,
        descricao: "Problema respiratório"        
    },
    {
        id: 2,
        descricao: "Problema circulatório"
    },
    { 
        id: 3,
        descricao: "Hemofilia"
    },
    { 
        id: 4,
        descricao: "Doenças autoimunes"        
    }
];

const list = () => {
    return patologias2DB
};

const searchForID = (id) => {
    let result = []
        if (Array.isArray(id)) {
            id.forEach(item => {
                result.push(patologias2DB[item].descricao)
            })
            return result
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