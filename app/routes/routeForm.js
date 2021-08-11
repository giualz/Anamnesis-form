const {controllerGetForm} = require("../controllers/controllerForm");

module.exports = (routerForm) => {
    routerForm.route("/form")
    .get(controllerGetForm);
}