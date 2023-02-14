import React from 'react';
import {useState} from "react";
import Todo from './Todo'
const { uuid } = require('uuidv4');



function TodoForm() {


  let [inputValue, setInputValue] = useState('');
  let [todoList, setTodoList] = useState(
    [
      {
        id: uuid(),
        text: 'Test 1',
        completed: false
      },
      {
        id: uuid(),
        text: 'Test 2',
        completed: false
      }
    ]);



  const addTodo = (e, todo) => {
    e.preventDefault();
    if(todo.length > 1) {
      setTodoList([...todoList, {id: uuid(),text: todo, completed: false}]);
      setInputValue('');
    }
  }

  const completedTodo = (el) => {
    el.completed = true;
    setTodoList(prevTodoList => {
      const newTodoList = prevTodoList.filter(todo => todo.id !== el.id);
      return [...newTodoList, el];
    });
  }



  return (
    <div className="form mt-10">
      <form onSubmit={(e) => addTodo(e, inputValue)}>
        <input
          className="border-2 border-black p-2 w-full"
          type="text"
          placeholder="Aggiungi un todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <Todo todoList={todoList} completedTodo={completedTodo}/>
    </div>
  )
}


export default TodoForm