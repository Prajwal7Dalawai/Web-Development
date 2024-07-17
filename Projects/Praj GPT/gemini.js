import { GoogleGenerativeAI } from "@google/generative-ai";

let prmt = document.querySelector('#text');
let frm = document.querySelector('form');

let apiKey = "AIzaSyDa3s0S6eMgaMBtLmidA3xzClDfNyIXMik"
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

let cont = document.querySelector('.container');
let respons = document.getElementById('response');

frm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if(prmt.value == ""){
    alert("Enter the prompt"); 
    }
    else{  
    console.log(prmt.value);
    cont.style.visibility = "visible";
    try {
        const res = await model.generateContent(prmt.value);
        cont.style.visibility = "hidden";
        const cleanedres = res.response.text().replace(/(\*\*|\#|\*)/g, "");
        respons.style.visibility = "visible";
        let div1 = document.createElement('div');
        respons.insertAdjacentElement('afterbegin',div1);
        div1.innerText = `\nResponse for the prompt: "${prmt.value}"\n\n`;
        div1.innerText += `${cleanedres}\n`;
        const hr = document.createElement('hr');
        div1.insertAdjacentElement('beforeend',hr);
        
    } catch (e) {
        console.log(e);
        cont.style.visibility = "hidden";
        let div1 = document.createElement('div');
        respons.insertAdjacentElement('afterbegin',div1);
        div1.innerText = `\nResponse for the prompt: "${prmt.value}"\n\n`;
        div1.innerText += `${e}\n`;
        const hr = document.createElement('hr');
        div1.insertAdjacentElement('beforeend',hr);
    }
    prmt.value="";
}
});




