# def twice_as_old(dad_years_old,son_years_old):
#     diff = abs(dad_years_old - 2 * son_years_old)
#     return diff



def sum_str(a, b):
    a = int(a) if a else 0
    b = int(b) if b else 0

    return str(a + b)



# def reverse_seq(n):
#     if n <= 0:
#         return[]
#     return list(range(n, 0, -1))



# def abbrev_name(name):
#     first_name, last_name = name.split()
#     initials = first_name[0].upper + "." + last_name[0].upper()
#     return initials


# def factorial(n):
#     if n == 0:
#         return 1
#     else:
#         result = 1
#         for i in range(1, n + 1):
#             result = result * i
#         return result




# def divisors(integer):
#     divisors = [i for i in  range(2, integer) if integer % i == 0]
#     if divisors:
#         return divisors
#     else:
#         return "{} is prime".format(integer)
