/*
problem statement:

Create a Library constructor that initializes a books array. implement:

    * addBook(book): Add a book to the books array.
    * findBook(title): Searches for a book by title and return "Book found " or "Book not found".

Challenges;
    * Implement Library constructor with a books array.
    * Attach addBook(book) and findBook(title) methods to the prototype
*/





// You need to implement the Library constructor funciton and its prototype methods
function Library(){
    this.book = []
}

// Define addBook method on Library's prototype

Library.prototype.addBook = function(book){
    this.book.push(book);
}

// Define findBook method on Library prototyp

Library.prototype.findBook = function(title){
    return this.book.includes(title)? "Book found": "Booknot found"}
