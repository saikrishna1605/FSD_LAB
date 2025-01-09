function* combineSequences(array, fibLimit) {
    for (const num of array) {
      yield num;
    }
    let [a, b] = [0, 1];
    for (let i = 0; i < fibLimit; i++) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  const combined = combineSequences([10, 20, 30], 5);
  for (const value of combined) {
    console.log(value);
  }
  