//'use strict'; // <-- strict mode

//use this
let malte = "Malthe";

//Never do these
var malthe = "Malthe"
malte = "Malthe";


//let malte = "Malthe"; er en global variabel. derfor kan den ikke deklereres igen med "let" kerworded


//scope
{
    let someValue = true;
    {
        let someValue = false;
    }

    console.log(someValue)
}

//var propegates outsides the scope. dette er et block scope
{
    var someValue = true;
    {
        var someValue = false;
    }
    
    console.log(someValue)
}

//const er ikke 'constant'. man kan ændre på værdien i en const men man kan ikke reassign("=")
const me = "Mark";

//what happens here? var i propegates the scope of the callback function
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    })
}

//let works
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i)
    })
}
