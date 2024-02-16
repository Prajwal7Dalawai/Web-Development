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
}
console.log(post.name1);
console.log(typeof post);
if((typeof post) == "object")
console.log("yes");