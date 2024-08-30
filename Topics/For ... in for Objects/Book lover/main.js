let library = {
    books: {
        "first": "Brothers Karamazov",
        "second": "The Catcher in the Rye"
    }
};
for (let object in library) {
//print each item in the books
    for (let book in library[object]) {
        console.log(library[object][book]);
    }
}