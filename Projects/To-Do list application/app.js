let save = document.querySelector('#submit');
let title = document.querySelector('#title');
let desc = document.querySelector('#desc');

save.addEventListener('click',function(event) {
    event.preventDefault();
   filldata();
});
let form = document.querySelector('form');
let table = document.querySelector('table');

let count1=0;
let count2=0;
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
check.setAttribute('type','checkbox');                 //Adding checkbox in a new row
check.setAttribute('id','check');
td3.appendChild(check);

let td4 = document.createElement('td');             //Creating element for svg
tr.insertAdjacentElement('beforeend',td4);
let svg = document.createElement('img');
svg.setAttribute('src','resources/delete1.svg');           //Adding delete.svg file in a new row
svg.setAttribute('id','delete');
svg.setAttribute('color','white');
td4.appendChild(svg);

svg.addEventListener('click',(event)=>{             //Deleting the row when clicked on the delete icon
   table.removeChild(tr); // another way of deleting the the row: pass (event) in the arguement, then event.target.nodeName == "IMG"{table.removeChild(tr)}
   console.log("deleted")
});

check.addEventListener("click",function(){
    let li = document.createElement('li');
    let ul = document.querySelector('ul');
    if( check.checked == true)
    {
        ul.insertAdjacentElement('beforeend',li);
        li.innerText = td1.innerText;
        setInterval(() => {
            table.removeChild(tr);
        }, 500);
    }
});
}