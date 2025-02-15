import "./product.css";
import Price from "./price"


function Product({title,idx}) {
    // let styles = {
    //     backgroundColor:price > 30000 ? "yellow" : null
    // };
    // const list = features.map((feature) => <li key={feature}>{feature}</li>); // Added key for list items
    // const discountMessage = price > 30000 ? "Discount Applicable" : null;
    // const finalPrice = price > 30000 ? price * 0.95 : price;
    let oldPrice = ["12,495","11,900","12,000","12,500"];
    let newPrice = ["11,495","10,900","11,000","11,500"];
    let dec = [ ["8000 DPI","5 Programmable buttons"],["Intuitive surface","Designed for IPad pro"],["Designed for IPad 4","Wireless"],["Wireless","Optical Sensor"]];
    return (
        <div className="Product" >
            <h3>{title}</h3>
            <h5>Description:</h5>
                <ul>
                    <li>{dec[idx][0]}</li> 
                    <li>{dec[idx][1]}</li> 
                    </ul>
           <Price oldPrice = {oldPrice[idx]} newPrice = {newPrice[idx]}/>
        </div>
    );
}

export default Product;