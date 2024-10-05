




#timer: 

#Create an int variable named i and assign it a value of 10

# i = 10

# #Print the i value of using the print() function
# while i >= 0:
#     print(i)
#     i -= 1

# #displaying the text after while loop
# print ("time is up")









#created an int variable named sum and assign it to zero 
# sum = 0

#  We Wrote a program that continuously prompts the user until the user enters 0

# num = int(input("Enter a number: "))
# while num != 0:
#     sum += num
#     num = int(input("Enter a number: "))

# We wrote the sum of the specified numbers before the user entered 0s

# print("The sum of all the entered numbers is:", sum)








#Write a program that prompts the user for a password and keeps asking until the user enters the correct password.


# authorised_password = "giorgi123"


# while True:
#     password = (input("Enter your password:"))
#     if  password == authorised_password:
#         break
#     else:
#         print("try again ")







#We wrote a program that outputs even numbers from 0 to 20 inclusive

# i = 0


# while i <= 20:
#     if i % 2 == 0:
#         print(i)
#     i += 1
    









#created an int variable named sum and assigned it to 0

#sum = 0

#prompt the user to enter a number

#num = int(input("Enter a number: "))


#loop until the user enters a negative number

#while num >= 0:

    #check if the number is positive

    #if num > 0 :

        #add the positive number to the sum

        #sum += num
    
    #prompt the user to enter another number
        
    #num = int(input("Enter a number: "))

#print the sum of all positive numbers entered
    
#print("the sum of all positive numbers is:", sum)








# We have created a program that checks whether a number is even or odd

# num = (int(input("Enter the first number:")))


# if num % 2 == 0:
#     print("this number is even")
# else:
#     print("this number is odd")







  #We have created a program that tells us whether it is cold or hot based on the temperature

# temperature = int(input("please enter the temperature in celcius:"))

# if temperature > 30:
#     print("it's hot outside")
# elif temperature <=30:
#     print("it's warm outside")
# elif temperature < 20 :
#     print ( "it's cold outside")







# Get the exam score from user input

# exam_score = int(input("Enter your exam score: "))


# Determine and print the letter grade


# if exam_score >= 90:
#     print("Your letter grade is: A")
# elif exam_score >= 80:
#     print("Your letter grade is: B")
# elif exam_score >= 70:
#     print("Your letter grade is: C")
# elif exam_score >= 60:
#     print("Your letter grade is: D")
# else:
#     print("Your letter grade is: F")








#prompt the user for a number

# num = int(input("Enter the number:"))


#check if the number is divisible by 2,3,or both

# if num % 2 == 0 and num % 3 == 0:
#     print("The number divisible by both 2 and 3")
# elif num % 2 == 0:
#     print("the number is divisible by 2")
# elif num % 3 == 0:
#     print("The number is divisible by 3")
# else:
#     print("the number is not divisible by 2 or 3") 
 







# num1 = int(input("Enter first number:"))
# num2 = int(input("Enter second nuber:"))


# if num1 == num2 :
#     print ("both numbers are equal")
# elif num1 > num2 :
#     print("num1 is greater than num2")
# elif num1 < num2:
#     print("num2 is greater than num1")






#We created a program where the user had to guess the number 5. If he guessed, the program would stop If he could not guess, the program would continue reading
# num = 5

# while True:
#     guessed_number = int(input("Guess the number:"))
#     if guessed_number == num:
#         print("You guessed it")
#         break
#     else:
#         print("Try again")







#prompt the user for a number

# num =int( input("Enter a number:"))


#keep asking the user for a number untill it's even

# while num % 2 != 0:
#     num = int(input("Enter a number:"))


#print a message to confirm the number is even
    
# print("that is an even number")
    






#initialize the sum variable to 0

#sum = 0 

#generate odd numbers from 50 to 100 inclusive

#for num in range(5,101,2):
 #    print(num)

    #if the number is greater than 75 add it to the sum
 
#     if num > 75:
 #        sum += num

#print the value of the sum variable

#print(" the sum of odd numbers greater than 75 is", sum)






# Prompt the user for a number


# num = int(input("Enter a number: "))

# Set the minimum limit to 25

# limit = 25

# Keep asking the user for a number until it's greater than or equal to the limit

# while num < limit:
#     print(num)
#     num = int(input("Enter a number: "))

# Print a message to confirm the number is greater than or equal to the limit

# print("Thank you, that is greater than or equal to", limit)




#this is authorized name

# name = "Giorgi"

#prompt the user to guess authorized name

# guessed_name = input("Enter name:")

# if authorized name coincided  the number specified by the user, print Correct

# if guessed_name == name:
#     print("Correct")

#else prompt the user to try again
# else:
#     guessed_name = input("Enter name:")