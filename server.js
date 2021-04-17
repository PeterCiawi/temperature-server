const express = require("express");

const app = express();
app.use(express.json({
    type: "application/json"
}))

let temp = 0;

function getTemperature(req, res, next) {
    res.status(200).send({
        message: temp
    });
}

function setTemperature(req, res, next) {
    console.log(req.body);
    temp = req.body["temp"];
    res.status(200).send("");
}

app.get("/temp", getTemperature);
app.post("/temp", setTemperature);

app.listen(9090, function() {
    console.log("Hello");
    
    console.log("Server started on port 9090");
})