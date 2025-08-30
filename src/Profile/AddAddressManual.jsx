import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddAddressManual = () => {
    const [form, setForm] = useState({
    country: "",
    state: "",
    lga: "",
    street: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("New Address:", form);
    alert(`Address saved: ${form.street}, ${form.lga}, ${form.state}, ${form.country}`);
    navigate("/address");
  };


    return ( <>
     <div className="manual-form">
      <h2>Add Address</h2>
      <input type="text" name="country" placeholder="Country" onChange={handleChange} />
      <input type="text" name="state" placeholder="State" onChange={handleChange} />
      <input type="text" name="lga" placeholder="LGA" onChange={handleChange} />
      <input type="text" name="street" placeholder="Street Address" onChange={handleChange} />
      <button onClick={handleSubmit}>Save</button>
    </div>

    </> );
}
 
export default AddAddressManual;