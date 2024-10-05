
# sum_of_even = 0
# for i in range(0, 11):
#     if i % 2 == 0:
#         print(i)
#         sum_of_even += i
# print("Sum of even numbers from 0 to 10:", sum_of_even)


i = 0
sum = 0

while i <= 10:
    print(i)
    sum = sum + i
    i = i + 2
    
print(sum)
