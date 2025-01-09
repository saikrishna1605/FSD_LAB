function* cumulativeSum(array) {
    let sum = 0;
    for (const num of array) {
      sum += num;
      yield sum;
    }
    return sum;
  }
  
  const sumGen = cumulativeSum([1, 2, 3, 4]);
  for (const value of sumGen) {
    console.log(value);
  }
  
  const { value: finalSum } = sumGen.next();
  console.log(finalSum);