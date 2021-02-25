const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send({});
});

const me = {
    name: "George",
    age: 20,
    hobby: "being alive"
}

app.get("/me", (req, res) => {
    res.send(me);
});

app.get("/about", (req, res) => {
    res.send({version: "0.0.2"});
});

app.get("/page", (req, res) => {
    res.send("<header>Welcome!</header>");
});

app.listen(8080);