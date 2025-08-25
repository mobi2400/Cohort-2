import 'dotenv/config';
import express from "express";
import { createTodos } from './types.js';
import {Todo} from "./db.js";

const app = express();
const port = 3000;

app.use(express.json());

app.post("/todos", async (req, res) => {
    const createPayload = req.body;
    // safeParse method validates the input and return the response as success or failure
    const parsePayload = createTodos.safeParse(createPayload);
    if (!parsePayload.success) {
        return res.status(400).send(parsePayload.error);
    }
    const todo = await Todo.create({
        title: parsePayload.title,
        description: parsePayload.description,
        completed: false,
    });
    res.json({
        msg:"todo created successfully",
        id: todo.id
    })
    
});

app.get('/todos', async (req, res) => {
    const todos = await Todo.findAll();
    res.json(todos);
});



app.put('/completed',async (req,res)=>{
    const updatePayload  = req.body;
    const parsePayload = createTodos.safeParse(updatePayload);
    if (!parsePayload.success) {
        return res.status(400).send(parsePayload.error);
    }
    const todo = await Todo.update({
        _id:req.body.id
    },
    {
        completed: true
    });
    res.json({
        msg:"todo updated successfully",
        id: todo.id
    })
    
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});