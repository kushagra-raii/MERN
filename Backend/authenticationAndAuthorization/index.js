const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());
const user = require("./routes/user");

app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log(`Server Started successfully at ${PORT}`);
});

const dbConnect = require("./config/database");

dbConnect();
