export default function Price({ oldPrice, newPrice }) {
    let stylesForOld = {
        textDecoration: "line-through",
    };
    let stylesForNew = {
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor: "#e0c367",
        hieght: "50px",
        borderBottomLeftRadius: "10px",
        borderBottomLeftRadius: "10px"
    };
    return (
        <div className="price" style={styles}>
             <p style={stylesForOld}>Old Price: ${oldPrice}</p>
             <p style={stylesForNew}>New Price: ${newPrice}</p>
        </div>
    );
}