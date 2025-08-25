import express from 'express';
import { createPost } from '../controllers/postControllers.js';
import { protect } from '../middlewares/authMiddlewares.js';

const router = express.Router();

router.post('/', protect, createPost);//only logged in users can write posts
router.get("/", getPosts);
router.get("/:id", getPostById);


export default router;
