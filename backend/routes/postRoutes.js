import express from "express";
import { createPost, getPosts, getPostById } from "../controllers/postControllers.js";
import {protect} from "../middlewares/authMiddlewares.js";

const router = express.Router();

// Create a new post (protected route)
router.post("/", protect, createPost);

// Get all posts
router.get("/", getPosts);

// Get single post by ID
router.get("/:id", getPostById);

export default router;
