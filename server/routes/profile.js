const User = require("./../models/userModel");
const Post = require("../models/postModel");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/data", async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await Post.countDocuments({ userId });
    const userData = await User.findOne({ _id: userId });
    console.log("USerData", userData);
    const profileData = {
      posts: user,
      followers: userData.followers,
      followings: userData.followings,
    };
    res.status(200).json(profileData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/like", async (req, res) => {
  const { _id, userId } = req.body;
  const post = await Post.findOne({ _id: _id });
  const userLiked = await Post.findOne({ _id: _id, likedUser: userId });
  if (userLiked) {
    const updatedUser = await Post.findOneAndUpdate(
      { _id: _id, likedUser: userId },
      { $pull: { likedUser: userId }, $inc: { likes: -1 } },
      { new: true }
    );

    console.log("updatedUser dec", updatedUser);
    res.status(200).json(updatedUser);
  } else {
    const updatedUser = await Post.findOneAndUpdate(
      { _id: _id },
      { $push: { likedUser: userId }, $inc: { likes: 1 } },
      { new: true }
    );
    console.log("updatedUser dec", updatedUser);
    res.status(200).json(updatedUser);
  }
});

module.exports = app;
