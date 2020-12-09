const express = require("express");
const exphbs = require("express-handlebars");
const appRoutes = require("./routes/appRouter");

const app = express();

const hbs = exphbs.create({
    defaultLayout: "main",
    extname: "hbs",
});

app.engine("hbs", hbs.engine);

app.use(appRoutes);
app.use(express.static(__dirname + "/public"));

app.set("view engine", "hbs");
app.set("views", "views");

app.listen(3000, function () {
    console.log("listening on localhost:3000");
});
