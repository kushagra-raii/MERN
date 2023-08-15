const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();
const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
  },
  tags: {
    type: String,
  },
  emails: {
    type: String,
  
  },
});

fileSchema.post("save",async function(doc){
  console.log(doc)
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth:{
      user:process.env.MAIL_USER,
      pass:process.env.MAIL_PASS,

    },
  });
  try {
    let info = await transporter.sendMail({
      from:"Kush",
      to:doc.emails,
      subject:"Test hai jee",
      html:"<h2>Hello jee</h2><p>File Uploaded</p>"
    })
    console.log("mail info:",info)

  } catch (error) {
    console.error(error);
  }


})
module.exports = mongoose.model("File",fileSchema);
