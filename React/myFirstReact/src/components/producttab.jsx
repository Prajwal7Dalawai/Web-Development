import Product from "./product";

function saySomething(){
    let l = document.querySelector('.ProductTab');
    let p = document.createElement('p');
    l.insertAdjacentElement('afterend',p);
    p.innerText = "Hey, I appeared beacuse you clicked something";
}

function ProductTab() {
    // let features = ["hi-tech","durable","fast"];
    // let features1 = [<li>hi-tech</li>,<li>durable</li>,<li>Fast</li>];
    // let options = {a:"hi-tech", b:"durable", c:"fast"};
    let styles= {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10px",
    }
    return (
        <div className="ProductTab" style={styles}>
            <Product title="Logitex MX Master" idx ={0}/>
            <Product title="Apple Pencil" idx={1}/>
            <Product title="Zebrionics Zeb-transformer" idx={2} />
            <Product title="Petronics Toad 23" idx={3} />
            <div>
            <button onClick={saySomething}>Click me</button>
            <button onMouseEnter={saySomething}>Dont enter ur mouse here</button>
            <button onDoubleClick={saySomething()}>Dont Double Click me</button><br/>
            </div>
        </div>
    );
}

export default ProductTab;
