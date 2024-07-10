const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const form = document.querySelector('.form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const titleInput = document.getElementById('title');
        const authorInput = document.getElementById('author');
        const pagesInput = document.getElementById('pages');
        const readInput = document.getElementById('read');
        
        if (readInput.value == 'on') {
            readInput.value = 'Yes';
        } else {
            readInput.value = 'No';
        }
    
        let newBookEntry = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);

        for (book of myLibrary) {
            if (book.title == newBookEntry.title) {
                return;
            }
        }

        myLibrary.push(newBookEntry);
        displayLibrary(newBookEntry);
    })
}

function displayLibrary(newBook) {
    let filteredLibrary = myLibrary.filter((book) => book.title == newBook.title);
    filteredLibrary.forEach((book, i) => {
        let newEntry = document.createElement('div');

        if (book.index === undefined) {
            book.index = i;
        }

        newEntry.setAttribute('data-book-index', book.index);
        newEntry.textContent = `${book.title} ${book.author} ${book.pages} ${book.read}`;
        document.body.appendChild(newEntry);
        removeBook(newEntry);
    })
}

function runModal() {
    let newBookBtn = document.querySelector('.new-book');
    let dialog = document.querySelector('.dialog');
    let submit = document.querySelector('.submit');
    newBookBtn.addEventListener('click', () => dialog.showModal());
    submit.addEventListener('click', () => dialog.close());
}

function removeBook(nwbk) {
    let removeBtn = document.createElement('button');
    removeBtn.addEventListener('click', () => {
        nwbk.remove();
        removeBtn.remove();
    })
    document.body.appendChild(removeBtn);
}

addBookToLibrary();
runModal();

const obj = {
    
}