const {controllerGetForm} = require("../controllers/controllerForm");
const middlewareDtoValidate = require("../utils/dtoValidade");

module.exports = (routerForm) => {
    routerForm.route("/form")
    .get(controllerGetForm)
    .post(middlewareDtoValidate("body", controllerGetForm.postFormSchema), controllerGetForm.postFormSchema)
}