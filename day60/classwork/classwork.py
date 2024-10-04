#reverse a number



# def reverse_number(n):
#     n = str(n)
#     n = n[::-1]
#     if n.endswith('-'):
#         n = n[::-1]
#         n = '-' + n
#         return int(n)
#     else:
#         return int(n)




#finding lenght of sequence


# def lenght_of_sequence(arr,n):
#     if arr.count(n) != 2:
#         return 0
#     first_index = arr.index(n)
#     second_index = 0
#     for index in range(len(arr)-1,-1,-1):
#         if arr[index] == n:
#             second_index == index
#             break
#     return len(arr[first_index:second_index + 1])







# V A P O R C O D E 

# def vapor_code(s):
#     s = s.upper()
#     s = s.replace(" ", "")
#     return "  ".join(s)


#მეორე გზა

# def vapor_code(s):
#     s = s.upper()
#     s = s.replace(" ", "")
#     chars = []
#     for char in s:
#         chars.append(char)
#     return "  ".join(chars)





#reverse every other word in the string


# def reverse_alternate(st):
#     words = st.split()
#     res = []

#     for i in range(len(words)):
#         if i % 2 != 0:
#             res.append(words[i][::-1])
#         else:
#             res.append(words[i])
#     return "".join(res)
