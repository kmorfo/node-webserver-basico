require('dotenv').config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Se establece hbs
app.set("view engine", "hbs");
//Registramos los partials con su ruta
hbs.registerPartials(__dirname + "/views/partials", function (err) {
    // este callback es opcional y se puede omitir, se usa para mostrar los errores
});

app.get("/", (req, res) => {
    // res.render('home'); sin argumentos
    //Para utilizar los argumentos desde la vista es como en laravel {{nombre}}
    res.render("home", { nombre: "kmorfo", titulo: "Curso de Node" });
});
app.get("/generic", (req, res) => {
    res.render("generic", { nombre: "kmorfo", titulo: "Curso de Node" });
});
app.get("/elements", (req, res) => {
    res.render("elements", { nombre: "kmorfo", titulo: "Curso de Node" });
});
app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
});
