#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    a = len(sys.argv) - 1
    if a == 1:
        print('{} argument.'.format(a), end="\n")
        print('{} : {}'.format(1, sys.argv[a]), end="\n")
    elif a >= 1:
        print('{} arguments:'.format(a), end="\n")
        for i in range(1, a + 1):
            print('{}: {}'.format(i, sys.argv[i]), end="\n")
    else:
        print('{} arguments'.format(a), end="\n")
