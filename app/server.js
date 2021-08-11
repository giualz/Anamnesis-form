const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/routes");

routes(app);

// set ejs as view engine
app.set("view engine", "ejs");

//tell express where the view folder is
//__dirname brings it up to app
app.set("views", path.join(__dirname, "views"))

//access to static files
app.use(express.static(path.join(__dirname, "public")));

// port
const port = 5000;

app.listen(port, () =>{ 
    console.log("server working on port ", port)
})


// controllers

// const controllerGetAbout = (req, res, next) => {
//     res.render("pages/about")
// };

// root = home
// app.get("/", controllerGetHome);

// about
// app.get("/about", controllerGetAbout);

// form
// app.get("/form", controllerGetForm);