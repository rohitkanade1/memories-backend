import PostMessage from "../models/postSchema.js";

const getPosts = async (req, res) => {
  try {
    const postData = await PostMessage.find();

    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  try {
    const payload = req.body;
    const response = await PostMessage.create();

    res.status(201).json("Post created");
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export { getPosts, createPost };
