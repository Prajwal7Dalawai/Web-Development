let jsonData = `{"activity": "Start a blog for something you're passionate about","type": "recreational","participants": 1,"price": 0.05,"link": "","key": "8364626","accessibility": 0.1}`;
console.log(jsonData);

//Converting JSON data to javascript object format
let validRes = JSON.parse(jsonData);
console.log(validRes);
console.log(validRes.activity);

//Converting Javascript object to JSON data
 let Jsonformat = JSON.stringify(validRes);
 console.log(Jsonformat);