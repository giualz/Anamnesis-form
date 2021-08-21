const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes/routes");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

app.set("view engine", "ejs");

//tell express where the view folder is
//__dirname brings it up to app
app.set("views", path.join(__dirname, "views"))

//access to static files
app.use(express.static(path.join(__dirname, "public")));

const port = 5000;

app.listen(port, () =>{ 
    console.log("server working on port ", port)
})