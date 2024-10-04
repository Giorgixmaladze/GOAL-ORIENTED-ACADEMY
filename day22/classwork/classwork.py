#შევქმენით ფუნქცია რომელსაც სახელად დავარქვით my_range,რომლითაც უნდა გაკეთდეს დიაპაზონი start,end და step

# def my_range(start, end, step=1):
    #გავაკეთეთ ფუნქციაში ცვლადი სახელად current ანუ მიმდინარე მნიშვნელობა,რომელიც ამ შემთხვევაში არის start
    # current = start

   #გავაკეთეთ while ციკლი სადაც მოცემული გვაქვს,სანამ მიმდინარე მნიშვნელობა ანუ current ნაკლებია end ზე ანუ დიაპაზონის საბოლოო რიცხვზე მანამდე გამოიტანოს დიაპაზონში მიმდინარე მნიშვნელობა
   #ამ შემთხვევაში step = 1 ს ანუ ყოველი ციკლის შემდეგ current ის მნიშვნელობა გაიზრდება ერთით
    # while current < end:
    #     print(current)
    #     current = current + step


#აქ კი გავაკეთეთ მაგალითი ავიღეთ start რომელიც უდრის 1ს და ავიღეთ end რომელიც უდრის 10 + 1 ს ანუ 10ის ჩათვლით 
#მოკლედ რომ ვთქვათ ფუნქციის გამოძახების შემდეგ დაიპრინტება დიაპაზონი იმ რიცხვებისა რომელიც 1 დან 10 ის ჩათვლით შედის
# start = 1
# end = 10 + 1
# step = 1
# numbers = my_range(start, end, step)
# print("Numbers:", numbers)




# def my_filter(input_list,char_to_remove):
#     new_list = []
    
#     for char in input_list:
#         if char != char_to_remove:
#             new_list.append(char)
#     return new_list


# input_list = ["g","c","v","u"]
# char_to_remove = "v"


# print(my_filter(input_list,char_to_remove))






# def greet(x):
#     print("welcome",x)



# greet("gio")



# def sum_of_odd_numbers(numbers):
#     odd_sum = 0
#     for number in numbers:
#         if number % 2 != 0:
#             odd_sum += number
#     return odd_sum


# print(sum_of_odd_numbers([1,2,3,4,5,6,7,8,9,10]))




# def sum_of_positive_numbers(numbers):
#     sum = 0
#     for i in numbers:
#         if i > 0:
#             sum = sum + i
#     return sum



# numbers = [1,-2,-1,5,8,-9]
# print(sum_of_positive_numbers(numbers))



