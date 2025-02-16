
// You bookshelf is a mess! You need to arrange the books in alphabetical order.

// Problem Statement: Create a function that sorts the books alphabetically and returns the updated list.

function sortBook(books){
    books.sort()
    return books
}
const BooksList = sortBook(["Math", "English", "Science", "History"])
console.log(BooksList)
