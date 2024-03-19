let keys = document.querySelectorAll('.keys');
let show = document.querySelectorAll('.show');
show.innerText = ' ';
keys.forEach(key=>{
    key.addEventListener('click',()=>{
        show.innerText = show.innerText + key.innerText;
    });
});

function calculate(op1,op,op2){
    switch(op)
    {
        case 'X': return op1*op2;
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