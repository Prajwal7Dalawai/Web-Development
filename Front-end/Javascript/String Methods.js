//Trim method in JS  ---> Removes whitespaces in string
var name="     Prajwal Dalawai     "
console.log(name.trim());

//toUpperCase() method in string ---> Converts all the letters in a string to uppercase
name=name.trim()
console.log(name);
console.log(name.toUpperCase())
var upper=name.toUpperCase()
console.log(upper)

//toLowerCase() method -->Converts al the letters in a string to lowercase letters
lower=name.toLowerCase()
console.log(lower)

//indexOf method in string. ----> Return first index of occurance of some value in a given string. str_name.indexOf(sub_string) output: 1st index of substring
var index=name.indexOf("Dalawai");
console.log(index);

// Method Chaining --> Application of more than one methods on samestring at same time.
console.log(name);
var me="      I am ";
name= me + name;
console.log(name);
var chain=name.toUpperCase().trim()
console.log(chain)

// Slice method in string --> Used for slicing the strings str_name.slice(values) ex: name.slice(0,4)--> returns first four values
//name.slice(-4)--> gives final 4 values.
console.log(chain.slice(4));

//Replace method in string. --->Search for a given value and replaces with to another value.
// str_name.replace("search_value","replace_value")
console.log(chain.replace("PRAJWAL","SOMASHEKHAR"));

//Repeat method in string --> Repeats a string number of times.  str_name.repeat(value)
console.log(chain.repeat(3));