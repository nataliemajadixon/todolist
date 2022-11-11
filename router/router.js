const { createToDo, getAllTodos, deleteTodo } = require('../controllers/todolist');

const router = require('express').Router();



router.get("/", (req, res) => {
    res.send("To-Do List App")
})

router.post("/todos", createToDo);
router.get("/todos", getAllTodos);
router.delete("/todos/:id", deleteTodo);

module.exports = router;