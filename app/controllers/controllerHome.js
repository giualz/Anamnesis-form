const controllerGetHome = (req, res, next) => {
    res.render("pages/home")
};

module.exports = {controllerGetHome}
//exportar como função