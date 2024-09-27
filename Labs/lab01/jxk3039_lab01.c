// Jacob Ketterer
// 1001793039
// C Version 201710
// OS: Windows

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <dirent.h>
#include <sys/types.h>
#include <sys/stat.h>


int dirspace(char* target)
{
    struct stat stats;
    struct dirent *entry;
    int stat_output;
    int sum = 0;
    DIR* dir = opendir(target);

    while(entry=readdir(dir))
    {
        //ignore . and ..
        if((strcmp(entry->d_name,("."))==0)||(strcmp(entry->d_name,(".."))==0))
            continue;

        //reconstructs the new path every cycle, needed due to recusrsion
        char newpath[256];
        strcpy(newpath,target);
        strcat(newpath,"/");
        strcat(newpath,entry->d_name);

        //stat function needs an int output to verify if it worked
        //stat function will write info of the file pointed to by newpath into the stat structure,
        //so we can identify the filetype and size in bytes
        stat_output = stat(newpath,&stats);

        //if the newpath file in stat structure is a directory, call resursively
        //else if it is a regular file, add to sum
        if(S_ISDIR(stats.st_mode)!=0)
            sum+=dirspace(newpath);
        if(S_ISREG(stats.st_mode)!=0)
             sum+=stats.st_size;

    }
    return sum;
}

int main()
{
    int total=0;
    char directory[]=".";
    total = dirspace(directory);
    printf("\n%d",total);
}

