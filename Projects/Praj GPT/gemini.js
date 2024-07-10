import  { GoogleGenerativeAI }  from "@google/generative-ai";

let prmt = document.querySelector('#text');

let frm = document.querySelector('form');
let isGenerated = false;

const genAI = new GoogleGenerativeAI("AIzaSyDa3s0S6eMgaMBtLmidA3xzClDfNyIXMik");
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

// const res = await model.generateContent("Top 10 Programming Languages in boom");

// console.log(res.response.text());


let respons = document.getElementById('response');

frm.addEventListener('submit',async (e)=>{
    e.preventDefault();
    console.log(prmt.value);
    respons.style.visibility = "visible";
    const res = await model.generateContent(prmt.value);
    const cleanedres = res.response.text().replace(/(\*\*|\#|\*)/g, "","");
    respons.innerText = cleanedres;
});