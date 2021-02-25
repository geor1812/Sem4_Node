const express = require('express');
const app = express();

//The date object has to be initialized in every get method
//Otherwise the date & time would be the one got when the server was started

app.get("/time", (req, res) => {
    const data = new Date();
    const time = data.getHours() + ":" + data.getMinutes();
    res.send(time);
});

app.get("/day", (req, res) => {
    const data = new Date();
    const date = data.getDate().toString();
    res.send(date);
});

app.get("/month", (req, res) => {
    const data = new Date();
    const month = (data.getMonth() + 1).toString();
    res.send(month);
});

app.listen(8080);
