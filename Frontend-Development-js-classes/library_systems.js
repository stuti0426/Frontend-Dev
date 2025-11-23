// q3_library_system.js

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = false;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(`You have successfully issued "${this.title}".`);
        }
    }

    returnBook() {
        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
    }
}

const library = [
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565"),
    new Book("1984", "George Orwell", "9780451524935"),
    new Book("Clean Code", "Robert Martin", "9780132350884")
];

// Display available books
function showAvailable() {
    console.log("\nAvailable Books:");
    library.filter(b => !b.isIssued).forEach(b => console.log(`- ${b.title} (${b.isbn})`));
}

// Issue a book by ISBN
function issueByISBN(isbn) {
    const book = library.find(b => b.isbn === isbn);
    if (book) {
        book.issueBook();
    } else {
        console.log("Book not found!");
    }
}

// Test Flow
showAvailable();
issueByISBN("9780451524935"); // Issue 1984
showAvailable(); // 1984 should be missing
issueByISBN("9780451524935"); // Try issuing again