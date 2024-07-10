//  console.table(books);

// function filterBooksByGenre(books, genre) {
//     return books.filter((book) => book.genre === genre);
// }

// console.table(books);

// const booksGenre = filterBooksGenre(books, 'Пригоди');

// console.table(booksGenre);

// function getTitlesByAuthor(books, author){
//     return books 
//     .filter((book) => book.author === author)
//     .map((book) => book.title);
// } 
// const titlesByAuthor = getTitlesByAuthor(books, 'Джордж Орвелл');

// console.table(titlesByAuthor);

// function yearBooksByAuthors (books, yearCreate){
// return books.filter((book)=>book.yearCreate===yearCreate).map(author)
// }
// const authorYear = yearBooksByAuthors(books, 1990);
// console.table(authorYear);

function sortBooksByTitleInGenre(books, genre){
    return books
    .filter((book) => book.genre === genre)
    .toSorted ((book1, book2) => {
        if (book1.title === book2.title){
            return 0;
        }
        if(book1.title > book2.title){
            return 1;
        }
        if( book1.title < book2.title){
            return -1;
        }
    });

}
const sortBooksInGenre = sortBooksByTitleInGenre
(books, 'Фікція');
console.table(sortBooksInGenre);