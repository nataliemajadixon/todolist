const { createToDo, getAllTodos, deleteTodo, updateTodo } = require('../controllers/todolist');

const router = require('express').Router();



router.get("/", (req, res) => {
    res.send("To-Do List App")
})

router.post("/todos", createToDo);
router.get("/todos", getAllTodos);
router.delete("/todos/:id", deleteTodo);
router.put("/todos/:id", updateTodo);

module.exports = router;