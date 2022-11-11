const ToDoListSchema = require('../model/ToDoListSchema');

const createToDo = (req, res) => {
    const todo = new ToDoListSchema({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        isCompleted: req.body.false,
    });
    todo.save((err, todo) => {
        if(err){
            res.send(err);
        }
        res.json(todo);
    });
};

const getAllTodos = (req, res) => {
    ToDoListSchema.find((err, todos) => {
        if(err){
            res.send(err)
        }
        res.json(todos)
    })
}



module.exports = {createToDo, getAllTodos}