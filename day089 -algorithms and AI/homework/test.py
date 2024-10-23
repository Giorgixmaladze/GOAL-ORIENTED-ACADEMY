# ამოცანა
# წარმოვიდგინოთ რომ პროგრამა
#  მუშაობს ტერმინალში და ვაძლევთ 
# ბრძანებას, პროგრამამ უნდა დაიმახსოვროს შეყვანილი სტრიქონების სიგრძე,
#  როდესაც პროგრამას კონკრეტულ input-ს გადავცემთ უნდა დაგვიბრუნოს უდიდესი სტრიქონის სიგრძე


def longest_length():
    longest = ""
    text = input()
    running = True
    while running :   
        if len(longest) < len(text):
            longest = text
        text = input()
        if len(longest) > len(text):
            running = False
        return longest
        
        
    
    

    
    



print(longest_length())