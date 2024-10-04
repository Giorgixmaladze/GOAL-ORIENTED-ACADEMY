# We made a function called liters to which we passed the argument time
# def litres(time):


#We returned the value time * 0.5 and converted it to an integer because we rounded it to the smallest value.
#     return int(time * 0.5)








#We made a function called fake_bin to which we passed the argument x
# def fake_bin(x):

#We declared a string type variable called result
#     result = ""
    
#We passed to the function through the for loop and made an iteration variable
#     for char in x:


#If char is less than 5, 0 should be output as a result
#         if int(char) < 5:
#             result = result + "0"


#In other cases, 1 should be issued
#         else:
#             result = result + "1"
    
#     return result



#We made a new function called count_by to which we passed the arguments x and n
# def count_by(x, n):

#We made a variable named multiples_x where the list should be entered
#     multiples_x = []

#We made a for loop and passed to the function and created some range
#     for i in range(x, x * n + 1):


#If as a result of dividing the iteration variable and one of the arguments of the function, the remainder will be 0, add this iteration variable to the created list
 #         if i % x == 0:
#             multiples_x.append(i)
    

#We return the value of the list
#     return multiples_x

#we called a function
# def count_by(x, n):
#     return list(range(x, x * n + 1, x))