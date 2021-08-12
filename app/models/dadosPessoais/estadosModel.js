const estadosDB = [
    {
        id: 1,
        descricao: 'Acre'
    },
    {
        id: 2,
        descricao: 'Alagoas'
    },
    {
        id: 3,
        descricao: 'Amapá'
    },
    {
        id: 4,
        descricao: 'Amazonas'
    },
    {
        id: 5,
        descricao: 'Bahia'
    },
    {
        id: 6,
        descricao: 'Ceará'
    },
    {
        id: 7,
        descricao: 'Distrito Federal'
    },
    {
        id: 8,
        descricao: 'Espírito Santo'
    },
    {
        id: 9,
        descricao: 'Goiás'
    },
    {
        id: 10,
        descricao: 'Maranhão'
    },
    {
        id: 11,
        descricao: 'Mato Grosso'
    },
    {
        id: 12,
        descricao: 'Mato Grosso do Sul'
    },
    {
        id: 13,
        descricao: 'Minas Gerais'
    },
    {
        id: 14,
        descricao: 'Pará'
    },
    {
        id: 15,
        descricao: 'Paraíba'
    },
    {
        id: 16,
        descricao: 'Paraná'
    },
    {
        id: 17,
        descricao: 'Pernambuco'
    },
    {
        id: 18,
        descricao: 'Piauí'
    },
    {
        id: 19,
        descricao: 'Rio de Janeiro'
    },
    {
        id: 20,
        descricao: 'Rio Grande do Norte'
    },
    {
        id: 21,
        descricao: 'Rio Grande do Sul'
    },
    {
        id: 22,
        descricao: 'Rondônia'
    },
    {
        id: 23,
        descricao: 'Roraima'
    },
    {
        id: 24,
        descricao: 'Santa Catarina'
    },
    {
        id: 25,
        descricao: 'São Paulo'
    },
    {
        id: 26,
        descricao: 'Sergipe'
    },
    {
        id: 27,
        descricao: 'Tocantins'
    }
]

const list = () => {
    return estadosDB
};

const searchForID = (id) => {
    const result = estadosDB.filter((item) => {
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