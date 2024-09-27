# Jacob Ketterer
# 1001793039
# Python Version 3.11.5
# OS: Windows

import os
def main():
    total = 0
    total = dirspace(".")
    print(total)
def dirspace(path):
    sum = 0
    #for every item in the listed directory, create a new path for the child, and check file type
    #if the new path for the child is a directory, call recursively, else add to sum
    for item in os.listdir(path):
        newpath = os.path.join(path,item)
        if os.path.isfile(newpath):
            sum+=os.path.getsize(newpath)
        if os.path.isdir(newpath):
            sum+=dirspace(newpath)
    return sum
main()