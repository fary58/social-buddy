const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postApi = require("./routes/post");
const userApi = require("./routes/user");
const profileApi = require("./routes/profile");
const bodyparser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.json());

//API Endpoints
// app.use("/api/posts", postApi);
app.use("/api/users", userApi);
// app.use("/api/profile", profileApi);

//Testing
app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

const connectDB = require("./db/dbConnection");
connectDB()
  .then(() => {
    console.log("Connected to MongoDB Atlas");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB Atlas", err);
  });
