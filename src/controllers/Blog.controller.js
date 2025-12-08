import Blog from'../models/Blog.js'
const createBlog= async(req , res)=>{
        try{
        const {title,content,tags,published}=req.body;
        if(!title || !content || !tags){
            return res.status(500).json({message:'data not found'})
        }
        const newBlog=new Blog({title,content,author:req.user.id,tags,published})

        await newBlog.save();
        res.status(201).json({message:"data added successfully", newBlog})
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}
const getBlog= async(req,res)=>{
    const blog=await Blog.find().populate("author", "name email")
    res.status(200).json({message:"successfully fetched", blog})
}

const updateBlog=async(req,res)=>{
    const {id}=req.params
    const updateBlog=await Blog.findByIdAndUpdate(id, req.body,{new:true})
    res.status(201).json({message:"updated successfully",updateBlog})
}
const deleteBlog=async(req,res)=>{
await Blog.findByIdAndDelete(req.params.id)
res.status(201).json({message:"deleted successfully"})
}

const singleFtechBlog=async(req,res)=>{
const {id}=req.params
const singleFtechBlog=await Blog.findById(id)
res.status(200).json({message:"single data fetched",singleFtechBlog})
}

export {createBlog, getBlog , updateBlog , deleteBlog , singleFtechBlog }