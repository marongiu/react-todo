import React from 'react';
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div id="app" className=" h-6/12 m-auto flex flex-col sm:w-6/12 px-5">
      <Header/>
      <TodoForm />
    </div>
  );
}

export default App;
