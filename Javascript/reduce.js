let arr=[1,2,3,4,5];
let final= arr.reduce((res,ele)=> {
    console.log(res);
    return res + ele;
});
console.log(final);