def position_convert(curr_pos,target_pos,number):
    str_num = str(number)
    dec = 0
    for i,digit in enumerate(reversed(str_num)):
        if int(digit) > curr_pos -1:
            return f"Invalid input {digit} isn't possible to be in {curr_pos} positional system"
        dec += int(digit) * (curr_pos ** i)
    reminders = ""
    while dec > 0:
        reminders += str(dec % target_pos)
        dec //= target_pos
    result = reminders[::-1]

    return int(result)

print(position_convert(10,2,11))



        
        