"""გავაკეთოთ სიმულაცია სადაც მომხმარებელს შეეძლება რეგისტრაცია,
 მომხმარებელი შემოიტანს 3 ცვლადს, სახელი, გვარი, ასაკი 
 (int ფუნქცია არ არის სავალდებულო ასაკთან) საბოლოოდ 
 ამ ყველაფერს print'ის მეშვეობით გამოიტანთ ტერმინალში.

 მომხმარებელს შემოატანინეთ 3 რიცხვი.
   შეინახეთ ისინი ცვლადებში და მათზე
     ცალცალკე გამოიტანეთ print'ის მეშვეობით გ
     ამრავლება, გაყოფა, მიმატება, გამოკლება."""

# declaring value  for the variable "name " , "surname" and "age"
name = input("Enter your name : ")
surname = input("Enter your surname : ")
age = input("Enter your age : ")

# displaying information about user in terminal

print("my name is ", name,"my surname is", surname,"I am",age,"years old" )



#taking 3 numbers as input from the user

num1 = int(input("Enter the first number : "))
num2 = int(input("Enter the second number :"))
num3 = int(input("Enter the third number : "))

#performing the operations
multiplication = num1*num2*num3
division = num1 / num2 / num3
addition = num1+num2+num3
subtraction = num1-num2-num3

#displaying all this operations in terminal

print("the multiplication of the numbers is :", multiplication)
print("the division of the numbers is : ",division)
print("the addition of the numbers is: ", addition)
print("the subtraction of the numbers is :",subtraction)



