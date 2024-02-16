const calculator = {
    add: function(a,b){ return a+b;},
    sub: function(a,b) { return a-b;},
    div: function(a,b) { return a/b;},
    mul: function(a,b) { return a*b;}
}

console.log(calculator.add(5,3));
console.log(calculator.sub(5,3));
console.log(calculator.mul(5,3));
console.log(calculator.div(5,1));