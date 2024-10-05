
#პირველ რიგში მომხმარებელს ვთხოვთ შემოიტანოს რიცხვი

# num = int(input("Enter a number: "))



#თუ მომხმარებლის მიერ შემოტანილი რიცხვი მეტია ნულზე მაშინ ვეუბნებით რომ რიცხვი არის დადებითი

# if num > 0:
#     print("The number is positive ")


# თუ რიცხვი ნულის ტოლია ვეუბნებით რომ რიცხვი 0ია

# elif num == 0:
#     print("The number is zero")


#ხოლო თუ რიცხვი ნაკლებია 0ზე მაშინ ვეუბნებით რომ რიცხვი უარყოფითია

# elif num < 0 :
#     print("the number is negative")






#ვთავაზობთ მომხმარებელს ოპერაციებს 

# print("Choose an operation:")
# print("1. kilometer to mile")
# print("2. mile to kilometer")



#ვეკითხებით მომხმარებელს თუ რომელი ოპერაციის არჩევა უნდა

# choice =int(input("Enter your choice (1 or 2):"))




#ვთხოვთ მომხმარებელს რომ შეიყვანოს რიცხვითი მნიშვნელობა

# value = float(input("Enter the numerical value:"))




#თუ მომხმარებელი აირჩევს პირველ ოპერაციას მოხდება კილომეტრების მილებში გადაყვანა

# if choice == 1:
#     converted_value = value * 0.621371
#     print(value,"Kilometers is equal to",converted_value,"miles")




#ხოლო თუ მომხმარებელი აირჩევს მეორე ოპერაციას მოხდება მილების კილომეტრებში გადაყვანა

# elif choice == 2:
#     converted_value = value * 1.60934
#     print (value, "miles is equal to", converted_value, "kilometers")




#ხოლო თუ მომხმარებელმა აირჩია სხვა ოპერაცია ვეუბნებით რომ მან არასწორი ოპერაცია აირჩია

# else:
#     print( "Wrong decision")






#მომხმარებელს ვეკითხებით სახელს,გვარს,ასაკს და ელექტრონული ფოსტის მისამართს


# name = input("Please enter your name: ")
# surname = input("Please enter your surname: ")
# age = input("Please enter your age: ")
# email = input("Please enter your email address: ")



#ამ ყველაფერს კი ერთ წინადადებაში ვპრინტავთ


# print("You are", name, surname, "you are", age, "years old","your email address is", email )




#მოვახდინეთ sum ცვლადის ინიციალიზება 0 მდე

# sum = 0


#მოვახდინეთ მრიცხველის ცვლადის ინიციალიზება 0 მდე

# count = 0 



#ვთხოვთ მომხმარებელს შემოიტანოს სამი რიცხვითი მნიშვნელობა


# for i in range(3):
#     num = float(input("Enter a numerical value"))
#     sum += num
#     count += 1




#გამოვითვალეთ საშუალო არითმეტიკული
    
# arithmetic_mean = sum / count



#ვპრინტავთ საშუალო არითმეტიკულს

# print("the arithmetic mean is",arithmetic_mean)







#პირველ რიგში ვთხოვთ მომხმარებელს შეიყვანოს რიცხვი 1 დან 9ის ჩათვლით

# num = int(input("Enter the number from 1 to 9:"))


#თუ მომხმარებელმა არასწორად შეიყვანა რიცხვი მაშინ ვეუბნებით,რომ არასწორია


# if num < 1 or num > 9 :
#     print("Invalid input . please enter the number between 1 and 9")



    #ხოლო თუ შეიყვანა 1 დან 9ის ჩათვლით რიცხვი მაშინ შეყვანილი რიცხვის ჯერადები გამოვა 1 დან 50 მდე დიაპაზონში 
    
# else:
#     for i in range(1,50 + 1):
#         if i % num == 0:
#             print(i)




#მომხმარებელს ვთხოვთ შემოიტანოს ორი რიცხვითი მნიშვნელობა

# num1 = int(input("Enter the first number:"))
# num2 = int(input("Enter the second number:"))


#თუ პირველი რიცხვითი მნიშვნელობა ნაკლებია მეორეზე მაშინ უმცირესი ანუ საწყისი არის num1 ხოლო უდიდესი ანუ საბოლოო არის num2

# if num1 < num2 :
#     smallest = num1
#     largest = num2 

# else:
#     smallest = num2
#     largest = num1



#შემდეგ კი რიცხვებს ვახარისხებთ კუბში
    

# for i in range (smallest,largest + 1):
#     print (i ** 3)



#მომხმარებელს ვთხოვთ შემოიტანოს რიცხვი

# num = int(input("Enter a number: "))


# მოვახდინეთ ცვლადის ინიციალიზება 0მდე

# sum = 0


#ვიყენებთ while ციკლს რომ გამოვითვალოთ ციფრთა ჯამი

# while num > 0:
   
   
    # მივიღეთ რიცხვის ბოლო ციფრი
   
    # digit = num % 10
    
   
    # დავუმატეთ ციფრი sum ცვლადს
   
    # sum += digit
    
   
    # ამოვიღოთ ბოლო ციფრი რიცხვიდან
   
    # num = num // 10


# დავპრინტეთ ციფრების ჯამი

# print("The sum of the digits of the number is:", sum)




#მომხმარებელს ვთხოვთ შემოიტანოს რიცხვი

# num = int(input("Enter a number"))



#შემდეგ ვამრავლებთ შემოტანილ რიცხვს 1 დან 10 მდე დიაპაზონში

# for i  in range(1,11):
    # product = num * i
    # print(num,"x",i,"=",product)







# მომხმარებელს ვთხოვთ შეიყვანოს რიცხვები

# num1 = float(input("Enter the first number: "))
# num2 = float(input("Enter the second number: "))




# მომხმარებელს ვთავაზობთ ოპერაციებს

# operation = input("Enter the desired operation (+, -, *, /): ")



# ვაკეთებთ გამოთვლებს


# if operation == "+":
#     value = num1 + num2
#     print(num1,"+",num2,"=",value)


# elif operation == "-":
#     value = num1 - num2
#     print(num1,"-",num2,"=",value)


# elif operation == "*":


    #ვამოწმებთ არის თუ არა მეორე რიცხვი გამრავლებისას 0ის ტოლი


#     if num2 == 0:
#         print("Error multiplication by zero is not allowed")
#     value = num1 * num2
#     print(num1,"x",num2,"=",value)

# elif operation == "/":

    #ვამოწმებთ არის თუარა მეორე რიცხვი გაყოფისას 0 ის ტოლი

#     if num2 == 0:
#         print("Error: Division by zero is not allowed.")
        
#     else:
#         value = num1 / num2
#         print(num1,"/",num2,"=",value)
# else:
#     print("Error: Invalid operation. Please use one of the following operations: +, -, *, /")



#ვეუბნებით მომხმარებელს რომ ჩაწეროს სახელი


# name = input("Please enter your name:")


#ვეკითხებით მომხმარებელს თუ რამდენჯერ უნდა რომ გამეორდეს მის მიერ შემოტანილი სახელი


# iteration = int(input("How many times you want to iterate:"))


#ხდება იტერაცია იმდენჯერ რამდენჯერაც ჩაწერს მომხმარებელი


# for iteration in range(iteration):
#     print(name)





#მომხმარებელს ვეკითხებით წონას კილოგრამებში

# weight = float(input("Enter your weight (in kilograms): "))



#მომხმარებელს ვეკითხებით სიმაღლეს მეტრებში

# height = float(input("Enter your height (in meters): "))


# ვითვლით სხეულის მასის ინდექსს

# bmi = weight / (height ** 2)


#ვამოწმებთ ნაკიანია თუ არა

# if bmi <= 18.5:
#     print("you are underweight")


# ვპრინტავთ სხეულის მასის ინდექსს

# print("Your BMI is:", bmi)




# მომხმარებელს შეაქვს სამი რიცხვი
 
# num1 = float(input("Enter the first number: "))
# num2 = float(input("Enter the second number: "))
# num3 = float(input("Enter the third number: "))



#ვამოწმებთ არის თუარა პითაგორას რიცხვები


# if num1 ** 2 + num2 ** 2 == num3 ** 2:
#     print("The three numbers are Pythagorean numbers.")
# elif num1 ** 2 + num3 ** 2 == num2 ** 2:
#     print("The three numbers are Pythagorean numbers.")
# elif num2 ** 2 + num3 ** 2 == num1 ** 2:
#     print("The three numbers are Pythagorean numbers.")
# else:
#     print("The three numbers are not Pythagorean numbers.")
    
   


# მომხმარებელს ვთხოვთ რიცხვს

# num = int(input("Enter a number from 1 to 5: "))

# ვამოწმებთ ნაკლებია თუ არა 1 ზე ან მეტია თუ არა 5ზე

# if num < 1 or num > 5:
#     print("Invalid input")
# else:
#     print("Valid input")















