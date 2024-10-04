#თანმიმდევრობა

# print("Luka")
# print("Nia")
# print("Lile")

#იტერაცია

#bad example 

# print("Luka")
# print("Luka")
# print("Luka")

#good example

# result = 0

# for i in range(5):
#     print("Luka")
#     result = result + 1

# print(result)




#selecion

# num = int(input("please enter number in range 1-10 : "))
# if num == 5:
#     print("you won!")

# else:
#     print("you lost!")


#combining of iteration and selecion

# for i in range(10):
#     if i % 2 == 0:
#         print(i,"is even")
#     else:
#         print(i,"is odd")


registered_password = "luka123"
autorized =  False

while autorized !=  True:
    user_input = input("please enter your password: ")
    if user_input == registered_password:
        print("access  granted")
        autorized = True
    else:
        print("incorrect please try again")


# i = 1
# while i <= 10:
#     print(i)
#     i = i + 1

     

