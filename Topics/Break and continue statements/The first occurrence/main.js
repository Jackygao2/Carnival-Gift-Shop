function find5(numbers) {
    // find the first occurrence of number 5 in the given array and return its index. If the number is not found, return -1.
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 5) {
            return i;
        }
    }
    return -1;
}