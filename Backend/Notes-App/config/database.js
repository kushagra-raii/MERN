const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect =()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>console.log("DB connection established Successfully"))
    .catch((error)=>{
        console.error("DB Connection Failed:",error);
        process.exit(1);
    })
}
module.exports = dbConnect;