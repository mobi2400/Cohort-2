
function Todo(props) {
    return (
        <>
        <h5>{props.todo}</h5>
        <p>{props.completed}</p>
        <p>{props.userId}</p>
        </>
    )
}

export default Todo;