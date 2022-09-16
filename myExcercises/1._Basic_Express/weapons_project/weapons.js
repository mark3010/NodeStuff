const app = require("express")();
const port = 8080;

app.use(express.json());

// create arsenal of weapons

const knife = {
    name: "knife",
    img: null,
    types: ["combat knife","butter knife", "hunting knife"],
    description: "blah blah blah",
	legality: "legal if under 6cm"
};

const pistol = {
    name: "knife",
    img: null,
    types: ["deagle","glock"],
    description: "blah blah blah",
	legality: "illegal without license"
};

const rifle = {
    name: "knife",
    img: null,
    types: ["hunting rifle"],
    description: "I don't know anything about rifles :^)",
	legality: "illegal without license"
};

const weapons = [];
weapons.push(knife);
weapons.push(pistol);
weapons.push(rifle);

// endpoints

app.get("/weapons", (req, res) => {
    res.send({data: weapons});
});

app.get("/weapons/:id", (req,res)=> {
    let weapon = weapons.find(element => element.name === req.params.id);

    if (weapon !== undefined) {
        res.send({data: weapon});
    } else {
        res.send({errorMessage: "this weapon does not exist in the database"});
    }
})

app.post("/weapons", (req,res)=> {
    // does not currently support error handling
    const newWeapon = {
        name: req.params.name,
        img: req.params.img,
        types: req.params.types,
        description: req.params.description,
        legality: req.params.legality
    };

    weapons.push(newWeapon);

})

app.delete("/weapons/:id", (req,res) => {
    // letting arraypos === id because I'm lazy
    weapons.delete(req.params.id)
})

app.put("/weapons/abc", (req,res) => {
    // letting arraypos === id because I'm lazy
    weapons.delete(req.params.id)
})

app.patch("/weapons/abc", (req,res) => {
    // letting arraypos === id because I'm lazy
    weapons.delete(req.params.id)
})

app.listen(port, () => {
    console.log("Your weapons project is up and running on port: ",port);
});