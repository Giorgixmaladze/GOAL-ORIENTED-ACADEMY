pages_to_read_daily = 50
number_of_books_per_month = 3


pages_to_read = input("Enter your dayly page limit : ")
books_per_month = input("Enter number of books you read per month : ")


print(pages_to_read_daily == int(pages_to_read) or number_of_books_per_month >= int(books_per_month))
print(pages_to_read_daily <=  int(pages_to_read) and number_of_books_per_month == int(books_per_month))