import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    post:{ type:mongoose.Schema.Types.ObjectId, ref:"Post", required:true },
    User:{type:mongoose.Schema.Types.ObjectId, ref:"User", required:true },
    text:{type :String ,required:true },
      createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Comment", commentSchema);