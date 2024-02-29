let save = document.querySelector('#submit');
let title = document.querySelector('#title');
let desc = document.querySelector('#desc');
save.addEventListener('click',function(event) {
    event.preventDefault();
   filldata();
});
let form = document.querySelector('form');
let table = document.querySelector('table');
function filldata(){
let tr = document.createElement('tr');
let td1 = document.createElement('td');
td1.innerText =title.value ;                         //Creating element for first row(Title)
table.insertAdjacentElement('beforeend',tr);
tr.insertAdjacentElement('afterbegin',td1);
let td2=document.createElement('td');                //Creating element for second row(Description)
tr.insertAdjacentElement('beforeend',td2);
td2.innerText = desc.value;                         
let td3 = document.createElement('td');               //Creating element for checkbox
tr.insertAdjacentElement('beforeend',td3)
let check = document.createElement('input');
check.setAttribute('type','checkbox');
check.setAttribute('id','checkbox');
td3.appendChild(check);
let td4 = document.createElement('td');
tr.insertAdjacentElement('beforeend',td4);
let svg = document.createElement('svg')
}