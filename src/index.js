import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/database.js';
import authrouter from './routes/Auth.route.js'
import blogrouter from './routes/Blog.route.js'

dotenv.config()
const app= express();
app.use(express.json());
connectDb();
const PORT=process.env.PORT || 8080;

app.use('/auth',authrouter)
app.use('/blog',blogrouter)

app.get("/",(req,res)=>{
res.send("server is running healthy")
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})