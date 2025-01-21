class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.status = "available";
    }

    borrow() {
        if (this.status === "available") {
            this.status = "borrowed";
            console.log(`${this.title} by ${this.author} has been borrowed.`);
        } else {
            console.log(`${this.title} by ${this.author} is already borrowed.`);
        }
    }

    returnBook() {
        if (this.status === "borrowed") {
            this.status = "available";
            console.log(`${this.title} by ${this.author} has been returned.`);
        } else {
            console.log(`${this.title} by ${this.author} is already available.`);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }

    searchByAuthor(author) {
        return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
    }

    searchByTitle(title) {
        return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    }

    borrowBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            book.borrow();
        } else {
            console.log(`Book titled "${title}" not found.`);
        }
    }

    returnBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            book.returnBook();
        } else {
            console.log(`Book titled "${title}" not found.`);
        }
    }

    trackOverdueBooks(overdueDays) {
        const overdueBooks = this.books.filter(book => book.status === "borrowed");
        console.log(`Overdue Books (More than ${overdueDays} days overdue):`);
        overdueBooks.forEach(book => console.log(`${book.title} by ${book.author}`));
    }

    calculateFine(overdueDays) {
        const overdueBooks = this.books.filter(book => book.status === "borrowed");
        const finePerDay = 1;
        let totalFine = 0;

        overdueBooks.forEach(book => {
            totalFine += overdueDays * finePerDay;
        });

        console.log(`Total fine for overdue books: ${totalFine}`);
    }
}

const library = new Library();

library.addBook(new Book("The Catcher in the Rye", "J.D. Salinger"));
library.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
library.addBook(new Book("1984", "George Orwell"));


console.log(library.searchByAuthor("Harper Lee"));
console.log(library.searchByTitle("1984"));


library.borrowBook("1984");
library.returnBook("1984");

library.trackOverdueBooks(5);
library.calculateFine(5);