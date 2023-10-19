const bcrypt = require("bcrypt");
const User = require("../model/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exist",
      });
    }

    let hashedPassword;
    try {
      hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Err in hashing password",
      });
    }

    const user = await User.create({
      name,
      email,
      role,
      password: hashedPassword,
    });

    return res.status(200).json({
      success: true,
      message: "User Created Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "User cannot be registered, please try again later",
    });
  }
};



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const fieldsEnteredAreEmpty = !email || !password;
    if (fieldsEnteredAreEmpty) {
      return res.status(400).json({
        success: false,
        message: `Please fill all the details carefully`,
      });
    }

    let userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(401).json({
        success: false,
        message: `User is not registered`,
      });
    }

    const passwordVerified = await bcrypt.compare(password, userExist.password);
    const payload = {
      email: userExist.email,
      id: userExist._id,
      role: userExist.role,
    };
    const secret = process.env.JWT_SECRET;
    
    if (passwordVerified) {
      let token = jwt.sign(payload, secret, {
        expiresIn: "2h",
      });

      userExist = userExist.toObject();
      userExist.token = token;
      userExist.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        userExist: userExist,
        message: `${userExist.role} loggedIn successfully`,
      });
    } else {
      return res.status(403).json({
        success: false,
        message: `Incorrect Password`,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: `Login failed ${error}`,
    });
  }
};
