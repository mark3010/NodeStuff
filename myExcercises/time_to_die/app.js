import express from "express"; //imports from node modules
import path from "path";

const app = express();

app.listen(8080, () => console.log("the server is running"));

//let frontend get public folder
app.use(express.static("public"));



app.get("/", (req, res) =>{
    //res.sendFile(__dirname + "/public/frontpage.html");
    res.sendFile(path.resolve("./public/frontpage.html"))
});