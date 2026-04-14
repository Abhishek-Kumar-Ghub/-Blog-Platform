import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    //content
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tags: [{
        type: String,
        trim: true
    }],
    published: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
