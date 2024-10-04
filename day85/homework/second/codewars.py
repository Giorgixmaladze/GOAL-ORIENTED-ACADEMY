#6 kyu - count characters in your string

def count(s):
    
    count_dict = {}
    for i in s:
        count_dict[i] = s.count(i)
    return count_dict



def high(x):
    alp = "abcdefghijklmnopqrstuvwxyz"
    splited = x.split(" ") 
    new_list = []
    counter = []
    sum = 0
    for i in splited:
        for c in i:
            counter.append(alp.find(c) + 1)
            
            
    return  counter

print(high('man i need a taxi up to ubud'))



