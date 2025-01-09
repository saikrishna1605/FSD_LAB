const reverseIterable = {
    data: [1, 2, 3, 4],
    [Symbol.iterator]() {
      let index = this.data.length - 1;
      return {
        next: () => {
          if (index >= 0) {
            return { value: this.data[index--], done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  for (const value of reverseIterable) {
    console.log(value);
  }