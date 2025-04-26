const User = require('./../models/userModel');
const Post = require("../models/postModels");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post("/data", async (req, res) => {
 try {
 const { userId } = req.body;
 const user = await Post.countDocuments({ userId });
 const userData = await User.findOne({ _id: userId })
 console.log("USerData", userData)
 const profileData = {
 posts: user,
 followers: userData.followers,
 followings: userData.followings
 }
 res.status(200).json(profileData);
 } catch (error) {
 console.error(error);
 res.status(500).json({ error: "Internal server error" })
 }
});