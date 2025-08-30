import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../editprofile.css";

const EditProfile = ({ setSavedProfile }) => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile({ ...profile, image: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedProfile(profile); // Save data to parent state (App.jsx)
    navigate("/profile");     // Redirect to DisplayProfile page
  };

  return (
    <div className="edit-profile-container">
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <h2>Edit Profile</h2>

        <div className="image-upload">
          <label htmlFor="fileInput">
            {profile.image ? (
              <img src={profile.image} alt="preview" className="profile-img" />
            ) : (
              <div className="placeholder">+</div>
            )}
          </label>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={profile.firstName}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={profile.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={profile.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={profile.phone}
          onChange={handleChange}
          required
        />

        <select
          name="gender"
          value={profile.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="date"
          name="dob"
          value={profile.dob}
          onChange={handleChange}
          required
        />

        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
