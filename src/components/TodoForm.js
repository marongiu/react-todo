import {useState} from "react";
import Todo from './Todo'
import {logDOM} from "@testing-library/react";
function TodoForm() {

  let [inputValue, setInputValue] = useState('');
  let [todoList, setTodoList] = useState([]);


  const addTodo = (e) => {
    e.preventDefault();
    setTodoList([...todoList,inputValue]);
    setInputValue('');
  }

  const checkTodo = (e,index) => {
    let completed = todoList.filter((el,id) => {
      return id !== index;
    });

    setTodoList(completed);
  }

  return (
    <div className="form my-auto">
      <Todo todoList={todoList} checkTodo={checkTodo} />
      <form onSubmit={(e) => addTodo(e)}>
        <input
          className="border-2 border-black p-2 w-full"
          type="text"
          placeholder="Aggiungi un todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  )
}




export default TodoForm