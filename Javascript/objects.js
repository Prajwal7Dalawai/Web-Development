var person={
    name:"JOHN",age:30,
    sayhello:function()
{
    console.log("HELLO");
}
};
console.log(person.name," ",person.age);
person.sayhello();

const post = {
    name1:"Prajwal Dalawai",
    username:"@prajwal_dalawai",
    caption : "This is my first post",
    likes: 500,
    reposts: 2,
    tags: ["@apnacollege","@delta"],
    city: "Hubballi"
}
console.log(post.name1);
console.log(typeof post);
if((typeof post) == "object")
console.log("yes");

//Adding or updating values
post.city = "Banglore";
console.log(post);
//Creating a new key:
post.device = "Andriod";
console.log(post);

//Deleting key:
delete post.device;
console.log(post);