#!/usr/bin/python3

def safe_print_list(my_list=[], x=0):
    y = 0
    try:
        for i in range(0, x):
             print("{}".format(my_list[i]), end="")
             y += 1
    except IndexError:
        print("list was not found")
    
    return y
