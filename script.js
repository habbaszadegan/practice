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
    
        let newBookEntry = new Book(titleInput.value, authorInput.value, pagesInput.value, readInput.value);

        myLibrary.push(newBookEntry);
        displayLibrary();
    })
}

function displayLibrary() {
    let filteredLibrary = myLibrary.filter(book => {

    })
    let mappedLibrary = myLibrary.map(book => {
        let newEntry = document.createElement('div');
        newEntry.setAttribute('data')
        newEntry.textContent = `${book.title} ${book.author} ${book.pages} ${book.read}`;
        document.body.appendChild(newEntry);
    })
}

function runModal() {
    let newBookBtn = document.querySelector('.new-book');
    let dialog = document.querySelector('.dialog');
    let submit = document.querySelector('.submit');
    newBookBtn.addEventListener('click', () => dialog.showModal());
    submit.addEventListener('click', () => dialog.close());
}

addBookToLibrary();
runModal();