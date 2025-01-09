let symbol1 = Symbol.for("globalKey");
let symbol2 = Symbol.for("globalKey");
console.log(symbol1 === symbol2);
console.log(symbol1.description);  
console.log(symbol2.description);