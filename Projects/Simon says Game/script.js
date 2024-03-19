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

function game_flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
}

function user_flash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    let randindex = Math.floor(Math.random()*3);
    let randcolor = btns[randindex];
    let randbtn = document.querySelector(`.${randcolor}`);
    /*console.log(randbtn);
    console.log(randcolor);
    console.log(randindex);*/
    gameseq.push(randcolor)
    console.log(gameseq)
   game_flash(randbtn);
}

function btnpress(){
    console.log(this.innerText);
    let btn = this;
    user_flash(btn)

usercolor = btn.getAttribute('id');

console.log(usercolor);
userseq.push(usercolor);
check_ans(userseq.length-1);
}

function check_ans(idx){
   
    if(userseq[idx]===gameseq[idx]){
        if(gameseq.length == userseq.length)
        setTimeout(levelup,1000);
    }
    else{
        h2.innerHTML = `Game Over!! Your Score was <b>${level}</b><br>Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        },1000);
        reset();
    }
}
let allbtns = document.querySelectorAll('.btn');
for (btn of allbtns){
    btn.addEventListener('click',btnpress);
}
function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level = 0;
}