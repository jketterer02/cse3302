# Jacob Ketterer
# 1001793039
# Python Version 3.11.5
# OS: Windows

import os

def main():
    #checking for input file in current working directory
    #prints statement if correct file is found
    for file in os.listdir(os.getcwd()):
        if(file=="input.txt"): print("Input.txt found")

    
    #opens input file
    fileinput = open("input.txt", "r")

    #holds the unmodified code in uneditedcode
    new_code = []
    #tracks depth of each line
    depth = 0

    #reads line of input.txt
    input = fileinput.readlines()


    #for every readline in input
    for code in input:
        
        #stores a copy of the unedited code from input
        uneditedcode = code

        #removes everything between quotes, needs to be done first because it doesn't
        #matter if I remove quotes that are in comments, but it does matter if I have quoted brackets
        #before a comment that I count by accident
        if('"' in code):
            #adds the code together from outside the quotes
            code = code.split('"')[0] + code.split('"')[2]
            #sees if there's a difference in brackets, and if there is increments the count accordingly
            #increases by 1 if there's a starting bracket, and decreases by 1 if there's a closing bracket
            #should theoretically work for more than a difference of 1
            depth += (code.count('{') - code.count('}'))
        #Removes everything after // in a line so that I don't have to deal with comments
        if('//' in code): 
            #weirdly this doesn't work unless I remove the extra bracket check, not sure why
            #I think it ends up checking twice, which makes sense, not sure if I need to remove it though
            code = code.split('//')[0]
        #checks for start of multiline block comment
        if('/*' in code):
            code = code.split('/*')[0]
            depth += (code.count('{') - code.count('}'))
        #checks for end of multiline comment
        if('*/' in code):
            code = code.split('*/')[1]
            depth += (code.count('{') - code.count('}'))

        #still updates the line count even if it didn't have comments or block comments
        depth += (code.count('{') - code.count('}'))
        
        new_code.append(str(depth) + " " + uneditedcode)

        #test case for showing how it parses the actual code for depth
        #new_code.append(str(depth) + " " + code)
    
    #Error Message
    if depth !=0 : print("Error: Unmatched Braces Detected!")
    #prints the every line in the newcode
    for code in new_code: print(code)
    #closes fileinput
    fileinput.close()

main()