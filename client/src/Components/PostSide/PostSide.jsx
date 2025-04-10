import React, { useState } from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'
const PostSide = () => {
  return (
   <div className="PostSide">
       <PostShare />
   </div>
  )
}

export default PostSide