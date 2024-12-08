#შევქმენით ფუნქცია სახელად anagram რომლის დანიშნულებაა დავადგინოთ უდრის თუარა პირველი სტრინგის სიგრძე მეორე სტრინგის სიგრძეს და ამასთანავე ვამოწმებთ არის თუარა მეორე სტრინგში პირველი სტრინგის თითოეული ასო თანაბარი რაოდენობით 

def anagram(st1,st2):
    #ვამოწმებთ უდრის თუ არა სტრინგის სიგრძეები ერთმანეთს
    if len(st1) != len(st2):
        return False
    #სევქმენით dictionary სადაც უნდა გადავცეთ ასო და ამ ასის რაოდენობა თუ რამდენია სტრინგში
    count = {}

    #გადავუარეთ for ციკლის საშუალებით სტრინგს
    for char in st1:
        #შემდეგ ჩავამატეთ ჩვენს count "საცავში" ჩვენი ასო და მისი რაოდენობა
        count[char] = count.get("char",0) + 1


    #გადავუარეთ for ციკლით უკვე მეორე სტრინგს და შევამოწმეთ 
    for char in st2:
        #შევამოწმეთ თუ ჩვენი სიმბოლო რაც მეორე სტრინგში გვაქვს არის თ არ ჩვენს "საცავში" მაშინ დავაბრუნოთ False
        if char not in count or count[char] == 0:
            return False
    #სხვა ყველა შემთხვევაში დავაბრუნოთ True
    return True

print(anagram("listen","silent"))
print(anagram("apple","pale"))
print(anagram("triangle","integral"))
print(anagram("a","a"))   
print(anagram("rat","car"))