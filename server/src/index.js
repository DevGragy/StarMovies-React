//Modulos
const express = require("express");
const ejs = require("ejs-mate");
const path = require("path");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");

//Despliegue del server
const app = express();
require("./database");
require("./passport/local-auth");

const port = process.env.PORT || 3000;

//Ajustes
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejs);
app.set("view engine", "ejs");
app.set("port", port);

//Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: "secretsession",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

//Rutas
app.use("/", require("./routes/index"));

app.listen(app.get("port"), () => {
    console.log(`Server on port ${port}`);
});