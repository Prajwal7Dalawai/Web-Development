const post = {
    name1:"Prajwal Dalawai",
    username:"@prajwal_dalawai",
    caption : "This is my first post",
    likes: 500,
    reposts: 2,
    tags: ["@apnacollege","@delta"],
    city: "Hubballi",
    chem:97,
    phy:98,
    maths:99,
    avg:function(){        // `this` keyword is used to access the properties of its own object.
        let average = (this.phy + this.chem + this.maths) / 3;
        console.log(`${this.name1} got ${this.phy} marks in physics, ${this.chem} marks in Chemistry, ${this.maths} in Mathematics and 
        his average is ${average}.`);
    }
}
post.avg();

function getavg(){        // `this` keyword is used to access the properties of its own object.
    let average = (this.phy + this.chem + this.maths) / 3;
    console.log(`${this.name1} got ${this.phy} marks in physics, ${this.chem} marks in Chemistry, ${this.maths} in Mathematics and 
    his average is ${average}.`);
}
getavg();