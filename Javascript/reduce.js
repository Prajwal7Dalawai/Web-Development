let arr1=[1,2,3,4,5];
let final= arr1.reduce((res,ele)=> {
    console.log(res);
    return res + ele;
});
console.log(final);

// Finding maximum value in array
let arr= [ 5,6,7,9,2,5,978,6,7,];
let maxi= arr.reduce((max,ele)=>{
    if(max<ele)
    return ele;
else
    return max;
});
console.log("The maximum value is ",maxi);

//Finding minimum value in array
let mini=arr.reduce((min,ele)=>{
    if(ele<min)
    return ele;
else
    return min;
});
console.log("The minimum value in array is: ",mini);