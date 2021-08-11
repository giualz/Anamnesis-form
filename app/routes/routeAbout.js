const {controllerGetAbout} = require ("../controllers/controllerAbout");

module.exports = (routerAbout) => {
    routerAbout.route("/about")
    .get(controllerGetAbout)
};