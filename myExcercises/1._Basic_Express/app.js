//start server
const express = require("express");
const app = express();

//eller brug dette, som er endnu kortere
//const app = require("express")();

//set endpoint/route
app.get("/", (request,response) => {
    response.send({message: "Yo route check?"});
});

app.get("/deers", (req, res) => {
    res.send({size: "BIG"})
});

app.get("/deers/:id", (req,res)=> {
    if (req.params.id === "bambi") {
        res.send({message: "bambi is a G"});
    } else {
        res.send({errorMessage: "this foo does not exist"});
    }
    
})

app.get("/actors", (req,res) => {
    console.log(req.query.name)
    res.send({
        message: "Information about the actor",
        ...req.query
    })
})
//to test : http://localhost:8080/actors?age=12&name=johnny

app.get("/cups", (req, res) => {
    res.send({color: "green"})
});

//set port       //callback function v
app.listen(8080, () => {
    console.log("server is running on port ",8080)
});

// how to send data with GET
// these also work with all HTTP methods

// 1.
// path variable
// /deers/{id}

// 2.
// query parameters (query string)
// deers?keykey=value&key2=value2
//strength: link can be shared, but looks uggo

//NOTE: 
//crtl + c to close server