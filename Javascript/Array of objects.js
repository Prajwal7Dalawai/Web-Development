const library=[
    {title:'1984',author:'George Owell',genre:'Dystopian Fiction'},
    {title:'To kill a mocking bird',author:'Harper Lee',genre:'Fiction'},
    {title:'The great Gatsby',author:'Scott Fitzgerald',genre:'Classic Literature'},
    {title:'The Catcher in the Rye',author:'J D Salinger',genre:'Fiction'},
    {title:'Pride and Prejudice',author:'Jane Austen',genre:'Classic Literature'},
];

for(var key of library)
{
    if(key.genre=="Fiction")
    console.log(key.title);
}