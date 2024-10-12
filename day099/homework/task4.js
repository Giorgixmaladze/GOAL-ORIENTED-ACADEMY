/* Define a Rectangle class with properties width and height. Use a getter to
 calculate and return the area of the rectangle. 
Also, include a setter that ensures width and height are always positive numbers.*/


class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.width * this.height
    }

    set width(value){
        if(value > 0 ){
            this.width = value;
        }else(
            console.log("Width must be a positive number")
        )
    }

    get width(){
        return this.width
    }

    set checkHeight(value){
        if(value > 0){
            this.height = value;
        }else{
            console.log("Height must be a positive number")
        }
    }

    get height(){
        return this.height
    }

}


const rect = new Rectangle(15,20)
console.log(rect)