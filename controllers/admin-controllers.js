const User = require("../models/user-model");
const Contact = require("../models/contact-model");
const Menu = require('../models/menu-model');
 
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No User Found" });
    }
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
  }
};

const getContact = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "No contacts found" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    console.log(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }, { password: 0 });
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

const updateUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateduserdata = req.body;
    const updateuser = await User.updateOne(
      { _id: id },
      {
        $set: updateduserdata,
      }
    );
    return res.status(200).json(updateuser);
  } catch (error) {
    console.log(error);
  }
};

const getAdminMenu = async (req, res) => {
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
module.exports = {
  getUsers,
  getContact,
  deleteUserById,
  getUsersById,
  updateUsersById,
  getAdminMenu,
};
