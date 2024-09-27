//Jacob Ketterer
//1001793039
//9/29/23

//inputtable array
const inputtable = [1,2,3,4,5,6,7,8,9,10];
//Creating and printing fiveTable using the map function to multiply every entry by 5
const fiveTable = inputtable.map(x=>x*5);
console.log(fiveTable);
//Creating and printing thirteenTable using the map function to multiply every entry by 13
const thirteenTable = inputtable.map(x=>x*13);
console.log(thirteenTable);
//Creating and printing squaresTable using the map function to square every entry
const squaresTable = inputtable.map(x=>x*x);
console.log(squaresTable);

//Function that prints to console every odd multiple of 5
function oddmultiples(start, end)
{
    if (start<=end)
    {
        if((start%5==0)&&((start%2!=0))) console.log(start);
        oddmultiples(start+1,end);
    }
}
//Header for the results
console.log("Odd multiples of 5");
//Calling the Odd multiples of 5 function from 1 to 100
oddmultiples(1,100);

//Function that prints to console the sum of every even multiple of 7 from a start to an end point
//This function needs a sum variable, which you'd pretty much always want at 0
//There's likely a way to make this without the 3rd parameter but I tried for a long time and couldn't figure it out
function sumevenmultiples(start, end, sum)
{
    if (start<=end)
    {
        if((start%7==0)&&(start%2==0)) 
        {
            sum+=start;
        }
        sumevenmultiples(start+1,end,sum);
    }
    if (start>end)
    {
        console.log(sum);
    }
}
//Header for the results
console.log("Sum of even multiples of 7");
//Calling the Sum of even multiples of seven function from 1 to 100
sumevenmultiples(1,100,0);

//Original cylinder volume function
function cylinder_volume(r, h)
{ 
    var volume = 3.14 * r * r * h; 
    return volume; 
} 
//Curried function so that it takes 1 parameter per function
function cylinder_volume_r(r)
{
    return function cylinder_volume_h(h)
    {
        return cylinder_volume(r,h);
    }
}
//Header for the results
console.log("Cylinder Volume with r = 5 and h = 10");
//calling the curried function with r=5 and h=10 and printing it
console.log(cylinder_volume_r(5)(10));
//Header for the results
console.log("Cylinder Volume with r = 5 and h = 17");
//calling the curried function with r=5 and h=17 and printing it
console.log(cylinder_volume_r(5)(17));
//Header for the results
console.log("Cylinder Volume with r = 5 and h = 11");
//calling the curried function with r=5 and h=11 and printing it
console.log(cylinder_volume_r(5)(11));

//maketag function for creating a table
makeTag = function(beginTag, endTag)
{ 
    return function(textcontent)
    { 
       return beginTag +textcontent +endTag; 
    } 
} 
//creates and populates the table with HTML tags
//I guess javascript doesn't require any spacing convetions, because it lets me do it all on one line
//I used the HTML generator linked in the HW to generate my table
console.log(makeTag("<table>","</table>")("<tr><th>Name</th><th>ID Number</th><th>Age</th></tr><tr><td>Jacob Ketterer</td><td>1001793039</td><td>21</td></tr><tr><td>Generic Name</td><td>1000000000</td><td>00</td></tr>"));

//Function that prints to console every odd/even multiple of x, from a specified startpoint to a specified endpoint
//Function has 4 paramters, 2 ints for the start and end point, a multiple int to test for multiples, and a parity string to specify even or odd
function genericmultiples(start,end,multiple,parity)
{
    //even path
    if ((start<=end)&&(parity=="even"))
    {
        if((start%multiple==0)&&((start%2==0))) console.log(start);
        genericmultiples(start+1,end,multiple,parity);
    }
    //odd path
    if ((start<=end)&&(parity=="odd"))
    {
        if((start%multiple==0)&&((start%2!=0))) console.log(start);
        genericmultiples(start+1,end,multiple,parity);
    }
}
console.log("Printing the odd multiples of 6 from 0-100, there should be none below");
genericmultiples(1,100,6,"odd");
console.log("Printing the even multiples of 6 from 0-100");
genericmultiples(1,100,6,"even");
console.log("Printing the odd multiples of 13 from 0-100");
genericmultiples(1,100,13,"odd");
console.log("Printing the even multiples of 42 from 0-100");
genericmultiples(1,100,42,"even");



//This function has 4 ints, 2 for specifying which integer to start and stop at, 1 to specify which multiple to print, and a sum variable you'd usually want to keep at 0
//It also has the parity string that will specify if you want even or odd multiples printed
function genericsummultiples(start, end, sum, multiple, parity)
{
    if ((start<=end)&&(parity=="even"))
    {
        if((start%multiple==0)&&(start%2==0)) 
        {
            sum+=start;
        }
        genericsummultiples(start+1, end, sum, multiple, parity);
    }
    if ((start<=end)&&(parity=="odd"))
    {
        if((start%multiple==0)&&(start%2!=0)) 
        {
            sum+=start;
        }
        genericsummultiples(start+1, end, sum, multiple, parity);
    }
    if (start>end)
    {
        console.log(sum);
    }
}
console.log("Printing the sum of the odd multiples of 13 from 0-100");
genericsummultiples(0,100,0,13,"odd")
console.log("Printing the sum of the even multiples of 20 from 0-100");
genericsummultiples(0,100,0,20,"even")
console.log("Printing the sum of the odd multiples of 20 from 0-100, this should read 0, or whatever your starting sum is");
genericsummultiples(0,100,0,20,"odd")