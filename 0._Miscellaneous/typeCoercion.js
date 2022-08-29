// type coercion <- subject day #1

const total = 24.32;
const price = 12.32;

const newTotal = total + price;
console.log(newTotal,total);

//3 equals to chack with types
const balanceEquals = total === newTotal;
//2 equals is a soft check and may convert datatypes when evaluating