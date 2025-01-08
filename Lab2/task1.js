function merge_Arrays(...arr) {
    return [].concat(...arr);
}
const result = merge_Arrays([1, 2], [3, 4], [5, 6]);
console.log(result); 