export default function generateNum() {
    let num = Math.floor(Math.random() * 1000);
    if(num<100) num = num*10;
    return num;
}
