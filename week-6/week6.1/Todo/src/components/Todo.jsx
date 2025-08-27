
function Todo({todo}) {
    return (
        <div>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
        </div>
    );
}

export default Todo;