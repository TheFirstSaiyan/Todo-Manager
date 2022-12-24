import TodoTable from './Components/TodoTable';


const todos = [{ id: 1, desc: "Learn React", duration: "20 hrs" },
{ id: 2, desc: "Learn Springboot", duration: "10 hrs" },
{ id: 3, desc: "Do FullStack", duration: "10 hrs" }];

function App() {
  return (
    <div className="mt-5 container">
      <div className='card'>
        <div className='card-header'> Todos</div>
        <div className = 'card-body'>
          <TodoTable todos={todos} />
        </div>
      </div>
    </div>
  );
}

export default App;
