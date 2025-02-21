import { useState } from "react"

export default function CommentForm(){
    let [formData, setFormData] = useState({
        username:"",
        comment:"",
        rating:5
    });

    const handleInputChange = (event) =>{
        setFormData((currData)=>{
            return({
                ...currData, [event.target.name]: event.target.value
            })
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username:"",
            comment:"",
            rating:5
        });
    }
    return(
        <div className="comment-form">
            <h1>Leave a comment</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label><br />
                <input type="text" onChange={handleInputChange} name="username" value={formData.username} id="username" placeholder="Enter Username" /><br /><br />
                <textarea name="comment" onChange={handleInputChange} value={formData.comment} id="comment" placeholder="Add Remarks"></textarea><br /><br />
                <label htmlFor="rating">Add a rating:</label><br />
                1<input onChange={handleInputChange} type="range" value={formData.rating} name="rating" id="rating" max="5" min="1"step="0.5"/>5 <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}