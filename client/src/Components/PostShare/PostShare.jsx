import React, { useState, useRef } from "react";
import ProfileImage from "../../img/profileImg.jpg";
import "./PostShare.css";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import CancelIcon from "@mui/icons-material/Cancel";

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  const videoRef = useRef();
  const [video, setVideo] = useState(null);
  const [desc, setDesc] = useState();

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        // `event.target.result` contains the base64 string representing the image
        setImage({
          image: URL.createObjectURL(img),
          base64String: event.target.result,
        });
      };
      reader.readAsDataURL(img);
      event.target.value = null;
    }
  };

  const onVideoChange = async (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      let reader = new FileReader();
      reader.onload = function (event) {
        setVideo({
          video: URL.createObjectURL(img),
          base64String: event.target.result,
        });
      };
      reader.readAsDataURL(img);
      // event.target.value = null;
    }
  };

  const postImage = async (e) => {
   if(image != null){
    const formData = new FormData();
    formData.append("images", image.base64String);
    formData.append("name","image")
    formData.append("userId", localStorage.getItem("userId"));
    formData.append("desc",desc)
    formData.append("likes",0)
    formData.append("liked",false)

    const response = await fetch("http://localhost:8080/api/posts/upload", {
      method: "POST",
      body: formData,
    });

   }
  };

  return (
    <div className="PostShare">
      <img src={localStorage.getItem("image")} alt="" />
      <div>
        <div className="InputContainer">
          <input
            placeholder="What's happening ?!"
            type="text"
            id="files"
            name="file"
            className="input"
          />
        </div>
        <div className="postOptions">
          <div
            className="option"
            onClick={() => imageRef.current.click()}
            style={{ color: "var(--photo)" }}
          >
            <AddAPhotoIcon style={{ marginRight: 5 }} />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <VideoCallIcon style={{ marginRight: 5 }} />
            Video
          </div>{" "}
          <button className="button-share " onClick={postImage}>
            Share
          </button>{" "}
          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}
              onChange={onImageChange}
            />
            <input
              type="file"
              // accept="video/*"
              name="videoFile"
              ref={videoRef}
              onChange={onVideoChange}
            />
          </div>
        </div>
        {image && (
          <div className="previewImage">
            <CancelIcon onClick={() => setImage(null)} />
            <img src={image.image} alt="" />
          </div>
        )}
        {video && (
          <div className="previewImage">
            <video src={video.video} controls style={{ maxWidth: "100%" }}>
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostShare;
