import { useState } from "react";
export default function Likebutton() {
    let [isLiked, setIsLiked] = useState(false);
    let toggleLike=()=>{
        let newVal = !isLiked;
        setIsLiked(newVal);
    }
    let likestyle = {
        color: "red"
    }
    return (
        <>
        <p onClick={toggleLike}>
            {isLiked.toString()} &nbsp;
        <i className= {isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"} style={isLiked ? likestyle: null  } />
        </p>
        </>
    )
}