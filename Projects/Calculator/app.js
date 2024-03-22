let keys = document.querySelectorAll('.keys');
let show = document.querySelector('.show');
let equal = document.querySelector('.eq');
let seq = [];
show.innerText= '';
keys.forEach(key=>{
    key.addEventListener('click',()=>{
        key.classList.add('green');
        setTimeout(()=>{
            key.classList.remove('green');
        },150);
    show.innerText = show.innerText + key.innerText;
    seq.push(key.innerText);
    console.log(seq);
    });
});
let clear = document.querySelector('.clear');
clear.addEventListener('click',()=>{
    reset();
})
equal.addEventListener('click',()=>{
if(seq.length<3){
    alert("Enter The operands to calculate");
}
else{
    let firstele = '',secele = '';
    let final = [];
    for(var i = 0;i<seq.length;i++){
        if(seq[i] == '+' || seq[i] == '/' || seq[i] == 'X' || seq[i] == '-'){
            break;
        }
        firstele = firstele+seq[i];
    }
    var num1 = parseFloat(firstele); // Convert to number
    op = seq [i];
    let j = i+1;
    for(i=j;i<seq.length-1;i++){
        secele = secele + seq[i]
    }
    var num2 = parseFloat(secele); // Convert to number
    console.log("1st operand:",num1);
    console.log("2nd operand",num2);
    console.log('Operator',op);
    console.log('result:',calculate(num1,op,num2));
    show.innerText=(calculate(num1,op,num2));
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
