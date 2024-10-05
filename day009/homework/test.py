#დავადეკლარირეთ სტრინგ ტიპის ცვლადები სახელად registered_username და registered_password,რომლებსაც მივანიჭეთ მნიშვნელობა Khmaladzegiorgi და giorgi123.
registered_username = "KhmaladzeGiorgi"
registered_password = "giorgi123"

#წარმოვადგინეთ boolean_ი რადგან არ გვაქვს ჯერჯერობით ჩაწერილი არც username და არც პაროლი
authorised = False

#ამ კოდში წარმოვადგინეთ ის,რომ ემთხვევა თუარა ჩვენი მითითებული მონაცემები საჭირო მონაცემებს და თუ არ ემთხვევა გვიწერს "username or password is incorrect,please try again"
while authorised != True:
    username_input = input("Enter your username: ") 
    password_input = input("Enter your password: ")
    if username_input == registered_username and password_input ==  registered_password:
        print("Access granted")
        authorised = True
    else:
        print("username or password is incorrect,please try again")
