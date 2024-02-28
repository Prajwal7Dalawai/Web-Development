/*let btn = document.createElement('button');
let div = document.querySelector('div');
div.appendChild(btn)
btn.innerText= "new button";
btn.addEventListener('click',()=>{
    btn.style.backgroundColor= "pink";
    div.style.backgroundColor= "yellow";
});*/
let inp = document.querySelector('input');
inp.addEventListener("input",()=>{
    let s = inp.value;
    let l = s.length;
    let end = s[l-1];
    if(!(end>='a' && end<='z') || (end>='A' && end<='Z') || end == ' ')
    {
        s.pop();
        inp.innerText=s;
    }
});