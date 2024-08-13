let deletefrm = document.getElementById('delete');
let confirmmsg = false;
deletefrm.addEventListener('submit',(e)=>{
    e.preventDefault();
    while(!confirmmsg){
        confirmmsg = confirm("Are you sure you want to delete?");
        console.log(confirmmsg);
    }
});
