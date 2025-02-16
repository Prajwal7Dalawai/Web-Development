function handleFormSubmit(e){
e.preventDefault();
console.log("Form submitted");
}
export default function Form(){
    return (
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Enter here" />
            <button type="submit">Submit</button>
        </form>

    );
}
