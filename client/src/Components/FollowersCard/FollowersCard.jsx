import React, { useEffect, useState } from 'react'
import UserImg from "../../img/img1.png";
import './FollowersCard.css'


const FollowersCard = () => {
  return (
    <div className="FollowersCard">
 <h3>People you may follow</h3>
<div className="follower">
    <div>
        <img src={UserImg} alt="" className='followerImage' />
                            <div className="name">
                                <span>John</span>
                                <span>@Johndoe</span>
                            </div>
                        </div>
                        <button className='button fc-button' >
Unfollow                        </button>

    </div>
    </div>
  )
}

export default FollowersCard
