function multiplegreet(func,n){
    for(let i=1;i<=n;i++)
    func();
}

let greet = function() {
    console.log("Hello");
}

multiplegreet(greet,1);


/*let odd = function(n) {
    console.log(!(n%2 == 0));
}
odd(5);*/

function oddevenfactory(request){
    if(request == "odd"){
        return function(n){
    console.log(!(n%2 == 0));
        }
        return odd;
    }
else if(request == "even"){
    return function(n){
        console.log(n%2 == 0);
    }
    return even;
}
else
console.log("Invalid Request.");
}

let request="odd";
let func = oddevenfactory(request);
func(3);