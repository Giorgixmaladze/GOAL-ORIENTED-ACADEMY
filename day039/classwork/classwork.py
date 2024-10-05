# array plus array

#  პირველი ამოხსნის გზა

# def array_plus_array(arr1,arr2):
#     result = 0 
#     for i in range(len(arr1)):
#         result += arr1[i] + arr2[i]
#     return result

#მეორე ამოხსნის გზა

# def array_plus_array(arr1,arr2):
#     return sum(arr1) + sum(arr2)






#count of positives sum of negatives


# def count_positives_sum_negatives(arr):
#     count_pos = 0 
#     sum_neg = 0
#     if arr == []:
#         return []
#     for i in arr:
#         if i > 0:
#             count_pos += 1
#         elif i < 0:
#             sum_neg += i
#     return [count_pos,sum_neg]






#descending order

# def descending_order(num):
#     num = str(num)
#     num = list(num)

#     new_arr = []
#     for x in num:
#         new_arr.append(int(x)):
#     new_arr.sort(reverse = True)

#     res_str = ''

#     for i in new_arr:
#         res_str += str(i)
#     return int(res_str)




#sum of two smallest positive integers

# def sum_two_smallest_numbers(numbers):
#     x = sorted(numbers)
#     min1 = x[0]
#     min2 = x[1]
#     return min1 + min2





#convert string to camel case


# def to_camel_case(text):
#     words = text.replace("_","-").split("-")
    
#     result = words[0]
#     words = words[1:]
    
#     for char in words:
#         result += char.capitalize()
#     return result



#find the odd int



# def find_it(seq):
#     for i in seq:
#         if seq.count(i) % 2 !=0:
#             return i





#multiples 3 or 5


# def solution(number):
#     if number < 0:
#         return 0
#     total = 0
#     for num in range(number):
#         if num % 3 == 0 or num % 5 == 0 :
#             total = total + num 
#     return total


