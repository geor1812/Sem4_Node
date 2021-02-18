const express = require("express");
const app = express();
const tracks = require("./tracks");

app.get("/tracks", (req, res) => {
    res.send(tracks.getAll());
});

app.get("/tracks/:id", (req, res) => {
    res.send(tracks.getById(req.params.id))
});

app.listen(8080);