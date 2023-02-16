import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
const {uuid} = require('uuidv4');

function TodoPage() {

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


  const addTodo = (todo) => {
    if (todo.length > 1) {
      setTodoList([...todoList, {id: uuid(), text: todo, completed: false}]);
      setInputValue('');
    }
  }

  const completeTodo = (el) => {
    el.completed = true;
    setTodoList(prevTodoList => {
      const newTodoList = prevTodoList.filter(todo => todo.id !== el.id);
      return [...newTodoList, el];
    });
  }

  const deleteTodo = (el) => {

    setTodoList(prevTodoList => {
      const newTodoList = prevTodoList.filter(todo => todo.id !== el.id);
      return newTodoList;
    });


  }


  return (
    <div>
      <TodoForm setInputValue={setInputValue} inputValue={inputValue} addTodo={addTodo}/>
      <TodoList todoList={todoList} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
    </div>
  );
}

export default TodoPage