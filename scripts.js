const myLibrary = [];
const addButton = document.querySelector('.add-book');
const dialog = document.querySelector('dialog');
const submitBookButton = document.querySelector('.dialog-submit');
const template = document.querySelector('.template');
const booksGrid = document.querySelector('.books-grid');
const closeDialogButton = document.querySelector('.close-button');

addButton.addEventListener('click', () => dialog.showModal());
closeDialogButton.addEventListener('click', () => dialog.close());
submitBookButton.addEventListener('click', handleBookSubmission);

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(bookInfo) {
  myLibrary.push(bookInfo);
  displayBooks();
}

function handleBookSubmission(event) {
  event.preventDefault();
  const titleField = dialog.querySelector('#title');
  const authorField = dialog.querySelector('#author');
  const pagesField = dialog.querySelector('#pages');
  const readField = dialog.querySelector('#read-status');
  const inputFields = [titleField, authorField, pagesField, readField];

  if (!inputFields.every(field => field.checkValidity())) {
    inputFields.forEach(field => field.reportValidity());
    return;
  }

  addBookToLibrary(new Book(
    titleField.value, authorField.value, pagesField.value, readField.checked
  ));

  clearFields(readField, titleField, authorField, pagesField);
  dialog.close();
}

function clearFields(readField, ...otherFields) {
  readField.checked = false;
  otherFields.forEach(element => element.value = '');
}

function displayBooks() {
  myLibrary.forEach(book => {
    if (book.onPage) return;

    const card = prepareBookForDisplay(book);
    booksGrid.appendChild(card);
  });
}

function getNewBookCard(bookInfo) {
  const newBook = template.cloneNode(true);
  const readStatus = newBook.querySelector('.status');

  newBook.querySelector('.title').textContent = bookInfo.title;
  newBook.querySelector('.author').textContent = bookInfo.author;
  newBook.querySelector('.pages').textContent = bookInfo.pages;
  newBook.querySelector('.status').classList.add(bookInfo.read);
  newBook.className = 'book-card';
  newBook.style.display = '';

  return newBook;
}

function getLastBookID() {
  return document.querySelector('.book-card:last-child')
    ?.dataset.id || 0;
}

function prepareBookForDisplay(book) {
  const bookCard = getNewBookCard(book);
  book.id = bookCard.dataset.id = Number(getLastBookID()) + 1;
  book.onPage = true;

  const changeReadButton = bookCard.querySelector('.change-status');
  const readStatusDisplay = bookCard.querySelector('.status');
  const removeBookButton = bookCard.querySelector('.delete-button');

  changeReadButton.addEventListener('click', changeReadStatus);
  removeBookButton.addEventListener('click', removeBook);

  function changeReadStatus() {
    let classContent = readStatusDisplay.className;
    if (classContent.includes('false')) {
      classContent = 'status true';
      readStatusDisplay.textContent = 'Have Read';
      book.read = true;
    } else {
      classContent = 'status false';
      readStatusDisplay.textContent = 'Haven\'t Read Yet';
      book.read = false;
    }

    readStatusDisplay.className = classContent;
  }

  function removeBook() {
    const bookCard = this.parentElement;
    const id = Number(this.parentElement.dataset.id);

    myLibrary.forEach((element, index) => {
      if (element.id = id) {
        myLibrary.splice(index, 1)
      }
    });

    bookCard.remove();
  }

  return bookCard;
}