h1 = document.querySelector('h1');

function change(color,delay,changecolor){
    setTimeout(()=>{
        h1.style.color = color;
        if(changecolor) changecolor();
    },delay);  
}

change("red",1000,()=>{
    change("orange",1000,()=>{
        change("green",1000,()=>
        change("yellow",1000,()=>{
            change("blue",1000);
        }));
    });
});

/*setTimeout(()=>{
    h1.style.color = "red";
},1000);

setTimeout(()=>{
    h1.style.color = "orange";
},2000);

setTimeout(()=>{
    h1.style.color = "green";
},3000);*/