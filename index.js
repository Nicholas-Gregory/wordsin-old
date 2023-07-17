const express = require("express");
const bodyParser = require("body-parser");

const database = require("./db.js");

const app = express();
const PORT = 3001;
const db = new database.Database();

app.use(bodyParser.json());

//#region STORYLETS

app.get("/storylet", async (req, res) => {
    const title = req.query.title;
    const storylet = await db.storyletByTitle(title);

    return res.json(storylet);
});

app.post("/storylet", (req, res) => {
    const storylet = req.body;

    db.writeStorylet(storylet);
});

//#endregion

//#region USERS

app.get("/users", async (req, res) => {

});

app.post("/users", (req, res) => {

});

//#endregion

//#region ITEMS

app.get("/items", async (req, res) => {

});

app.post("/items", (req, res) => {

});

//#endregion

//#region SPELLS

app.get("/spells", async (req, res) => {

});

app.post("/spells", (req, res) => {

});

//#endregion

//#region FEATS

app.get("/feats", async (req, res) => {

});

app.post("/feats", (req, res) => {

});

//#endregion

app.listen(PORT, () => console.log(`WORDSIN server listening on port ${PORT}`));