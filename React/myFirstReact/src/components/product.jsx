import "./product.css";

function Product({ title, price = 1000, features, options }) {
    // let styles = {
    //     backgroundColor:price > 30000 ? "yellow" : null
    // };
    // const list = features.map((feature) => <li key={feature}>{feature}</li>); // Added key for list items
    // const discountMessage = price > 30000 ? "Discount Applicable" : null;
    // const finalPrice = price > 30000 ? price * 0.95 : price;

    return (
        <div className="Product" style={styles}>
            <h3>Product: {title}</h3>
            <h5>Price: {price}</h5>
            <p>{discountMessage}</p>
            <p>Price after Discount: {finalPrice}</p>
        </div>
    );
}

export default Product;