let gameseq = []
let userseq = []
let started = false;
let level = 0;
let h2 = document.querySelector('h2');
let btns = ["yellow","red","purple","green"];
document.addEventListener('keypress',()=>{
    if(started == false){
    console.log("game started");
    started = true;

    levelup();
    }
});

function button_flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function levelup(){
    level++;
    h2.innerText = `Level ${level}`;
    let randindex = Math.floor(Math.random()*3);
    let randcolor = btns[randindex];
    let randbtn = document.querySelector(`.${randcolor}`);
    console.log(randbtn);
    console.log(randcolor);
    console.log(randindex);
    button_flash(randbtn);
}

function btnpress(){
    console.log("Button was pressed");
}

let allbtns = document.querySelector('.btn');

for(i of allbtns){
    i.addEventListener('click',btnpress);
}
