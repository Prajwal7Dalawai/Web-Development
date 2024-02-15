/*
list- to show all todos
add- to add a task
delete- to delete a task
quit- to quit the task
*/
let todo=[];
let choice=prompt("Please enter your Choice");
while(true)
{
    if(choice=="quit")
    {
        console.log("Quitting app");
        break;
    }
    if(choice=="list"){
    console.log("-------------------");
    for(task of todo)
    console.log(task);
    }
else if(choice=="add")
{
    let task=prompt("Enter the task to be added:")
    todo.push(task);
    console.log("Task added: ",task);
}
else if(choice=="delete")
{
    if(todo.length==0)
    {
        console.log("No remaining tasks to delete");
        break;
    }
    else{
    let index=prompt("Please enter the task index you want to delete:");
     if(index > todo.length)
     {
        console.log("Task not found at that index. Consider re-entering the correct index.");
     }
    else
    {
        todo.splice(index,1);
        console.log("task deleted.")
    }
}
}
else{
    console.log("Wrong Choice entered.");
}
choice=prompt("Enter your choice:");
}