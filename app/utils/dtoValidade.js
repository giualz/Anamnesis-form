module.exports = (context, schema) => {
    return async (req, res, next) => {
        const result = schema.validate(req[context], {abortEarly: false});
        console.log(req.body)
        if (result.error){
            return res.render("pages/errors", {
                errors: result.error.details.map(item => {
                    return item.message
                })
            })
        }
    next();
    }
}