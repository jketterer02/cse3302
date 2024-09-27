// Jacob Ketterer
// 1001793039
// java version "17.0.4.1" 2022-08-18 LTS
// OS: Windows

import java.io.*;

public class jxk3039_lab01
{
    public static int dirspace(File path)
    {
        int sum = 0;
        //creates a filearray of every new path to children of the "File path" input
        File[] filearray = path.listFiles();
        for(int i=0;i<filearray.length;i++)
        {
            if(filearray[i].isDirectory())
                sum+=dirspace(filearray[i]);
            if(filearray[i].isFile())
                sum+=(filearray[i].length());
        }
        return sum;
    }
    public static void main(String[] args)
    {
        File path = new File(".");
        int total = dirspace(path);
        System.out.print(total);
    }
}