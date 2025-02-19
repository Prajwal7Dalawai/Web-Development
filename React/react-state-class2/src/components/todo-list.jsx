import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "Task 1", id: uuidv4(), isDone: false }]);
  const [newTodo, setNewTodo] = useState("");
  const [doneTodos, setDoneTodos] = useState([]);

  const addTask = () => {
    setTodos((prevTodos) => [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]);
    // Added isDone property to new todos for consistency

    setNewTodo("");
  };

  const updateTask = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateToUppper = () => {
    setTodos(todos.map((todo) => ({ ...todo, task: todo.task.toUpperCase() })));
  };

  const upperCaseOne = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo)));
  };

  const markAsDone = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: true, };
      }
      return todo;
    });
    
    setTodos(updatedTodos);
    const completedTodo = todos.find(todo => todo.id === id);
    setDoneTodos(prevDone => [...prevDone, completedTodo]);

    // Fixed markAsDone function to properly handle state updates
  };


  return (
    <>
      <input
        type="text"
        value={newTodo}
        onChange={updateTask}
        id="inp"
        placeholder="Add a task"
      />
      &nbsp; &nbsp;
      <button onClick={addTask}>Add task</button>
      <br />
      <br />
      <h2>Tasks To Do</h2>
      <ul>
        {todos.map((todo) => (
          !todo.isDone && (
          <li key={todo.id}>
            <span>{todo.task}</span>&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => upperCaseOne(todo.id)}>Update to upper</button>
            <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>
          </li>
          )
        ))}
      </ul>
      <button onClick={updateToUppper}>Update to Upper</button>
      <br /><br /><h2>Tasks Done</h2>
      <ul>
        {doneTodos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
          </li>
        ))}
      </ul>


    </>
  );
}
