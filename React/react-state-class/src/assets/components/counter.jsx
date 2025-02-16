import { useState } from "react";
export default function Counter(){
    let [count, setCount] = useState(0);
    function increaseCount(){
        setCount(count + 1);
        console.log(count);
    }
    return(
        <>
        <h1>Counter: {count}</h1>
    <button onClick={increaseCount}>Count is {count}</button> 
    </>
    )   
}