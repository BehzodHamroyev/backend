require("express");
const express = require("express");
const mongoose = require("mongoose");
const postModel = require("./model/post.model");
const postRoute = require("./router/post.route");

require("dotenv").config();


const app = express();
app.use(express.json());

app.use("/api/",postRoute)

app.post("/post", async (req, res) => {
  const { title, body } = req.body;
  try {
    const newPost = await postModel.create({ title, body });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ error: err });
    console.log(err);
  }
});


const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL

const start = async () => {
  try {
    await mongoose.connect(DB_URL).then(() => console.log("MongoDB connected"));

    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
