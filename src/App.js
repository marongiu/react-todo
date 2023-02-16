import React from 'react';
import Header from "./components/Header";
import TodoPage from "./components/TodoPage";

function App() {
  return (
    <div id="app" className=" h-6/12 m-auto flex flex-col sm:w-6/12 px-5">
      <Header/>
      <TodoPage/>
    </div>
  );
}

export default App;
