import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: [String],
    tags: [String],
    selectedFile: String,
    likeCount:{
        type: Number,
        deafault: 0
    },
    createdAt:{
        type: Date, 
        default: new Date()
    },
});

//now that we have a schmea we have to tunr into a model

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;