function search(numbers) {
// search for the number that is divisible by 11 and return it
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 11 === 0) {
            return numbers[i];
        }
    }
}