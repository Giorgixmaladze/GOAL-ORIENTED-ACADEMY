
#შევქმენით ცვლადი სადაც შეტანილია სია რომელშიც წერია სტრინგის სახით თამაშების სახელები

# games = ["Grand theft auto","counter strike","minecraft","fortnite"]


#ჩავანაცვლეთ თამაშის სახელები სხვა თამაშის სახელებით
# games[0] ="codewars"
# games[1] = "kahoot"
# games[2] = "sololearn"
# games[3] = "codemonkey"

#გამოვიტანეთ ეს ყველაფერი print ფუნქციის საშუალებით
# print(games)







#მომხმარებელს შემოვატანინეთ 5 მნიშვნელობა
# number1 = int(input("Enter the first number:"))
# number2 = int(input("Enter the second number:"))
# number3 = int(input("Enter the third number:"))
# number4 = int(input("Enter the fourth number:"))
# number5 = int(input("Enter the fifth number:"))


#შევქმენით სია სადაც შენახულია მომხმარებლის მიერ შემოტანილი მონაცემები
# numbers = [number1,number2,number3,number4,number5]


# print(numbers)





numbers = []
for i in range(5):
    numbers.append(int(input("Enter a number: ")))


num_list = numbers


even_numbers = [num for num in num_list if num % 2 == 0]

print("Even numbers in the list is:", even_numbers)








