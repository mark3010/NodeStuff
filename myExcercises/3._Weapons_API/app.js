import express, { response } from "express";
const app = express();
const port = 8080;


const knife = {
    id: 1,
    name: "knife",
    img: null,
    types: ["combat knife","butter knife", "hunting knife"],
    description: "blah blah blah",
	legality: "legal if under 6cm"
};

const pistol = {
    id: 2,
    name: "pistol",
    img: null,
    types: ["deagle","glock"],
    description: "blah blah blah",
	legality: "illegal without license"
};

const rifle = {
    id: 3,
    name: "rifle",
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

app.use(express.json());

app.get("/weapons", (req, res) => {
    res.send({data: weapons});
});


app.get("/weapons/:id", (req,res)=> {
    // I let the id be the array pos+1, because im lazy
    let weapon = weapons.filter(weapon => weapon.id === req.params.id)

    if (weapon !== undefined) {
        res.send({data: weapon});
    } else {
        res.send({errorMessage: "this weapon does not exist in the database"});
    }
})

app.post("/weapons", (req,res)=> {
    // does not currently support error handling
    const newWeapon = {}
    newWeapon.id = parseInt(Math.max(...weapons.map(weapon => weapon.id))+1)

    console.log(newWeapon.id);

    Object.keys(req.body).forEach(property =>{
        newWeapon[property] = req.body[property]
    });

    weapons.push(newWeapon);

    res.json(req.body);
})

app.delete("/weapons/:id", (req,res) => {
    let weapon = weapons[parseInt(req.params.id)-1]
    
    if (weapon !== undefined) {
        res.send({data: weapon});
        weapons.splice(parseInt(req.params.id)-1,1)
    } else {
        res.send({errorMessage: "this weapon does not exist in the database"});
    }
})

app.put("/weapons/:id", (req,res) => {
    const newWeapon = {};

    Object.keys(req.body).forEach(property =>{
        newWeapon[property] = req.body[property]
    });

    weapons[parseInt(req.params.id)-1] = newWeapon;

    res.json(req.body);
})

app.patch("/weapons/:id", (req,res) => {
    const existingWeapon = weapons[parseInt(req.params.id)-1];

    Object.keys(req.body).forEach(property =>{
        existingWeapon[property] = req.body[property]
    });

    res.send(existingWeapon);
})

app.listen(port, () => {
    console.log("Your weapons project is up and running on port: ",port);
});