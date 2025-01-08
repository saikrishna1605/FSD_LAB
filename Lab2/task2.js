function calculateTotal(...input) {
    let sum = 0;
    for (let i of input) {
        sum += i;
    }
    return sum;
}
console.log(calculateTotal(1,2,3));
console.log(calculateTotal(10, 20, 30, 40));