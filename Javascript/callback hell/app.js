/*h1 = document.querySelector('h1');

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
//Promises

function savedb(data){
    return new Promise((resolve,reject)=>{
        let intspeed = Math.floor(Math.random() * 10) + 1;
        if(intspeed > 4){
            resolve("success: data was saved");
        }
        else{
            reject("failure: couldn't save data");
        }
    });
}

savedb("data",
    ()=>{
        console.log("Data saved");
        savedb("saved",()=>{console.log("Data saved again");},()=>{console.log("Couldnt save data");});
    },
    ()=>{
        console.log("error, slow internet connection.");
    });

    //let request = savedb("promise obj");
    
    savedb("promise obj").then(()=>{
        console.log("Promise was accepted");
       // console.log(request);
    })
     .catch(()=>{
        console.log("Promise was rejected");
        //console.log(request);
     });
    