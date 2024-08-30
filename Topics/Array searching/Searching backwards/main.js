const results = [3, 5, 2, 1, 2, 3, 4, 6, 1, 5];

function search(element) {
// return the index of the last occurrence of the element in the array
    for (let i = results.length - 1; i >= 0; i--) {
        if (results[i] === element) {
            return i;
        }
    }
    return -1;
}