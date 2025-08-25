import Post from "../models/Post.js";
export const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = await Post.create({
      title,
      content,
      author: req.user._id,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all posts
export const getPosts = async (req, res) => {
  try {
    // Fetch all posts from DB and also include 'author' details (only name & email)
    const posts = await Post.find().populate("author", "name email");
    res.json(posts); // Send posts as JSON response
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get single post by ID
export const getPostById = async (req, res) => {
  try {
    // Find post by ID and include 'author' details
    const post = await Post.findById(req.params.id).populate(
      "author",
      "name email"
    );
    if (!post) return res.status(404).json({ msg: "Post not found" });
    // Send the found post as JSON response
    res.json(post);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
