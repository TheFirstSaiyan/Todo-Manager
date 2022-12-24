import TodoRow from "./TodoRow";

function TodoTable(props) {
    return (
        
        <table className = 'table table-hover '>
            <thead>
                <th scope='col'>Number</th>
                <th scope='col'>Todo</th>
                <th scope='col'>Approx time</th>
            </thead>
            <tbody>
                <TodoRow todo={props.todos[0]} />
                <TodoRow todo={props.todos[1]}/>
                <TodoRow todo={props.todos[2]}/>
            </tbody>
        </table>
    );
}

export default TodoTable;