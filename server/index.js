const express = require("express");
const cors = require("cors");
const blogrouter = require("./route/Blogroute");
require("./db");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/blogs", blogrouter);
app.use("/api", (req, res) => {
  res.send("Hello world");
});
app.listen(5000, () => {
  console.log("App is running at 5000");
});
