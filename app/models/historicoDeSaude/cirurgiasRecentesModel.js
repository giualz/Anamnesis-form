const cirurgiasRecentesDB = [
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
    return cirurgiasRecentesDB
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

const searchForDefinicao = ((definicao) => {
    const result = definicao.filter((item) => {
        item.definicao === definicao
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
    searchForDefinicao
}