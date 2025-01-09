const symbol1 = Symbol('uniqueProperty');
const symbol2 = Symbol('uniqueProperty');
const myObject = {
  [symbol1]: 'Value for symbol1',
  [symbol2]: 'Value for symbol2',
};
console.log(myObject[symbol1]);
console.log(myObject[symbol2]); 
console.log(symbol1 === symbol2);