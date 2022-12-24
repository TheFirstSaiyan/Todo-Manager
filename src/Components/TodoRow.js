function TodoRow(props) {
    return (
        <tr>
            <th scope='row'>{props.todo.id}</th>
            <td>{props.todo.desc}</td>
            <td>{props.todo.duration}</td>
        </tr>
    );
}

export default TodoRow;