const express = require("express");
const router = express.Router();

const {localFileUpload,imageUpload, imageSizeReduced} = require("../controllers/fileUpload");

router.post("/localFileUpload",localFileUpload);
router.post("/imageUpload",imageUpload);
router.post("/imageSizeReduced",imageSizeReduced)



module.exports = router;