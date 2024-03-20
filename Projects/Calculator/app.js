let keys = document.querySelectorAll('.keys');
let show = document.querySelector('.show');
let equal = document.querySelector('.eq');
let seq = [];
show.innerText= '';
keys.forEach(key=>{
    key.addEventListener('click',()=>{
    show.innerText = show.innerText + key.innerText;
    seq.push(key.innerText);
    console.log(seq);
    });
});
equal.addEventListener('click',()=>{
if(seq.length<3){
    alert("Enter The operands to calculate");
}
else{
    var num1 = seq[0];
    var num2 = seq[2];
    show.innerText=(calculate(num1,seq[1],num2));
    //reset();
}
});
function reset(){
    seq = [];
    show.innerText = '';
}
function calculate(op1,op,op2){
    switch(op)
    {
        case 'X': return Math.imul(op1,op2);
                    break;

        case '+': return op1+op2;
                    break;

        case '/': if(op2 == 0){
            return NaN;
        }
        else{
            return op1/op2;
        }
        break;

        case '-': return op1-op2;
        break
    }
}
