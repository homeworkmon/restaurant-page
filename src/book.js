function createBook() {
    const book = document.createElement('div');
    book.classList.add('book');

    const title = document.createElement('h2');
    title.textContent = "Anyone can cook!";

    const bookImage = document.createElement('img');
    bookImage.src = '../dist/images/anyone-can-cook-book.jpg';
    bookImage.alt = 'Anyone Can Cook';
    bookImage.classList.add('book-image');
    bookImage.addEventListener('click', () => {
        window.open('https://www.amazon.ca/Your-own-Anyone-can-cook-ebook/dp/B086SGMKGR');
    });

    const text = document.createElement('p');
    text.textContent = "get your copy today because you too CAN cook";
    
    book.appendChild(title);
    book.appendChild(bookImage);
    book.appendChild(text);

    return book;
}

function loadBook() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createBook());
}

export default loadBook;