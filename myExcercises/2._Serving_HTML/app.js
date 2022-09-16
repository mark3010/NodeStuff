import express from "express"; //imports from node modules
const app = express();

app.listen(8080, () => console.log("the server is running"));

//let frontend get public folder
app.use(express.static("public"));

import path from "path";

//cant use this anymore in type module
// require("./package.json")


//const {incrementVisitorCounter} = require("./geocitiesUtil.js")
import    { incrementVisitorCounter} from "./geocitiesUtil.js"

app.get("/", (req, res) =>{
    console.log("Visitors since the server started", incrementVisitorCounter());
    //cant use dirname as it only works in coomonjs
    //res.sendFile(__dirname + "/public/frontpage.html");
    res.sendFile(path.resolve("./public/frontpage.html"))
});

