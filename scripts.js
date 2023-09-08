function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const myLibrary = [];
const addButton = document.querySelector('.add-book');
const booksGrid = document.querySelector('.books-grid');
const dialog = document.querySelector('dialog');
const closeDialogBtn = document.querySelector('.close-button');
const dialogSubmit = document.querySelector('.dialog-submit');

addButton.addEventListener('click', () => dialog.showModal());
closeDialogBtn.addEventListener('click', () => dialog.close());
dialogSubmit.addEventListener('click', addBookToLibrary);

const title = dialog.querySelector('#title');
const author = dialog.querySelector('#author');
const pages = dialog.querySelector('#pages');
const read = dialog.querySelector('#read');

function addBookToLibrary() {
    console.log(title.value);
}

/* function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}

function getBookFromUser(event) {
    event.preventDefault();
    const title = dialog.querySelector('#title');
    const author = dialog.querySelector('#author');
    const pages = dialog.querySelector('#pages');
    const haveRead = dialog.querySelector('#read-status');

    addBookToLibrary(
        new Book(title.value, author.value, pages.value, haveRead.checked)
    );
    dialog.close();

    title.value = '';
    author.value = '';
    pages.value = '';
    haveRead.checked = false;

    displayBooks();
}

function displayBooks() {
    const template = document.querySelector('.template');

    for (let i = booksGrid.childElementCount; i <= myLibrary.length; i++) {
        const newBook = createBookCard(template, myLibrary[i]);
        // newBook.dataset.index = i;
        booksGrid.appendChild(newBook);
    }
}

function createBookCard(template, bookInfo) {
    const bookCard = template.cloneNode(true);
    bookCard.className = 'book-card';

    console.log(bookInfo, bookInfo.author);
    bookCard.querySelector('.author')
        .textContent = bookInfo.author;
    bookCard.querySelector('.title')
        .textContent = bookInfo.title;
    bookCard.querySelector('.pages')
        .textContent = bookInfo.pages;

    return bookCard;
} */