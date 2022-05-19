require("dotenv").config();
const express = require("express");
const mustacheExpress = require("mustache-express");

const app = express();

// app routers
const rootRoutes = require("./src/routes/root-routes");

// app settings
app.engine("html", mustacheExpress());
app.set("views", `${__dirname}/src/views`);
app.set("view engine", "html")

// app view directories
app.use(express.static(`${__dirname}/src/assets`));
app.locals.basedir = `${__dirname}/src/assets`;

// use routers
app.use("/", rootRoutes);

// handle nonexistent url paths (error 404)
app.all("*", (req, res) => {
    res.render("errors/404");
});

// start server
const PORT = process.env.PORT || 2117;
app.listen(PORT, () => console.log(`Server online on port ${PORT}`));