# Jacob Ketterer
# 1001793039
# Python Version 3.11.5
# OS: Windows

import os
def main():

    #checking for input file
    for file in os.listdir(os.getcwd()):
        if(file=="input_RPN.txt"):
            print("Input_RPN.txt found")
    
    #opens input file
    fileinput = open("input_RPN.txt", "r")
    
    while(1):
        #taking a line from the file
        output = fileinput.readline()
        #took me like 45 minutes to realize that readline returns an emptystring to show end of file
        #also set it to break with an empty line string just in case
        if((output=="")|(output=="\n")): break

        #set of operator symbols to compare input to
        plus = "+"
        minus = "-"
        asterisk = "*"
        slash = "/"

        #using python list as stack
        stack = []
        for substring in output.split():
            #need the substring to stay as string for comparison
            #if the substring is not the same string as the 4 signs above, add it to the stack
            if((substring!=plus)&(substring!=minus)&(substring!=asterisk)&(substring!=slash)): stack.append(substring)
            else:
                #pop 2 numbers from the stack to operate on
                number2 = stack.pop()
                number1 = stack.pop()
                #need to convert all the strings to ints for operations, then the answer will always be an int, and if we ever get a string it just converts before the operation
                if(substring==plus): answer = int(number1) + int(number2)
                if(substring==minus): answer = int(number1) - int(number2)
                if(substring==asterisk): answer = int(number1) * int(number2)
                if(substring==slash): answer = int(number1) / int(number2)
                #put the answer back onto the stack
                stack.append(answer)
        #weirdly I keep getting my final result to have a decimal point for one of the example statements so I will just convert to an int to make it look nicer
        print(int(stack[0]))
    #close file at the end of program because it's good practice
    fileinput.close()
#run main
main()
