

#გავაკეთეთ სია სადაც შევა მომხმარებლის მიერ შემოტანილი რიცხვები
# numbers = []





#მომხმარებელს სამჯერ შემოვატანინოთ რიცხვი და შემოტანილი რიცხვი ჩავამატოთ სიაში
# for i in range(3):
#     num = int(input("Enter a number:"))
#     numbers.append(num)

# print(numbers)





#ვამრავლებთ სიაში შეტანილ რიცხვებს ერთმანეთზე

# total = 1
# for num in numbers:
#     total *= num



#საბოლოო შედეგი გამოგვაქვს print ფუნქციის საშუალებით
# print("the multiplication result is" ,total)








#გავაკეთეთ სია სადაც შეტანილია დადებითი და უარყოფითი რიცხვები
# numbers = [-1, 5, -9, 15, -7, 6, 8, 12, -4]


#შმდეგ გავაკეთეთ ორი სია რადგან გამოვარჩიოთ ერთმანეთისგან დადებითი და უარყოფითი რიცხვები
# negative_numbers = []
# positive_numbers = []


#მოვახდინეთ სიაზე გადავლა და გამოვარჩიეთ ერთმანეთისგან დადებითი და უარყოფითი რიცხვები
# for num in numbers:
#     if num < 0:
#         negative_numbers.append(num)
#     elif num >= 0:
#         positive_numbers.append(num)


#გამოვიტანეთ ერთმანეთისგან გამოყოფილი რიცხვები print ფუნქციის საშუალებით 

# print(negative_numbers)
# print(positive_numbers)






#გავაკეთეთ სია სახელად numbers სადაც შევა მომხმარებლის მიერ შემოტანილი რიცხვები
# numbers = []



#მომხმარებელს ვეკითხებით 5ჯერ რიცხვს ხოლო მის მიერ შემოტანილი რიცხვი დაემატება number სიას
# for i in range(5):
#     num = int(input("Enter the number:"))
#     numbers.append(num)


# print(numbers)



# sum = 0
#პირველ რიგში გავაკეთეთ ჯამი სიაში მყოფი რიცხვების და შემდეგ გამოვთვალეთ საშუალო არითმეტიკული
# for num in numbers:
#     sum += num
#     amount_of_numbers = len(numbers)
#     arithmetic = sum / amount_of_numbers


# #გამოვიტანეთ ეს ყველაფერი print ფუნქციის საშუალებით
# print(sum)
# print(arithmetic)
   



#გავაკეთეთ ორი სია სადაც შევა მომხმარებლის მიერ შემოტანილი რიცხვები

# numbers_1 = []

# numbers_2 = []




#ეს არის ოპერაცია რაც ხდება პირველ სიაში:მომხმარებელს უნდა შემოვატანინოთ 3 რიცხვი და შემოტანილ რიცხვებს ვამატებთ პირველ სიაში
# for i in range(3):
#     num1 = int(input("Enter the number for the first list:"))
#     numbers_1.append(num1)

# print(numbers_1)



# #იგივეს ვაკეთებთ მეორე სიაშიც
# for x in range(3):
#     num2 = int(input("Enter the number for the second list:"))
#     numbers_2.append(num2)

# print(numbers_2)





#გავაკეთეთ მესამე სია სადაც ხდება ამ ორი სიის გაერთიანება
# numbers_3 = numbers_1 + numbers_2




#გამოგვაქვს გაერთიანება print ფუნქციის საშუალებით
# print("As a result of combining the two lists is",numbers_3)




def make_duplicates(input_list):
    duplicates = []
    for num in input_list:
        if input_list.count(num) > 1 and num not in duplicates:
            duplicates.append(num)
    return duplicates


input_list = [1, 2, 3, 4, 5, 2, 3, 4, 2, 3, 5]
duplicates = make_duplicates(input_list)
print(" initial_list:", input_list)
print("Duplicates:", duplicates)

    






















