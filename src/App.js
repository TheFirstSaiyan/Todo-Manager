import TodoTable from './Components/TodoTable';
import React, { useState } from 'react';
import AddTodo from './Components/AddTodo';

function App() {



 
    
  const [todos, setTodos] = useState([{ id: 1, desc: "Learn React", duration: "20" },
  { id: 2, desc: "Learn Springboot", duration: "10" },
  { id: 3, desc: "Learn Guitar Chords", duration: "100" },
]);
    

  return (
    <div className="mt-5 container ">
      <div className='card'>
        <div className='card-header text-center bg-primary'> Todos</div>
        <div className='card-body'>
          <TodoTable todos={todos} />
        </div>
      </div>
      <div>
        <AddTodo setTodos = {setTodos}/>
      </div>
    </div>
  );
}

export default App;
