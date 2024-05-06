function print1to5()
{
    for(let i=1;i<=5;i++)
    console.log(i);
}

function isadult(age){
    if(age >= 18)
    console.log("Adult");
else
    console.log("Not an adult");
}

print1to5();
isadult(19);

 // Average of 3
 function average(a,b,c)
 {
    let avg = (a+b+c)/3;
    console.log(avg);
 }
 average(9,16,18);

 // Multiplication table of a number.
  function table(num)
  {
    for(let i=1;i<=10;i++)
    console.log(num,"X",i,"=",num*i);
  }
  table(4);

  //Funtion that return sum to n numbers
  function sum(n)
  {
    let sum=0;
    for(let i=0;i<=n;i++)
    sum=sum+i;
    return sum;
  }
  console.log("The sum is :",sum(90));
  