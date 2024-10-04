#only duplicates

# def only_duplicates(st):
#     result = ""
#     for char in st:
#         if st.count(char) != 1:
#             result += char
#     return result


#მეორე გზა


# def only_duplicates(st):
#     for char in st:
#         if st.count(char) == 1:
#             st = st.replace(char,"")
#     return st




#split strings

# def solution(s):
#     if len(s) % 2 != 0:
#         s += "_"
#     result = []
    
#     for i in range(0,len(s),2):
#         result.append(s[i]+s[i+1])
#     return result