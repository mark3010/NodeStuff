//start server
const express = require("express");
const app = express();

//set endpoint
app.get("/", (request,response) => {
    response.send({message: "Yo route check?"});
});

//set port
app.listen(8080)