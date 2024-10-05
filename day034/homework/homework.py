#შევქმენით ფუნქცია სახელად even_nums რომელსაც გადავეცით არგუმენტი numbers
# def even_nums(numbers):

    # შევქმენით ცვლადი სახელად even_numbers,რომელშიც შევიტანეთ სია
    # even_numbers = []
    
    #მოვახდინეთ numbers  სიაზე გადავლა და თუ შიგნით არსებული რიცხვებიდან იქნება რომელიმე ლუწი ვამატებთ even_list სიაში

#     for i in numbers:
#         if i % 2 == 0:
#             even_numbers.append(i)
#     return even_numbers
        
# print(even_nums([1,3,4,7,94,21,56,72]))


#გავაკეთეთ inputი სადაც მომხმარებელს ვთხოვთ,რომ შეიტანოს მისი ნიშნები
# student_grades = input("Enter your grades:")

#შევქმენით ცვლადი სადაც შევიტანეთ სია
# grades = []

#ცარიელ სიაში ვამატებთ მიღებულ ნიშნებს
# grades.append(student_grades)
# print(grades)



#გავაკეთეთ სია სახელად shopping_cart სადაც შეტანილია პროდუქტების სია
# shopping_cart = ["apple", "banana", "chocolate", "milk"]

# თავდაპირველად დავპრინტეთ ორიგინალი სია სადაც დამატებულია კალათაში პროდუქტები
# print("Original shopping cart:", shopping_cart)

# შემდეგ გავასუფთავეთ სია clear() მეთოდის გამოყენებით
# shopping_cart.clear()

#გამოვიტანეთ გასუფთავებული სია print ფუნქციის საშუალებით
# print("Cleared shopping cart:", shopping_cart)




# გავაკეთეთ ცვლადი სადაც შევიტანეთ ხილების სია
# fruits = ['apple', 'banana', 'cherry','burberry']

# გავასუფთავეთ clear() მეთოდის გამოყენებით მოცემული სია
# fruits.clear()
#ბოლოს კი გამოვიტანეთ სია print ფუნქციის საშუალებით
# print(fruits)



#გავაკეთეთ სია სახელად cars სადაც შევიტანეთ მანქანების სახელები
# cars = ['Bmw','Mercedes','Audi','Bentley','Opel']

#შევქმენით ახალი ცვლადი სადაც შევქმენით მისი კოპიო სია copy() მეთოდის გამოყენებით
# copied_list =  cars.copy()

#გამოვიტანეთ კოპიო სია ტერმინალში print ფუნქციის საშუალებით
# print(copied_list)




#დავადეკლარირეთ ცვლადი სადაც მომხმარებელს ვთხოვთ რომ ჩაწეროს მისი საყვარელი მანქანის სახელები
# favourite_cars= input("Enter your favourite cars: ")
#გავაკეთეთ ცარიელი სია სახელად cars სადაც შემდეგ ჩავსვამთ მომხმარებლის მიერ შემოტანილ სახელებს
# cars = []
# cars.append(favourite_cars)


# print(cars)
# დავაკოპირეთ წინა სია copy() მეთოდის გამოყენებით
# copied_list = cars.copy()

# print(copied_list)




#შევქმენით ცვლადი სახელად My_friends სადაც შეტანილია სახელები
# my_friends = ['Giorgi','Saba','Dachi','Giorgi','Nika','Dato']

#print ფუნქციის საშუალებით გამოვიტანეთ მნიშვნელობა თუ რამდენჯერ მოხდა კონკრეტული ელემენტის გამეორება სიაში
# print(my_friends.count('Giorgi'))





# def counter(text):
#     print(text.count('a'))




# fruits = ['apple','banana','watermelon','pineapple','mango']

# print(fruits.index('banana'))





# def find_substring_index(main_string, substring):
#     return main_string.find(substring)

# my_string = "Hello, world! This is a test string."
# my_substring = "world"
# result = find_substring_index(my_string, my_substring)
# print(result)




# names = ['gio','nino','beqa','dachi','lizi']

# names.insert(2,'nika')
# print(names)


# numbers = [1,2,3,5]
# numbers.insert(3,4)
# print(numbers)





# def cars(names):
#     names.pop(-1)
#     return names

# print(cars(['Bmw','Mercedes','Audi','Bentley','Opel']))




# movies = ['titanic','fight-club','snowfall','godfather','scarface']
# movies.pop(-1)
# print(movies)




# movies = ['titanic','fight-club','snowfall','godfather','scarface']

# movies.remove('titanic')

# print(movies)



# my_friends = ['Giorgi','Saba','Dachi','Giorgi','Nika','Dato']

# my_friends.remove('Giorgi')
# my_friends.remove('Giorgi')

# print(my_friends)



# numbers = [1,2,4,7,89,3,5,9,0,3]
# numbers.sort()
# numbers.reverse()
# print(numbers)




# about_me = "my name is Giorgi I am 16 years old"

# x = about_me.split()
# x.reverse()

# print(x)




# numbers = [1,3,7,8,9,23,56,78,5]

# numbers.sort()

# print(numbers)





# names = ['giorgi','luka','dachi','nika','saba']

# names.sort()

# print(names)





# my_friends = ['Giorgi','Saba','Dachi','Giorgi','Nika','Dato']

# print(len(my_friends))




# string = input("Enter a string: ")

# print(len(string))





# fruits = ['apple', 'banana', 'cherry']

# cars = ['Ford', 'BMW', 'Volvo']

# fruits.extend(cars)

# print(fruits)




# word = input("Enter the word: ")

# x = word.capitalize()
# print(x)



# title = input("Enter the title: ")

# cap = title.capitalize()

# print(cap)



# string = input("Enter the string: ")

# print(string.count("a"))





# sentence = "is this place beautiful? yes this place is beautiful"


# print(sentence.count("beautiful"))






# string = input("Enter a string: ")

# print(string.find("a"))




# text = "Georgia is beautiful country it has big history"


# print(text.find("history"))






# string = input("Enter a string: ")

# print(string.index("a"))





# sentence = 'I love cars'


# print(sentence.index("cars"))






# username = input("Enter your username: ")

# print(username.isalnum())




# password  = "giogiogio123"

# print(password.isalnum())




# name = "Giorgi"



# print(name.isalpha())



# name = input("Enter your name: ")

# print(name.isalpha())





# numeric_value = input("Enter the numerical value as string: ")

# print(numeric_value.isdigit())





# phone_numbers = ['123-456-789','863-076-780','abc-065,879']

# 
# for num in phone_numbers:
#     if num.replace('-','').isdigit():
#         
#         print(num)




# string = input("Enter the string:")

# print(string.islower())
    


# strings = ["Hello", "world", "123abc", "Python", "is", "fun"]

# # Filter out strings with uppercase or non-alphabetic characters
# filtered_strings = [s for s in strings if s.islower()]

# print("Filtered strings:")
# for string in filtered_strings:
#     print(string)





# string = 'GOA is the best'


# print(string.isupper())




# string = input("Enter a text: ")

# print(string.isupper)



# text = input("Enter a text:")

# print(text.lower())





# country = 'Georgia is the beautiful country'


# print(country.lower())




# original_string = "Hello, world! Hello, Python!"
# substring_to_replace = "Hello"
# replacement_substring = "Hi"


# new_string = original_string.replace(substring_to_replace, replacement_substring)

# print("Original string:", original_string)
# print("New string:", new_string)






# string = "GOA is the best"

# print(string.replace(" ","-"))



# sentence = "Hello i am Giorgi"

# print(sentence.split())



# full_name = "Giorgi Khmaladze"

# print(full_name.split())




# string = "python is fun"

# if string.startswith("p"):
#     print("the string starts with p")
# else:
#     print("the string is not starting with p")





# username = input("Enter your username: ")

# print(username.startswith("G"))




# string = "python is fun"

# if string.endswith("n"):
#     print("the string ends with n")
# else:
#     print("the string is not ending with n")




# username = input("Enter your username: ")

# print(username.endswith("i"))






# txt = "Hello My Name Is Giorgi"

# x = txt.swapcase()

# print(x)



# username = "giorgi123"

# alternated_username = username.swapcase()

# print(alternated_username)

