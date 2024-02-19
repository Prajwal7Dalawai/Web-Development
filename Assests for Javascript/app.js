let btns = document.querySelectorAll('button');
let btn;
for(btn of btns){
  // btn.addEventListener('click',sayhello);
   btn.addEventListener('mouseenter',sayname);
   btn.addEventListener('mouseleave',sayhello);
}
function sayhello(){
    alert("Hello Brother, why did u leave me?"); 
}
function sayname()
{
    alert("Don't you dare to click that button. You will be hacked");
}