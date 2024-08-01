const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://saxenaayush381:0WeOhZqx6AiMhkvR@cluster0.1hsbpp2.mongodb.net/"
  )
  .then(() => console.log("Connected mongodb"))
  .catch((e) => console.log(e));
