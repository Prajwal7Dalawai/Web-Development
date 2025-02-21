import { useEffect, useState } from "react";

export default function Joker(){    
    const url = "https://official-joke-api.appspot.com/random_joke";
    let [joke,setJoke] = useState({});
    const getJoke= async ()=>{
        let response = await fetch(url);
        let jsonResponse = await response.json();
        console.log(jsonResponse);  
        setJoke(jsonResponse);
    }

    useEffect(()=>{
        const getFirstJoke=async()=>{
        let response = await fetch(url);
        let jsonResponse = await response.json();
        console.log(jsonResponse);  
        setJoke(jsonResponse);
    }
getFirstJoke()
},[]);

    return(
        <div>
            <h1>Joker</h1>
            <button onClick={getJoke}>Get new Joke</button>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
        </div>
    )
}