import TodoRow from "./TodoRow";

function TodoTable(props) {

    function deleteTodo(deleteTodoId)
    {

        let filtered = props.todos.filter((todo) => {return todo.id !== deleteTodoId});
        props.setTodos(filtered);
    }
    
    return (

        <table className='table table-hover  '>
            <thead>
                <tr>
                    <th scope='col'>todo #</th>
                    <th scope='col'>todo</th>
                    <th scope='col'>days needed</th>
                </tr>
            </thead>
            <tbody>
                { props.todos.map((todo) => <TodoRow key = {todo.id} todo={todo} deleteTodo = {deleteTodo}/>)}

            </tbody>
        </table>
    );
}

export default TodoTable;