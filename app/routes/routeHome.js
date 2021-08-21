const {controllerGetHome} = require("../controllers/controllerHome");

//só exporta a função, que é o middleware
//o prim parametro do middleware é o endereço do navegador
//routerHome = router (passado como parametro em routes.js)
module.exports = (routerHome) => {
    routerHome.route("/")
    .get(controllerGetHome);
}