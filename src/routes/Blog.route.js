import express from 'express'
import { createBlog, deleteBlog, getBlog, singleFtechBlog, updateBlog } from '../controllers/Blog.controller.js';
import verifyToken from '../middleware/Auth.middleware.js';


const router=express.Router();
router.post('/create', verifyToken ,createBlog)
router.get('/get',getBlog)
router.put("/update/:id",verifyToken ,updateBlog)
router.delete("/delete/:id", verifyToken,deleteBlog)
router.get("/sget/:id", singleFtechBlog)

export default router
