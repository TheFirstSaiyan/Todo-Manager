import TodoRow from "./TodoRow";

function TodoTable(props) {
    return (

        <table className='table table-hover  '>
            <thead>
                <tr>
                    <th scope='col'>Number</th>
                    <th scope='col'>Todo</th>
                    <th scope='col'>Approx time(in days)</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.todos.map(todo => <TodoRow todo={todo} />)
                }

            </tbody>
        </table>
    );
}

export default TodoTable;