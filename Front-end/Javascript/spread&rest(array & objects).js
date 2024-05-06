let arr1=[1,2,3,4,5];
let arr2=[6,7,8,9,10];
let newarr=[...arr1, ...arr2];
console.log(...newarr);

let Student={
    name:"Prajwal Dalawai",
    USN: "2SD22CS058",
};
const data={...Student, marks:90.5};
console.log(data);

function nothing(...arr1){
    for(let i=1;i<=arr1.length;i++)
    console.log("You gave : ",i);
}
nothing(...arr2);
