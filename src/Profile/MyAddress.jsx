import { useState } from "react";
import { FaPlus,FaTrash } from "react-icons/fa";
import AddAddressOption from "./AddAddressOption"
import "../Profile/address.css"
import { useNavigate } from "react-router-dom";


const MyAddress = () => { 
     const [addresses, setAddresses] = useState([
    "House 69-A street 73 F10/1 Islamabad",
    "House 89-A street 73 F10/1 Islamabad"
  ]);

  const navigate = useNavigate();

  const deleteAddress = (index) => {
    setAddresses(addresses.filter((_, i) => i !== index));
  };

    return ( <>
     <div className="my-addresses">
      <h2>My Addresses</h2>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>
            {address}
            <button onClick={() => deleteAddress(index)} className="delete-btn">
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>

      <button className="add-btn" onClick={() => navigate("/add-option")}>
        <FaPlus />
      </button>
    </div>
    </> );
}
 
export default MyAddress;