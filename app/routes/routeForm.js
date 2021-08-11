const {controllerGetForm} = require("../controllers/controllerForm");
const middlewarDtoValidate = require("../utils/dtoValidade");

module.exports = (routerForm) => {
    routerForm.route("/form")
    .get(controllerGetForm)
    .post(middlewarDtoValidate("body", controllerGetForm.postFormSchema), controllerGetForm.postFormSchema)
}