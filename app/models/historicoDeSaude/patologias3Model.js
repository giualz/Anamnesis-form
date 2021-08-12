const patologias3DB = [
    { 
        id: 11,
        descricao: "Câncer"
    },
    { 
        id: 12,
        descricao: "Marca-passo"        
    },
    {
        id: 13,
        descricao: "Diabetes"
    },
    { 
        id: 14,
        descricao: "Hepatite"
    },
    { 
        id: 15,
        descricao: "Anemia"
    }
];

const list = () => {
    return patologias3DB
};

const searchForID = (id) => {
    const result = patologias3DB.filter((item) => {
        return parseInt(item.id) === parseInt(id)
    })
    if(result.length > 0){
            return result[0]
        }else{
            return undefined
        }
    }

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