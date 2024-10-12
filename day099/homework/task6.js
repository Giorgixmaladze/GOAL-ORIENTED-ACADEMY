/*Define a Book class where the title is public, but the number of pages is private.
 Implement getters and setters to access and modify the number of pages. */


 class Book{

    #pages;
    constructor(title,pages){
        this.title = title;
        this.#pages = pages;
    }

    set pages(value){
        this.#pages = value;
    }
    get pages(){
        return this.#pages
    }
}

const book = new Book("safhsd",165)
book.pages = 200
console.log(book.pages)