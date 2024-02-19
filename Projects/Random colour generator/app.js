let btn = document.querySelector("button");
let h2 = document.querySelector('h2');
btn.addEventListener("click", function () {
    let h2 = document.querySelector('h2');
    let randomclr = random_color();
    h2.innerHTML = randomclr;
 //   h2.style.color = randomclr;
    console.log("colour Updated");

    let div = document.querySelector('div');
    div.style.backgroundColor = randomclr;

});

function random_color() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `(${red}, ${green}, ${blue})`;
    return `rgb${color}`;
}

