import { useState } from "react";
import './CreateTodo.css';

function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    return (
        <div className="create-todo-container">
            <input className="todo-input" type="text" placeholder="Enter title here" onChange={(e) => setTitle(e.target.value)}/>
            <br />
            <input className="todo-input" type="text" placeholder="Enter description here" onChange={(e) => setDescription(e.target.value)}/>
            <br/>
            <button className="add-todo-btn" onClick={() => {
                fetch('http://localhost:3000/todos',{
                    method:"POST",
                    body:JSON.stringify({
                       title:title,
                       description:description,
                        completed:false
                    }),
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                .then(res => res.json())
                .then(data => console.log(data))
                .then(()=> alert("Todo added successfully"))
                .catch(err => console.log(err))
                }}>Add a todo</button>
        </div>
    );
}

export default CreateTodo;