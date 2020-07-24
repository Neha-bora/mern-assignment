var express = require('express');
const { create, todoList , update, getatodo, getTodoById} = require('../controllers/todo');
const { isSignedIn, getUserById , isAuthenticated } = require('../controllers/auth');




var router = express.Router();

//params
router.param("userId", getUserById);
router.param("todoId", getTodoById);


router.post("/createTodo/:userId", isSignedIn, isAuthenticated,  create)
router.post("/updateTodo/:todoId/:userId", isSignedIn, isAuthenticated, update )

router.get("/userTodoList" , todoList)
router.get("/userTodoList/:todoId" , getatodo);
module.exports =router;