const express = require("express");
const router = express.Router();

const {createPost,getAllPost} = require("../controllers/postController")
const {likePost, unlikePost} = require("../controllers/likesController")
const {createComment} = require("../controllers/commentsController")

router.post("/comments/create",createComment);
router.post("/likes/like",likePost);
router.delete("/likes/unlike",unlikePost);
router.post("/posts/create",createPost);
router.get("/posts/get",getAllPost);

module.exports = router;