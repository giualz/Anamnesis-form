const patologias1DB = [
    { 
        id: 0,
        descricao: "Queloide"
    },
    { 
        id: 1,
        descricao: "Cardiopatia"
    },
    {
        id: 2,
        descricao: "Epilepsia"
    },
    { 
        id: 3,
        descricao: "Hipertensão"
    },
    { 
        id: 4,
        descricao: "Problema renal"        
    }
];

const list = () => {
    return patologias1DB
};

const searchForID = (id) => {
    let result = []
    //verifica se id é um array
    if (Array.isArray(id)) {
        //cada elemento dentro do forEach passa a ter o nome item
        id.forEach(item => {
            result.push(patologias1DB[item].descricao)
        })
        return result
    }
}
    // result = patologias1DB.filter((item) => {
    //     return parseInt(item.id) === parseInt(id)
    // })
    // if(result.length > 0){
    //         return result[0]
    //     }else{
    //         return undefined
    //     }
    // }

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