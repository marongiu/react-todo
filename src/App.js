import Header from "./components/Header";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div id="app" className="w-2/4 h-2/4 m-auto flex flex-col">
      <Header/>
      <TodoForm />
    </div>
  );
}

export default App;
