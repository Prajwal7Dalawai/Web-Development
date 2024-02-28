let form = document.querySelector('form');
form.addEventListener('submit',function(event) {
    event.preventDefault();
   /* let inp = document.querySelector('input');
    console.dir(inp);
    console.log(inp.value);*/
    /*let user = document.querySelector('#user');
    let pass = document.querySelector('#pass');
    console.log(user.value);
    console.log(pass.value);
    alert(`Hello ${user.value}, your password has been set as ${pass.value}.`);*/
    console.dir(this);
    console.log(this.elements[0].value);
    console.log(this.elements[1].value);
    let user = this.elements[0];
    let pass = this.elements[1];
    alert(`Hello ${user.value}, your password has been set to ${pass.value}.`);
});