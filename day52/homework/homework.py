
#Vowel count


# def get_count(sentence):
#     vowels = "aeiou"
#     count = 0
#     for char in sentence:
#         if char in vowels:
#             count +=1
#     return count



#descending order

# პირველი გზა

# def descending_order(num):
#     num = str(num)
#     num = list(num)
#     new_arr = []
#     for i in num:
#         new_arr.append(int(i))
#     new_arr.sort(reverse = True)
    
#     res_str = ''
#     for x in new_arr:
#         res_str = res_str + str(x)
#     return int(res_str)





#მეორე გზა



# def descending_order(num):
#     digits = list(str(num))
#     digits.sort(reverse=True)
#     return int('' .join (digits) )






#list filtering


# def filter_list(l):
   
#     new_list =[]
#     for x in l:
#         if type(x) != str:
#             new_list.append(x)
#     return new_list





#find the odd int


# def find_it(seq):
#     for i in seq:
#         if seq.count(i) % 2 !=0:
#             return i





#sum of digits digital root


# def digital_root(n):
#     root = 0
#     for d in str(n):
#         root += int(d)
#     if len(str(root)) > 1:
#         root = digital_root(root)
#     return root




