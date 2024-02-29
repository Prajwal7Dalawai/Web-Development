let save = document.querySelector('#submit');
let title = document.querySelector('#title');
save.addEventListener('click',function(event) {
    console.log(title.value);
    console.dir(form);
    event.preventDefault();
   filldata();
});
let form = document.querySelector('form');
let table = document.querySelector('table');

function filldata(){
let tr = document.createElement('tr');
let td1 = document.createElement('td');
td1.innerText =title.value ;
table.insertAdjacentElement('beforeend',tr);
tr.insertAdjacentElement('afterbegin',td1);

}