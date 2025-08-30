import "../Profile/profilePage.css"
import profileImage from "../Images/profileimg.jpg"
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaMapMarkerAlt,
  FaCreditCard,
  FaLock,
  FaSignOutAlt,
} from "react-icons/fa";

const ProfilePage = ({firstName,image, lastName}) => {
 
 
 


  return ( <>
  <div className="profile-container">
      {/* Header */}
      <div className="profile-header">
        <img
          src={image} // Replace with dynamic user image
          alt="profile"
          className="profile-img"
        />
        <h3 className="profile-name">{firstName+" "+lastName} </h3>
      </div>

      {/* Personal Section */}
      <div className="profile-section">
        <h4>Personal</h4>
        <Link to="/edit" className="profile-link">
          <div className="link-left">
            <FaUser className="icon" /> Edit Profile
          </div>
          <span className="arrow">›</span>
        </Link>

        <Link to="/address" className="profile-link">
          <div className="link-left">
            <FaMapMarkerAlt className="icon" /> My Addresses
          </div>
          <span className="arrow">›</span>
        </Link>

        <Link to="/payment-methods" className="profile-link">
          <div className="link-left">
            <FaCreditCard className="icon" /> Payment Methods
          </div>
          <span className="arrow">›</span>
        </Link>
      </div>

      {/* General Section */}
      <div className="profile-section">
        <h4>General</h4>
        <Link to="/change-password" className="profile-link">
          <div className="link-left">
            <FaLock className="icon" /> Change Password
          </div>
          <span className="arrow">›</span>
        </Link>

        <Link to="/logout" className="profile-link">
          <div className="link-left">
            <FaSignOutAlt className="icon logout" /> Logout
          </div>
          <span className="arrow">›</span>
        </Link>
      </div>
      
    </div>
  </> );
}
 
export default ProfilePage;