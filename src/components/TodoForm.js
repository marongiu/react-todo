import React from 'react';


function TodoForm({inputValue, addTodo, setInputValue}) {


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

    </div>
  )
}


export default TodoForm