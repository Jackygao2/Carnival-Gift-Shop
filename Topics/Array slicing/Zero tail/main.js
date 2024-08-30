function removeTail(array) {
    // Remove the last two elements of the array and add a 0 at the end
    return array.slice(0, array.length - 2).concat([0]);
}
let arr = [2, 4, 8, 5, 3, 9, 6, 2, 4];
console.log(arr.slice(2, 6));