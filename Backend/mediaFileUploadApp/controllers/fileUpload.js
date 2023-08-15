const File = require("../models/File");
const cloudinary = require("cloudinary").v2;

exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("File: ", file);
    let path =
      __dirname + "/files/" + Date.now() + `.${file.name.split(".").at(-1)}`;
    console.log("Path: ", path);

    file.mv(path, (err) => {
      console.error(err);
    });
    res.json({
      success: true,
      message: "Local file uploaded successfully",
    });
  } catch (error) {
    console.error(error);
    res.json({
      success:false,
      
    })
  }
};

function isFileTypeSupported(fileType, supportedTypes) {
  return supportedTypes.includes(fileType);
}

async function uploadFileToCloudinary(file, folder,quality) {
  const option = { folder };
  if (quality) {
    option.quality = quality
  }
  option.resource_type = "auto";
  return await cloudinary.uploader.upload(file.tempFilePath, option);
}

exports.imageUpload = async (req, res) => {
  try {
    const { name, tags, emails } = req.body;
    // console.log("Name", name);
    const file = req.files.imageFile;
    // console.log("File", file);
    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".").at(-1).toLowerCase();
    // console.log(fileType);
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    const response = await uploadFileToCloudinary(file, "kush");
    // console.log("Res", response);
    const fileData = await File.create({
      name,
      tags,
      emails,
      imageUrl: response.secure_url,
    });
    console.log("DB: ",fileData)
    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: "SomeThing Went Wrong",
    });
  }
};

exports.imageSizeReduced = async (req, res) => {
  try {
    const { name, tags, emails } = req.body;
    console.log("Name", name);
    const file = req.files.imageFile;
    console.log("File", file);
    const supportedTypes = ["jpg", "jpeg", "png"];
    const fileType = file.name.split(".").at(-1).toLowerCase();
    console.log(fileType);
    if (!isFileTypeSupported(fileType, supportedTypes)) {
      return res.status(400).json({
        success: false,
        message: "File format not supported",
      });
    }

    const response = await uploadFileToCloudinary(file, "kush",30);
    console.log("Res", response);
    const fileData = await File.create({
      name,
      tags,
      emails,
      imageUrl: response.secure_url,
    });

    res.json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.json({
      success:false,
      
    })
  }
};
