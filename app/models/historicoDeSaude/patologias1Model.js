const patologias1DB = [
    { 
        id: 1,
        descricao: "Queloide"
    },
    { 
        id: 2,
        descricao: "Cardiopatia"        
    },
    {
        id: 3,
        descricao: "Epilepsia"
    },
    { 
        id: 4,
        descricao: "Hipertensão"
    },
    { 
        id: 5,
        descricao: "Problema renal"        
    }
];

const list = () => {
    return patologias1DB
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