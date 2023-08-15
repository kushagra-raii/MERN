const express = require("express");
const router = express.Router();

const {login,signup} = require("../Controllers/Auth")
const {auth,isStudent,isAdmin} = require("../middlewares/auth");

router.post("/login",login);
router.post("/signup",signup);

router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome StudentOnly"
    })
});
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"Welcome AdminOnly"
    })
});

module.exports = router;