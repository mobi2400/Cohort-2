import './Todo.css';

function Todo({ todos }) {
    return (<div className="todo-container">
        {
            todos.map((todo) => {
                return (
                    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                        <h1>{todo.title}</h1>
                        <p>{todo.description}</p>
                        <button>{todo.completed ? "Completed" : "Mark as Complete"}</button>
                    </div>
                )
            })
        }

    </div>);
}

export default Todo;