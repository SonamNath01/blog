import comment from "../models/comment.js";
export const addComment = async (req, res) => {
    try{
        const{text}= req.body;
        const comment = await comment.create({
            text,
            postId: req.params.id,
            userId: req.user.id
        });
        res.status(201).json(comment);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
export const getComments = async (req, res) => {
    try {
        const comments = await comment.find({postId: req.params.id}).populate("userId", "name email").sort({createdAt: -1});
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
export const deleteComment = async (req, res) => {
    try {
        const comment = await comment.findByIdAndDelete(req.params.id);
        if (!comment) {
            return res.status(404).json({message: "Comment not found"});
        }
        res.status(200).json({message: "Comment deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};