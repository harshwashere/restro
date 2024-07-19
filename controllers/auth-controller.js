const User = require("../models/user-model");
const Menu = require("../models/menu-model");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;

    const userExist = await User.findOne({ email });

    const number = await User.findOne({phone})

    if (userExist) {
      return res.status(400).json({ msg: "email already exist" });
    }

    if(number) {
      return res.status(401).json({msg : "Phone number already exist"})
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const data = await User.create({ name, phone, email, password: hash });

    res.status(200).json({
      msg: data,
      token: await data.generateToken(),
      userId: data._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const pass = await bcrypt.compare(password, user.password);
      if (pass) {
        res.status(200).send({
          msg: "Login Successful",
          token: await user.generateToken(),
          userId: user._id.toString(),
        });
      } else {
        res.status(401).send({ msg: "Invalid login credentials" });
      }
    } else {
      res.status(400).send({ msg: "User doesn't exist" });
    }
  } catch (error) {
    console.log(error);
  }
};

const adlogin = async (req, res) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email})
    console.log(user.isAdmin);
  } catch (error) {
    console.log(error);
  }
}

const menudata = async (req, res) => {
  try {
    const menujson = await Menu.find();
    if (!menujson || menujson.length === 0) {
      return res.status(404).json({ msg: "No menu items found" });
    }
    return res.status(200).json({ msg: menujson });
  } catch (error) {
    console.error("Error finding menu items:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);
    res.status(200).json({ userData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register, login, menudata, user, adlogin };
