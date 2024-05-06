async function greet(){
    throw "Abc is not defined";
    return "Hello Prajwal";
}

greet()
.then((result)=>{
console.log("Promise was accepted");
console.log("The result was: ",result);
})
.catch((err)=>{
console.log("Promise was rejected");
console.log("Promise rejected with the error: ",err);
})
// y = confirm("Do you love me??");
// var count = 1
// while(y!=true){
//     count+=1;
//     y = confirm("Please.......");
// }
// let text = "";
// if(count == 1)
//     text = "You agreed to my proposal at very 1st time😁";
// else if(count == 2)
//     text = "You agreed to my proposal at 2nd time😁";
// else if(count == 3)
//     text = "You agreed to my proposal at " + count+"rd time😁";
// else
//     text = "You agreed to my propostal at " + count+"th time😁";
// alert("Thank you so much!!!!!!!!");
// let head = document.getElementById('heading');
// if(count>5){
//     head.innerText = text + " Finally U agreed, thank you for ur patience";
// }
// else
//     head.innerText = text;
