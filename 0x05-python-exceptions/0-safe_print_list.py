#!/usr/bin/python3

def safe_print_list(my_list=[], x=0):
    try:
        for i in my_list:
            x += 1
    except NameError:
        print("list was not found")
    else:
        print(x)

# Example usage
my_list = [1, 2, 3, 4]
safe_print_list(my_list)

