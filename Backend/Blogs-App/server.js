const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blogRoutes = require("./routes/blogRoutes");

app.use("/api/v1",blogRoutes);

app.listen(PORT,()=>{
    console.log("Server Started successfully");
});

const dbConnect = require("./config/database");
dbConnect();
