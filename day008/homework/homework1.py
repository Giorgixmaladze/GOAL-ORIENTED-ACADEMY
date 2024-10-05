"""შექმენით 2 ცვლადი სადაც შეტანილი გექნებათ ადამიანის წონა და
 სიმაღლე, (required_weight,required_height) რომლის მნიშვნელობაც
   იქნება 50 და 170 , შემდეგ მომხმარებელს შემოატანინეთ მისი წონა input ფუნქციის მეშვეობით
და შეამოწმეთ მომხმარებლის წონა თუ უდრის required_weight ცვლადს
 და მომხარებლის სიმაღლე თუ უდრის required_height, აგრეთვე მეორე 
 პრინტში შეამოწმეთ თუ აღემატება წონას და ნაკლებია სიმაღლეზე, თითქმის ყველა კომბინაცია შედარების ოპერატორების."""

#declaring value of required weight
required_weight = 50

#declaring the value of required height
required_height = 170

#We create a variable called weight and height, in which the input function is entered
weight = input("Enter your weight: ")
height = input("Enter your height: ")

#Then we show whether weight and height are equal to required weight and required height
print(weight == required_weight or height == required_height)



print(int(weight) >= required_weight and int(height) >= required_height)
print(int(height) > required_height or int(weight) < required_weight)








