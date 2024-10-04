
# We made a function named numbers_produduct where we entered the arguments start, end, step
# def numbers_product(start, end, step):
  
    # In the function we entered two lists named numbers_list and multiples_of_3
    # numbers_list = []
    # multiples_of_3 = []

    #Assign the value current to the initial number or start Because, for example, if start is equal to 1, it will be the current value of the variable
  
    # current_number = start
   
   #until the current value is less than or equal to the last value in the list of numbers_list and after each iteration add its next number to the list until we reach the end value
    # while current_number <= end:
    #     numbers_list.append(current_number)
    #     current_number += step
    # print(numbers_list)
   

#We made a transition to the list and if the numbers variable is divided by 3 and the remainder is 0, we add multiples of 3 to the multiples_of_3 list.
    # for number in numbers_list:
    #     if number % 3 == 0:
    #         multiples_of_3.append(number)
    # print(multiples_of_3)


   #We made the product of these 3 multiple numbers
 
#     multiply = 1
#     for number in multiples_of_3:
#         multiply *= number

#     return multiply


# start = 1
# end = 20
# step = 1
# result = numbers_product(start, end, step)
# print(" Result of multiples of 3:", result)





#We made a new function named perform_math_operation where we have to perform mathematical operations
# def perform_math_operation(result):
    
    #We ask the user to enter the desired operation, which should be performed on the number obtained as a result of the  524880
    # operation = input("Enter the mathematical operation (+, -, *, /): ")

    #If the operation entered by the user does not correspond to the operations proposed by us, the answer will be returned: Invalid operation
    # if operation not in ['+', '-', '*', '/']:
    #     print("Invalid operation.")
    #     return

   #We ask the user for the second number to be acted upon
    # second_number = float(input("Enter the second number: "))

#   #Operations between two numbers are performed
#     if operation == '+':
#         result += second_number
#     elif operation == '-':
#         result -= second_number
#     elif operation == '*':
#         result *= second_number
#     elif operation == '/':
 
       #If the second number is 0, the operation will not be performed
#         if second_number == 0:
#             print("Cannot divide by zero.")
#             return
#         result /= second_number

#     return result


# start = 1
# end = 20
# step = 1
# result = numbers_product(start, end, step)
# print("Product of multiples of 3:", result)


# result = perform_math_operation(result)
# print("Result after mathematical operation:", result)


# def hashtag_generator(sentence):
    
#     words = sentence.split()
#     capitalized_words = [word.capitalize() for word in words]
        
#     hashtag = "#" + " ".join(capitalized_words)
#     return hashtag


# print(hashtag_generator("my name is giorgi"))



# def num_divisors(number):
#     divisors = [i for i in range(1,number + 1) 
#         if number % i == 0]
#     return divisors
# print(num_divisors(40))






    
    

# def manual_split(word, start, end, step):
  
   
#     split = []
 
#     while start < end:
       
#         split.append(word[start:start+step])

#         start += step
#     return split

# word = input("Enter a word: ")
# start = int(input("Enter the start index: "))
# end = int(input("Enter the end index: "))
# step = int(input("Enter the step value: "))
# print(manual_split(word, start, end, step))


