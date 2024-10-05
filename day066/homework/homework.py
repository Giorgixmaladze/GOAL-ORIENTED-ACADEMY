#milk and cookies for santa


# def time_for_milk_and_cookies(dt):
    
#     test = str(dt)
#     box = test.split("-")
#     if box[1] =="12" and box[2] == "24":
#         return True
#     else:
#         return False


#მეორე გზა

# def time_for_milk_and_cookies(dt):
#      if dt.month == 12 and dt.day == 24:
#         return True
#      else:
#         return False




#check if a triangle is equable triangle


# def equable_triangle(a,b,c):
#     s = (a + b + c) /2
#     area = (s * (s - a) * (s - b) * (s - c)) ** 0.5
#     return area == (a + b + c)







#split strings



# def solution(s):
#     if len(s) % 2 != 0:
#         s += "_"
#     result = []
    
#     for i in range(0,len(s),2):
#         result.append(s[i]+s[i+1])
#     return result









#replace with alphabet position



# def alphabet_position(text):
#     result = []
#     alphabet ="abcdefghijklmnopqrstuvwxyz"
#     for char in text.lower():
#         if char.isalpha():
#             index = alphabet.index(char)+ 1
#             result.append(str(index))
#     return " ".join(result)




#მეორე გზა 




# def alphabet_position(text):
#     alp = "abcdefghijklmnopqrstuvwxyz"
    
            
#     return " ".join([str(alp.find(c) + 1 ) for c in text.lower() if c in alp])








#valid braces



# def valid_braces(string):
#     while len(string) > 0:        
#         if "()" in string:
#             string = string.replace("()", "")
#         elif "[]" in string:
#             string = string.replace("[]", "")
#         elif "{}" in string:
#             string = string.replace("{}", "")
#         else:
#             return False
#     return True   





#მეორე გზა


# def valid_braces(s):
#     while "()" in s or "[]" in s or "{}" in s:
#         s = s.replace("()","")
#         s = s.replace("[]", "")
#         s = s.replace("{}","")
#     return s == ""










#sum a lis but ignore any duplicates



# def sum_no_duplicates(l):
#     # write your solution here
#     new_list = []
#     for i in l:
#         if l.count(i) == 1:
#             new_list.append(i)
#     return sum(new_list)







#most common first




# def most_common(s):
     
#     result = ''
#     count = 1
#     while len(result) < len(s):
#         substr = ''
#         for char in s:
#             if s.count(char) == count:
#                 substr += char
#         result = substr + result
#         count += 1
    
#     return result







#merge overlapping




# def merge_strings(first, second):
    
#     overlap = min(len(first),len(second))
#     for i in range(overlap,0 , -1):
#         if first[-i:] == second[:i]:
            
#             return first + second[i:]
#     return first + second




#drinking game

# def merge_strings(first, second):
    
#     overlap = min(len(first),len(second))
#     for i in range(overlap,0 , -1):
#         if first[-i:] == second[:i]:
            
#             return first + second[i:]
#     return first + second






#factorial division

# def factorial_division(n, d):
#     multiply = 1
#     for i in range(n,d,-1):
#         multiply *= i
#     return multiply
