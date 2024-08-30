function checkEvenOrOdd(numbers) {
    // Write a cycle that logs even for each even number and odd for odd numbers. If the number is 0, the program must stop processing the numbers.
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        } else if (numbers[i] % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd');
        }
    }
}