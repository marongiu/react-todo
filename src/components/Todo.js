import React from 'react';
import { AiOutlineCheck } from 'react-icons/ai';
function Todo({todoList, completedTodo}) {
  return (
    <div>
      {
        todoList.map((el) => {
          return <div key={el.id} className="flex justify-between items-center bg-sky-50 p-2 my-2 border-2 border-sky-600">
            <span className={`todo-item ${el.completed ? 'line-through' : ''}`}>{el.text}</span>
            <span className="icona cursor-pointer" onClick={() => completedTodo(el)}><AiOutlineCheck/></span>
          </div>
        })
      }
    </div>
  );
}

export default Todo