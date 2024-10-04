#sort the odd



# def sort_array(source_array):
#     odd_list = []
    
#     for i in source_array:
#         if i % 2 != 0:
#             odd_list.append(i)
#     odd_list.sort()
    
#     index = 0
    
#     result = []
    
#     for x in source_array:
#         if x % 2 != 0:
#             result.append(odd_list[index])
#             index += 1
#         else:
#             result.append(x)
#     return result





#take a ten minutes walk




# def is_valid_walk(walk):
    
#     if len(walk) != 10:
#         return False
#     arr = [0,0]
    
#     for direction in walk:
#         if direction == 'n':
#             arr[0] += 1
#         elif direction == 's':
#             arr[0] -= 1
#         elif direction == 'w':
#             arr[1] += 1
#         elif direction == 'e':
#             arr[1] -= 1
#     return arr == [0,0]



#მეორე გზა


# def is_valid_walk(walk):
    
#     if walk.count('n') == walk.count('s') and walk.count('w') == walk.count('e') and len(walk) == 10:
#         return True
#     else:
#         return False





#Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!



# def sum_dig_pow(a, b): # range(a, b + 1) will be studied by the function
    
#     result = []
#     for num in range(a,b + 1):
#         sum = 0
#         num_str = str(num)
#         for i in range(len(num_str)):
#             sum += int(num_str[i]) ** (i + 1)
#             if sum == num:
#                 result.append(num)
#     return result








def abbreviate(s):
    st = s[1:-1]
    abb = ""
    count = 0
    for _ in st:
        count = len(st)
        abb += s[0] + str(count) + " " + s[-1]
    return abb
print(abbreviate("internationalization"))

