function search(objects) {
// return the index of the object with the name "John" and age 30
    return objects.findIndex(obj => obj.name === "John" && obj.age === 30);
}