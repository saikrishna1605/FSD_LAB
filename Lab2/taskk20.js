const resettableIterable = {
    data: [10, 20, 30, 40],
    currentIndex: 0,
    [Symbol.iterator]() {
      this.currentIndex = 0; 
      return this;
    },
    next() {
      if (this.currentIndex < this.data.length) {
        return { value: this.data[this.currentIndex++], done: false };
      } else {
        return { done: true };
      }
    },
  
    reset() {
      this.currentIndex = 0;
    }
  };
  const iterator = resettableIterable[Symbol.iterator]();
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  resettableIterable.reset();
  for (const value of resettableIterable) {
    console.log(value);
  }  