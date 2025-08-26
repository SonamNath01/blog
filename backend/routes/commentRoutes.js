import express from 'express';
import{addComment,getComments,deleteComment} from '../controllers/commentController.js';
import {protect} from '../middlewares/authMiddlewares.js';
const router= express.Router();

router.post('/:id/comments', protect, addComment);
router.get('/:id/comments', protect, getComments);
router.delete('/comments/:id', protect, deleteComment);
export default router;
