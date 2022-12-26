import TodoTable from './Components/TodoTable';
import React, { useState } from 'react';
import AddTodo from './Components/AddTodo';


function App() {

  const [todos, setTodos] = useState([{'id' : 1,'desc' : 'Do something','duration' : '10'}]);
  const [showAddTodo,setShowAddTodo] = useState(false);


  return (
    <div className="mt-5 container ">
      <div className='card'>
        <div className='card-header text-center bg-primary fw-bold text-white'> TODOs</div>
        <div className='card-body'>
          <TodoTable todos={todos} setTodos = {setTodos}/>
        </div>
      </div>
      <div> <button type = 'button' className='mt-5 btn btn-primary' onClick={() => setShowAddTodo(!showAddTodo)}> {showAddTodo === true ? 'Close Form' : 'Add new Task'}</button></div>
      <div>
        {
          (showAddTodo === true) && <AddTodo setTodos = {setTodos}/>  
        }
             
      </div>
    </div>
  );
}

export default App;
