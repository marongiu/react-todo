function Todo({todoList, checkTodo}) {
  return (
    <div>
      {
        todoList.map((todo, index) => {
          return <div key={index} className="bg-sky-100 mb-2 p-2 border-2 border-black">
            <span onChange={(e) => checkTodo(e,index)}
                  className="mr-2">
              <input type="checkbox"/>
            </span>
            <span className="todo">{todo}</span>
          </div>
        })
      }
    </div>
  );
}

export default Todo