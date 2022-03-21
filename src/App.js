import "./App.css";
import { useState } from "react"
import { DeleteToDo } from "./Components/DeleteToDo"
import { ToDoSubmitForm } from "./Components/ToDoSubmitForm"

function App() {
	const [todoList, setTodoList] = useState([]);

  const addTodo= (text) => {
    const newtodoList = [...todoList, {text}];
    setTodoList(newtodoList);
   <h1>(newtodoList)</h1>
  };

  const deleteTodo = (index) => {
    const newtodoList = [...todoList];
    newtodoList.splice(index, 1);
    setTodoList(newtodoList);
  };

	return (
		<div class="entiresection">
				<div class="topsection">
				<h1>Add your Task!</h1>
        <ToDoSubmitForm addTodo={addTodo} />
				</div>

				<div class="bottomsection">
					<h1>To-Do List</h1>
					<div class ="list">
						{todoList.map((todo, index) => (
								<DeleteToDo
									index={index}
									todo={todo}
									deleteTodo={deleteTodo}
								/>
						))}
					</div>
				</div>
		</div>
	);
}


export default App;
