import React, { useState } from "react";
const PersonalInfo = (props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(true);
  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }
  if (isEditing) {
    return (
      <div>
        <h2>Personal Information</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            type="text"
          ></input>
          <input
            placeholder="Phone"
            value={phone}
            name="phone"
            onChange={(e) => setPhone(e.target.value)}
            type="number"
          ></input>
          <input
            placeholder="Email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Personal Information</h2>
        <p>Name: {name}</p>
        <p>Phone: {phone}</p>
        <p>Email: {email}</p>
        <button onClick={(e) => setIsEditing(true)}>Edit</button>
      </div>
    );
  }
};
export default PersonalInfo;
