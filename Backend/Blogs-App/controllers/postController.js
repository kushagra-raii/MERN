const Post = require("../model/postModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({
      title,
      body,
    });
    const savedPost = await post.save();
    res.json({
      post: savedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error in creating post",
    });
  }
};
exports.getAllPost = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("likes")
      .populate("comments")
      .exec();
    res.json({
      posts,
    });
  } catch (error) {
    res.status(500).json({
      error: "Error in getting all post",
    });
  }
};
