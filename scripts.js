const myLibrary = [];
const addButton = document.querySelector('button');
const booksGrid = document.querySelector('.books-grid');

addButton.addEventListener('click', getBookFromUser);

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

function getBookFromUser() {

}

function displayBooks() {
  const template = document.querySelector('.template');

  for (let i = 0; i < myLibrary.length; i++) {
    const newBook = createBookCard(template, myLibrary[i]);
    booksGrid.appendChild(newBook);
  }
}

function createBookCard(template, bookInfo) {
  const bookCard = template.cloneNode(true);
  bookCard.className = 'book-card';

  bookCard.querySelector('.author')
    .textContent = bookInfo.author;
  bookCard.querySelector('.title')
    .textContent = bookInfo.title;
  bookCard.querySelector('.pages')
    .textContent = bookInfo.pages;

  return bookCard;
}

// To be removed
/* const removeLastBtn = document.querySelector('.remove-book');

addButton.addEventListener('click', addDiv);
removeLastBtn.addEventListener('click', removeLastDiv);

function addDiv() {
  const div = document.createElement('div');

  booksGrid.appendChild(div);
}

function removeLastDiv() {
  const lastDiv = booksGrid.querySelector(':scope > div:last-child');

  if (lastDiv) {
    lastDiv.remove();
  }
} */