const router = require('express').Router();



router.get("/", (req, res) => {
    res.send("To-Do-List App")
})

module.exports = router;