require("dotenv").config();
const express = require("express");
const mustacheExpress = require("mustache-express");

const app = express();

const rootRoutes = require("./routes/root-routes");

// app settings
app.engine("html", mustacheExpress());
app.set("views", `${__dirname}/views`);
app.set("view engine", "html")

// app view directories
app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.get("/", (req, res) => {
    res.render("pages/home", {
        title: "Home",
    })
});
app.use("/", rootRoutes);

const PORT = process.env.PORT || 2117;
app.listen(PORT, () => console.log(`Server online on port ${PORT}`));