//undefined
//null

//let firstName1111;
//console.log(typeof firstName1111);
//firstName1111 = "harshitmital";
//console.log(typeof firstName1111, firstName1111);

let myVariable = null;
console.log(myVariable);
myVariable = "harshit";
console.log(myVariable, typeof myVariable);

console.log(typeof null);
//bug,error In javascript itself.

// BigInt it came in 2019.
//BigInt is use infront of the huge number you want to put!
//another way to use BigInt is you keep n key word after the number like 12n.
let myNumber = BigInt(23); // javascript ma number ko limit hunxa rakhne!!
//console.log(myNumber);
let sameMyNumber = 123n;
//console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber + sameMyNumber);
//most important thing using BigInt is we can use BigInt number with only those number which we have convert it in BigInt.
