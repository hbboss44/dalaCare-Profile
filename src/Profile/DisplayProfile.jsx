const DisplayProfile = ({ firstName, lastName, email, phone, gender, dob, image }) => {
    return ( <>
    <div className="display-profile">
      <h2>Profile Details</h2>
      {image && <img src={image} alt="Profile" className="profile-img" />}
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Date of Birth:</strong> {dob}</p>
    </div>
    </> );
}
 
export default DisplayProfile;