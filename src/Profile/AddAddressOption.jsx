import { useState } from "react";
import "../Profile/addaddress.css";
import React from "react";
import { useNavigate } from "react-router-dom";


const AddAddressOption = () => {
    const navigate = useNavigate();

  const handleUseLocation = () => {
    alert(" Location added! (Here you’d use geolocation API)");
    navigate("/");
  };


    return ( <>
    <div className="add-option">
      <h2>Add New Address</h2>
      <button className="btn" onClick={handleUseLocation}>
        Use My Location
      </button>
      <button className="btn" onClick={() => navigate("/add-manual")}>
        Input Manually
      </button>
      <button className="close-btn" onClick={() => navigate("/")}>Cancel</button>
    </div>
    </> );
}
 
export default AddAddressOption;