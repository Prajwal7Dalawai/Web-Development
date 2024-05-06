str1= ["Hello ","Prajwal, ","How ","are ","you?  "];
str2= ["Hi ","Maitri ,","I ","am ","fine. ","What ","about ","you?"];
function concat(str1,str2)
{
    for(key of str2)
    str1=str1+key;
return str1;
}
console.log(concat(str1,str2));