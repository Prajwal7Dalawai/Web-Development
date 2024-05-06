let namaste_button=document.querySelector('button');
namaste_button.addEventListener('click',inputmsg);
function inputmsg()
{
    let name=prompt('Enter name of Student');
    namaste_button.textContent= 'USN:2SD22CS058 Name:'+name;
}
