const array=[1,2,3,4]
console.log(array);
console.log("After popping:", array.pop());
//array[1,2,3]==> not possible. Because redeclaration of constant array not possible.
//Acnnot re-assign already existing array to constant array

//Nested arrays are also called as multi-dimensional arrays. They are arrays of arrays.
let num=[[1,2],[3,4],[5,6]];
//num is a nested array.
console.log(num);
a=[1,2];
b=[3,4];
c=[5,6];
d=[7,8];
array1=[a,b,c,d];
console.log(array1);
console.log(array1[0,2]);