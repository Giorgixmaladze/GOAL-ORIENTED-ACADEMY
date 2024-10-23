def count_bits(n):
    x = bin(n)
    result = 0
    binary = str(x[2:])
    for i in binary:
        if i == "1":
            result += binary.count(i)
    return result
    
        

print(count_bits(7))


        
        