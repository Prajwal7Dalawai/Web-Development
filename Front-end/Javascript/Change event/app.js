/*let user = document.querySelector('#user');
let pass = document.querySelector('#pass');
let form = document.querySelector('form');
form.addEventListener("submit",function(event){
    event.preventDefault();
});
user.addEventListener("change",function(){
    console.log("The value is changed");
    console.log(`The changes value is ${this.value}`);
});
user.addEventListener("input",function(){
    console.log("The value is changed");
    console.log(`The final value is ${this.value}`);
});*/

let text = document.querySelector('#text');
let par = document.querySelector('p');
text.addEventListener('input',function() {
    par.innerText = this.value;
});