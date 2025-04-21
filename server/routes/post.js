const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const postModel = require("../models/postModel");

const app = express();

var upload = multer({ dest: "./uploads" });

function generateRandomNumber() {
  return Math.floor(100000 + Math.random() * 900000);
}

app.post("/upload", upload.array("images", 5), (req, res) => {
  try {
    const imageBlob = req.body.images;
    const imageName = `${req.body.name}`;
    const userId = req.body.userId;

    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    const randomSixDigitNumber = generateRandomNumber();
    const imagePath = path.join(
      uploadDir,
      `${imageName}-${randomSixDigitNumber}.png`
    );
    let base64Image = imageBlob.split(";base64,").pop();
    fs.writeFile(imagePath, base64Image, { encoding: 'base64' }, async (err) => {
        if (err) {
          console.error('Error saving image:', err);
          return res.status(500).send('Failed to save image.');
        }
        const postdata = new postModel({
          imgPath: imagePath,
          name: imageName,
          format: "image",
          userId : userId,
          desc: req.body.desc,
          likes: req.body.likes,
          liked: req.body.liked
        });
        await postdata.save();
  
        console.log('Image saved successfully:', imagePath);
        res.status(200).send('Image uploaded successfully.');
      })
  } catch (err) {
    console.log("Error ", err);
    res.status(500).send({ message: err });
  }
});

app.post('/upload/video', upload.array('video', 5), (req, res) => {
    try {
      console.log("Video")
      const imageBlob = req.body.images;
      const imageName = `${req.body.name}`;
  
      // Create directory if it doesn't exist
      const uploadDir = path.join(__dirname, 'uploads/video');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
      }
  
      // Construct image path
      const randomSixDigitNumber = generateRandomNumber();
  
      const imagePath = path.join(uploadDir, `${imageName}-${randomSixDigitNumber}.mp4`);
      let base64Image = imageBlob.split(';base64,').pop();
  
      // Write image data to file
      fs.writeFile(imagePath, base64Image, { encoding: 'base64' }, async (err) => {
        if (err) {
          console.error('Error saving image:', err);
          return res.status(500).send('Failed to save image.');
        }
        const postdata = new postModel({
          imgPath: imagePath,
          name: imageName,
          format: "video",
          desc: req.body.desc,
          likes: req.body.likes,
          liked: req.body.liked,
          userId : req.body.userId
        });
        await postdata.save();
  
        console.log('Image saved successfully:', imagePath);
        res.status(200).send('Image uploaded successfully.');
      })
    }
    catch (err) {
      console.log("Error ", err)
      res.status(500).send({ message: err })
    }
  });

module.exports = app;
