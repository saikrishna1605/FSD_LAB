function createInfiniteIterator(limit) {
    let count = 1;
    return {
      [Symbol.iterator]() {
        return {
          next: () => {
            if (count <= limit) {
              return { value: count++, done: false };
            } else {
              return { done: true };
            }
          }
        };
      }
    };
  }
  const infiniteIterator = createInfiniteIterator(5);
  for (const value of infiniteIterator) {
    console.log(value);  
  }  