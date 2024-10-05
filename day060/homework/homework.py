#ivert values



# def invert(lst):
#     if lst == []:
#         return []
#     new_list = []
#     for i in lst:
#         new_list.append(-i)
#     return new_list




#sentence smash


# def smash(words):
#     return " ".join(words)





#what is between


# def between(a,b):
#     new_list =[]
#     for i in range(a-1,b):
#         i = i + 1
#         new_list.append(i)
#     return new_list




#grasshopper-grade book




# def get_grade(s1, s2, s3):
#     # Code here
#     average_score = (s1+s2 + s3)/ 3
    
#     # Determine the letter grade
#     if 90 <= average_score <= 100:
#         return 'A'
#     elif 80 <= average_score < 90:
#         return 'B'
#     elif 70 <= average_score < 80:
#         return 'C'
#     elif 60 <= average_score < 70:
#         return 'D'
#     else:
#         return 'F'





#DNA  to RNA conversion


# def dna_to_rna(dna):
#     return dna.replace('T', 'U')





#Collact conjecture lenght



# def collatz(n):
#     count = 1
#     while n > 1:
#         if n % 2 == 0:
#             n = n // 2
#             count += 1
#         else:
#             n = n * 3 + 1
#             count += 1
#     return count







#round up to the next multiple of 5


# import math
# def round_to_next5(n):
#     return math.ceil(n/5) * 5
    






#spot the differences


# def spot_diff(s1, s2):
    
    
#     diff_positions = []

    
#     for i in range(len(s1)):
#         if s1[i] != s2[i]:
            
#             diff_positions.append(i)

#     return diff_positions






#complementary DNA


# def DNA_strand(dna):
#     res_str = ""
    
#     for char in dna:
#         if char == "C":
#             res_str += "G"
#         elif char == "G":
#             res_str += "C"
#         elif char == "A":
#             res_str += "T"
#         elif char == "T":
#             res_str += "A"
#     return res_str




#CamelCase method



# def camel_case(s):
#     res_list = []
#     s = s.split(" ")
    
#     for word in s:
#         res_list.append(word.capitalize())
#     return "".join(res_list)

