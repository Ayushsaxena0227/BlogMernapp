const express = require("express");
const blogrouter = express.Router();

const {
  fetchlistofblog,
  addnewblog,
  updateablog,
  deleteablog,
} = require("../controllers/Blog-controller");
blogrouter.get("/", fetchlistofblog);
blogrouter.post("/add", addnewblog);
blogrouter.put("/update/:id", updateablog);
blogrouter.delete("/delete/:id", deleteablog);

module.exports = blogrouter;
