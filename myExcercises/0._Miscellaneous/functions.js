

//hoisting 
console.log(add(3,42));

function add(a, b) {
    return a + b;
}

//anonym function -har ikke et navn
const addAnotherFunction = function(a,b) {
    return a + b;
};

console.log(addAnotherFunction(3,4));

// USE THESE
//lambda
const addArrowFunction = (a,b) => {
    return a+b;
};

//implicit return
const arrowFunctionCompact = (a,b) => a + b;

//callback functions
function genericActionExecuter(anyCallbackFunction,name) {
    // execute some code....
    return anyCallbackFunction(name);
}

const spitting = (name) => `${name} is spitting`;

console.log(genericActionExecuter(spitting,"Amanda"));


// create a function that allows malte to shoot and call it.
//task result should be: Malthe is shooting

const shooting = (name) => `${name} is shooting`;

console.log(shooting("Malthe"))

//create a single statement belows that says "Murat" is running away
console.log(genericActionExecuter((name)=> `${name} is running away`,"Murat"));