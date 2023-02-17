import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
import {MdDelete} from 'react-icons/md';
function TodoList({todoList, completeTodo, deleteTodo}) {
  return (
    <ul>
      {
        todoList.map((el) => {
          return <li key={el.id} className="flex justify-between items-center bg-sky-50 p-2 my-2 border-2 border-sky-600">
            <span className={`todo-item ${el.completed ? 'line-through' : ''}`}>{el.text}</span>
            <div className="icone flex items-center">
              <span className="my-2 cursor-pointer" onClick={() => completeTodo(el)}><AiOutlineCheck/></span>
              <span className="cursor-pointer" onClick={() => deleteTodo(el)}>< MdDelete /></span>
            </div>
          </li>
        })
      }
    </ul>
  );
}

export default TodoList