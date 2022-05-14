require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
    res.send("hello world").status(200);
});

const PORT = process.env.PORT || 2117;
app.listen(PORT, () => console.log(`Server online on port ${PORT}`));