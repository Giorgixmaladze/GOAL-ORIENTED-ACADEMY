
// გამოიყენეთ კუთვნილებები რომელიც ვისწავლეთ, ამ 
// კუთვნილებების დახმარებით მანიპულაცია მოახდინეთ 
// სხვადასხვა ელემენტებზე აგრეთვე ახსენით რას ემსახურება ყველა
//  კუთვნილება + გამოიყენეთ getElementsByTagname and getElementsByClassname და 
// ახსენით მათი დანიშნულება, რას აბრუნებს და რისგან განსხვავდება სხვა მეთოდებისგან
// კუთვნილებები: parentElement, children, firstElementChild, 
// lastElementChild, previousElementSibling, nextElementSibling 



const div = document.getElementById("block");
// getElementByClassname აბრუნებს დოკუმენტში არსებული ყველა ელემენტის კოლექციას მითითებული კლასის სახელით
const p = document.getElementsByClassName("p")
// getElementByTagName აბრუნებს მითითებული თეგის სახელის ყველა ელემენტს მასივის სახით

const header = div.nextElementSibling

header.textContent = "this is header"


const p1 = div.firstElementChild

p1.textContent = "this is firs p"

const p2 = div.firstElementChild.nextElementSibling

p2.textContent = "this is second p "

p2.previousElementSibling.style.color = "blue"










