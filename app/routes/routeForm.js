const controllerForm = require("../controllers/controllerForm");
const middlewareDtoValidate = require("../utils/dtoValidade");
const transformArray = require("../utils/transformArray")

module.exports = (routerForm) => {
    routerForm.route("/form")
    .get(controllerForm.controllerGetForm)
    .post(transformArray, middlewareDtoValidate("body", controllerForm.postFormSchema), controllerForm.postForm)
}