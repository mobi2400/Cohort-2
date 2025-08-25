import zod from "zod";

const createTodos = zod.object({
    title: zod.string(),
    description: zod.string(),
});

const updateTodo = zod.object({
    id: zod.string()
})



export  {
    createTodos,
    updateTodo
}