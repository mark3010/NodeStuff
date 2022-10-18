import express from "express"; //imports from node modules
import path from "path";

const app = express();
const router = express.Router();

app.listen(8080, () => console.log("the server is running"));

//let frontend get public folder
//app.use(express.static("public"));
app.use('/.netlify/functions/api',router);

router.get('/',(req,res) => {
    res.sendFile(path.resolve("./public/frontpage.html"));
})

//app.get("/", (req, res) =>{
    //res.sendFile(__dirname + "/public/frontpage.html");  
//});

module.exports.handler = serverless(app);