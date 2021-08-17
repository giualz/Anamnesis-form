const patologias3DB = [
    { 
        id: 0,
        descricao: "Câncer"
    },
    { 
        id: 1,
        descricao: "Marca-passo"        
    },
    {
        id: 2,
        descricao: "Diabetes"
    },
    { 
        id: 3,
        descricao: "Hepatite"
    },
    { 
        id: 4,
        descricao: "Anemia"
    }
];

const list = () => {
    return patologias3DB
};

const searchForID = (id) => {
    let result = []
        if (Array.isArray(id)) {
            id.forEach(item => {
                result.push(patologias3DB[item].descricao)
            })
            return result
        }
}

// const searchForID = (id) => {
//     const result = patologias3DB.filter((item) => {
//         return parseInt(item.id) === parseInt(id)
//     })
//     if(result.length > 0){
//             return result[0]
//         }else{
//             return undefined
//         }
//     }

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