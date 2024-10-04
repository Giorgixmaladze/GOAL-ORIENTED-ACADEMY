# def even_or_odd(number):
#     if number % 2 == 0:
#         return "Even"
#     else:
#         return "Odd"
    


# def number_to_string(num):
#     return str(num)



# def opposite(number):
#     return -number



# def make_negative(number):
#     if number < 0:
#         return number
#     else:
#         return -number




# def bool_to_word(boolean):
#     if boolean:
#         return "Yes"
#     else:
#         return "No"





# def positive_sum(arr):
#     return sum(num for num in arr if num > 0)



# def remove_char(s):
#     return s[1:-1]



# def square_sum(numbers):
#     return sum( num ** 2 for  num in numbers)




# def no_space(x):
#     return x.replace(" ", "")




# def double_integer(i):
#     return i*2





"""
რიცხვების შემოწმება: შექმენით პროგრამა, რომელიც სთხოვს მომხმარებელს რიცხვს. სანამ ეს რიცხვი არ იქნება ლუწი, შეეკითხეთ მომხმარებელს თავიდან.

1) როგორ შემოვატანინოთ მომხმარებელს რიცხვი
    ა) გამოვიყენოთ input() ახსნა: ეს ფუნქცია გვაძლევს იმის საშუალებას რომ ტერმინალიდან შევიტანოთ მნიშვნელობა პროგრამაში,ეს მნიშვნელობა კი ყოველტვის იქნება სტრინნგი
    
    ბ) ზემოთ მოცემულის გათვალისწინებით თუ input() ფუნქცია ყოველთვის გვიბრუნებს სტრინგს, ჩვენ გვიწევს რომ ის გარდავქმნათ ნამდვილ რიცხვად, მიზეზი არის ის რომ მიწევს კონკრეტული მნიშვნელობის შემოწმება, არის თუ არა ის ლუწი რიცხვი, იმისთვის რომ კონკრეტული მნიშვნელობა გარდავქმნა რიცხვად ვიყენებ int() ფუნქციას

2) როგორ გავაკეთოთ ისეთი ინსტრუქცია რომელიც ამოწმებს არის თუ არა რიცხვი ლუწი და იქამდე შემოვატანინოთ მომხმარებელს თავიდან მნიშვნელობა სანამ არ დაემთხვევა პირობას
    ა) გამოვიყენოთ ციკლი სახელად while რადგან ამ ციკლის გამოყენებიტ შემიძლია შევამოწმო პირობა, მარტივად ეს ციკლი იმუშავებს პირობაზე დაყრდნობით
    
    ბ) while ციკლს გადავცემ პირობას რომელიც ამოწმებს არის თუ არა რიცხვი ლუწი ანუ იქამდე შემოვატანინოთ მომხმარებელს რიცხვი სანამ ლუწი არ იქნდება ესეიგი სანამ number % 2 != 0
"""

# number = int(input("Please enter number: "))


# while number % 2 != 0:
#     number = int(input("Please enter number: "))


# print(number)


# password = "1234"

# while True:
#     user_input = input("Enter the password: ")
#     if user_input == password:
#         print("Correct password!")
#         break
#     else:
#         print("Incorrect password. Try again.")














    











