import { useState } from "react";
export default function Forms(){
    // let [fullName,setFullName] = useState("");
    // let [userName,setUsername] = useState("");

    let [formData,setFormData] = useState({
        fullName: "",
        userName: "",
        password:""
    });

    // let handleChange = (event) => {
    //     setFullName(event.target.value);
    // }

    // let handleUsername = (event)=>{
    //     setUsername(event.target.value);
    // }

        let handleInputChange = (event)=>{
            setFormData((currData)=>{
                return {...currData, [event.target.name]: event.target.value};
            });
        }

        let handleSubmit = (event)=>{
             event.preventDefault();
             console.log(formData);
             setFormData({fullName:"",
                userName:"",
            password:""
        });
             }
    return(
        <form onSubmit={handleSubmit}>
        <label htmlFor="fullname">Enter full name: </label>
        <input type="text" placeholder="Enter full name" id="fullname" value={formData.fullName} name="fullName" onChange={handleInputChange}/><br /><br />
        <label htmlFor="username">Enter Username: </label>
        <input type="text" name="userName" id="userName" placeholder="Enter Username" value={formData.userName}  onChange={handleInputChange}/><br /><br />
        <label htmlFor="password">Enter Password: </label>
        <input type="password" name="password" id="password" placeholder="Enter Password" value={formData.password}  onChange={handleInputChange}/><br /><br />
        <button type="submit">Submit</button>
        </form>
    );
}