let arr = [2,4,6,8,10];
console.log(arr.every((el)=>(el%2 == 0)));

let arr1 = [1,3,5,7,9];
console.log(arr1.every((el)=>(!(el%2 == 0))));

//Checking if numbers in array are multiples of 10 are not
let arr2=[0,10,40,20,30,80,100];
console.log(arr2.every((el)=>(el%2 == 0)));
