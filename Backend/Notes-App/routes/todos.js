const express = require("express");
const router = express.Router();

const {createTodo} = require("../controllers/createTodo");
const {updateTodo} = require("../controllers/updateTodo");
const {deleteTodo} = require("../controllers/deleteTodo");
const {getTodo,getTodoByID} = require("../controllers/getTodo");

router.post("/createTodo",createTodo);
router.get("/getTodo",getTodo);
router.get("/getTodo/,:id",getTodoByID);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;