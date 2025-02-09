import Product from "./product";

function ProductTab() {
    let features = ["hi-tech","durable","fast"];
    let features1 = [<li>hi-tech</li>,<li>durable</li>,<li>Fast</li>];
    let options = {a:"hi-tech", b:"durable", c:"fast"};
    return (
        <div>
            <Product />
            <Product />
            <Product />
        </div>
    );
}

export default ProductTab;
