const mongoose = require("mongoose");
const Blog = require("../model/BLog");
//fetchlistofblog , addnewblog, delteablog ,updateablog
const fetchlistofblog = async (req, res) => {
  let bloglist;
  try {
    bloglist = await Blog.find();
  } catch (error) {
    console.log(error);
  }
  if (!bloglist) {
    return res.status(404).json({ message: "No BLogs Found" });
  }
  return res.status(200).json({ bloglist });
};

const addnewblog = async (req, res) => {
  const { title, description } = req.body;
  const currentdate = new Date();
  const newlycreatedblog = new Blog({
    title,
    description,
    date: currentdate,
  });
  try {
    await newlycreatedblog.save();
  } catch (error) {
    console.log(error);
  }
  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newlycreatedblog.save(session);
    session.commitTransaction();
  } catch (error) {
    return res.status(500).json({ message: error });
  }
  return res.status(200).json({ newlycreatedblog });
};

const deleteablog = async (req, res) => {
  const id = req.params.id;
  try {
    const findcurrentblog = await Blog.findByIdAndDelete(id);
    if (!findcurrentblog) {
      return res.status(404).json({ message: "Blog Not Found" });
    }
    return res.status(200).json({ message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Unable To delete" });
  }
};

const updateablog = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  let currentblogtoupdate;
  try {
    currentblogtoupdate = await Blog.findByIdAndUpdate(id, {
      title,
      description,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "something went wrong try again later" });
  }

  if (!currentblogtoupdate) {
    return res.status(500).json({ message: "Unable To Update" });
  }
  return res.status(200).json({ currentblogtoupdate });
};

module.exports = { fetchlistofblog, addnewblog, updateablog, deleteablog };
