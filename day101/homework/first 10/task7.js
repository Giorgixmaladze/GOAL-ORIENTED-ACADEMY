/**
 * კლასების მასივი**: შექმენი კლასი `Book` და შექმენი ამ კლასის რამდენიმე 
 * ობიექტი მასივში. შემდეგ გამოიყენე `forEach()` რათა ყველა წიგნის სათაური დაბეჭდო.

 */



class Book{
    constructor(title,author){
        this.title = title;
        this.author = author;
    }

}


const books =[
    new Book(" The Great Gatsby "," F. Scott Fitzgerald" ),
    new Book("Ulysses"," James Joyce"),
    new Book(" In Search of Lost Time","Marcel Proust")



]



const bookTitle = books.forEach(book => {
    console.log(book.title)
})



