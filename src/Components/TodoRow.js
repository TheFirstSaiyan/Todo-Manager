function TodoRow(props) {

  
    return (
        <tr>
            <th scope='row'>{props.todo.id}</th>
            <td>{props.todo.desc}</td>
            <td>{props.todo.duration}</td>
            <td className="w-5"> <button type = 'button' className="btn btn-danger btn-sm" onClick={() => {props.deleteTodo(props.todo.id)}}>x</button> </td>
        </tr>
    );
}

export default TodoRow;