import React from 'react';


function TodoForm({inputValue, addTodo, setInputValue}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
  }


  return (
    <div className="form mt-10">
      <form onSubmit={handleSubmit}>
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