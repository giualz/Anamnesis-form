
module.exports = (req, res, next) => {

    let { patologias1, patologias2, patologias3 } = req.body
        
        patologias1 = patologias1 ? [...patologias1] : []
        patologias2 = patologias2 ? [...patologias2] : []
        patologias3 = patologias3 ? [...patologias3] : []
        
        req.body = {
                ...req.body,
                patologias1,
                patologias2,
                patologias3
            }
    next()
}