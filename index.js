const express = require("express");
const bodyParser = require("body-parser");

const database = require("./db.js");

const app = express();
const PORT = 3001;
const db = new database.Database();

app.use(bodyParser.json());

app.get("/storylet", async (req, res) => {
    const title = req.query.title;
    const storylet = await db.storyletByTitle(title);

    return res.json(storylet);
});

app.post("/storylet", (req, res) => {
    const storylet = req.body;

    db.writeStorylet(storylet);
});

app.listen(PORT, () => console.log(`WORDSIN server listening on port ${PORT}`));