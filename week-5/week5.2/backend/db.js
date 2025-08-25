import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URL);

const todoSchema = new mongoose.Schema({
 title: String,
 description: String,
 completed: Boolean

});

const Todo = mongoose.model('Todo', todoSchema);

export { Todo };