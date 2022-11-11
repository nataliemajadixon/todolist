const { createToDo } = require('../controllers/todolist');

const router = require('express').Router();



router.get("/", (req, res) => {
    res.send("To-Do List App")
})

router.post("/todos", createToDo);

module.exports = router;