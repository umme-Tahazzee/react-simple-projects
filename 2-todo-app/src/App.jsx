import React from "react";
import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import './App.css'
import TodoItems from "./Components/TodoItems";


export default function App() {
  const todoItems = [
    {
         name: 'Buy fruits',
         dueDate : '4/12/23',
    },
    {
      name: 'Buy fruits',
      dueDate : '4/12/23',
    },
    {
      name: 'Buy Vegetable',
      dueDate : '6/12/23',
    },

]
  return (
    <center className="todo-cotainer">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
     
     
    </center>
  );
}
