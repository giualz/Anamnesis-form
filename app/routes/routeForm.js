const controllerForm = require("../controllers/controllerForm");
const middlewareDtoValidate = require("../utils/dtoValidade");

module.exports = (routerForm) => {
    routerForm.route("/form")
    .get(controllerForm.controllerGetForm)
    .post(middlewareDtoValidate("body", controllerForm.postFormSchema), controllerForm.postForm)
}
// 