let visitCounter = 0;

export function incrementVisitorCounter() {
    visitCounter++;
    return visitCounter;
}

/* cant use this in module type syntax
module.exports = {
    incrementVisitorCounter: incrementVisitorCounter
}*/