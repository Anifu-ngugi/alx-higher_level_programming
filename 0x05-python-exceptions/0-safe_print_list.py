#!/usr/bin/python3

def safe_print_list(my_list=[], x=0):
    x = 0
    try:
        for i in my_list:
            print("{}".format(i), end="")
            x += 1
    except NameError:
        print("list was not found")
    else:
        print(x)
