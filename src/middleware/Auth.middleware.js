import jwt from "jsonwebtoken"

const verifyToken=(req,res, next)=>{
const token=req.header("Authorization")?.replace("Bearer", "")
if(!token){
    return res.status(401).json({message:'Login First'})
}
try{
const decode=jwt.verify(token , process.env.JWT_SECRET_KEY)
req.user= decode;
next()
}catch(error){
console.log(error.message)
res.status(400).json({message:"invalid token"})
}
}
export default verifyToken
