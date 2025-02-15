import "./App.css";
// import Title from "./components/Title.jsx";
// import Product from "./components/product.jsx";
 import ProductTab from "./components/producttab.jsx"; // Updated import
// import Msgbox from "./components/msgbox.jsx";
function Description() {
    return <p>This is description</p>;
}

function App() {
    return (
        // <>
        // <Msgbox username="Prajwal" textColor="red" />
        // <Msgbox username="Sirisha" textColor="blue" />
        //     <ProductTab />
        // </>
        <>
             <h2>Blockbuster Deals | Shop Now</h2>
            <ProductTab />
        </>
    );
}

export default App;
