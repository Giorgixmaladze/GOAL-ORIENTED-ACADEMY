class LibrarySystem{
    constructor(title,year){
        this._title = title;
        this._year = year;
        this._isAvaialable = true;
    }

    borrowItem(){
        this._isAvaialable = false;    
        return "it’s not available."
    }
    returnItem(){
        this._isAvaialable = true
    }
    getSummary(){
        return  this._title,this._year,this._author,this._genre
    }
}

class Book extends LibrarySystem{
    constructor(title,year,author,genre){
        super(title,year)
        this._author = author;
        this._genre = genre;
    }

    getSummary(){
        let currSum = super.getSummary()
        return currSum, this._author, this._genre
    }


}



class Magazine extends LibrarySystem{
    constructor(title,year,issueNumber){
        super(title,year)
        this._issueNumber = issueNumber
    }

    getSummary(){
        let currSum = super.getSummary()
        return currSum, this._issueNumber
    }
}


const book = new Book("dhsdgh",241,"dfsdf","sgsag")

const magazine  = new Magazine("hgdhs",362,54)