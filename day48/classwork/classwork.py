#maximum multiple

# def max_multiple(divisor,bound):
#     new_list = []
#     for num in range(bound+1):
#         if num % divisor == 0:
#             new_list.append(num)
#     return max(new_list)




#row weights


# def row_weights(array):
#     res_list = []
#     new_list = []

#     for index in range(len(array)):
#         if index % 2 == 0:
#             res_list.append(array[index])
#         else:
#             new_list.append(array[index])
#     return sum(res_list),sum(new_list)





#check the exam





# def check_exam(arr1,arr2):
#     res = 0


#     for i in range(len(arr1)):
#         if arr1[i] == arr2[i]:
#             res += 4
#         elif arr1[i] != arr2[i]:
#             res -= 1
#     return 0 if res < 0 else res


