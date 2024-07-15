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

// function sortBooksByTitleInGenre(books, genre){
//     return books
//     .filter((book) => book.genre === genre)
//     .toSorted ((book1, book2) => {
//         if (book1.title === book2.title){
//             return 0;
//         }
//         if(book1.title > book2.title){
//             return 1;
//         }
//         if( book1.title < book2.title){
//             return -1;
//         }
//     });

// }
// const sortBooksInGenre = sortBooksByTitleInGenre
// (books, 'Фікція');
// console.table(sortBooksInGenre);

// Map Set

// const object = {
//     props: 45,
//     title: ' title object',
//     555:1000,
//     age:33,
//     '01':'01'
// }

// console.log(object);

// const array = [1,2,3];
// console.log(array);

// const map = 

// map.set('word', ()=>{console.log('hi!');})

// const dictionary = new Map();
// dictionary.set('copy','копіювати')
// dictionary.set('subcsribe','підписатися')
// dictionary.set('send','відправити')
// dictionary.set('share','поділитися')
// dictionary.set('add to cart','додати в корзину')
// dictionary.set('zoom','збільшити')
// dictionary.set('play','грати')

// const word = prompt('enter any word');
// console.log(dictionary.get(word));

// const lang = prompt ('1 - en, 2 - uk');

// switch (lang) {
//     case '1':
//     case 'en':
// console.logdictonary.keys().forEach((key)=>console.log(key));
//     break;
//     case '2':
//         case 'uk':
//             dictionary.values().forEach((value)=console.log(value));
//             break;
//             default:
//                 break;
// }

//1
// function User (name, age){
//     this.name  = name;
//     this.age = age;
// }

//2
// function UserPrototype(){
//     this.logName = function(){
//         console.log(this.name)
//     }
// }

//3
// User.Prototype = new UserPrototype();

//4
// const user = new USer ('Alex', 23);
// console.log(user);
// user.logName()

// class User {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     logName(){
//         return this.name;
//     }
//     eat(){
//         return `$`
//     }
// }
// class Book {
//     constructor(title, author){
//         this.title = title;
//         this.author = author;
//         this.id = Book.count++;

//     }
//     static count = 0;
//     showInfo(){
//         return `"${this.title}" $"{}"`
//     }
//     (){
        
//     }
// }

class Library {
    constructor(){
        this.books = [];
        this.readers = [];
        booksAndReaders = [];
    }
    addBook(book){
        this.books.push(book);
    }
    addReader(...reader){
        this.readers.push(...reader);
    }
}
const book1 = new Book ('It','King');
const book2 = new Book ('Autsider', 'King')
const user1 = new Reader ('Brad')
const user2 = new Reader ('Anna')
const library = new Library();
library.addBook(book1, book2);
