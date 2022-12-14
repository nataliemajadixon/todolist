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
        res.send(todo);
       

    });
};

const getAllTodos = (req, res) => {
    ToDoListSchema.find((err, todos) => {
        if(err){
            res.send(err)
        }
        // res.json(todos) 
        res.render("todo",{todos: todos})
    })
}

const getOneTodo = (req, res) => {
    ToDoListSchema.findOne({id: req.params.id},
        (err, ToDoListSchema) => {
            if (err) {
                res.send(err);
            }
            res.json(ToDoListSchema)
        }
        )
    
}

const deleteTodo = (req, res) => {
    ToDoListSchema.deleteOne({id: req.params.id})
    .then(() => res.json({message:"item is deleted!"}))
    .catch((err) => res.send(err))
}

const updateTodo = (req, res) => {
    ToDoListSchema.findOneAndUpdate(
        {id: req.body.id},
        {$set : {
            title: req.body.title,
            description: req.body.description,
            isCompleted: req.body.isCompleted
        }},
        {new: true},
        (err, ToDoListSchema) => {
            if (err) {
                res.send(err);
            }
            res.json(ToDoListSchema)
        }
    )
}


module.exports = {createToDo, getAllTodos, deleteTodo, updateTodo, getOneTodo}