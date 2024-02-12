let array=[1,2,3,4,5];
//Push method  --> Insert an element at the end of array
array.push(6);
console.log(array);

//Pop operations --> Deletes an element at the end of the array and return it.
console.log(array.pop());
console.log(array);

//Unshift method --> Add elements at start
array.unshift(0);
console.log(array);

//Shift method --> Delete elements from beginning and returns it
console.log(array.shift());

//indexOf --> returns the index of a element of and element. Returns -1 if element not found
console.log(array.indexOf(3));
console.log(array.indexOf(10));

//includes() --> Returns if the array contained the element mentioned or not.
console.log(array.includes(5));
console.log(array.includes(10));

/*slice(starting_index,ending_index) --> Gives the specified part of the array.
array.slice()*--> Returns full copy of the array.
array.slice(starting_index) --> Returns the complete array starting from the specifies index
array.slice()
*/
console.log(array.slice(2));
console.log(array.slice());
console.log(array.slice(2,3));
console.log(array.slice(-2));
