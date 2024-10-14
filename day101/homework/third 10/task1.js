/**
 * **კლასი `Map`-ით და მეთოდით**: შექმენი კლასი `Library`, რომელსაც ექნება `Map`, რომელიც ინახავს 
 * წიგნის სახელებს და ავტორებს. დაამატე მეთოდი `addBook(title, author)`, რომელიც დაამატებს ახალ წყვილს `Map`-ში.
 */




class Library{
    constructor(){
        this.book = new Map()
    }

    addBook(title,author){
        this.book.set(title,author)
    }
    getbook(){
        return Array.from(this.book)
    }
}


const library = new Library();

library.addBook(" Ulysses","James Joyce")
library.addBook(" The Great Gatsby","F. Scott Fitzgerald")


library.getbook().forEach(([book,author]) =>{
    console.log(`Book name : ${book}, Author : ${author}`)
})




