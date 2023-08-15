const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req,res,next) =>{
    try {
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ","");

        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token missing"
            }); 
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;

        } catch (error) {
            return res.status(401.).json({
                success:false,
                message:"Token is invalid"
            })
        }
        next();

    } catch (error) {
        return res.status(401.).json({
            success:false,
            message:"Authentication failed"
        })
    }
}

exports.isStudent = (req,res,next) =>{
    try {
         if (req.user.role!=="Student") {
            return res.status(401).json({
                success:false,
                message:"Route is reserved for student"
            })
         }
         next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Authorization Failed"
        })
    }
}

exports.isAdmin = (req,res,next) =>{
    try {
         if (req.user.role!=="Admin") {
            return res.status(401).json({
                success:false,
                message:"Route is reserved for Admin"
            })
         }
         next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Authorization Failed"
        })
    }
}